

function intervalo() {
    if (!backgroundImg3) {
        background(backgroundImg1);
    } else {
        background(backgroundImg3);
    }

    image(relogio, 1015, 160, 100, 100);
    fill(250);
    circle(1070, 215, 50);
    fill(30);
    textSize(30);
    textStyle(BOLD);
    text(`${segundos}`, 980, 170, 100, 100);

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