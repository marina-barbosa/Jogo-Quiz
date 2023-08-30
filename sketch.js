
let stage = 0;
let backgroundImg1;
let backgroundImg2;

let input;

let nickname = 'Hortência';
let pontos = 0;

//tempo barra
let progresso = 0;

let indice = 0;
let acertou = false;
// const pergunta = [
//     '1 - Vive num abacaxi e mora no mar?',
//     '2 - Qual é o maior planeta do nosso sistema solar?',
//     '3 - Qual é o animal mais rápido do mundo?',
//     '4 - Qual é o famoso autor de "Romeu e Julieta"?'
// ];

// const resposta = ['Bob Esponja', 'Júpter', 'Guepardo', 'William Shakespeare'];

// const alternativa = [
//     ['Aquaman', 'Nemo', 'Lula', 'Bob Esponja'],
//     ['Terra', 'Júpter', 'Marte', 'Vênus'],
//     ['Guepardo', 'Águia', 'Lebre', 'Tubarão'],
//     ['Charles Dickens', ' Mark Twain', 'William Shakespeare', ' Jane Austen'],
// ];

let podio = [];

// fonte Smallstep Pro Bold

function preload() {
    backgroundImg1 = loadImage('imagens/school-classroom.png');
    backgroundImg2 = loadImage('imagens/light-classroom.jpg');

}

function setup() {
    createCanvas(1300, 750);
    //createCanvas(windowWidth, windowHeight);
    frameRate(60);

    input = createInput();




}

function draw() {
    if (stage == 0) {
        menu();
    }
    if (stage == 1) {
        quiz();
    }
    if (stage == 2) {
        intervalo();
    }
    if (stage == 3) {
        rank();
    }
}

function menu() {
    background(50, 0, 100);

    fill(200); // cor 
    stroke(0); // cor
    strokeWeight(10); // borda
    textSize(140); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    text(`Mahoot?`, 305, 100, 690, 200);

    input.position(CENTER, CENTER);
    input.size(200, 40);

    if (keyIsDown(13)) {
        nickname = input.value();
        input.remove();
        stage = 1;
    }
}

function quiz() {

    //background(200);
    background(backgroundImg1);


    // caixa pergunta 
    fill(220);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(305, 100, 690, 200, 10);

    // texto pergunta 1300, 750
    fill(70); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${pergunta[indice]}`, 305, 100, 690, 200);

    //


    //alternativa VERMELHA
    fill(255, 0, 0);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(10, 380, 635, 150, 10);

    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${alternativa[indice][0]}`, 10, 380, 635, 150);


    //alternativa AZUL
    fill(0, 0, 255);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(655, 380, 635, 150, 10);

    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${alternativa[indice][1]}`, 655, 380, 635, 150);


    //alternativa AMARELA
    fill(255, 255, 0);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(10, 540, 635, 150, 10);

    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${alternativa[indice][2]}`, 10, 540, 635, 150);


    //alternativa VERDE
    fill(0, 255, 0);
    stroke(0); // cor
    strokeWeight(2); // borda   
    rect(655, 540, 635, 150, 10);

    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${alternativa[indice][3]}`, 655, 540, 635, 150);


    //


    //footer
    fill(220);
    noStroke();
    rect(0, height - 50, width, 50);

    // nickname
    fill(30); // cor 
    textSize(24); // tamanho da fonte 
    textAlign(LEFT);
    textStyle(BOLD);
    text(`${nickname}`, 10, 727);

    // pontos
    fill(50);
    noStroke(); // cor da borda        
    rect(1190, 710, 100, 30, 5);


    // pontos
    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(RIGHT);
    textStyle(NORMAL);
    text(`${pontos}`, 1273, 727);

}

function intervalo() {
    //background
    //background(200);
    background(backgroundImg1);


    // caixa pergunta 
    fill(220);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(305, 100, 690, 200, 10);

    // texto pergunta 1300, 750
    fill(70); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${pergunta[indice]}`, 305, 100, 690, 200);

    //    

    // barra de progresso    
    if (progresso < 690) {
        progresso += 2;
    } else {
        stage = 1;
        progresso = 0;
        tempo = 0;
    }
    fill(220); // branco vazio
    rect(305, 450, 690, 50);
    fill(0, 150, 0); // verde cheio
    rect(305, 450, progresso, 50);

    //footer
    fill(220);
    noStroke();
    rect(0, height - 50, width, 50);

    // nickname
    fill(30); // cor 
    textSize(24); // tamanho da fonte 
    textAlign(LEFT);
    textStyle(BOLD);
    text(`${nickname}`, 10, 727);//735 sem o center

    // caixa pontos
    fill(50);
    noStroke(); // cor da borda        
    rect(1190, 710, 100, 30, 5);


    // pontos
    fill(255); // cor 
    textSize(24); // tamanho da fonte
    textAlign(RIGHT);
    textStyle(NORMAL);
    text(`${pontos}`, 1273, 727); //733 sem o center

}

function rank() {
    background(backgroundImg1);

    // caixa  
    fill(220);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(500, 100, 300, 550, 10);

    // texto 
    fill(70); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${podio}`, 305, 100, 690, 200);


    //keyReleased()

}

function mouseReleased() {
    if (stage == 1) {
        // troca de pergunta 
        if (mouseX >= 10 && mouseX <= 645 && mouseY >= 380 && mouseY <= 530) {
            //vermelho
            console.log(alternativa[indice][0] == resposta[indice])
            if (alternativa[indice][0] == resposta[indice]) {
                pontos += 100;
            }
            stage = 2;
            indice++;
        }
        if (mouseX >= 655 && mouseX <= 1290 && mouseY >= 380 && mouseY <= 530) {
            //azul
            console.log(alternativa[indice][1] == resposta[indice])
            if (alternativa[indice][1] == resposta[indice]) {
                pontos += 100;
            }
            stage = 2;
            indice++;
        }
        if (mouseX >= 10 && mouseX <= 645 && mouseY >= 540 && mouseY <= 690) {
            //amarelo
            console.log(alternativa[indice][2] == resposta[indice])
            if (alternativa[indice][2] == resposta[indice]) {
                pontos += 100;
            }
            stage = 2;
            indice++;
        }
        if (mouseX >= 655 && mouseX <= 1290 && mouseY >= 540 && mouseY <= 690) {
            //verde 
            console.log(alternativa[indice][3] == resposta[indice])
            if (alternativa[indice][3] == resposta[indice]) {
                pontos += 100;
            }
            stage = 2;
            indice++;
        }
        if (indice == pergunta.length) { // encerra
            stage = 3;
            indice = 0;
            podio.push(pontos)
            pontos = 0;
        }
    }
}

function keyReleased() {
    if (keyCode === ENTER) { // keyIsDown(13)
        if (stage == 3) {
            stage = 0;
            setup();
        }
    }
}

