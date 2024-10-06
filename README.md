
# AI AdBuster Extension

AI AdBuster is a browser extension that detects ads on webpages and transforms them into harmless, text-based entities or removes them entirely. The extension includes features such as "vampire mode" (turns ads monochrome) and "exorcism mode" (removes ads completely). It uses AI to detect ads and blend them seamlessly with the webpage content.

## Features
- **Vampire Mode**: Turn ads into monochrome.
- **Exorcism Mode**: Remove ads completely.
- **Text-based Ads**: Convert ads into text that blends into the page.

## Directory Structure

```
ai_adbuster_extension/
│
├── ai_adbuster_server/
│   ├── ai_adbuster_server.py      # Main Python server for AI detection.
│   ├── Procfile                   # For Heroku deployment.
│   ├── README.md                  # This file.
│   ├── requirements.txt           # Python dependencies.
│
├── icons/
│   ├── icon16.png                 # 16x16 icon for the extension.
│   ├── icon48.png                 # 48x48 icon for the extension.
│   ├── icon128.png                # 128x128 icon for the extension.
│
├── content.js                     # Main JavaScript file for the extension logic.
├── manifest.json                  # Manifest file for browser extension.
├── popup.html                     # Popup UI for the extension.
```

## Prerequisites

To run this project on your local machine, ensure you have the following installed:

- **Python 3.x**: For running the server-side AI logic.
- **Node.js & npm**: Optional but helpful for extension development.
- **A modern web browser** (Chrome, Firefox, etc.) that supports extensions.

## Steps to Run the AI AdBuster Extension

### 1. Clone the Repository
First, clone the repository to your local machine using git.

```bash
git clone https://github.com/PrafullRaj/AdBuster.git
cd ai_adbuster_extension
```

### 2. Set Up the Python Server

The `ai_adbuster_server.py` is responsible for running the AI models that detect ads on the webpages.

1. Navigate to the `ai_adbuster_server` directory:
   ```bash
   cd ai_adbuster_server
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Python server:
   ```bash
   python ai_adbuster_server.py
   ```

### 3. Add the Extension to Your Browser

#### For Google Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable "Developer mode" by clicking the toggle at the top-right corner.
3. Click "Load unpacked" and select the `ai_adbuster_extension/` folder.
4. The extension should now appear in your browser's extensions toolbar.

#### For Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click "Load Temporary Add-on" and select the `manifest.json` file from the `ai_adbuster_extension/` directory.
3. The extension will be loaded and active.

### 4. Use the Extension
Once loaded, you can click the extension icon in the toolbar to open the popup and activate either "Vampire Mode" or "Exorcism Mode."

Enjoy ad-free browsing with AI AdBuster!

