const resultsWindow = document.querySelector('.results-window');
const inputBtn = document.querySelectorAll('button');

inputBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e);
    })
});