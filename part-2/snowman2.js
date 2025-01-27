let grid = undefined;
let stroke1, stroke2, bodyColor, hatColor, buttonColor, carrotColor;
function setup() {
    // user prompts here
    stroke1 = prompt("Enter a basic color name for the outline of the snowman (e.g., 'hotPink'):", "hotPink");
    stroke2 = prompt("Enter another basic color name for the outline of the snowman (e.g., 'pink'):", "pink");
    bodyColor = prompt("Enter the color for the body of the snowman (e.g., 'white'):", "white");
    hatColor = prompt("Enter the color for the snowman's hat (e.g., 'black'):", "black");
    buttonColor = prompt("Enter the color for the buttons on the snowman (e.g., 'black'):", "black");
    carrotColor = prompt("Enter the color for the carrot nose (e.g., 'orange'):", "orange");
    // background canvas
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid2.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("#f1f1f1");
        strokeWeight(20);
        stroke(20);
        stroke(stroke1);
        // left leg
        ellipse(350, 650, 200);
        // right leg
        ellipse(650,650,200);
        // body
        ellipse(500, 450, 350, 400);
        // head
        ellipse(500, 200, 200);
        // hat brim
        stroke("hotPink");
        strokeWeight(40);
        line(400,120,600,120);
        // hat body
        fill("pink");
        stroke(stroke1);
        strokeWeight(20);
        quad(400, 50, 600, 50, 550, 120, 450, 120);
        // eyes
        stroke(0);
        strokeWeight(50);
        point(425, 200);
        point(575, 200);
        // mouth
        noFill();
        strokeWeight(10);
        arc(500, 200, 80, 80, 0, HALF_PI);
        // carrot nose
        fill("#FFA500");
        noStroke();
        triangle(500, 170, 480, 190, 520, 190);
        // buttons on body
        fill(0);
        noStroke();
        // button 1
        ellipse(500, 400, 40, 40);
         // button 2
         ellipse(500, 460, 40, 40);
          // button 3
        ellipse(500, 520, 40, 40);
        // my attemp to twig arms as branches
        //left arm (branch)
        stroke(139, 69, 19);
        strokeWeight(10);
        line(300, 350, 180, 400);
        // left arm fingers (3 lines - hands)
        drawTwigFingers(180, 400, -1);
        // right arm (branch)
        line(700, 350, 820, 400);
        // right arm fingers (3 lines - hands)
        drawTwigFingers(820, 400, 1);
 // Function for twig fingers
function drawTwigFingers(x, y, direction){
    let fingerLength = 50;
    //Finger 1
    line(x, y, x + direction * fingerLength, y - fingerLength);
    //Finger 2
    line(x, y, x + direction * fingerLength * 0.75, y + fingerLength * 0.25);
    //Finger 3
    line(x, y, x + direction * fingerLength * 0.5, y + fingerLength * 0.5);
}
}