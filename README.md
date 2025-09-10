# P2P WebRTC (Serverless) Video Calling

A minimal, serverless WebRTC demo for peer-to-peer audio/video calling and a data channel, using manual copy/paste for signaling. The app runs fully in the browser and relies on STUN servers for NAT traversal.

This repository also contains a few experimental pages exploring related concepts (multi-remote streams, basic camera preview, MediaSource API, and an incomplete Agora-RTM signaling attempt).

## Features

- Peer-to-peer audio/video via `RTCPeerConnection`
- Manual copy/paste signaling (no backend dependency)
- Basic `RTCDataChannel` established (console logging only)
- STUN-only ICE configuration (no TURN)

## Quick Start

Most browsers require a secure context (HTTPS or `http://localhost`) to use camera/microphone. Serve the files locally instead of opening them from `file://`.

Examples:

- Python 3: `python -m http.server 8080`
- Node (serve): `npx serve .`

Then open `http://localhost:8080/index.html`.

## Usage (Manual Signaling)

1) On Device A:
- Click “Create session”.
- Copy the SDP in the textarea (use the “Copy session description” button).

2) On Device B:
- Paste the SDP into the textarea (use “Paste session description”).
- Click “Send join session request”.
- Copy the new SDP from the textarea.

3) Back on Device A:
- Paste the SDP from Device B.
- Click “Accept request”.

If connectivity is possible through STUN only, both videos will start and the data channel opens (see console logs).

## Project Structure

- `index.html` – Main UI and entry point.
- `script.js` – Core WebRTC logic (offer/answer, media capture, data channel).
- `style.css` – App styling.

See the docs in `docs/` for deeper details.

## How It Works (High-Level)

1. `navigator.mediaDevices.getUserMedia()` captures local media and attaches tracks to an `RTCPeerConnection`.
2. The Offerer creates an SDP offer, sets it as its local description, and shares it via the textarea.
3. The Answerer sets that as its remote description, creates an SDP answer, sets it as its local description, and shares it back.
4. The Offerer sets the answer as its remote description; ICE gathering and connectivity checks complete the path.
5. A `RTCDataChannel` is also created and opened; messages are currently only logged to the console.

## Limitations

- STUN-only: There’s no TURN relay, so peers behind symmetric NATs/firewalls may fail to connect.
- Manual signaling: Copy/paste is used instead of a signaling server.
- Minimal UI: Data channel has no chat UI; only console logs.

## Troubleshooting

- Permissions: Ensure the browser has camera/microphone permissions.
- Secure context: Use HTTPS or `http://localhost` (not `file://`).
- Connectivity: Without TURN, some networks cannot connect; try a different network or add TURN.
- Refresh flow: If something gets out of sync, refresh both pages and restart the handshake.

## Next Steps / Improvements

- Add a lightweight signaling server (WebSocket) to automate offer/answer/candidates.
- Add TURN servers for reliability across restrictive networks.
- Add a minimal chat UI using the existing data channel.
- Consolidate or remove experimental files; keep one polished demo.

## Documentation

Additional documentation lives under `docs/`:

- `docs/Architecture.md` – Components, data flow, and roles of WebRTC primitives.
- `docs/Signaling-Flow.md` – Copy/paste signaling steps and ICE gathering notes.
- `docs/Files.md` – Purpose of each file in this repo.
- `docs/Usage.md` – Detailed usage and browser notes.
 - `docs/Abbreviations.md` – Glossary of terms and acronyms used.

## Contributing

Contributions are welcome. For feature work, consider using a topic branch. For documentation-only changes, small edits can go to `main`; larger restructures can use a `docs/` branch.
