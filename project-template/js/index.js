//drwmotion1//
let dia = 0;
let r, g, b;
let x, y;
let xSpeed, ySpeed;
let growthRate = 1;
//ChatGPT
let circleVisible = true;

let mode = 1;

//explosion
let m = [];
let n = [];
let mSpd = [];
let nSpd = [];
let diam = [];

function setup() {
    createCanvas(400, 400);
    //drawmotion1
    r = 255;
    g = 0;
    b = 0;
    growthRate *= 0.7;
    // x = floor(random(125,275))
    // y = floor(random(125,275))
    // xSpeed = random(-3,3)
    // ySpeed = random(-3,3)

    // drawmotion2
    angleMode(DEGREES);

    //explosion
    for (let i = 0; i < 300; i++) {
        m[i] = width / 2;
        n[i] = height / 2;
        mSpd[i] = random(-2, 2);
        nSpd[i] = random(-2, 2);
        diam[i] = random(5, 40);
    }
}

function draw() {
    if (keyIsPressed) {
        if (key == "1") {
            mode = 1;
        } else if (key == "2") {
            mode = 2;
        } else if (key == "3") {
            mode = 3;
        }
    }

    if (mode == 1) {
        drawSceneBigBang();
    } else if (mode == 2) {
        drawSceneCells();
    } else if (mode == 3) {
        drawSceneDNA();
    }
}

// the big bang
function drawSceneBigBang() {
    fill(255)
    text("the BIG BANG    MACRO", 20, 20)
    textSize(20)

    push();

    background(0, 10);

    //random red, blue, yellow circles
    drawStar(255, 0, 0);
    drawStar(255, 255, 0);
    drawStar(0, 255, 255);

    if (circleVisible) {
        //big bang
        g += 0.9;
        b += 0.8;

        fill(r, g, b);
        dia += growthRate;
        circle(width / 2, height / 2, dia);
    }

    if (dia > 180) {
        fill(255)
        textSize(10)
        text("first, long press the mouse", 20, 30)
        text("then, long press the key", 20, 40)
        text("at last, press 2", 20, 50)
    }

    if (dia > 220) {
        circleVisible = false;
        drawmotion();
    }

    pop();
}

function drawmotion() {
    // background(0)
    if (keyIsPressed) {
        fill(random(255), random(255), random(255));
        beginShape();
        let radius = random(10, 50);
        for (let i = 0; i < 6; i++) {
            let angle = (TWO_PI / 6) * i;
            let sx = random(width) + cos(angle) * radius;
            let sy = random(height) + sin(angle) * radius;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

    if (mouseIsPressed) {
        for (let i = 0; i < 300; i++) {
            m[i] += mSpd[i] * 5;
            n[i] += nSpd[i] * 5;
            fill(random(255), random(255), random(255));
            circle(m[i], n[i], diam[i]);
        }
    }
}

function drawStar(r, g, b) {
    x = random(width);
    y = random(height);

    strokeWeight(2);
    fill(r, g, b);
    circle(x, y, 5);
}

// the cell
let angleRot = 0;

function drawSceneCells() {
    push();
    background(0);
    cell(50, 100, 110, width / 2, height / 2, 2);
    cell(20, 30, 50, 100, 100, 5);
    cell(10, 60, 80, 350, 350, 7);
    cell(30, 10, 30, 350, 60, 10);
    cell(5, 20, 25, 50, 290, 20);

    if (frameCount <= 200) {
        angleRot = 1;
    } else if (frameCount <= 800) {
        angleRot = 2;
    } else if (frameCount <= 1000) {
        angleRot = 5;
    } else if (frameCount <= 1100) {
        angleRot = 8;
    } else if (frameCount <= 1200) {
        angleRot = 12;
    } else if (frameCount <= 1300) {
        angleRot = 17;
    } else if (frameCount <= 1400) {
        angleRot = 23;
    } else if (frameCount <= 1500) {
        angleRot = 25;
    } else if (frameCount <= 16300) {
        angleRot = 27;
    }
    pop();
    fill(255)
    textSize(20)
    text("VARIATING CELLS   Mesoscopic", 20, 20)
    textSize(10)
    text("when the variation stopped, press 3", 20, 30)

}

function cell(amp, min, max, x, y, inc) {
    let freq = frameCount;
    let sinValue = sin(freq) * amp;

    stroke(255);

    push();
    translate(x, y);
    rotate(frameCount * 0.1);
    for (let angle = 0; angle < 360; angle += inc) {
        let radDist = map(sin(angle * angleRot), -1, 1, min, max); // radial distance
        let x = cos(angle) * radDist + sinValue;
        let y = sin(angle) * radDist + sinValue;
        line(0, sinValue, x, y);
    }
    pop();
}

// the DNA
function drawSceneDNA() {
    fill(255)
    textSize(20)
    text("DNA    MICRO", 20, 20)
    push();
    background(25, 48, 80, 10);

    genepair(100, 6);
    genepair(300, 6);
    genepair(width / 6, 40);
    genepair(200 - width / 6, 40);
    genepair(200 + width / 6, 40);
    genepair(400 - width / 6, 40);
    genepair(100 - width / 6, 57);
    genepair(width / 6 + 100, 57);
    genepair(300 - width / 6, 57);
    genepair(300 + width / 6, 57);
    genepair(width, 65);
    genepair(0, 65);
    genepair(200, 65);

    fill(255, 150);
    //from ChatGPT
    let centerX = random(width);
    let centerY = random(height);
    let radius = random(10, 50);
    let vertices = [];
    for (let i = 0; i < 6; i++) {
        let angle = (360 / 6) * i;
        let x = centerX + cos(angle) * radius;
        let y = centerY + sin(angle) * radius;
        vertices.push(createVector(x, y));
    }

    beginShape();
    for (let i = 0; i < vertices.length; i++) {
        vertex(vertices[i].x, vertices[i].y);
    }
    endShape();

    pop();
}

function genepair(x, amp) {
    let freq = frameCount * 3;
    let sinValue = sin(freq) * amp;

    let y = height / 2 + sinValue;
    let dia = 10;

    stroke(10);
    line(x, height / 2, x, y);
    line(x, height / 2, x, 400 - y);

    noStroke();
    fill(255);
    circle(x, y, dia);
    circle(x, 400 - y, dia);
}
