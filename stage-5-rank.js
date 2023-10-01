

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

    podio.sort((a, b) => {
        return b - a;
    });

    // caixa  
    fill(220);
    stroke(0); // cor
    strokeWeight(2); // borda    
    rect(500, 100, 300, 350, 10);

    // texto 
    fill(70); // cor 
    textSize(24); // tamanho da fonte
    textAlign(CENTER, CENTER);
    textStyle(NORMAL);
    text(`${podio[0]}`, 305, 220, 690, 200);

    if (podio.length > 1) {
        // texto 
        fill(70); // cor 
        textSize(24); // tamanho da fonte
        textAlign(CENTER, CENTER);
        textStyle(NORMAL);
        text(`${podio[1]}`, 305, 250, 690, 200);
    }

    if (podio.length > 2) {
        // texto 
        fill(70); // cor 
        textSize(24); // tamanho da fonte
        textAlign(CENTER, CENTER);
        textStyle(NORMAL);
        text(`${podio[2]}`, 305, 280, 690, 200);
    }

    image(perfil, 600, 160, 100, 100);
    noFill();
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(600, 160, 100, 100);

    fill(200);
    stroke(0); // cor
    strokeWeight(2); // borda 
    rect(550, 560, 200, 40);

    fill(30); // cor 
    noStroke();
    textSize(20); // tamanho da fonte     
    textStyle(BOLD);
    text(`COMPARTILHAR`, width / 2, 583);

}