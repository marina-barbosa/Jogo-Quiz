
function quiz() {

    if (!backgroundImg3) {
        background(backgroundImg1);
    } else {
        background(backgroundImg3);
    }


    // relogio
    image(relogio, 1015, 160, 100, 100);
    fill(250);
    circle(1070, 215, 50);
    fill(30);
    textSize(30);
    textStyle(BOLD);
    text(`${segundos}`, 980, 170, 100, 100); // segundos



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