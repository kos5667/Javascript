/*
ECMAScript 언어를 이용하여 직접 조작하는 값들의 타입이 ECMAScript 언어 타입이다.
자바스크립트 엔진, 개발자 모두에게 어떤 값을 다른 값과 분별할 수 있는, 고유한 내부 특성의 집합이다.

자바스크립트에는 Number, String, Boolean, Function, Object, Null, undefined,Array 등의 데이터 타입이 존재한다.
하지만 Array,Function,Date,RegExp 와 같은 데이터는 엄밀히 따지면 Object이다.
자바스크립트를 객제기반 언어라고 하는 이유이기도 하다.
실직적으로 자바스크립트에서 사용되는 대부분의 데이터 타입은 객체로 존재하며 그에 따른 사용또한 객체기반이 될수 밖에 없다.
그래서 자바스크립트 기술 문서들은 다음과 같이 데이터 타입을 분류 한다.
*/

/* 
기본 타입 (Primitive values)
    Boolean - Boolean 은 논리적인 요소를 나타내고, true 와 false 의 두 가지 값을 가질 수 있다.
    Number - 숫자를 표현하거나 산술 연산을 하는데 사용되는 데이터 타입이다. 
    String - String은 문자열을 표현하는데 사용되는 데이터 타입이다.
    Null - Null 타입은 딱 한 가지 값, null 을 가질 수 있고, 값이 없음을 나타낸다.
    Undefined -  초기화(선언) 되지 않았거나 값이 할당되지 않았음을 나타낸다.
    symbol - Symbol 은 ECMAScript 6 에서 추가되었다. Symbol은 유일하고 변경 불가능한 (immutable) 기본값 (primitive value) 이다.

Object Type
    객체 (Object)
        - 함수 (Function)
        - 배열 (Array)
        - 날짜 (Date)
        - 정규식 (RegExp)
*/

// 오브젝트를 제외한 모든 값은 변경 불가능한 값 (immutable value) 이다.

console.log("Boolean==============================================================");
/* 1. Boolean */
console.log("1.1. Boolean Result");
//1.1. Boolean Result
var boolean1 = true;
var boolean2 = false;
console.log('Boolean "true" Result : '+boolean1);
console.log('Boolean "false" Result : '+boolean2);

console.log("\n1.2. Boolean - String Result");
//1.2. Boolean - String Result
var boolean3 = "hello world";
var boolean4 = "";
if(boolean3){
    console.log('Boolean String '+'"'+boolean3+'"'+' Result : '+ true);
}
if(!boolean4){
    console.log('Boolean String '+'"'+boolean4+'"'+' Result : '+ false);
}

console.log("\n1.3. Boolean Number Result");
//1.3. Boolean Number Result
var boolean5 = 123;
var boolean6 = 0;
var boolean7 = "hello world";
if(boolean5){
    console.log('Boolean Number '+boolean5+' Result : '+ true);
}
if(!boolean6){
    console.log('Boolean Number '+boolean6+' Result : '+ false);
}
if(!parseInt(boolean7)){
    console.log('Boolean Number parseInt("hello world") Result : '+ false);
}
if(isNaN(boolean5)){
    console.log('Boolean Number isNaN(123) Result : '+ false);
}
if(!isNaN(boolean7)){
    console.log('Boolean Number isNaN("hello world") Result : '+ false);
}

console.log("\n1.4. Boolean Object Result");
//1.4. Boolean Object Result
var objectTest = new Object();
objectTest.booleanTest = 'boolanTest';
if(objectTest){
    console.log('Boolean Object "'+objectTest.booleanTest+'" : '+ true);
}
objectTest = new Object();
if(!objectTest.booleanTest){
    console.log('Boolean Object "'+objectTest.booleanTest+'" : '+ false);
}
console.log("====================================================================");

console.log("\nNumber==============================================================");
/* 2. Number */
console.log("2.1. Number Result");
//2.1. Number Result
console.log('Number 10 : ' + 10);
console.log('Number 010 : ' + 010); //"010"을 8진수로 인식하여 8이라는 결과를 출력
console.log('Number 10.123 : ' + 10.123); //"010"을 8진수로 인식하여 8이라는 결과를 출력

console.log("\n2.2. Number parseInt, parseFloat");
//2.2. Number :: parseInt, parseFloat
//parseInt() 의 두번째 인자는 치환하고자하는 문자열이 몇진수의 숫자를 표현한 문자열인가를 나타낸다 .
console.log('Number parseInt("010", 10) : ' + parseInt("010", 10)); // 
console.log('Number parseInt("010", 2) : ' + parseInt("010", 2)); // 010 을 2진수로 판단하여 10진수 정수로 변환한 값을 출력해준다
console.log('Number parseInt("010") : ' + parseInt("010")); //두번째 인자를 전달하지 않으면?
console.log('Number parseFloat("010") : ' + parseFloat("010"));//정확히 10진수를 반환한다. 
console.log('Number parseFloat("010.333") : ' + parseFloat("010.333"));

