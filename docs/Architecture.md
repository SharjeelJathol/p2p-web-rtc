# Architecture

This project demonstrates a minimal peer-to-peer (P2P) WebRTC setup that runs entirely in the browser. There is no dedicated signaling or media server; signaling is performed manually by copying and pasting SDP blobs between peers.

## Components

- Browser UI (`index.html`): Buttons and a textarea to drive the handshake and transfer SDP between peers.
- WebRTC engine (`script.js`): Creates the `RTCPeerConnection`, attaches local media tracks, negotiates SDP, and manages the data channel.
- STUN servers: Public STUN endpoints are used for ICE candidate discovery and NAT traversal.

## WebRTC Primitives Used

- `navigator.mediaDevices.getUserMedia()`: Captures local audio/video streams.
- `RTCPeerConnection`: Core P2P connection object; handles ICE, DTLS, SRTP, and track routing.
- `RTCSessionDescription` (Offer/Answer): SDP blobs describing capabilities and transport parameters.
- `RTCIceCandidate`: Network candidate lines that enable ICE connectivity checks.
- `RTCDataChannel`: Bidirectional data transport; established by the offerer in this demo.

## Data Flow

1. Offerer creates `RTCPeerConnection` and a `RTCDataChannel`.
2. Offerer adds local media tracks to the connection.
3. Offerer calls `createOffer()` → `setLocalDescription(offer)`.
4. Offerer shares the SDP (textarea → manual copy).
5. Answerer receives the SDP, calls `setRemoteDescription(offer)`.
6. Answerer adds its local media tracks.
7. Answerer calls `createAnswer()` → `setLocalDescription(answer)`.
8. Answerer shares the answer SDP (textarea → manual copy).
9. Offerer calls `setRemoteDescription(answer)`.
10. ICE candidates trickle and P2P connectivity is established.

## Notes on ICE

- The demo configures a set of STUN servers. STUN helps peers discover their public-facing addresses.
- There is no TURN server. In restrictive NAT/firewall environments, a direct path may not be possible and calls can fail.

## Security

- WebRTC encrypts media and data channels end-to-end using DTLS-SRTP.
- Browsers require a secure context (HTTPS or `http://localhost`) to access camera/microphone.

