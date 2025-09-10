# Abbreviations & Glossary

- P2P: Peer-to-Peer — Direct communication between two endpoints without an application media server.
- WebRTC: Web Real‑Time Communications — Browser APIs for real‑time audio/video/data exchange.
- Signaling: Out‑of‑band exchange of SDP and ICE info to set up a WebRTC session.
- SDP: Session Description Protocol — Text that describes codecs, media, fingerprints, and ICE parameters (offer/answer).
- Offer/Answer (O/A): Negotiation model where one peer sends an SDP offer and the other responds with an SDP answer.
- ICE: Interactive Connectivity Establishment — Process for discovering and selecting viable network paths between peers.
- ICE Candidate: A potential network route (IP, port, protocol) that peers can try for connectivity.
- STUN: Session Traversal Utilities for NAT — Helps a client discover its public (reflexive) address.
- TURN: Traversal Using Relays around NAT — Relays traffic when direct P2P paths fail; improves reliability.
- NAT: Network Address Translation — Maps private IPs to public ones; can block direct P2P paths.
- RTCPeerConnection: Core WebRTC object managing ICE, DTLS, SRTP, and media/data transport.
- RTCSessionDescription: JS object wrapping SDP for `setLocalDescription` / `setRemoteDescription`.
- RTCIceCandidate: JS object representing an ICE candidate provided to `addIceCandidate`.
- RTCDataChannel: Bidirectional, low‑latency data stream between peers over the same connection.
- getUserMedia (gUM): API to capture local camera/microphone; returns a `MediaStream`.
- MediaStream: Container for one or more `MediaStreamTrack`s (audio/video tracks).
- Trickle ICE: Sending ICE candidates incrementally as they are discovered, rather than all at once.
- DTLS: Datagram Transport Layer Security — Key exchange and encryption handshake for WebRTC.
- SRTP: Secure Real‑time Transport Protocol — Encrypted transport for audio/video media.
- RTP: Real‑time Transport Protocol — Underlying media packetization used by WebRTC.
- Secure Context: HTTPS (or `http://localhost`) — Required by browsers for camera/mic access.

