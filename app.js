const incr = document.querySelector("#inc");
const decr = document.querySelector('#decrease');
const val = document.querySelector('.value');

let x = 0;

incr.addEventListener('click', () => {
    x++;
    val.innerHTML = x;
})

decr.addEventListener('click', () => {
    x--;

    if (x < 0) {
        alert('the counter is already zero');
    } else {
        val.innerHTML = x;
    }
})