
// let pergunta = [];
// let resposta = [];
// let alternativa = [];

// PADRAO
let pergunta = [
    '1 - Vive num abacaxi e mora no mar?',
    '2 - Qual é o maior planeta do nosso sistema solar?',
    '3 - Qual é o animal mais rápido do mundo?',
    '4 - Qual é o famoso autor de "Romeu e Julieta"?',
    '5 - Quanto tempo a luz do Sol leva para chegar à Terra?',
    '6 - Qual é o animal que pode regenerar partes do seu corpo?',
    '7 - Qual é o maior órgão do corpo humano?',
    '8 - Qual é a montanha mais alta do mundo?',
    '9 - Qual animal é o mais lento?',
    '10 - Qual é o maior animal do mundo?'
];

let resposta = ['Bob Esponja', 'Júpter', 'Guepardo', 'William Shakespeare', '8 minutos e 20 segundos', 'Estrela-do-mar', 'Pele', 'Monte Everest', 'Preguiça', 'Girafa'];

let alternativa = [
    ['Aquaman', 'Nemo', 'Lula', 'Bob Esponja'],
    ['Terra', 'Júpter', 'Marte', 'Vênus'],
    ['Guepardo', 'Águia', 'Lebre', 'Tubarão'],
    ['Charles Dickens', ' Mark Twain', 'William Shakespeare', ' Jane Austen'],
    ['8 minutos e 20 segundos', '1 hora', '24 horas', '365 dias'],
    ['Estrela-do-mar', 'Elefante', 'Girafa', 'Leão'],
    ['Pulmão', 'Cérebro', 'Pele', 'Fígado'],
    ['Monte Fuji', 'Monte Kilimanjaro', 'Monte Everest', 'Monte McKinley'],
    ['Tartaruga', 'Caramujo', 'Camaleão', 'Preguiça'],
    ['Girafa', 'Búfalo-africano', 'Avestruz', 'Elefante']
];










//// FACIL
const perguntaF = [
    '1 - Vive num abacaxi e mora no mar?',
    '2 - Qual é o maior planeta do nosso sistema solar?',
    '3 - Qual é o animal mais rápido do mundo?',
    '4 - Qual é o famoso autor de "Romeu e Julieta"?',
    '5 - Quanto tempo a luz do Sol leva para chegar à Terra?',
    '6 - Qual é o animal que pode regenerar partes do seu corpo?',
    '7 - Qual é o maior órgão do corpo humano?',
    '8 - Qual é a montanha mais alta do mundo?',
    '9 - Qual animal é o mais lento?',
    '10 - Qual é o maior animal do mundo?'
];

const respostaF = ['Bob Esponja', 'Júpter', 'Guepardo', 'William Shakespeare', '8 minutos e 20 segundos', 'Estrela-do-mar', 'Pele', 'Monte Everest', 'Preguiça', 'Girafa'];

const alternativaF = [
    ['Aquaman', 'Nemo', 'Lula', 'Bob Esponja'],
    ['Terra', 'Júpter', 'Marte', 'Vênus'],
    ['Guepardo', 'Águia', 'Lebre', 'Tubarão'],
    ['Charles Dickens', ' Mark Twain', 'William Shakespeare', ' Jane Austen'],
    ['8 minutos e 20 segundos', '1 hora', '24 horas', '365 dias'],
    ['Estrela-do-mar', 'Elefante', 'Girafa', 'Leão'],
    ['Pulmão', 'Cérebro', 'Pele', 'Fígado'],
    ['Monte Fuji', 'Monte Kilimanjaro', 'Monte Everest', 'Monte McKinley'],
    ['Tartaruga', 'Caramujo', 'Camaleão', 'Preguiça'],
    ['Girafa', 'Búfalo-africano', 'Avestruz', 'Elefante']
];

