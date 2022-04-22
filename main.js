let count = 0;
const updateCount = () => {
    const countTag = document.getElementById('count');
    countTag.innerText = count;
}
updateCount()

const plusCount = () => {
    count++;
    updateCount();
}

const minusCount = () => {
    count--;
    updateCount();
}


