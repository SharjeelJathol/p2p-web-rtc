# Usage

## Prerequisites

- A modern browser that supports WebRTC (Chrome, Firefox, Edge, Safari).
- Serve the files over `http://localhost` or HTTPS (browsers restrict camera/mic on `file://`).

## Local Serve Examples

- Python 3: `python -m http.server 8080` → open `http://localhost:8080/index.html`
- Node (serve): `npx serve .` → open the served URL

## Step-by-Step (Two Devices or Two Browsers)

1. Device A: Open `index.html` and click “Create session”.
2. Device A: Copy the SDP from the textarea (use the Copy button).
3. Device B: Open `index.html`, paste the SDP, click “Send join session request”.
4. Device B: Copy the new SDP from the textarea.
5. Device A: Paste the SDP and click “Accept request”.

You should see each other’s video. Open DevTools to observe data-channel logs.

## Troubleshooting

- Ensure camera/microphone permissions are granted.
- Use secure contexts (HTTPS or `http://localhost`).
- Some networks will fail without TURN. Try a different network or add TURN.
- If things get out of sync, refresh both pages and restart the flow.

