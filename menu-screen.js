// This class will represent the menu screen that you see when you first load
// the music visualizer.
//
// See HW4 writeup for more hints and details.
class MenuScreen {
  constructor(menuElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.selectElem = document.querySelector('select');

    this.menuElement = menuElement;

    this.songs = [];
    this.songUrl;
    this.title;
    this.artist;
    this.theme = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];

    console.log(this);
    this.myJsonReady = this.myJsonReady.bind(this);

    this.fetchsongs = this.fetchsongs.bind(this);
    this.fetchsongs();

    this.getRandomTheme = this.getRandomTheme.bind(this);
    this.getRandomTheme();

    this.submitting  = this.submitting.bind(this);
    document.getElementById('Go').addEventListener('click',this.submitting);

    //document.getElementById('query-input').addEventListener('input',this.submitting);
  // TODO(you): Add methods as necessary.
}

fetchsongs() {
  fetch("https://fullstackccu.github.io/homeworks/hw4/songs.json")
  .then(function(response) {
    return response.json();
  })
  .then(this.myJsonReady);
}
myJsonReady(myJson) {
  this.songs = myJson;
  for (const song in this.songs) {
    let list = document.getElementById('song-selector');
    //console.log(list);

    const option = document.createElement("option");
      option.value = this.songs[song].songUrl;
      option.text = this.songs[song].title;
      list.add(option);
    //console.log(this.songs[song]);
    //console.log(this.songs[song].songUrl);
  }
}

getRandomTheme() {
  let random = Math.floor(Math.random() * 10);
  //console.log(this.theme[random]);
  document.getElementById("query-input").defaultValue = this.theme[random];
//  document.getElementById('123').innerHTML = this.theme[random];
}

submitting(event) {
  //console.log(event);
  let songvalue = document.getElementById("song-selector");
  this.songUrl = songvalue.options[songvalue.selectedIndex].value;
  //let title = songvalue.options[songvalue.selectedIndex].text;
  //console.log(songvalue.options[songvalue.selectedIndex]);
  //console.log(url);
  let themevalue = document.getElementById("query-input").value;
  //document.querySelector('#music').classList.remove("inactive");
  //console.log(this.songUrl);
  //this.toMusic(songvalue, themevalue);

  document.dispatchEvent(new CustomEvent('toMusic'));
  event.preventDefault();
}
}
