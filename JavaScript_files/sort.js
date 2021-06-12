// Swaping function to swap two DOM elements (bars) with .style.height feature
function swap(e1 , e2) {
    let temp = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = temp;
}

// Disables sorting buttons used in conjunction with .disabled
function disableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
}

// Enables sorting buttons used in conjunction with .disabled
function enableSortingBtn() {
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
}

// Disable size slider used in conjuction, so that we can disable during sorting
function disableSizeSlider() {
    document.querySelector("#arr_size").disabled = true;
}

// Enable size slider used in conjuction, so that we can enable slider after or before sorting
function enableSizeSlider(){
    document.querySelector("#arr_size").disabled = false;
}

// Disables newArray buttons used in conjunction with .disabled, so that we can disable during sorting and enable buttons after it
function disableNewArrayBtn(){
    document.querySelector("#newArray").disabled = true;
}

// Enables newArray buttons used in conjunction with .disabled
function enableNewArrayBtn(){
    document.querySelector("#newArray").disabled = false;
}

// waitTime is a asyn function which is rturning a promise, setTimeout is resposible for waiting 500ms = 0.5 sec 
function waitTime(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Success');
        }, ms);
    }); 
}

// Default input for waitTime function (260ms)
var delay = 260;

// Selecting size slider from DOM
var arraySize = document.querySelector("#arr_size");

// Event listener to update the bars on the UI
arraySize.addEventListener('input', () => {
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value));
});

// Selecting speed slider from DOM
var speed = document.querySelector("#speed_input");

// Event listener to update delay time 
speed.addEventListener('input', () => {
    delay = 360 - parseInt(speed.value);
});

// Creating array to store randomly generated numbers
let array = [];

// Call to display bars (array) right when someone visit the site
createNewArray();

// Function to create new array of random numbers, input: size of array
function createNewArray(no_of_bars = 60) {
    // calling helper function to delete old bars from DOM
    deleteArray();

    array = []; 
    for(let i=0; i < no_of_bars ; i++) {
        array.push(Math.floor(Math.random()*250)+1);
    }

    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar' col
    for( let i=0; i < no_of_bars; i++ ) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteArray() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = " ";
}

// Selecting newarray button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    enableSortingBtn();
    enableSizeSlider();
    createNewArray(arraySize.value);
});
