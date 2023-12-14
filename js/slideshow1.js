//Slideshow for Who We Are
class SlideshowImages1 {
  constructor(imageSrc, altText) {
    this.imageSrc = imageSrc; // Fix: Use imageSrc instead of creating an Image object
    this.altText = altText;
  }
}

//my objects
const image1 =  new SlideshowImages1("assets\kidsdoingart1.jpg", "Teacher sitting at a table with kids doing arts and crafts");
const image2 = new SlideshowImages1("assets\Kidsdoingarts3.jpg", "Two kids holding up animals masks made of crafting paper");
const image3 = new SlideshowImages1("assets\Kidsdoingart4.jpg", "A kid using watercolor");

const photosForSlideshow1 = [image1, image2, image3];

let i = 0;

function setTimer() {
  //every 3 seconds, changes the picture
  timer = setInterval(showImage, 3000);
}

function showImage() {
  console.log("showImage"+ [i % photosForSlideshow1.length])
  //displays the current image in the index
  const currentImage1 = photosForSlideshow1[i % photosForSlideshow1.length];
  currentImage1.src = currentImage1.imageSrc;
  currentImage1.alt = currentImage1.altText
  i++;
}

setTimer();