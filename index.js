new TypeIt('#typfx', {
    waitUntilVisible: true,
    loop: true,
    speed: 120,

})

.type("Programmer", { delay: 402 })
    .pause(501)
    .delete(12)
    .type("Designer", { delay: 402 })
    .pause(501)
    .delete(9)
    .type("Thinker", { delay: 402 })
    .pause(501)
    .delete(9)
    .type("Creator", { delay: 402 })
    .pause(501)
    .delete(9)
    .go();


new TypeIt('#typfxx', {
    waitUntilVisible: true,
    loop: true,
    speed: 120,

})

.type("Programmer", { delay: 402 })
    .pause(501)
    .delete(12)
    .type("Designer", { delay: 402 })
    .pause(501)
    .delete(9)
    .type("Thinker", { delay: 402 })
    .pause(501)
    .delete(9)
    .type("Creator", { delay: 402 })
    .pause(501)
    .delete(9)
    .go();

AOS.init();
// RGB
const curr = document.getElementById('RGBscroll');
const total = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
        const scrollHeight = window.pageYOffset;
        const currheight = 100 * (scrollHeight / total);
        curr.style.height = currheight + "%";
    }
    //end


const menu = document.querySelector(".menu");
const navDrop = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const navbar = document.querySelector(".topnav");

const navChk = 0;
navDrop.addEventListener("click", () => {
    // if (navChk == 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navbar.classList.add("show");
    navDrop.classList.add("hide");
    // gsap.to(".hamburger", { opacity: 0, duration: 1, delay: 1, x: -2 });
    TweenMax.to(".hamburger", 0.5, { opacity: 0 });


    //     navChk = 1
    // }
});

navClose.addEventListener("click", () => {
    // if (navChk == 1) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navbar.classList.remove("show");
    // navDrop.classList.remove("hide");
    // gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
    TweenMax.to(".hamburger", 0.5, { opacity: 1 });



    //     navChk = 0
    // }
});

const pgHigh = navbar.getBoundingClientRect().height;

const headimg = document.querySelector(".headimg");

window.addEventListener('scroll', () => {

    if (window.pageYOffset > pgHigh) {
        navbar.classList.add("sticky");
        headimg.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        headimg.classList.remove("sticky");
    }


})

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".portrait", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
gsap.from(".intro h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
gsap.from(".intro h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
gsap.from(".intro h4", { opacity: 0, duration: 1, delay: 2.8, y: -45 });
gsap.from(".intro a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });
gsap.from(".nav-items", { opacity: 0, duration: 1, delay: 1.2, y: 30, stagger: 0.2, });
gsap.from(".social span", { opacity: 0, duration: 1, delay: 4, x: -30, stagger: 0.2, });

var canvas = new fabric.Canvas("draw");
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 3;
canvas.freeDrawingBrush.color = "ivory";
// console.log(canvas);

function canvasClear() {
    canvas.clear()
}
if (!('webkitSpeechRecognition' in window)) {
    upgrade();
}

var PolChck = 0;

function polarisName() {


    if (PolChck == 0) {
        speechrec = new webkitSpeechRecognition();
        speechrec.onresult = console.log;
        speechrec.start();
        PolChck = 1;
        speechrec.lang = 'en-US';
        speechrec.continuous = true;
        speechrec.interimResults = true;


        var out = document.getElementById('name');
        speechrec.onresult = function(event) {
            out.value = event.results[0][0].transcript;
        }


    } else {
        speechrec.stop();
        PolChck = 0;
    }


}

function polarisMail() {


    if (PolChck == 0) {
        speechrec = new webkitSpeechRecognition();
        speechrec.onresult = console.log;
        speechrec.start();
        PolChck = 1;
        speechrec.lang = 'en-US';
        speechrec.continuous = true;
        speechrec.interimResults = true;


        var out = document.getElementById('mail');
        speechrec.onresult = function(event) {
            out.value = event.results[0][0].transcript;
        }


    } else {
        speechrec.stop();
        PolChck = 0;
    }


}

function polarisTopic() {


    if (PolChck == 0) {
        speechrec = new webkitSpeechRecognition();
        speechrec.onresult = console.log;
        speechrec.start();
        PolChck = 1;
        speechrec.lang = 'en-US';
        speechrec.continuous = true;
        speechrec.interimResults = true;


        var out = document.getElementById('topic');
        speechrec.onresult = function(event) {
            out.value = event.results[0][0].transcript;
        }


    } else {
        speechrec.stop();
        PolChck = 0;
    }


}

function polarisMsg() {


    if (PolChck == 0) {
        speechrec = new webkitSpeechRecognition();
        speechrec.onresult = console.log;
        speechrec.start();
        PolChck = 1;
        speechrec.lang = 'en-US';
        speechrec.continuous = true;
        speechrec.interimResults = true;


        var out = document.getElementById('msg');
        speechrec.onresult = function(event) {
            out.value = event.results[0][0].transcript;
        }


    } else {
        speechrec.stop();
        PolChck = 0;
    }


}

function deetSubmit() {
    canvas.clear()
    document.getElementById('name').value = "Submitted";
    document.getElementById('mail').value = "Submitted";
    document.getElementById('topic').value = "Submitted";
    document.getElementById('msg').value = "Thanks for your submission, I'll Reach back soon!";


    // document.getElementById('name').value = "";
    // document.getElementById('mail').value = "";
    // document.getElementById('topic').value = "";
    // document.getElementById('msg').value = "";
}

function deetClr() {
    document.getElementById('name').value = "";
    document.getElementById('mail').value = "";
    document.getElementById('topic').value = "";
    document.getElementById('msg').value = "";
}