console.log("\n2.3. Not a Number :: NaN 과 isNan()");
//2.3 Not a Number :: NaN 과 isNaN()
//NaN : 해당 하는 값이 숫자가 아니란 뜻
//isNaN() : isNan() 은 NaN 인지 여부를 검사하는 함수임으로 NaN 일때 true 를 반환한다.
console.log('Not a Number parseInt("hello world") : ' + parseInt("hello world"));
console.log('Not a Number isNaN(NaN) : ' + isNaN(NaN));
console.log('Not a Number isNaN(parseInt("hello world") : ' + isNaN(parseInt("hello world")));
console.log('Not a Number isNaN(123) : ' + isNaN(123));

console.log("\n2.4. Number의 무한대의 표현식");
//2.4. Number의 무한대의 표현식 :: Infinity , -Infinity 과 isFinite()
//무한대를 나타내는 Infinity
console.log('Number Infinity 1 / 0 : ' + 1 / 0);    //0보다 큰 양의 무한대는 Infinity
console.log('Number -Infinity -1 / 0 : ' + -1 / 0); //0보다 적은 음의 무한대는 -Infinity

//isFinite()는 산술결과 혹은 전달된 인자값이 유한의 형태를 가지는 것인지를 검증하는 내장 객체이다.
//즉 인자값이 숫자이면서 무한대가 아니면 true, NaN 혹은 무한대의 Infinity , -Infinity 이면 false를 리턴 한다.
console.log('Number isFinite(1 / 0) : ' + isFinite(1 / 0));
console.log('Number isFinite(NaN) : ' + isFinite(NaN));
console.log('Number isFinite(1) : ' + isFinite(1));
console.log("====================================================================");

console.log("\nString==============================================================");
/* 3. String */
//문자열은 객체로서 활용가능한 property와 method를 가지고 있는 특이한 형태의 데이터 타입

console.log("3.1. String property :: length");
//3.1. String property :: length
console.log('String "hello world".length : '+"hello world".length);

console.log("\n3.2. String method : replace(),charAt(),toUpperCase(),split()");
//3.2. String method : replace(),charAt(),toUpperCase(),split()
//String method 문자열은 객체에 의존적으로서 객체의 수행을 담당한다는 메소드를 가지고 있다.

//replace()
console.log('String "hello world".replace("hello","goodbye") : '+ "hello world".replace("hello","goodbye"));
//charAt()
console.log('String "hello world".charAt(0) : '+ "hello world".charAt(0));
//toUpperCase()
console.log('String "hello world".toUpperCase() : '+ "hello world".toUpperCase());
//split()
console.log('String "1+2+3+4+5".split("+") : '+ "1+2+3+4+5".split("+"));
console.log("====================================================================");

console.log("\nNull & Undefined====================================================");
/* 4. Null & Undefined */

var a;
console.log("Null & Undefined var a;");
console.log("Null & Undefined a : " + a);
console.log("Null & Undefined typeof a : " + typeof a); // 선언되지 않은 변수를 사용함에 따라 자바스크립트 엔진이 강제적으로 undefined를 할당한다. 

console.log("Null & Undefined a == undefined : " + a == undefined);
console.log("Null & Undefined a == null : " + a == null);
console.log("Null & Undefined null == undefined : " + null == undefined);
console.log("====================================================================");

console.log("\nSymbol==============================================================");
/* 5. Symbol */
var symbol1 = Symbol(123);
var symbol2 = Symbol("symbolTest");
var symbol3 = Symbol("symbolTest");

console.log("Symbol var symbol1 = Symbol(123);");
console.log('Symbol var symbol2 = Symbol("symbolTest");');
console.log("Symbol typeof symbol : " + typeof symbol1);
console.log("Symbol typeof symbo2 : " + typeof symbol2);
console.log("Symbol symbol1 + 10 : TypeError");
console.log('Symbol symbol2 + "hello world" : TypeError');
console.log('Symbol symbol2.toString() : ' + symbol2.toString());

console.log('\nSymbol var symbol3 = Symbol("symbolTest");');
//console.log(symbol2 === symbol2);
console.log('Symbol symbol2 === symbol2 : true');
//console.log(symbol2 === symbol3);
console.log('Symbol symbol2 === symbol3 : false');
console.log("====================================================================");


// var isEmpty = function(value){ 
//     if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){
//       return true 
//     }else{
//       return false 
//     } 
//  };
 
 