# Weather Alert Extension for Chrome

A simple Chrome extension that shows the current weather in Tokyo via a JavaScript alert when the extension icon is clicked. This project is a basic introduction to Chrome extension development using Manifest V3.

## Features

- Displays Tokyo's current weather (description and temperature in °C) when the icon is clicked
- Built with Manifest V3
- Uses `chrome.scripting.executeScript()` to inject alert into the active tab
- Fetches data from OpenWeatherMap API

## How to Add the Extension

1. Clone or download this repository:

```bash
git clone https://github.com/satty-dev/my-alert-chrome-extension.git
```

2. Open `chrome://extensions/` in Chrome.
3. Enable Developer mode and click Load unpacked.
4. Select the extension folder.
5. The icon should now appear in your Chrome toolbar.

## How to Use

1. Open any website (e.g., https://www.google.com).
2. Click the extension icon.
3. An alert will appear showing:

```
Today's weather in Tokyo:
[description], [temperature]°C
```

## Known Limitations

This extension does not work on Chrome internal pages, such as:

- `chrome://extensions/`
- `chrome://settings/`

These pages are restricted by Chrome's security policies.

## Release Notes

## v2.0
- Feature update: Weather in Tokyo is shown via alert using OpenWeatherMap API.

## v1.0
- Initial release: Simple alert message shown when the icon is clicked.