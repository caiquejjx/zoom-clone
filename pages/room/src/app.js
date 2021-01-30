const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get("room");

  const view = new View();
  const media = new Media();

  const socketUrl = "http://localhost:3000";
  const peerConfig = Object.values({
    id: undefined,
    config: {
      port: 9000,
      host: "localhost",
      path: "/",
    },
  });

  const peerBuilder = new PeerBuilder({ peerConfig });
  const socketBuilder = new SocketBuilder({ socketUrl });
  const deps = {
    view,
    media,
    socketBuilder,
    peerBuilder,
  };

  Business.initialize(deps);
};

window.onload = onload;
