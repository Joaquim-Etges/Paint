let canvas =document.getElementById("mycanvas")
let ctx = canvas.getContext("2d")

let mouseXfinal, mouseYfinal, mouseX, mouseY;
let color = "red"
let Laridth =2

canvas.addEventListener("mousedown",RatoFrito)

function RatoFrito() {
    color = document.getElementById("cor").value;
    Laridth = document.getElementById("largura").value;
    evento = "mousedown";
}

canvas.addEventListener("mouseup",mouselive)

function mouselive() {
evento = "mouseup"

}

canvas.addEventListener("mousemove",Oque)
function Oque(e){



mouseX = e.clientX - canvas.offsetLeft;
mouseY = e.clientY - canvas.offsetTop;

if(evento == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = largura;
    ctx.moveTo(mouseXfinal,mouseYfinal)
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke();
}
mouseXfinal = mouseX
mouseYfinal = mouseY

}

function clean(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let larguratela = screen.width;
let novalargura = screen.width -70;
let novaaltura = screen.height -300;

if(larguratela<992) {
    document.getElementById("mycanvas").width = novalargura;
    document.getElementById("mycanvas").height = novaaltura
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart",encostei)

function encostei() {
    color = document.getElementById("cor").value;
    Laridth = document.getElementById("largura").value;
    evento = "touchstart";
}

canvas.addEventListener("touchend", parei)

let touchX;
let touchY;
let touchXfinal;
let touchYfinal;

function parei() {
evento = "touchend"

}

canvas.addEventListener("touchmove",movimentei)
function movimentei(e){



touchX = e.touches[0].clientX - canvas.offsetLeft;
touchYY = e.touches[0].clientY - canvas.offsetTop;

if(evento == "touchstart"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = largura;
    ctx.moveTo(touchXfinal,touchYfinal)
    ctx.lineTo(touchX, touchY)
    ctx.stroke();
}
touchXfinal = touchX
touchYfinal = touchY

}