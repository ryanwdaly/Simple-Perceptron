
class Point {
    constructor() {
        this.x;
        this.y;
        this.label;
        this.x = random(cvsWidth)
        this.y = random(cvsHeight)

        if (this.x > this.y) {
            this.label = 1;
        } else {
            this.label = -1
        }

    }   

    show() {
      
        fill(255);
        stroke(0);
        ellipse(this.x, this.y, 20, 20);
    }

}