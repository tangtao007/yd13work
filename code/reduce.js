let _ = require('lodash')
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];
  
  function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }
  
  var groupedPeople = groupBy(people, 'age');
//console.log(groupedPeople);

var friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
  }, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
  }, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
  }];
  
  // allbooks - list which will contain all friends' books +  
  // additional list contained in initialValue
  var allbooks = friends.reduce(function(prev, curr) {
    return [...prev, ...curr.books];
  }, ['Alphabet']);
  
  console.log(allbooks)
//   allbooks = [
//     'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
//     'Romeo and Juliet', 'The Lord of the Rings',
//     'The Shining'
//   ]
let prev = ['aaaa']
console.log([...prev,...prev])