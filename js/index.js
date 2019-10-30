import { deepStrictEqual } from "assert";

var can;
var ctx;
var h;
var w;
var num = 80;
var stars = [];
var girlImage = new Image();
var starImage = new Image();
var lastTime;
var deltaTime;
var switchy = false;
var life = 1;
var starObj = function () {
    this.x;
    this.y;
    this.picNo;
    this.xSpd;
    this.ySpd;
}
starObj.prototype.init = function () {
    this.x = Math.random() * 600 + 100;
    this.y = Math.random() * 300 + 150;
    this.picNo = Math.floor(Math.random() * 7);
    this.timer = 0;
    this.xSpd = Math.random() * 3 - 1.5;
    this.ySpd = Math.random() * 3 - 1.5;
}
starObj.prototype.drawStar = function () {
    ctx.save();
    ctx.globalAlpha = life;
    ctx.drawImage(starImage, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7 );
    ctx.restore();
}
starObj.prototype.update = function () {
    this.x += this.xSpd * deltaTime * 0.004;
    this.y += this.ySpd * deltaTime * 0.004;
    if (this.x < 100 || this.x > 700) {
        this.init();
        return;
    }
    if (this.y < 150 || this.y > 450) {
        this.init();
        return;
    }
    this.timer += deltaTime;
    if (this.timer > 50) {
        this.picNo += 1;
        this.picNo %= 7;
        this.timer = 0;
   }
}

function init() {
    can = document.getElementById('canvas');
    ctx = can.getContext('2d');
    w = can.width;
    h = can.height;
    girlImage.src = '../image/girl.jpg';
    starImage.src = '../image/star.png';
    for (var i = 0; i < num; i++) {
        var obj = new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime = Date.now();
    document.addEventListener('mousemove', mouseMove, false);
    gameloop();
}
window.document.onload = init();
function drawBackground () {
    ctx.fillStyle = '#393550';
    ctx.fillRect(0, 0 , w, h); 
}
function gameloop () {
    requestAnimationFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    drawBackground();
    drawGirl();
    drawStar();
    aliveUpdate();
}
function drawGirl () {
    ctx.drawImage(girlImage, 100, 150, 600, 300);
}
function drawStar () {
	for (var j = 0; j < num; j ++) {
        stars[j].update();
        stars[j].drawStar();
    }
}
function mouseMove(e) {
    var px = e.offsetX;
    var py = e.offsetY;
    if (px > 100 && px < 700 && py > 150 && py < 450) {
        switchy = true;
    } else {
        switchy = false;
    }
    
}
function aliveUpdate() {
    if (switchy) { // 显示
        life += 0.03 * deltaTime * 0.05;
        if (life > 1) {
            life = 0;
        }
    } else { // 影藏
        life -= 0.03 * deltaTime * 0.05;
        if (life < 0) {
            life = 0;
        }
    }
}