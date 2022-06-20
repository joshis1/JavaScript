console.log('Client side javascript file is loaded');

// fetch is a browser based api.

// const url =  https://puzzle.mead.io/puzzle

const url = 'http://localhost:3000/weather?address=Brisbane';



const weatherForm = document.querySelector('form');
const place = document.querySelector('input');

const temperature = document.querySelector('#message-1');
const feelslike = document.querySelector('.message-2');

temperature.textContent = '';
feelslike.textContent = '';

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const address = place.value;
    console.log(address);
    console.log('Submit clicked');

    const url = '/weather?address='+ address;

    temperature.textContent = '';
    feelslike.textContent = '';

    temperature.textContent = 'loading...';

    fetch(url).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error);
                temperature.textContent = data.error;
            }
            else {
                console.log(data);
                temperature.textContent = 'Temperature is ' + data.temperature + ' degree celsius';
                feelslike.textContent = 'Feels like ' + data.feelslike + ' degree celsius';
            }
        })
    })
})