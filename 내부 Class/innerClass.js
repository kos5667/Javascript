//[Function: toString]
console.log(Object.prototype.toString);

/**
 * 배열을 "Array", 정규식은 "RegExp"
 * 
 * 대부분 내부 Class는 해당 값과 관련된 내장 네이티브 생성자를 가리킨다.
 */
//[object Array]
console.log(Object.prototype.toString.call([1,2,3]));

//[object RegExp]
console.log(Object.prototype.toString.call(/regex-literal/i));

/**
 * 원시 값 Null, Undefined에는 생성자가 존재하지 않는다.
 */
//[object Null]
console.log(Object.prototype.toString.call(null));

//[object Undefined]
console.log(Object.prototype.toString.call(undefined));

/**
 * 문자열, 숫자, 불리언같은 단순 원시 값은 박싱'boxing'과정을 거친다.
 */
//[object String]
console.log(Object.prototype.toString.call("abc"));

//[object Number]
console.log(Object.prototype.toString.call(42));

//[object Boolean]
console.log(Object.prototype.toString.call(true));

