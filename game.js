
let stage = 0;
let backgroundImg0;
let backgroundImg1;
let backgroundImg2;
let backgroundImg3;

let perfil;
let perfil1;
let perfil2;
let perfil3;
let perfil4;
let perfil5;
let perfil6;

let intro;
let introPlay = false;
let tocando = false;
let button;
let right;
let saysNo;
let tadaan;
let tadaanPlay = false;

let seletorX = 795;
let seletorY = 260;

let timer = false;
let timerTxt = 'TIMER OFF';
let timerColor = 'red';
let relogio;
let segundos = 20;
let contando = false;

let input;

let nickname = 'Hortência';
let pontos = 0;

//tempo barra
let progresso = 0;

let indice = 0;
let acertou = false;

let podio = [];

// fonte Smallstep Pro Bold

function preload() {

    intro = loadSound('sound/Crash-Bandicoot-fadeout.mp3');
    button = loadSound('sound/sound_button.mp3');
    right = loadSound('sound/right-duolingo.mp3');
    saysNo = loadSound('sound/says-no.mp3');
    tadaan = loadSound('sound/tadaan-duolingo.mp3');

    backgroundImg0 = loadImage('imagens/bg-0.jpg');
    backgroundImg1 = loadImage('imagens/bg-1.png');
    backgroundImg2 = loadImage('imagens/bg-2.jpg');
    //backgroundImg3 = loadImage('imagens/bg-0.jpg');

    perfil = loadImage('imagens/perfil-5.png');
    perfil1 = loadImage('imagens/perfil-1.png');
    perfil2 = loadImage('imagens/perfil-2.png');
    perfil3 = loadImage('imagens/perfil-3.png');
    perfil4 = loadImage('imagens/perfil-4.png');
    perfil5 = loadImage('imagens/perfil-5.png');
    perfil6 = loadImage('imagens/perfil-6.png');

    relogio = loadImage('imagens/relogio.png');

}

function setup() {
    createCanvas(1300, 750);
    //createCanvas(windowWidth, windowHeight);
    frameRate(60);

    input = createInput();


}

function draw() {
    if (stage == 0) {
        nick();
    }
    if (stage == 1) {
        persona();
        if (introPlay == false) {
            intro.play();
            introPlay = true;
        }
    }
    if (stage == 2) {
        menu();
        introPlay = false;
    }
    if (stage == 3) {
        seletorX = 795;
        seletorY = 260;
        intervalo();
    }
    if (stage == 4) {
        quiz();
    }
    if (stage == 5) {
        rank();
    }

    if (timer && stage === 4 && !contando) {
        contagem();
        contando = true;
    }

    if (stage === 3) {
        contando = false;
        contagem();
        clearTimeout(intervalo);
    }
}














