const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA(array) {
   return array.reduce((nome1, nome2) => 
        nome1 + nome2.split('').reduce((acc, letra) => {
           if (letra === 'a' || letra === 'A') return acc += 1; return acc
        }, 0), 0);

   //.reduce((acc, letra) => (letra === 'a' || letra === 'A') ? acc += 1 : acc, 0);
  }

  console.log(containsA(names))