// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
//
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(musicElement) {
    // TODO(you): Implement the constructor and add fields as necessary.
    this.changeGif = this.changeGif.bind(this);
    this.musicElement = musicElement;
    console.log(this.musicElement);
    //document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
    this.prerandom = 1;
    this.front = true;
    //document.getElementById('backgif').classList.add('inactive');
  }
  // TODO(you): Add methods as necessary.
  changeGif() {
    console.log('changeGif');
    console.log(this.musicElement);

    this.data = this.musicElement.data;

    if(this.front == true){
      document.getElementById('backgif').style.zIndex = "1";
      document.getElementById('frontgif').style.zIndex = "-1";
      let random = Math.floor(Math.random() * 25);
      while(random === this.prerandom){
        let random = Math.floor(Math.random() * 25);
      }
      this.prerandom = random;

      this.gifUrl = this.data[random].images.downsized.url;
      document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
      this.front = false;
    }
    else {
      document.getElementById('frontgif').style.zIndex = "1";
      document.getElementById('backgif').style.zIndex = "-1";
      let random = Math.floor(Math.random() * 25);
      while(random === this.prerandom){
        let random = Math.floor(Math.random() * 25);
      }
      this.prerandom = random;
      this.gifUrl = this.data[random].images.downsized.url;
      document.getElementById('backgif').style.backgroundImage = `url(${this.gifUrl})`;
      this.front = true;
    }
    //document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
    //document.getElementById('backgif').style.backgroundImage = `url(${this.gifUrl2})`;

    //document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
    //document.getElementById('frontgif').style.z-index = -1;
  }
}
