# CTX-SSR
Replace /job with /ssr-job

## Load the extension in Chrome:
- Open Chrome and go to chrome://extensions/.
- Enable "Developer mode" using the toggle switch at the top right.
- Click on "Load unpacked" and select the directory where you saved the extension files.
- Now, you should see your extension in the list, and the text on the icon should reflect the current state (ON/OFF).

## Usage
- Click the extension icon to toggle the state. The badge text should reflect the enabled/disabled state (ON/OFF).
- Open a new tab and navigate to a URL containing /job (e.g., http://develop.com/jobs/jibpage).
- If the extension is enabled, the URL should automatically change to /ssr-job. If disabled, no change should occur.
