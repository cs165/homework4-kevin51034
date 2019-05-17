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
    // TODO(you): Implement the constructor and add fields as necessary.
    //console.log(this);
    //console.log(this.songs);

    this.getGifs = this.getGifs.bind(this);
    document.addEventListener('getGifs', this.getGifs);

    this.gifJsonReady = this.gifJsonReady.bind(this);
    //this.audioPlayer = new AudioPlayer();
    // This will occur the error that
    //The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page
    this.playButton = new PlayButton(this.audioPlayer);
    this.disPlayGifs = new GifDisplay(this)
    console.log(this);

    console.log(this.data);
  //  this.audioPlayer.play;

  }
  // TODO(you): Add methods as necessary.
  getGifs() {
    console.log('getGifs');
    //console.log(app.menu.songUrl);
    //console.log(document.getElementById("query-input").value)

    const theme = document.getElementById("query-input").value;
    //const textBox = document.querySelector("#query-input");
    const endpoint = "https://api.giphy.com/v1/gifs/search?q=" + theme +
     "&api_key=rqzUkSeiIV2n91ZxFDDIqJRnoMbyGBnB&limit=25&rating=g";
     //console.log(endpoint)

   fetch(endpoint)
   //.then(response => response.json())
   .then(function(response) {
     return response.json();
   })
   .then(this.gifJsonReady);
    //document.dispatchEvent(new CustomEvent('setSong'));
}
  gifJsonReady(json) {
    this.data = json.data;
    console.log(this)
    //console.log(json)
    this.gifUrl = json.data[0].images.downsized.url;
    this.gifUrl2 = json.data[1].images.downsized.url;

    //console.log(gifUrl)
    document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
    document.getElementById('backgif').style.backgroundImage = `url(${this.gifUrl2})`;

    //this.disPlayGifs = new GifDisplay(this.data)
    //console.log(gifUrl)

  }
  setSong() {
    this.audioPlayer = new AudioPlayer();
    this.audioPlayer.setSong(app.menu.songUrl);
    //console.log(this.disPlayGifs.changeGif);
    this.audioPlayer.setKickCallback(this.disPlayGifs.changeGif);
    //this.audioPlayer.resume();
    this.audioPlayer.play();
    console.log(this);

  }
}
