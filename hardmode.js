// Question 1

var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

var largest = 0;

for (var i = 0; i <= numbers.length; i++) {
    if (numbers[i] > largest) {
        var largest = numbers[i];
    }
};

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
var even = []
var even = function(num) {
    return num % 2 === 0;
};

var numbers = numbers.filter(even);

console.log(numbers);





  var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
  var even = []


  for (var i = 0; i , numbers.length; i++) {
  if ((numbers[i] % 2) === 0) {
    even.push(numbers[i]);

  }
};

console.log(even);
///////////////////////Question 4


var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];

function odd(numbers) {
  return numbers % 2 === 1;
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



function findIs(){
  var theIs = [];
	for (i = 0; i < strings.length; i++) {
    var letter = strings[i];
    for (count = 0; count < letter.length; count++)
		if(letter[count] === "i" && letter[count + 1] === "s") {
			theIs.push(letter);
      }
	}  return theIs;
};









//Question 6

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

for (var i=0; i < numbers.length; i++) {
    strings.push( numbers[i] );
}
for (var i=0; i < instructors.length; i++) {
    strings.push( instructors[i] );
}

console.log(strings);

//Question 7

//step 1- Find all instructors that teach JavaScript
//step 2- list them alphabetically

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];


function find() {
  var findAll = [];
 for ( i = 0; i < instructors.length; i++) {
  if (instructors[i].teaches === "JavaScript") {
    findAll.push(instructors[i].firstname)
  }
}return findAll.sort();
}
