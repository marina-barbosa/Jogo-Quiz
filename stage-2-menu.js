
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

    fill(timerColor);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(550, 560, 200, 40);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    textAlign(CENTER);
    text(`FACIL (10)`, width / 2, 283); //680, 283

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`MEDIO (10)`, width / 2, 383);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`DIFICIL (25)`, width / 2, 483);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`${timerTxt}`, width / 2, 583);



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