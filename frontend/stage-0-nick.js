
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

    // enter
    fill(30); // cor 
    noStroke(0); // cor    
    textSize(24); // tamanho da fonte 
    textAlign(CENTER);
    textStyle(BOLDITALIC);
    text(`tecla 'Enter' para continuar`, 645, 727);


}