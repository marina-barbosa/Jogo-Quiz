
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
        introPlay = false;
    }
    if (stage == 2) {
        menu();
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
}

function nick() {
    if (introPlay == false) {
        intro.play();
        introPlay = true;
    }
    background(backgroundImg0);

    fill(250); // cor 
    stroke(0); // cor
    strokeWeight(10); // borda
    textSize(140); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(BOLDITALIC);
    text(`Mahoot?`, 305, 100, 690, 200);

    input.position(CENTER, CENTER);
    input.size(200, 40);


}

function persona() {
    if (!backgroundImg3) {
        background(backgroundImg0);
    } else {
        background(backgroundImg3);
    }

    image(perfil1, 275, 260, 100, 100);
    image(perfil2, 405, 260, 100, 100);
    image(perfil3, 535, 260, 100, 100);
    image(perfil4, 665, 260, 100, 100);
    image(perfil5, 795, 260, 100, 100);
    image(perfil6, 925, 260, 100, 100);

    // seletor 

    if (mouseIsPressed) {
        if (mouseX >= 275 && mouseX <= 375 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 275;
            tocar(button);
            perfil = perfil1;
        }
        if (mouseX >= 405 && mouseX <= 505 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 405;
            tocar(button);
            perfil = perfil2;
        }
        if (mouseX >= 535 && mouseX <= 635 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 535;
            tocar(button);
            perfil = perfil3;
        }
        if (mouseX >= 665 && mouseX <= 765 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 665;
            tocar(button);
            perfil = perfil4;
        }
        if (mouseX >= 795 && mouseX <= 895 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 795;
            tocar(button);
            perfil = perfil5;
        }
        if (mouseX >= 925 && mouseX <= 1025 && mouseY >= 260 && mouseY <= 360) {
            seletorX = 925;
            tocar(button);
            perfil = perfil6;
        }
    }

    noFill();
    stroke(0); // cor
    strokeWeight(6); // borda 
    rect(seletorX, seletorY, 100, 100);

    //bordas

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(275, 260, 100, 100);

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(405, 260, 100, 100);

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(535, 260, 100, 100);

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(665, 260, 100, 100);

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(795, 260, 100, 100);

    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(925, 260, 100, 100);


    // botoes bg
    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(435, 390, 200, 40);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte 
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text(`Plano de Fundo A`, 535, 413);

    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(665, 390, 200, 40);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte 
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    text(`Plano de Fundo B`, 765, 413);

    if (mouseIsPressed) {
        if (mouseX >= 435 && mouseX <= 635 && mouseY >= 390 && mouseY <= 430) {
            tocar(button);
            backgroundImg3 = backgroundImg1;
        }
        if (mouseX >= 665 && mouseX <= 865 && mouseY >= 390 && mouseY <= 430) {
            tocar(button);
            backgroundImg3 = backgroundImg2;
        }
    }


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

    // caixa pontos
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

function menu() {
    if (!backgroundImg3) {
        background(backgroundImg0);
    } else {
        background(backgroundImg3);
    }

    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(550, 260, 200, 40);

    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(550, 360, 200, 40);

    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(550, 460, 200, 40);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    textAlign(CENTER);
    text(`FACIL`, width / 2, 283); //680, 283

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`MEDIO`, width / 2, 383);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`DIFICIL`, width / 2, 483);

    //tocar(button);


    if (mouseIsPressed) {
        if (mouseX >= 550 && mouseX <= 750 && mouseY >= 260 && mouseY <= 300) {
            seletorY = 260;
            tocar(button);
            pergunta = perguntaF;
            resposta = respostaF;
            alternativa = alternativaF;
        }
        if (mouseX >= 550 && mouseX <= 750 && mouseY >= 360 && mouseY <= 400) {
            seletorY = 360;
            tocar(button);
            pergunta = perguntaM;
            resposta = respostaM;
            alternativa = alternativaM;
            console.log(resposta)
        }
        if (mouseX >= 550 && mouseX <= 750 && mouseY >= 460 && mouseY <= 500) {
            seletorY = 460;
            tocar(button);
            pergunta = perguntaD;
            resposta = respostaD;
            alternativa = alternativaD;
        }
    }

    seletorX = 550;
    noFill();
    stroke(0); // cor
    strokeWeight(6); // borda 
    rect(seletorX, seletorY, 200, 40);



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