//// MEDIO
const perguntaM = [
    '1 - Qual método de array em JavaScript é usado para criar um novo array com todos os elementos que passam em um teste fornecido, sem modificar o array original?',
    '2 - Qual método de array é usado para executar uma função de redução em todos os elementos de um array, resultando em um único valor?',
    '3 - Qual método de array cria um novo array com os resultados da aplicação de uma função a cada elemento do array original?',
    '4 - Qual método de array é usado para verificar se todos os elementos de um array satisfazem uma determinada condição?',
    '5 - Qual método de array é usado para ordenar os elementos de um array em ordem alfabética?',
    '6 - Qual método de array é usado para transformar um array em uma string, concatenando todos os elementos com um separador especificado?',
    '7 - Qual método de array é usado para remover o último elemento de um array e retorná-lo?',
    '8 - Qual método retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim de um array original?',
    '9 - Qual método de array é usado para encontrar o primeiro elemento que satisfaça uma condição especificada?',
    '10 - Qual método de array é usado para verificar se um array contém um elemento específico e retornar seu índice, se encontrado?'
];

const respostaM = ['filter()', 'reduce()', 'map()', 'every()', 'sort()', 'join()', 'pop()', 'slice()', 'find()', 'indexOf()'];

const alternativaM = [
    ['map()', 'filter()', 'reduce()', 'forEach()'],
    ['map()', 'filter()', 'reduce()', 'some()'],
    ['slice()', 'splice()', 'map()', 'flatMap()'],
    ['some()', 'every()', 'find()', 'reduce()'],
    ['reduce()', 'concat()', 'sort()', 'slice()'],
    ['reduce()', 'toString()', 'concat()', 'join()'],
    ['pop()', 'shift()', 'unshift()', 'push()'],
    ['map()', 'splice()', 'copyWithin()', 'slice()'],
    ['reduce()', 'filter()', 'every()', 'find()'],
    ['findIndex()', 'indexOf()', 'includes()', 'some()']
];


