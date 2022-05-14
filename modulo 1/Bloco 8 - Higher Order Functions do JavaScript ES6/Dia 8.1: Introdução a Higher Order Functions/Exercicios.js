const novoFuncionario = (nome) => {
   return {
    nomeCompleto: nome,
    email: `${nome.replace(' ', '_')}@trybe.com`
    }
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

//   console.log(newEmployees(novoFuncionario))

const checkResult = (valor1, valor2) => {
    if(valor1 === valor2) {
        return true
    } else {
        return false
    }
}

const resultadoSorteio = (aposta, callback) => {
   const numeroAleatorio = Math.floor(Math.random() * 5) + 1;
   if(callback(aposta, numeroAleatorio) === true) {
       console.log("Parabéns você ganhou")
   } else {
       console.log("Tente novamente")
   }
}

// resultadoSorteio(1, checkResult)

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontos = (arr1, arr2) => {
    let resultado = 0;
    for(i = 0; i < arr1.length; i += 1) {
        if (arr2[i] === 'N.A') {
            resultado = resultado
        } else {
            if(arr1[i] === arr2[i]) {
                resultado += 1
            } else {
                resultado -= 0.5
            }
        }
    }
    return resultado
}

const correcao = (arr1, arr2, callback) => {
    return callback(arr1, arr2)
}
// console.log(correcao(RIGHT_ANSWERS, STUDENT_ANSWERS, pontos))

///////////////////////////////////////////////////////////////////////////////////////////////


const compareAnswers = (rightAnswer, studentAnswer) => {
    if (rightAnswer === studentAnswer) {
      return 1;
    } if (studentAnswer === 'N.A') {
      return 0;
    }
    return -0.5;
  };
  
  const countPoints = (rightAnswers, studentAnswers, action) => {
    let contador = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
      const actionReturn = action(rightAnswers[index], studentAnswers[index]);
      contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
  };
  
// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));