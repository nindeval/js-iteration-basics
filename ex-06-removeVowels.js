/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/




function removeVowels(str1){
var strWithoutVowels = []
  //var arrVowels = ['a','e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for(var i = 0; i < str1.length; i++){
  //console.log(str1[i])
  var strLetters = str1[i].toLowerCase()

    if(  strLetters !== 'a'
      && strLetters !== 'e'
      && strLetters !== 'i'
      && strLetters !== 'o'
      && strLetters !== 'u'){
      strWithoutVowels.push(strLetters)
    // console.log(strLetters)
   }
  }
  var strConc = strWithoutVowels.join('')
   console.log(strConc)
  return strConc
}



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
