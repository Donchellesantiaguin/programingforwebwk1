const colorchoice = window.prompt("Hot Pink or Light Pink");
console.log("user choice: " + colorchoice);

function setup() {
  createCanvas(400, 400);
}
function draw() {
  if (colorchoice === "Hot Pink") {
    fill("#FF69B4");
  } 
  if (colorchoice === "Hot pink") {
    fill("#FF69B4");
  } 
  if (colorchoice === "hot pink") {
    fill("#FF69B4");
  } else if (colorchoice === "Light Pink"){
    fill("#FFC0CB");
  }else if (colorchoice === "Light pink"){
    fill("#FFC0CB");
  } else if (colorchoice === "light pink"){
    fill("#FFC0CB");
  }  else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}