const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(alunos, notas) {
    return alunos.map((aluno, i) => ({
      name: aluno,
      average: (notas[i].reduce((num1, num2) => num1 + num2) / notas[i].length),
    }));
  }

  console.log(studentAverage(students, grades))