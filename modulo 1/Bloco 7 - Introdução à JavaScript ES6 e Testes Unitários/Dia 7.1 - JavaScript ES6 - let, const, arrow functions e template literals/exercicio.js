const testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(`${elseScope} ótimo, fui utilizada no escopo !`);
    }
  }

  testingScope(true);

  ////////////////////////////////////////////////////////////////

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const crescente = (a, b) => a - b;


  oddsAndEvens.sort(crescente)
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);
  


const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`);

////////////////////////////////////////////////////////////////////

const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

/////////////////////////////////////////////////////

const longestWord = text => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }

    return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

/////////////////////////////////////////////////////////////////////////////////

const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    result = `
{result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Lucas"));