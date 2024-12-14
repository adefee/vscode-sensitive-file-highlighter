# VSCode Sensitive File Highlighter

VSCode Sensitive File Highlighter is a Visual Studio Code extension that helps you highlight sensitive files in your workspace. The original intent was to add a sort of 'Streamer Mode' to VSCode to avoid accidentally opening or tabbing to sensitive files during live coding sessions, but had issues with the way VSCode handles file opening and tabbing. Instead, this extension now highlights sensitive files in the explorer and tabs, and provides warnings when opening or modifying sensitive files. A future update of this extension (or a new one) may properly implement such when I have time.

## Features

- **File Highlighting**: Automatically highlights sensitive files in the explorer.
- **Customizable Patterns**: Define your own patterns to identify sensitive files.

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `Sensitive File Highlighter`.
4. Click `Install` to install the extension.
5. Reload Visual Studio Code to activate the extension (if applicable).

## Usage

1. Open your project in Visual Studio Code.
2. The extension will automatically highlight files that match the predefined patterns.
3. Customize the patterns by editing the settings in your `settings.json` file.

### Example Configuration

```json
{
  "sfh.enableHighlighting": true,
  "sfh.sensitiveFilePatterns": [
    "**/.env",
    "**/.env.*",
    "**/config.js"
  ],
  "sfh.explorerHighlightColor": "#FF0000",
  "sfh.tabHighlightColor": "#FF0000",
}
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
