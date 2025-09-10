# Files Overview

Purpose and role of each file in this repository.

## App Entry

- `index.html` — Main UI with buttons to drive the offer/answer flow and a textarea to carry SDP blobs between peers.
- `style.css` — Basic styles for layout and responsiveness.
- `script.js` — Core WebRTC logic for media capture, `RTCPeerConnection`, ICE, and data channel.

## Experiments / Demos

- `multiple.html` — Experimental multi-remote-stream setup and simple data-channel messaging scaffolding.
- `mobile.html` — Minimal camera preview app to test `getUserMedia` start/stop without WebRTC.
- `file.html` — MediaSource + FileReader experiment; unrelated to call flow.

## Alternative/Legacy Scripts

- `offline.js` — Self-contained manual signaling variant; mimics offer/answer/copy/paste logic; not loaded by `index.html`.
- `stun.js` — Incomplete attempt to use Agora RTM for signaling; not integrated.
- `peera.js`, `peerB.js`, `peerA_final.js` — Early fragments for the same handshake idea; superseded by `script.js`.

## Notes

- Only `index.html`, `script.js`, and `style.css` are required for the primary serverless demo.
- The other files are kept for reference/experimentation and can be removed or archived if you prefer a lean repo.

