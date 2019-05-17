// This class will represent the music visualizer as a whole, similar to the
// role that the `App` class played in HW3.
//
// See HW4 writeup for more hints and details.
class App {
  constructor() {
    // TODO(you): Implement the constructor and add fields as necessary.
    const menuElement = document.querySelector('#menu');
    const musicElement = document.querySelector('#music');

    this.toMusic = this.toMusic.bind(this);
    document.addEventListener('toMusic', this.toMusic);

    this.menu = new MenuScreen(menuElement);
    this.music = new MusicScreen(musicElement);

  }
  // TODO(you): Add methods as necessary.

  toMusic() {
    document.querySelector('#menu').classList.add("inactive");
    document.querySelector('#music').classList.remove("inactive");
    //console.log(this.menu.songUrl)
    //console.log(document.getElementById("query-input").value)

    //document.dispatchEvent(new CustomEvent('getGifs'));
    this.music.getGifs();
    this.music.setSong();
    //this.music.audioPlayer.play();
  }
}
