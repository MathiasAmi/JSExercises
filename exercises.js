//Exercise 1
console.log('Exercise 1:');

let hashtag = '';

for (let i = 0; i < 7; i++){
    hashtag = hashtag + '#';
    console.log(hashtag);
}

//Exercise 2:
console.log("");
console.log('Exercise 2:');

for (i = 0; i < 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i + ' Fizzbuzz');
    }
    else if (i % 3 === 0){
        console.log(i + ' Fizz');
    }
    else if( i % 5 === 0){
        console.log(i + ' Buzz');
    }
    else {
        console.log(i);
    }
}

//Exercise 3. Looked at github. 
console.log("");
console.log('Exercise 3');

var size = 8;
var hash = '#';
var space = ' ';

for (var i = 1; i <= size; i++){
    var line = '';

    for (var j = 1; j <= size; j++){
    if(i%2) {
        if (j%2){
            line = line + space;
        } else {
            line = line + hash;
        }
    } else {
        if(j%2){
        line = line + hash;
    } else {
        line = line + space;
    }
    }
    }
console.log(line);
}