const sounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    // click: {
    //   // With the name the player is created
    //   sound: { src: ["/sound/click.mp3"] }, // The settings to pass to Howler
    // },
    typing: {
      // sound: { src: ["/sounds/huh.mp3"], format: ["mp3"], preload: true },
      sound: { src: ["/sounds/button-3.mp3"], format: ["mp3"], preload: true },
      settings: { oneAtATime: false }, // The custom app settings
    },
    // deploy: {
    //   sound: { src: ["/sound/deploy.mp3"] },
    //   settings: { oneAtATime: true },
    // },
  },
};

export { sounds };
