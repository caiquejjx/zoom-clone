const recordClick = function (recorderBtn) {
  this.recordingEnabled = false;
  return () => {
    this.recordingEnabled = !this.recordingEnabled;
    recorderBtn.style.color = this.recordingEnabled ? "red" : "white";
  };
};

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");

  // const recorderBtn = document.getElementById('record')
  // recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const view = new View();
  const media = new Media();

  // view.renderVideo({
  //   userId: "test",
  //   url: "https://media.giphy.com/media/yR9iQQoaimPUwHWy0O/giphy.mp4",
  // });
  const socketUrl = "http://localhost:3000";
  const socketBuilder = new SocketBuilder({ socketUrl });
  const deps = {
    view,
    media,
    socketBuilder,
  };

  Business.initialize(deps);
};

window.onload = onload;
