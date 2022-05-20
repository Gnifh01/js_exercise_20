const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

// Modifica la linea sottostante affinché venga creata e assegnata a person2 
// una copia esatta di person1, permettendo così di modificare il "firstName" di person2,
// senza che venga modificato anche il valore "firstName" di person1

//METODO 1
const person2 = Object.assign({}, person1);

//METODO 2
const person3 = {...person1}

person2.firstName = 'Simon';
person3.firstName = 'Gabbo';

console.log(person1);
console.log(person2);
console.log(person3);