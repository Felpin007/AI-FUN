let windForceX = 0;
let windForceY = 0;
let cloudVisible = false;
let drops = [];
let lightningVisible = false;
let snowing = false;
let snowflakes = [];
let snowfall = 0;
let greenLeaf, whiteLeaf, darkGreenLeaf;


class Snowflake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
  }

  draw() {
    stroke(255);
    ellipse(this.x, this.y, 5, 5);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      snowfall += 1;
    }
  }
}

class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(5, 10);
  }

  draw() {
    stroke(0, 0, 255);
    line(this.x, this.y, this.x, this.y + 10);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
    }
  }
}

function setup() {
  createCanvas(800, 600);
  greenLeaf = color(34, 139, 34); // cor verde para as folhas
  whiteLeaf = color(255, 255, 255); // cor branca para as folhas
  darkGreenLeaf = color(0, 100, 0); // cor verde escuro para as folhas
  for (let i = 0; i < 500; i++) {
    drops[i] = new Drop(random(width), random(-500, -50));
    snowflakes[i] = new Snowflake(random(width), random(-500, -50));
  }
}

function draw() {
  if (lightningVisible) {
    background(255);
    lightningVisible = false;
  } else {
    background(200);
  }

  if (snowing) {
    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].fall();
      snowflakes[i].draw();
    }
  }

  // Desenha a árvore
  drawTree(width / 2, height, -PI / 2, 100, 10, windForceX, windForceY);

  // Desenha a nuvem e a chuva
  if (cloudVisible) {
    drawLightning();
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].draw();
    }
  }
}
function drawTree(x, y, angle, length, depth, windX, windY) {
  if (depth !== 0) {
    const branchThickness = map(depth, 0, 10, 1, 10);
    const swayX = windX * depth; // O balanço horizontal aumenta com a profundidade (topo da árvore)
    const swayY = windY; // O balanço vertical é constante
    const newX = x + cos(angle + swayX) * length;
    const newY = y + sin(angle + swayX) * length * (1 - swayY); // Aplica a escala vertical

    // Desenha o galho
    strokeWeight(branchThickness);
    stroke(84, 53, 10); // cor marrom para os galhos
    line(x, y, newX, newY);

    // Desenha as folhas no final dos galhos
// Desenha as folhas no final dos galhos
// Desenha as folhas no final dos galhos
// Desenha as folhas no final dos galhos
if (depth < 3) {
  push();
  translate(newX, newY);
  rotate(angle + swayX);
  let currentLeafColor;
  if (cloudVisible) {
    currentLeafColor = lerpColor(greenLeaf, darkGreenLeaf, min(drops.length / 500, 1));
  } else if (snowing) {
    currentLeafColor = lerpColor(greenLeaf, whiteLeaf, min(snowfall / 500, 1));
  } else {
    currentLeafColor = greenLeaf;
  }
  fill(currentLeafColor);
  noStroke();
  for (let i = 0; i < 5; i++) {
    ellipse(0, branchThickness * 4, branchThickness * 2, branchThickness * 8);
    rotate(PI / 2.5);
  }
  pop();
}

    // Recursivamente desenha os próximos galhos
    drawTree(newX, newY, angle - random(PI / 6, PI / 4) + swayX, length * 0.7, depth - 1, windX, windY);
    drawTree(newX, newY, angle + random(PI / 6, PI / 4) + swayX, length * 0.7, depth - 1, windX, windY);
  }
}

function drawLightning() {
  if (random() < 0.01) { // 1% de chance de desenhar um raio
    stroke(255, 255, 0);
    let x = random(width);
    line(x, 0, x + random(-100, 100), height);
    lightningVisible = true;
  }
}

function keyPressed() {
  if (cloudVisible) {
    if (keyCode === RIGHT_ARROW) {
      windForceX += 0.01; // Aumenta a força do vento para a direita
    } else if (keyCode === LEFT_ARROW) {
      windForceX -= 0.01; // Aumenta a força do vento para a esquerda
    } else if (keyCode === DOWN_ARROW) {
      windForceY += 0.005; // Aumenta a força do vento para baixo
    }
  }
  if (key === 'c') {
    cloudVisible = !cloudVisible;
    if (cloudVisible) {
      snowing = false;
    }
  }
  if (key === 'n') {
    snowing = !snowing;
    if (snowing) {
      cloudVisible = false;
    }
  }
}

function keyReleased() {
  if (cloudVisible) {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
      windForceX = 0; // Reseta a força do vento horizontal quando as teclas são liberadas
    } else if (keyCode === DOWN_ARROW) {
      windForceY = 0; // Reseta a força do vento vertical quando a tecla é liberada
    }
  }
}

// Inicializa o sketch do p5.js
new p5();