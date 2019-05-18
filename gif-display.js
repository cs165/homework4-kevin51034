// This class will represent the gif display area. It keeps track of which gif
// is being shown and can select a new random gif to be shown.
//
// See HW4 writeup for more hints and details.
class GifDisplay {
  constructor(musicElement) {
    this.changeGif = this.changeGif.bind(this);

    this.musicElement = musicElement;
    this.prerandom = 1;
    this.front = true;
  }
  changeGif() {
    console.log('changeGif');
    this.data = this.musicElement.data;

    if(this.front == true){
      document.getElementById('backgif').style.zIndex = "1";
      document.getElementById('frontgif').style.zIndex = "-1";
      let random = Math.floor(Math.random() * this.data.length);
      while(random === this.prerandom){
        let random = Math.floor(Math.random() * this.data.length);
      }
      this.prerandom = random;
      this.gifUrl = this.data[random].images.downsized.url;
      document.getElementById('frontgif').style.backgroundImage = `url(${this.gifUrl})`;
      this.front = false;
    }

    else {
      document.getElementById('frontgif').style.zIndex = "1";
      document.getElementById('backgif').style.zIndex = "-1";
      let random = Math.floor(Math.random() * this.data.length);
      while(random === this.prerandom){
        let random = Math.floor(Math.random() * this.data.length);
      }
      this.prerandom = random;
      this.gifUrl = this.data[random].images.downsized.url;
      document.getElementById('backgif').style.backgroundImage = `url(${this.gifUrl})`;
      this.front = true;
    }
  }
}
