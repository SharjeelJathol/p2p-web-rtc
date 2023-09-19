let localConnection = new RTCPeerConnection();

let localStream, remoteStream;

let sendChannel;
let peerA = async () => {
  if (!localStream) {
    localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    document.getElementById("local").srcObject = localStream;
    localStream
      .getTracks()
      .forEach((track) => localConnection.addTrack(track, localStream));
  }

  localConnection.ontrack = (event) => {
    document.getElementById("remote").srcObject = event.streams[0];
  };

  localConnection.onicecandidate = (e) => {
    console.log(" NEW ice candidate!! on localConnection reprinting SDP ");
    console.log(JSON.stringify(localConnection.localDescription));
    document.getElementById("connection").value = JSON.stringify(
      localConnection.localDescription
    );
  };

  sendChannel = localConnection.createDataChannel("sendChannel");
  sendChannel.onmessage = (e) =>
    console.log("messsage received by Offer!!!" + e.data);
  sendChannel.onopen = (e) => console.log("Offer open!!!!");
  sendChannel.onclose = (e) => console.log("Offer closed!!!!!!");

  localConnection.createOffer().then((o) => {
    localConnection.setLocalDescription(o);
  });
};

let peerA_final = async () => {
  let answer = await JSON.parse(document.getElementById("connection").value);
  console.log(answer);

  localConnection.setRemoteDescription(answer).then((a) => console.log("done"));
};

let remoteConnection = new RTCPeerConnection();
let peerB = async () => {
  let offer = await JSON.parse(document.getElementById("connection").value);

  if (!remoteStream) {
    remoteStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    document.getElementById("local").srcObject = remoteStream;
    remoteStream
      .getTracks()
      .forEach((track) => remoteConnection.addTrack(track, remoteStream));
  }

  remoteConnection.ontrack = (event) => {
    document.getElementById("remote").srcObject = event.streams[0];
  };

  remoteConnection.onicecandidate = (e) => {
    console.log(" NEW ice candidnat!! on remoteConnection reprinting SDP ");
    console.log(JSON.stringify(remoteConnection.localDescription));
    document.getElementById("connection").value = JSON.stringify(
      remoteConnection.localDescription
    );
  };

  remoteConnection.ondatachannel = (e) => {
    const receiveChannel = e.channel;
    receiveChannel.onmessage = (e) =>
      console.log("messsage received by Answer!!!" + e.data);
    receiveChannel.onopen = (e) => console.log("Answer open!!!!");
    receiveChannel.onclose = (e) => console.log("Answer closed!!!!!!");
    remoteConnection.channel = receiveChannel;
  };

  remoteConnection.setRemoteDescription(offer).then((a) => console.log("done"));

  //create answer
  await remoteConnection
    .createAnswer()
    .then(async (a) => {
      await remoteConnection.setLocalDescription(a);
    })
    .then((a) => {
      console.log(JSON.stringify(remoteConnection.localDescription));
    });
};

let copy = async () => {
  document.getElementById("connection").select();
  document.execCommand("copy");
};

let paste = async () => {
  navigator.clipboard.readText().then((text) => {
    document.getElementById("connection").value = text;
  });
};
