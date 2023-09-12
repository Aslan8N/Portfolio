let a = '';
let b = '';
let signs = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['-', '/', '*', '+', '%'];

const out = document.querySelector('.calc-screen p');


function clearAll () {
    a = '';
    b = '';
    signs = '';
    finish = '';
    out.textContent = 0;
}

function clearAll () {
    a = '';
    b = '';
    signs = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.deleteAll').onclick = clearAll;

document.querySelector('.delete').onclick = () => {
    if (finish) {
        clearAll();
    } else {
        if (b !== '') {
            b = b.slice(0, -1); // Удаляем последний символ из b
            out.textContent = b;
        } else if (signs !== '') {
            signs = '';
            out.textContent = signs;
        } else if (a !== '') {
            a = a.slice(0, -1); // Удаляем последний символ из a
            out.textContent = a;
        }
    }
};


document.querySelector('.procent').onclick = () => {
    if (a !== '' && b === '') {
        a = (+a) / 100;
        out.textContent = a;
    }
};

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('deleteAll')) return;
    if(event.target.classList.contains('delete')) return;
    out.textContent = '';

    const key = event.target.textContent;

    if(digit.includes(key)) {
        if (b === '' && signs === '') {
        a += key;
          out.textContent = a;
        }

    else if (a !== '' && b !== '' && finish) {
        b = key;
        finish = false
        out.textContent = b;

    }
    else {
        b += key;
        out.textContent = b;
    }
    return
}

    if (action.includes(key)) {
        signs = key;
        out.textContent = signs;
        return
    }

    if (key === '=') {
        if (b === '') b = a;
        switch (signs) {
            case "+": a = (+a) + (+b);
                break;
            case "-": a = a - b;
                break;
            case "*": a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    signs = '';
                    return;
                }
                a = a / b;
                break;
            case "%": 
                if (b === '') {
                    a = (+a) / 100;
                } 
                break;
        }
        finish = true;
        out.textContent = a;
    }    
}