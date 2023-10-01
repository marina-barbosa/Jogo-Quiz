

function mouseReleased() {
    if (stage == 2) {
        if (mouseX >= 550 && mouseX <= 750 && mouseY >= 560 && mouseY <= 600) {
            tocar(button);
            if (!timer) {
                timer = true;
                timerTxt = 'TIMER ON';
                timerColor = 'green';
            } else {
                timer = false;
                timerTxt = 'TIMER OFF';
                timerColor = 'red';
            }
        }
    }
    if (stage == 4) {
        // troca de pergunta 
        if (mouseX >= 10 && mouseX <= 645 && mouseY >= 380 && mouseY <= 530) {
            //vermelho
            console.log(alternativa[indice][0]);
            console.log(resposta[indice]);
            console.log(alternativa[indice][0] == resposta[indice])
            if (alternativa[indice][0] == resposta[indice]) {
                pontos += 100 * segundos;
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
                pontos += 100 * segundos;
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
                pontos += 100 * segundos;
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
                pontos += 100 * segundos;
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
    if (stage == 5) {
        if (mouseX >= 550 && mouseX <= 750 && mouseY >= 560 && mouseY <= 600) {
            tocar(button);
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

function contagem() {
    if (stage === 4) {
        let intervalo = setInterval(() => {
            segundos--;
            console.log(segundos)
            if (segundos <= 0 || stage === 3) {
                clearTimeout(intervalo);
                contando = false;
                segundos = 0;
            }
        }, 1000);
    }
    if (stage === 3) {
        clearTimeout(intervalo);
        contando = false;
        segundos = 20;
    }
}