
function nick() {

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