
//////////////SECTION 1////////////////////

//Question 1

function sum (a, b) {
  return a + b;
}

sum(5,1)

//Question 2

function avg (a, b, c)  {
  return ((a + b + c) / 3)
}

avg(4,3,2)

//Question 3
function getLength (a) {
  return (a.length)
}

getLength("hello")

//Question 4
//Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan (a, b) {
  if (b > a) {
    return (true);
} else{
  return (false);
}
};
greaterThan(8,6)


//Question 5
//Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (name) {
  if (name) {
  } return ("Hello, Name!")
}

greet(name)

// Question6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib (word1, word2, word3, word4) {
     return " He" + word1 + " completed " + word2 + " JavaScript" + word3 + word4;
 }
 madlib (" successfully", " the", " problem", "!");



//////////////SECTION 2///////////////////

//Question 1
// Define a function max() that takes two
//numbers as arguments and returns the
//largest of them. Use the if-then-else
//construct available in JavaScript.

function max(a,b){

  if (a > b)
 {
      return(a);
  }
  else
  {
        return(b);
  }
  }

  max(4,5)

//Question 2
// Define a function maxOfThree() that takes three
//numbers as arguments and returns the largest of them.



function max(a,b,c) {
  if (a > b && a > c) {
    return(a);
  } else if (b > a && b > c){
      return (b);
  }
  else {
    return (c);
  }
}

max(3,2,1)


//Question 3

function isVowel(char){
    if (char === "a") {
      return(true);
    }
    else if (char === "e") {
      return(true);
    }
    else if (char === "i") {
      return(true);
    }
    else if (char === "o") {
      return(true);
    }
    else if (char === "u") {
      return(true);
    }
    else {
      return (false)
    }

}

isVowel(char= "d")


//Quesion 4

function rovarspraket(phrase){
    //...
}
//Go back and try to figure this out




//Question 5
function reverse(str) {
    return str.split("").reverse().join("");
}
reverse("jag testar");
