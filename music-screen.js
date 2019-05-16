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
    console.log(this);
    console.log(this.songs);

    this.getGifs = this.getGifs.bind(this);
    document.addEventListener('getGifs', this.getGifs);

    this.gifJsonReady = this.gifJsonReady.bind(this);

  }
  // TODO(you): Add methods as necessary.
  getGifs() {
    console.log('getGifs');
    console.log(app.menu.songUrl);
    console.log(document.getElementById("query-input").value)

    const theme = document.getElementById("query-input").value;
    //const textBox = document.querySelector("#query-input");
    const endpoint = "https://api.giphy.com/v1/gifs/search?q=" + theme +
     "&api_key=dc6zaTOxFJmzC&limit=25&rating=g";
     console.log(endpoint)

   fetch(endpoint)
   //.then(response => response.json())
   .then(function(response) {
     return response.json();
   })
   .then(this.gifJsonReady);
// dance will error

  }
  gifJsonReady(json) {
    const data = json.data;
    console.log(data)
    console.log(json)
    const gifUrl = json.data[0].images.downsized.url;
    console.log(gifUrl)
    document.getElementById('gif').style.backgroundImage = `url(${gifUrl})`;
  }
}
