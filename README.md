# JS Iteration Basics

## The Assignment

The purpose of this assignment is to improve your understanding and develop your skills with iteration, one of the foundational concepts of programming and software development. For these exercises, you will need to use for-loops to arrive at the correct solution. **You are not to use helper methods like`.split()` , `substr()`, `.reverse()`.**


### Setup
```sh
# (1) Go to your Muktek /assignment directory and create the assignment folder
cd ~/Documents/muktek
mkdir js-iteration-basics
cd js-iteration-basics


# (2) Download the assignment-files with curl from the assignment repo and unzip
curl https://raw.githubusercontent.com/muktek/assignment--js-iteration-basics/master/assignment-files.zip > assignment-files.zip

unzip assignment-files
```

### Instructions

The goal of these exercises are to write the logic in the function to make the statements in the `console.assert()` equal true.

Here is an example:

```js
/**
 * makeArrayFromCharacters()
 *
 * Write a function called `makeArrayFromCharacters` that takes
 *  a string and creates an array of characters .
 *
 * You must use a for-loop to solve this problem.
 **/


 // User Code
 //    You need to write the function so that you achieve the expected output
 //    in the console.assert(...) statements below.
function makeArrayFromCharacters(str){

  // Example solution
  let characterArray = []
  for(var i = 0; i < str.length; i++){
    returnArray.push(str[0])
  }

  return characterArray

}
// End - User Code


// --------------- Don't Touch -------------------

let output1 = makeArrayFromCharacters('hello')
let output2 = makeArrayFromCharacters('sunshine')

// => output1 should be ['h','e','l','l','o']
console.assert( output1[0] === 'h' )
console.assert( output1[1] === 'e' )
console.assert( output1[2] === 'l' )

// => output2 should be ['s','u','n','s','h','i','n','e']
console.assert( output2[0] === 's' )
console.assert( output2[1] === 'u' )
console.assert( output2[2] === 'n' )
console.assert( output2[3] === 's' )
```
