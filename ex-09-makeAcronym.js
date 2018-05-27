// ex-04 makeAcronym()

//
// Write a function called makeAcronym() that converts a name like Portable Network Graphics
// to its acronym (PDF).
//
// makeAcronym('PNG')
//  => 'PDF'


function makeAcronym(strName){
    var acronymusStr = ''
    acronymusStr = strName.split(' ')
    var primerasLetras = ''
    // console.log(acronymusStr[0])

    for(var i = 0; i < acronymusStr.length; i++){
      //console.log(acronymusStr[i])
      // console.log(acronymusStr[i][0])
      primerasLetras += acronymusStr[i][0].toUpperCase()
    }
    return primerasLetras
}

const ejercicio9 = makeAcronym('Department of Defense')
console.log(ejercicio9)



//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( makeAcronym('Portable Document Format') === 'PDF' );
console.assert( makeAcronym('be right back') === 'BRB' )
console.assert( makeAcronym('Bring Your Own Beverage') === 'BYOB' )
console.assert( makeAcronym('National Broadcasting Company') === 'NBC' )
console.assert( makeAcronym('Department of Defense') === 'DOD' )
console.assert( makeAcronym('in case you missed it') === 'ICYMI' )
console.assert( makeAcronym('if I recall correctly') === 'IIRC' )
console.assert( makeAcronym('Rest in Peace') === 'RIP' )



//Explorer Mode -- pass the argument a true/false value to
//                 capture prepositions or not.
// ---------------------------------------------------
// console.assert( makeAcronym('president of the United States', true) === 'POTUS' )
// console.assert( makeAcronym('greatest of all time', true) === 'GOAT' )
// console.assert( makeAcronym('earnings before insurance taxes depreciation and amortization', false) === 'EBITDA' )
// console.assert( makeAcronym('National Association for the Advancement of Colored People', false) === 'NAACP' )
