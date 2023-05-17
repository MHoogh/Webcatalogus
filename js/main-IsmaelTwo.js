let submitbtn = document.querySelector('.submit');
submitbtn.addEventListener('click', submitfunction);

function submitfunction() {
    let nameimput = document.querySelector('.name').value;

    if (nameimput.length == 0) { //als er niks is ingevlud krijg je een error.
        document.querySelector('.name').classList.add('error');
    }
    else {
        document.querySelector('.name').classList.remove('error'); //als er wel iets ingevuld iets wordt je error verwijderd
        alert('Correct Name'); //als je hebt iets ingevuld krijg je ook een alert 
    }

    let emailimput = document.querySelector('.email').value;

    if (emailimput.length == 0) {
        document.querySelector('.email').classList.add('error');
    }
    else {
        document.querySelector('.email').classList.remove('error');
        alert('Correct Email');
    }

    let messageImput = document.querySelector('.contactmessage').value;

    if (messageImput.length == 0) {
        document.querySelector('.contactmessage').classList.add('error');
    }
    else {
        document.querySelector('.contactmessage').classList.remove('error');
        alert('Thank you for your message');
    }
}