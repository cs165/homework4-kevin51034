// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    const musicElement = document.querySelector('#music');

    this.toMusic = this.toMusic.bind(this);
    document.addEventListener('toMusic', this.toMusic);

    this.menu = new MenuScreen(menuElement);
    this.music = new MusicScreen(musicElement);
  }

  toMusic() {
    this.music.getGifs();
  }
}