//// DIFICIL
const perguntaD = [
    `1 - const array = [1, 2, 3];
const resultado = array.unshift(4, 5);
console.log(array);
Qual será o conteúdo do array após a execução deste código?`,
    `2 - const array = [1, 2, 3];
const retorno = array.push(4, 5);
console.log(retorno);
Qual será a saída deste código?`,
    `3 - Qual é o objetivo do método pop() em JavaScript quando aplicado a um array?`,
    `4 - const array = [1, 2, 3, 4, 5];
const poppedElement = array.pop();
const shiftedElement = array.shift();
console.log(poppedElement + shiftedElement);
Qual será o valor impresso no console após a execução deste código?`,
    `5 - const array = [1, 2, 3, 4, 5];
delete array[2];
array.splice(2, 1);
console.log(array);
Qual será o conteúdo do array após a execução deste código?`,
    `6 - const frutas = ["Banana", "Laranja", "Abacaxi", "Manga"];
frutas.splice(2, 0, "Uva", "Morango");
console.log(frutas);
Qual será o valor impresso no console?`,
    `7 - const matriz = [   [   [1, 2], [3, 4]  ],
    [   [5, 6], [7, 8]  ]   ];
console.log(matriz[1][0][1])
Como você acessaria o número 6 nesta matriz ?`,
    `8 - const zero = 0;
const positivos = [1, 2, 3];
const negativos = [-3, -2, -1];
let numeros = negativos.concat(zero, positivos);
Qual o valor do array numeros ?`,
    `9 - const numeros = [10, 20, 30, 40, 50];
Qual das seguintes expressões é verdadeira?`,
    `10 - Qual é o resultado da seguinte expressão ?
let numeros = [1, 2, 3]
numeros.forEach(x => console.log(x % 2 === 0));`,
    `11 - Qual é o resultado da seguinte expressão ?
const numeros = [10, 20, 30, 40];
numeros.filter(num => num < 25).filter(num => num > 15);`,
    `12 - Suponha que queremos transformar cada nome em um apelido adicionando "inho" no final.Qual das seguintes expressões usando map() faz isso corretamente ?
const nomes = ["Paul", "Bob", "David"];`,
    `13 - const numeros = [1, 2, 3, 4, 5];
Qual das seguintes expressões usando reduce() calcula a soma dos números do array, começando com um valor inicial de 10 ?`,
    `14 - Quantos dos metodos a seguir existem no JavaScript ?
entries(), keys(), e values()`,
    `15 - O método Array.from() em JavaScript permite criar um novo array a partir de um objeto iterável.`,
    `16 - let numeros = [1, 2, 3, 4, 5, 6]
console.log(numeros.fill(0, 2))
No exemplo anterior, todas as posições do array terão o valor 0, a partir da posição 2([1, 2, 0, 0, 0, 0])
mas se aplicarmos o método numeros.fill(0, 2, 4), qual será o resultado ?`,
    `17 - let array = [1, 2, 3, 4, 5, 6];
array.copyWithin(0, 3);
O exemplo anterior resulta em: [4, 5, 6, 4, 5, 6]
mas se aplicarmos array.copyWithin(0, 4, 6),
 qual sera o resulta ?`,
    `18 - Qual é o resultado dessa expressao ?
let array = [2, 36, 1, 3, 14, 25];
array.sort().reverse();`,
    `19 - const numeros = [10, 20, 20, 30, 40, 50];
const a = numeros.indexOf(20);
const b = numeros.lastIndexOf(20);
const c = numeros.findIndex(num => num === 20);
const resultado = a + b + c;
Qual é o resultado ?`,
    `20 - const maleta = ['rede', 'pinça', 'lupa', 'mapa', 'caderno', 'camera', 'lanterna'];
if (maleta.find((i) => i === 'lupa')) {
    return console.log(maleta.includes('bug'));
} else { return maleta.includes('lanterna');    }
Qual será o retorno?`,
    `21 - let numeros = [1, 2, 3];
numeros = numeros.toString()
console.log(numeros + '4');
Qual sera o resultado no console ?`,
    `22 - const array = ['Canopus', 'é', 1, 'gigante', 'branca'];
const resultado = array.join(' ');
console.log(resultado);
Qual é o resultado ?`,
    `23 - const comidas = ["Pizza", "Sushi", "Hamburguer", "Lasanha", "Coxinha"];
const preferida = comidas.slice(1, 3);
console.log(preferida)
Qual o resultado no console ?`,
    `24 - De que maneira podemos declarar um array em TypeScript:?
A) const meuArray: number[] = [1, 2, 3, 4, 5];
B) let meuArray: number[];
meuArray = [1, 2, 3, 4, 5];`,
    `25 - Qual o resultado final ?
const array = ['a', 'b', 'c', 'd', 'e'];
let indice = 0;
for (let i = 0; i <= 22; i++) { indice = i % array.length - 1   }
console.log(array[indice]);`
];

const respostaD = [
    '[4, 5, 1, 2, 3]',//1
    '5',//2
    'Remover o último elemento do array',//3
    '6',//4
    '[1, 2, 4, 5]',//5
    "['Banana', 'Laranja', 'Uva', 'Morango', 'Abacaxi', 'Manga']",//6
    'matriz[1][0][1]',//7
    '[-3, -2, -1, 0, 1, 2, 3]',//8
    'numeros.every(num => num > 5) || numeros.some(num => num < 15)',//9
    'false, true, false',//10
    '20',//11
    'const apelidos = nomes.map(nome => nome + "inho");',//12
    'const soma = numeros.reduce((acc, num) => acc + num, 10));',//13
    '3', // 14
    'Verdadeiro', //15
    '[1, 2, 0, 0, 5, 6]', //16
    '[5, 6, 3, 4, 5, 6]',//17
    '[36, 3, 25, 2, 14, 1]',//18
    '4',//19
    'false',//20
    '1, 2, 34',//21
    'Canopus é 1 gigante branca',//22
    "['Sushi', 'Hamburguer']",//23
    'ambas',//24
    'b'//25
];

