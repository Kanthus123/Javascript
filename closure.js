// CLosures

function retirement(retirementAge){
  var a = ' years left until retirement.';
    return function(yearOfBirth){
      var age = 2018 - yearOfBirth;
      console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGER = retirement(65);
var retirementIceLand = retirement(67);
retirementUS(1995);
retirementGER(1995);
retirementIceLand(1995);

function interviewQuestion(job){
    return function(name){
      switch(job) {
        case 'teacher':
                console.log('What subject do you teach, ' + name + '?')
                break;

        case 'designer':
                console.log(name + ', can you please explain what UX design is?')
                break;

        default:
                console.log('Hello ' + name + ', what do you do?')
                break;
      }
    }
}

interviewQuestion('teacher')('Paulo'); //exemplo
