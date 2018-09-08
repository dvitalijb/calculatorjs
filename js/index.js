let A, B, C;
let action = "+";

function getValue(id) {
    let res = document.getElementById(id).value - 0;
    if (!isNaN(res))
        return res;
    alert("Enter the number");
}

function PutNum(val) {
    document.getElementById("windowput").value = (document.getElementById("windowput").value + val) - 0;

}

function plus() {
    A = getValue("windowput");
    document.getElementById("windowput").value = 0;
    action = "+";
}

function sub() {
    A = getValue("windowput");
    document.getElementById("windowput").value = 0;
    action = "-";
}

function mult() {
    A = getValue("windowput");
    document.getElementById("windowput").value = 0;
    action = "*";
}

function div() {
    A = getValue("windowput");
    document.getElementById("windowput").value = 0;
    action = "/";
}

function clr() {
    document.getElementById("windowput").value = 0;
}

function otr() {
    A = getValue("windowput");
    document.getElementById("windowput").value = 0 - A;
}

function calculate() {
    B = getValue("windowput");
    switch (action) {
    case "+":
        C = A + B;
        break;
    case "-":
        C = A - B;
        break;
    case "*":
        C = A * B;
        break;
    case "/":
        if (B == 0) {
            alert("Can not be divided into 0!");
        } else {
            C = A / B;
        }
        break;
    }
    document.getElementById("windowput").value = C;
}

window.onload = function() {

    for (let i = 0; i < 10; i++) {
        (function(val) {
            document.getElementById("but_" + val).onclick = function() {
                PutNum(val);
            }
        }
        )(i);
    }
    document.getElementById("plus").addEventListener("click", plus);
    document.getElementById("calculate").addEventListener("click", calculate);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("mult").addEventListener("click", mult);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("clr").addEventListener("click", clr);
    document.getElementById("otr").addEventListener("click", otr);
}
