// Arrow Functions

const years = [1990, 1965, 1982];

// ES5

var ages5 = years.map(function(el){
  return 2018 - el;
});
console.log(ages5);

// ES6

let ages6 = years.map(el => 2018 - el);

ages6 = years.map((el, index) => `age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

// Arrow Functions 2

// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this;

    document.querySelector('.green').addEventListener('click', function(){
          var str = 'This box number ' + self.position + ' and it is ' + self.color;
          alert(str);
    });
  }
}
//box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function(){

    document.querySelector('.green').addEventListener('click', () => {
          var str = 'This box number ' + this.position + ' and it is ' + self.color;
          alert(str);
    });
  }
}
//box6.clickMe();

const box66 = {
  color: 'green',
  position: 1,
  clickMe: () => {

    document.querySelector('.green').addEventListener('click', () => {
          var str = 'This box number ' + this.position + ' and it is ' + self.color;
          alert(str);
    });
  }
}
box66.clickMe();


function Person(name) {
  this.name = name;
}

// ES5

Person.prototype.myFriends5 =
function(friends) {

  var arr = friends.map(function(el){

    return this.name + ' is friends with ' + el;

  }.bind(this));

  console.log(arr);
}

let friends = ['Izalena', 'Mariana', 'Deborah'];
new Person('Paulo').myFriends5(friends);

// ES6
Person.prototype.myFriends6 =
function(friends) {

  let arr = friends.map(el => `${this.name} is friend with ${el}`);

  console.log(arr);
}

let friends = ['Izalena', 'Mariana', 'Deborah'];
new Person('Paulo').myFriends6(friends);
