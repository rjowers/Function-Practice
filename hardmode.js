// Question 1

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var largest = 0;

for (var i = 0; i <= numbers.length; i++) {
    if (numbers[i] > largest) {
        var largest = numbers[i];
    }
}

console.log(largest)

//Question 2

var strings = ['this', 'is', 'a', 'collection', 'of', 'words'];
var longest = "";


for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
        longest = strings[i];
    }
}

console.log(longest)


//Question 3


var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var even = function(num) {
    return num % 2 === 0;
};

var numbers = numbers.filter(even);

console.log(numbers);

///////////////////////Question 4

// TODO write question 4 with a for loop and a conditional instead of filter

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

function odd(numbers) {
  return numbers % 2 === 1;
    // if (numbers % 2 === 1) {
    //       return true
    // }
    // else {
    //   return false;
    // }
};

var alltheodds = numbers.filter(odd)


console.log(alltheodds);

// for loop

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var odd = []

    for (var i = 0; i < numbers.length; i++) {

        if ((numbers[i] % 2) === 1) {
            odd.push(numbers[i]);

        }

};

console.log(odd);


//Question 5



var strings = ['this','is','a','collection','of','words'];



function checkforis(strings) {

    return strings === "is";
};


var alltheis = strings.find(checkforis)

console.log (alltheis);
