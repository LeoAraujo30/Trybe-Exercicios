const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];
  
  // escreva filterPeople abaixo

  const filterPeople = () => {
    const filtro = people.filter((pessoa) => pessoa.bornIn <= 2000 && pessoa.nationality === 'Australian')
    const [pessoa1, pessoa2] = filtro
    const {name} = pessoa1
    const {name: name2} = pessoa2

    return [name, name2]
  }

  console.log(filterPeople())


  const filterPeople2 = (arr) => arr.filter(
    ({ nationality, bornIn }) =>
      nationality === 'Australian'
      && bornIn > 1900 && bornIn <= 2000,
    );