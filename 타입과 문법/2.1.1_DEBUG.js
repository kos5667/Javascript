var DEBUG = true;

if(DEBUG) {
    console.log("yes");
}else{
    console.log("no")
}

//변수를 선언 하지 않아도 typeof를 사용하여 에러 없이 no 출력
if(typeof DEBUG1 !== "undefined") {
    console.log("yes");
}else{
    console.log("no")
}

//변수를 선언 하지 않으면 Error 발생
//Error
/*
    if(DEBUG1) {
        console.log("yes");
    }else{
        console.log("no")
    }
*/