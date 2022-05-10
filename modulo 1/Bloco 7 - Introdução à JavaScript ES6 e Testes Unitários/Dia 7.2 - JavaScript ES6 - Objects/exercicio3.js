const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
//////////////////////////////////////////////////////////////
  const addTurno = (object, key, value) => {
      object[key] = value
      console.log(object)
  }
  addTurno(lesson2, 'turno', 'noite')


  const listKey = (object) => console.log(Object.keys(object))
  listKey(lesson2)

  
  const tamanhoObject = (object) => console.log(Object.entries(object).length)
  tamanhoObject(lesson2)


  const listValue = (object) => console.log(Object.values(object))
  listValue(lesson2)


  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  console.log(allLessons)


  const allStudents = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
  console.log(allStudents())


  const getValueByNumber = (object, i) => Object.values(object)[i];
  console.log(getValueByNumber(lesson1, 0));


  const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

