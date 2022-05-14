const tarefa1 = () => 'Acordando!!';
const tarefa2 = () => 'Bora tomar café!!';
const tarefa3 = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:
const doingThings = (tarefa) => console.log(tarefa());

doingThings(tarefa1)
doingThings(tarefa2)
doingThings(tarefa3)

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!