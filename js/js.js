var gMemoryNum = 0; //(E)

//function that add a character
function onPress(key) {

    //(H)
    if (document.getElementById("result").value === 'Infinity') document.getElementById("result").value = '';


    //if we dont use in abs bonus
    // if (document.getElementById("result").value === '' && isNaN(parseInt(key))) {
    //     document.getElementById("result").value = 'you must enter number first!'
    //     setTimeout(() => {
    //         document.getElementById("result").value = '';
    //     }, 5000)
    // } else
    document.getElementById("result").value += key
}

function removeChar() {
    //write a code segment that remove the last character from the result text box
    const val = +document.getElementById("result").value;
    console.log('val', val, typeof(val));
    var newVal = Math.floor(val / 10) //(C)
    document.getElementById("result").value = newVal;
}

//function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = eval(x)
    console.log('Y', y);
    document.getElementById("result").value = y //(B)
    setTimeout(() => {
        document.getElementById("result").value = '';
    }, 4000);
}

//function that clear the display
function clearResult() {
    document.getElementById("result").value = '' //(D)
}

function onMemoryAdd() {
    gMemoryNum += eval(document.getElementById("result").value);
}

function onMemorySubstract() {
    let elNumScreen = document.getElementById("result").value;
    console.log(elNumScreen);
    gMemoryNum = gMemoryNum - parseInt(elNumScreen)
    console.log(gMemoryNum);
    //(F)
}

function onMemoryRecall() {
    document.getElementById("result").value = gMemoryNum;
}

function onMemoryClear() {
    gMemoryNum = 0; //(G)
}



//Bonus Area //(I)
function onMemoryMultiply() {
    const screenNum = document.getElementById("result").value;
    const res = eval(screenNum) * gMemoryNum
    console.log(res);
    document.getElementById("result").value = res;


}

function onOneOver() {
    const num = +document.getElementById("result").value;
    document.getElementById("result").value = 1 / num;

}

function onAbs() {
    let ex = document.getElementById("result").value;
    let res = eval(ex)
        //one way
        // document.getElementById("result").value = Math.abs(res)

    //second way
    res = (res < 0) ? -res : res
    document.getElementById("result").value = res




}

function onSquare() {
    let num = +document.getElementById("result").value;
    console.log(num);
    num *= num;
    document.getElementById("result").value = num;
    //second way
    // document.getElementById("result").value = Math.pow(num, 2);


}
//End of Bonus Area