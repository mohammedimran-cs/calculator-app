const num = ["AC","DE",".","/","7","8","9","*","4","5","6","-","1","2","3","+","00","0","="];

let count = 0;
let result = "";
let checkClear= false;
$("#btn-con .btn").each(function(){
    $(this).data("value",num[count]);
    // console.log($(this).data("value"));
    count++;
});

$(".btn").on("click",function(){
    $(this).fadeOut(100).fadeIn(100);
    let dataValue = $(this).data("value");
    switch(dataValue){
    case "AC" : {
        result = "";
        $("#display-box").val(result);
        break;
    }
    case "DE" : {

        let charArray = result.split('');

        // Check if the string is not empty before removing the last character
        if (charArray.length > 0) {
            charArray.pop();
        }
        
        let modifiedString = charArray.join('');
        result = modifiedString;
        // console.log(result);
        $("#display-box").val(result);
        break;
    }
    case "=" :  {
        if (result !== "") {
            try {
                checkClear = true;
                let calculate = new Function('return ' + result);
                let res = calculate();
                result = "" + res;
                console.log(result);
                $("#display-box").val(result);
            } catch (error) {
                // Handle the error, for example, display an error message
                // console.error("Error evaluating expression:", error);
                $("#display-box").val("Error");
            }
        } else {
            $("#display-box").val("");
            console.log("empty");
        }
        break;
    }

    case '+':
    case '-':
    case '*':
    case '/':
    case '.':
        let lastLetter = result[result.length - 1];
        let arr = result.split('');
        if (!['+', '-', '*', '/', '.'].includes(lastLetter) && result !== "" ) {
            if(checkClear){
                result = "";
                checkClear = false;
            }
            let charArray = result.split('');
            console.log(charArray);
            charArray.push(dataValue);
            let modifiedString = charArray.join('');
            result = modifiedString;
            console.log(result);
            $("#display-box").val(result);
        }
        break;

    default : {
        if(checkClear){
            result = "";
            checkClear = false;
        }
            let charArray = result.split('');
            console.log(charArray);
            charArray.push(dataValue);
            let modifiedString = charArray.join('');
            result = modifiedString;
            console.log(result);
            $("#display-box").val(result);
        }
}

});

// setInterval(()=> {
// $("#line-blink").fadeOut(100).fadeIn(100);
// },800);



