// primitives vs Objects

var a = 20;
var b = a;
a = 240;

var obj1 = {
 name: 'Paulo',
 age: 23
};

var obj2 = obj1;
obj1.age = 302;

console.log(obj1.age);
console.log(obj2.age);

var age = 20;
var obj = {
 name: 'Jonas',
 city: 'Lisboa'
};

function change(a, b){
 a = 40;
 b.city = 'Sao Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
