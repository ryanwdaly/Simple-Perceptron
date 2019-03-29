const numPoints = 100
var points = []
var cvsWidth = 500;
var cvsHeight = 500;
var perceptron;
function setup() {
    createCanvas(cvsWidth, cvsHeight)

    for (let i = 0; i < numPoints; i++) {
        points.push(new Point)
    }

    perceptron = new Perceptron();
    // inputs = [-1, 0.5]
    // guess = p.guess(inputs)
}

function draw() {
    background(0);
    stroke(255);
    line(0,0, cvsWidth, cvsHeight)
   
   // Render point and train perceptron 
    for (let i = 0; i < points.length; i++) {
        points[i].show();
        let inputs = [points[i].x, points[i].y];
        let target = points[i].label;
        perceptron.train(inputs, target)
        let guess = perceptron.guess(inputs);

        if (guess === target) {
            fill(0, 255, 0)
            noStroke();
        } else {
            fill(255, 0, 0)
            noStroke();
        }
        ellipse(points[i].x, points[i].y, 10, 10)
    }
}