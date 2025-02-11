const change = document.getElementById("change_num");
let count = 0;

function increment(){
    count++;
    change.textContent = count;
}

function decrement(){
    if(count>0){
        count--;
        change.textContent = count;
    }
}

function clearCounter() {
    count = 0; // Reset the count to 0
    change.textContent = count; // Update the displayed number
}