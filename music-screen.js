// This class will represent the music visualizer screen, i.e. the screen that
// you see after you select a song.
//
// This class should create and own:
//   - 1 AudioPlayer
//   - 1 GifDisplay
//   - 1 PlayButton
//
// See HW4 writeup for more hints and details.
class MusicScreen {
  constructor(musicElement) {
    this.getGifs = this.getGifs.bind(this);
    document.addEventListener('getGifs', this.getGifs);

    this.gifJsonReady = this.gifJsonReady.bind(this);
    this.playButton = new PlayButton(this.audioPlayer);
    this.disPlayGifs = new GifDisplay(this)
    this.gif = true;
  }
  getGifs() {
    console.log('getGifs');
    const theme = document.getElementById("query-input").value;
    const endpoint = "https://api.giphy.com/v1/gifs/search?q=" + theme +
     "&api_key=rqzUkSeiIV2n91ZxFDDIqJRnoMbyGBnB&limit=25&rating=g";
   fetch(endpoint)
   .then(function(response) {
     return response.json();
   })
   .then(this.gifJsonReady);
}
  gifJsonReady(json) {
    this.data = json.data;
    console.log(this.data.length)
    if(this.data.length < 2){
      console.log('<2')
      document.getElementById('error').classList.remove('inactive');
      this.gif = false;
    }
    else {
      this.gifUrl = json.data[0].images.downsized.url;
      this.gifUrl2 = json.data[1].images.downsized.url;

      document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
      document.getElementById('backgif').style.backgroundImage = `url(${this.gifUrl2})`;
      document.querySelector('#menu').classList.add("inactive");
      document.querySelector('#music').classList.remove("inactive");
      this.setSong();
    }
  }
  setSong() {
    this.audioPlayer = new AudioPlayer();
    this.audioPlayer.setSong(app.menu.songUrl);
    this.audioPlayer.setKickCallback(this.disPlayGifs.changeGif);
    //this.audioPlayer.resume();
    this.audioPlayer.play();
  }
}