const alternativaD = [
    [//1
        '[1, 2, 3, 4, 5]',
        '[1, 2, 3, 4, 5, 6]',
        '[4, 5, 1, 2, 3]',
        '[5]'
    ],
    [//2
        '4',
        '5',
        '[1, 2, 3, 4, 5]',
        '[4, 5, 1, 2, 3]'
    ],
    [//3
        'Adicionar um elemento ao final do array',
        'Remover o primeiro elemento do array',
        'Remover o último elemento do array',
        'Inverter a ordem dos elementos no array'
    ],
    [//4
        '3',
        '9',
        '6',
        '10'
    ],
    [//5
        '[1, 2, 4, 5]',
        '[1, 2, 3, 4, 5]',
        '[1, 2, undefined, 4, 5]',
        '[1, 2, null, 4, 5]'
    ],
    [//6
        "['Banana', 'Laranja', 'Uva', 'Morango', 'Abacaxi', 'Manga']",
        "['Banana', 'Laranja', 'Abacaxi', 'Uva', 'Morango', 'Manga']",
        "['Banana', 'Laranja', 'Abacaxi', 'Manga']",
        "['Uva', 'Morango', 'Banana', 'Laranja', 'Abacaxi', 'Manga']"
    ],
    [//7
        'matriz[0][1][0]',
        'matriz[1][0][1]',
        'matriz[1][1][0]',
        'matriz[0][0][1]'
    ],
    [//8
        '[0, 1, 2, 3]',
        '[1, 2, 3]',
        '[-3, -2, -1, 0, 1, 2, 3]',
        'erro'
    ],
    [//9
        'numeros.every(num => num > 25) && numeros.some(num => num < 15)',
        'numeros.every(num => num < 15) || numeros.some(num => num > 50)',
        'numeros.every(num => num > 5) || numeros.some(num => num < 15)',
        'numeros.every(num => num < 50) && numeros.some(num => num > 35)'
    ],
    [//10
        'false, true, false',
        'false, false, false',
        'true, true, true',
        'erro'
    ],
    [//11
        '10',
        '20',
        '30',
        '40'
    ],
    [//12
        'const apelidos = nomes.map(nome => "inho" + nome);',
        'const apelidos = nomes.map(nome => so + "corro");',
        'const apelidos = nomes.map(nome => nome + "inho");',
        'const apelidos = nomes.map(nome => "Super" + man);'
    ],
    [//13
        'const soma = numeros.reduce((acc, num) => acc + num, 0);',
        'soma = numeros.reduce((acc, num) => acc + num, 10);',
        'const soma = numeros.reduce((num, acc) => num + acc, 0);',
        'const soma = numeros.reduce((num, acc) => num + acc, 10);'
    ],
    [//14
        '0',
        '1',
        '2',
        '3'
    ],
    [//15        
        'Verdadeiro',
        'Falso',
        'Não existe método Array.from()',
        'Depende do objeto iterável'
    ],
    [//16
        '[1, 2, 0, 0, 5, 6]',
        '[1, 2, 0, 4, 5, 6]',
        '[1, 2, 0, 4, 0, 0]',
        '[1, 2, 0, 0, 5, 0]'
    ],
    [//17
        '[6, 6, 6, 6, 6, 6]',
        '[5, 6, 3, 4, 5, 6]',
        '[5, 6, 5, 6, 5, 6]',
        'erro'
    ],
    [//18
        '[36, 3, 25, 2, 14, 1]',
        '[1, 2, 3, 14, 25, 36]',
        '[36, 25, 14, 3, 2, 1]',
        '[1, 14, 2, 25, 3, 36]'
    ],
    [//19
        '22',
        '40',
        '4',
        '23'
    ],
    [//20
        'false',
        'true',
        'undefined',
        'error'
    ],
    [//21
        '1, 2, 7',
        '1, 2, 34',
        '1, 2, 3, 4',
        'erro'
    ],
    [//22
        'Canopus é 1 gigante branca',
        'Canopus - é - 1 - gigante - branca',
        'Canopus é gigante branca',
        'erro'
    ],
    [//23
        "['Sushi']",
        "['Lasanha']",
        "['Sushi', 'Hamburguer']",
        "['Sushi', 'Hamburguer', 'Lasanha']"
    ],
    [//24
        'a',
        'b',
        'nenhuma',
        'ambas'
    ],
    [//25
        'a',
        'b',
        'e',
        'erro'
    ]
];