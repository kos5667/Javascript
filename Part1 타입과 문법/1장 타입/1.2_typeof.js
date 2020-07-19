var a = "hello world";
console.log('typeof "hello world" : ' + typeof a);

var b = 123;
console.log('\ntypeof 123 : ' + typeof b);

var c = null;
console.log('\ntypeof null : ' + typeof c);

var d;
console.log('\ntypeof undefined : ' + typeof d);

var e = true;
console.log('\ntypeof true : ' + typeof e);

function f(){ return true};
console.log('\ntypeof function : ' + typeof f);

var g = ["a" ,"b" ,"c"];
console.log('\ntypeof ["a" ,"b" ,"c"] : ' + typeof g);

var date = new Date('1995-12-17T03:24:00');
console.log('\ntypeof new Date : ' + typeof date);

var h = {"a": 1, "b":2, "c":3 };
console.log('\ntypeof {"a": 1, "b":2, "c":3 } : ' + typeof h);

var i = Symbol(1);
console.log('\ntypeof Symbol : ' + typeof i);