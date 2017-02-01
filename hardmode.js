// Question 1

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

var largest= 0;

for (var i=0; i<=largest;i++){
    if (numbers[i]>largest) {
        var largest=numbers[i];
    }
}

console.log(largest)

//Question 2

var strings = ['this','is','a','collection','of','words'];
var lgth= 0;
var longest;


for(var i=0; i < strings.length; i++){
    if(strings[i].length > lgth){
        var lgth = strings[i].length;
        longest = strings[i];
    }
}

console.print(longest)


//Question 3





var numbers = [1,12,4,18,9,7,11,3,101,5,6];

var even = function (num) {
return num % 2 === 0;
};

var numbers = numbers.filter(even);

console.log(numbers);
