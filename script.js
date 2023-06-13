//your JS code here. If required.

function changeBackgroundImage() {
  var backgroundImageURL;

  if (window.innerWidth > window.innerHeight) {
    // Landscape mode
    backgroundImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';
  } else {
    // Portrait mode
    backgroundImageURL = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
  }
  document.body.style.backgroundImage = 'url(' + backgroundImageURL + ')';
}
window.addEventListener('resize', changeBackgroundImage);

changeBackgroundImage();
