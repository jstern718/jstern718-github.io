
/*
The resizeContentBackground function is called when each page loads and when
the user resizes the browser window. Its purpose is to make sure that the beige
background surrounds all of the text/page contents. In order for the navbar to
appear like folder tabs, the html pages had to wrap the content of each page in
multiple wrappers, some with absolute positions. The #innerFrameDiv
consisntantly fits its contents, but the #outerFrameDiv, which is the beige
background, does not. This function changes the height of the outer frame to
that of the inner frame, so that all of the content fits inside the beige area,
whether the browser is large enough to display all of the contents or not.

*/

function resizeContentBackground(){
  let outerFrame = document.querySelector("#outerFrameDiv");
  let innerFrame = document.querySelector("#innerFrameDiv");
  outerFrame.style.height = `${innerFrame.scrollHeight}` + "px";


}

window.addEventListener('resize', (event) => resizeContentBackground());