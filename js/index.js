function changeLettersToSpans(text) {
    return text.split('').map(letter => {
        if (letter == ' ') {
            return '<span> </span>';
        } else {
            return '<span>'+letter+'</span>'
        }
    }).join('');
}

const h2 = document.querySelector('.banner h2');
const h3 = document.querySelector('.banner h3');

h2.innerHTML = changeLettersToSpans(h2.innerText);
h3.innerHTML = changeLettersToSpans(h3.innerText);
console.log('afsdasd');