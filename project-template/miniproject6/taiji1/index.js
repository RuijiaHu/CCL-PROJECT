let angle = 0;
let particles = [];
let raD = 150;
let NUM_OF_PARTICLES = 6000;

function setup() {
    createCanvas(600, 600);

    background(0);

    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        particles.push(new Particle(width / 2, height / 2));
    }
}

function draw() {
    let x, y;
    x = width / 2;
    y = height / 2;

    //Tai Chi pattern
    angle += 0.05;
    let radDist = 75;
    let sinValue1 = sin(angle) * radDist;
    let cosValue1 = cos(angle) * radDist;
    let sinValue2 = sin(angle + 3) * radDist;
    let cosValue2 = cos(angle + 3) * radDist;

    noStroke();
    fill(255);
    circle(x + cosValue1, y + sinValue1, 150);
    fill(0);
    circle(x + cosValue1, y + sinValue1, 30);
    fill(0);
    circle(x + cosValue2, y + sinValue2, 150);
    fill(255);
    circle(x + cosValue2, y + sinValue2, 30);

    //particles
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.update();
        p.display();
    }
}

class Particle {
    // constructor function
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.raD = 150;
        this.angle = 0;
    }
    // methods (functions): particle's behaviors
    update() {
        this.angle += 0.05;

        this.x += random(-10, 10);
        this.y += random(-10, 10);
    }
    display() {
        push();
        noStroke();
        fill(255);
        circle(this.x, this.y, 0.6);
        pop();
    }
}