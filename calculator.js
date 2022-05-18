
let history = []; 
// let result = ''; 
const btnHistory = document.querySelector('.btn-history');
const btnClose = document.querySelector('.btn-close');
var string ="";

// var showHideHistory = document.querySelector('.show-hide-history');

function histLog(){
    var showHideHistory = document.getElementById("show-hide-history");
    // var histValue = document.getElementById("allhistroy");
    

    if (showHideHistory.style.display == 'block'){
        showHideHistory.style.display = 'none';
    }else {
        showHideHistory.style.display = 'block';
    }

    // for(var key in history){
    //     string += "" + history[key]["expression"] + "=" + history[key]["result"] + "<br>";
    // }
    // histValue.innerHTML = string;

}

function closeHistLog() {
    let showHideHistory = document.getElementById("show-hide-history");
    if (showHideHistory.style.display == 'block'){
        showHideHistory.style.display = 'none';
    } else {
        showHideHistory.style.display = 'block';
    }
};


function AddNum(digi) {
    let inputdata = document.querySelector('#display');
    inputdata.value += digi;
};

function Clear(){
    document.querySelector('#display').value = '';
};


var display_data = ""; 
var result = "";
function calc() {
    
    display_data = document.querySelector('#display').value;
    document.querySelector('#display').value = eval(document.querySelector('#display').value);
    // result = parseInt(document.querySelector('#display')).toFixed(4);
    history.push({"expression":display_data,"result":result});
    histShow();
    display_data = '';
    result = '';
    
    // document.getElementById("allhistroy").innerHTML = display_data + " = " + result;  // 2+3 = 5
    // "<li>" + document.querySelector('#display').value + " </li>";
};

function histShow(){
    var histValue = document.getElementById("allhistroy");
    for(var key in history){
        string += "" + history[key]["expression"] + "=" + history[key]["result"] + "<br>";
    }
    histValue.innerHTML = string;
}

function clearHist() {
    string = '';
};

// histShow();

function Dele() {
    document.querySelector('#display').value = document.querySelector('#display').value.substr(0, document.querySelector('#display').value.length-1);
};

function HistoryLog() {
    result += "<span style='font-size: 25px;'>" + operation + "</span>" + "<br> = " + document.getElementById("display").value + "<br>_____________<br>"; 
    if(document.getElementById("display").value.search("undefined") == -1){
        document.getElementById("history").innerHTML = result;
    } else {
        document.getElementById("display").value = "Syntax Error!";
    }
};

