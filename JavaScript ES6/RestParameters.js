// Rest Parameters

// ES5

function isFullAge5(){
      var argsArr = Array.prototype.slice.call(arguments);

      argsArr.forEach(function(cur){
        console.log((2018 - cur) >= 18);
      })
}

isFullAge5(1990, 1995, 1992, 2002);

// ES6
function isFullAge6(...years){
  years.forEach(cur => console.log((2018 - cur) >= 18));
};

isFullAge6(1990, 1995, 1992, 2002);

// Rest Parameters cont.

// ES5

function isFullAge5(limit){
      var argsArr = Array.prototype.slice.call(arguments, 1);

      argsArr.forEach(function(cur){
        console.log((2018 - cur) >= limit);
      })
}

//isFullAge5(21, 1990, 1995, 1992, 2002);

// ES6
function isFullAge6(limit, ...years){
  years.forEach(cur => console.log((2018 - cur) >= 18));
};

isFullAge6(16, 1990, 1995, 1992, 2004);
