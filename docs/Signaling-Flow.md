# Signaling Flow (Manual Copy/Paste)

This app uses manual signaling: users copy/paste SDP blobs between the two peers via a textarea. No server is involved.

## Steps

1) Offerer (Peer A)
- Click “Create session”.
- This captures local media, creates a data channel, generates an SDP offer, and sets it as the local description.
- The SDP appears in the textarea.

2) Answerer (Peer B)
- Paste the offer into the textarea.
- Click “Send join session request”.
- This sets the offer as the remote description, captures local media, generates an SDP answer, and sets it as the local description.
- The answer appears in the textarea.

3) Finalize
- Back on Peer A, paste the answer and click “Accept request”.

If the network path is possible with STUN only, ICE checks will succeed and media/data channels will be established.

## ICE Candidates

- This demo primarily relies on the SDP’s gathered candidates.
- The code logs candidates to the console and updates the textarea as the local description changes.
- Because there is no live signaling channel, "trickle ICE" is limited. Latency or order issues can sometimes break the flow; refreshing both pages and restarting often helps.

## Reliability Considerations

- Without TURN, some peers cannot connect due to symmetric NATs or strict firewalls.
- Adding TURN would make connectivity far more reliable.