function quiz() {

    if (!backgroundImg3) {
        background(backgroundImg1);
    } else {
        background(backgroundImg3);
    }

    image(perfil, 175, 160, 100, 100);
    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(175, 160, 100, 100);

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
    if (!backgroundImg3) {
        background(backgroundImg1);
    } else {
        background(backgroundImg3);
    }

    image(perfil, 175, 160, 100, 100);
    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(175, 160, 100, 100);


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
        stage = 4;
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
    if (tadaanPlay == false) {
        tadaan.play();
        tadaanPlay = true;
    }
    if (!backgroundImg3) {
        background(backgroundImg1);
    } else {
        background(backgroundImg3);
    }

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

}

function mouseReleased() {
    if (stage == 4) {
        // troca de pergunta 
        if (mouseX >= 10 && mouseX <= 645 && mouseY >= 380 && mouseY <= 530) {
            //vermelho
            console.log(alternativa[indice][0]);
            console.log(resposta[indice]);
            console.log(alternativa[indice][0] == resposta[indice])
            if (alternativa[indice][0] == resposta[indice]) {
                pontos += 100;
                tocar(right);
            } else {
                tocar(saysNo);
            }
            stage = 3;
            indice++;
        }
        if (mouseX >= 655 && mouseX <= 1290 && mouseY >= 380 && mouseY <= 530) {
            //azul
            console.log(alternativa[indice][1]);
            console.log(resposta[indice]);
            console.log(alternativa[indice][1] == resposta[indice])
            if (alternativa[indice][1] == resposta[indice]) {
                pontos += 100;
                tocar(right);
            } else {
                tocar(saysNo);
            }
            stage = 3;
            indice++;
        }
        if (mouseX >= 10 && mouseX <= 645 && mouseY >= 540 && mouseY <= 690) {
            //amarelo
            console.log(alternativa[indice][2]);
            console.log(resposta[indice]);
            console.log(alternativa[indice][2] == resposta[indice])
            if (alternativa[indice][2] == resposta[indice]) {
                pontos += 100;
                tocar(right);
            } else {
                tocar(saysNo);
            }
            stage = 3;
            indice++;
        }
        if (mouseX >= 655 && mouseX <= 1290 && mouseY >= 540 && mouseY <= 690) {
            //verde 
            console.log(alternativa[indice][3]);
            console.log(resposta[indice]);
            console.log(alternativa[indice][3] == resposta[indice])
            if (alternativa[indice][3] == resposta[indice]) {
                pontos += 100;
                tocar(right);
            } else {
                tocar(saysNo);
            }
            stage = 3;
            indice++;
        }
        if (indice == pergunta.length) { // encerra
            stage = 5;
            indice = 0;
            podio.push(pontos)
            pontos = 0;
        }
    }
}

function keyReleased() {
    if (keyCode === ENTER) { // keyIsDown(13)
        if (stage == 0) {
            if (input.value() !== '') {
                nickname = input.value();
            }
            input.remove();
            stage = 1;
            persona();
        } else if (stage == 1) {
            stage = 2;
            menu();
        } else if (stage == 2) {
            stage = 3;
            intervalo();
        } else if (stage == 5) {
            stage = 0;
            setup();
        }
        return false;
    }
}

function tocar(som) {
    if (!tocando) {
        tocando = true;
        som.play();
        setTimeout(() => {
            tocando = false;
        }, 250); // 1000 milissegundos = 1 segundo
    }
}


