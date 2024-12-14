import * as vscode from 'vscode';
import minimatch from 'minimatch';

export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration('sfh');
  const enableHighlighting = config.get<boolean>('enableHighlighting', true);
  const sensitivePatterns: string[] = config.get<string[]>('sensitiveFilePatterns', [
    '**/.env',
    '**/.env.*',
    '**/config.js'
  ]);
  const explorerHighlightColor: string = config.get<string>('explorerHighlightColor', '#FF0000');

  if (!enableHighlighting) {
    return;
  }

  // Register File Decoration Provider
  const decorationProvider = vscode.window.registerFileDecorationProvider({
    onDidChangeFileDecorations: undefined, // Implement if dynamic changes are needed
    provideFileDecoration(uri: vscode.Uri, token: vscode.CancellationToken): vscode.ProviderResult<vscode.FileDecoration> {
      const relativePath = vscode.workspace.asRelativePath(uri, false);
      const isSensitive = sensitivePatterns.some(pattern => minimatch(relativePath, pattern));

      if (isSensitive) {
        return {
          badge: '🔒', // Lock icon as a badge
          tooltip: 'Sensitive File',
          color: new vscode.ThemeColor('errorForeground')
        };
      }

      return undefined;
    }
  });

  context.subscriptions.push(decorationProvider);
}
