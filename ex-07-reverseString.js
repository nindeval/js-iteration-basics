
/**
 * reverseString()
 *
 * Write a function called reverseString that takes a string as input
 * and returns a string with the characters in reverse order.
 * (note: can't use .reverse() method )
 *
*/

function reverseString(str2){
  var revChar = ''

  for(var i = str2.length - 1; i >= 0; i--) {
      //revChar += str2[i];  /** other way **/
      revChar = revChar + str2[i]
    }

  return revChar

}


// hice el ejercicio de esta manera de acuerdo a lo que investigué en google, ¿hay otra manera de solucionarlo que más sencillo?

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
console.assert( reverseString('books') === 'skoob')
console.assert( reverseString('coolness') === 'ssenlooc')
console.assert( reverseString('bedtime') === 'emitdeb')
console.assert( reverseString('yah sure') === 'erus hay')
