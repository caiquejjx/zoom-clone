class Business {
  constructor({ room, media, view, socketBuilder }) {
    this.room = room;
    this.media = media;
    this.view = view;
    this.socketBuilder = socketBuilder
      .setOnUserConnected(this.onUserConnected)
      .setOnUserDisconnected(this.OnUserDisconnected)
      .build();

    this.socketBuilder.emit("join-room", this.room, "teste-01");

    this.currentStream = {};
  }

  static initialize(deps) {
    const instance = new Business(deps);
    return instance._init();
  }

  async _init() {
    this.currentStream = await this.media.getCamera();
    this.addVideoStream("teste");
  }

  addVideoStream(userId, stream = this.currentStream) {
    const isCurrentId = false;
    this.view.renderVideo({
      userId,
      stream,
      isCurrentId,
    });
  }

  onUserConnected = function () {
    return (userId) => {};
  };

  OnUserDisconnected = function () {
    return (userId) => {};
  };
}
