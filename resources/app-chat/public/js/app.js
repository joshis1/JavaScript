console.log('Client side JS loaded');

// the standard for specifying the document elements is by preceding with $ sign.

const $messageForm = document.querySelector('#message-form');
const $messageFormButton = $messageForm.querySelector('#btn');
const $messageFormText = $messageForm.querySelector('#message');

const $locationButton = document.querySelector('#send-location');

const $messages = document.querySelector('#messages');
const messageTemplate = document.querySelector('#message-template').innerHTML

const urlTemplate = document.querySelector('#url-template').innerHTML
const $url = document.querySelector('#url');


//Options
 const {username, room} = Qs.parse(location.search, {ignoreQueryPrefix: true})

console.log(username);
console.log(room);

socket = io(); // this will make a socket io connection to the server by emitting connection.

socket.on('message', (msg) => {
    console.log(msg);
    const html = Mustache.render(messageTemplate, {'message': msg.text, 'createdAt': moment(msg.createdAt).format('h:mm:ss a')});
    $messages.insertAdjacentHTML('beforeend', html);
});


socket.on('locationMessage', (url) => {
    console.log(url);
    const html = Mustache.render(urlTemplate, {'url': url.text, 'createdAt': moment(url.createdAt).format('h:mm a')} )
    $url.insertAdjacentHTML('beforeend', html);
})



$messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    msgElem = event.target.elements.message; // e.target is a form and its elements are message ( i.e. name)
    //console.log($messageFormButton);
    $messageFormButton.setAttribute('disabled', 'disabledVal');

    //console.log(msgElem.value);
    socket.emit('sendMessage', msgElem.value, (msg) => {
        //console.log('got msg');
        //console.log(msg);
        $messageFormButton.removeAttribute('disabled');
        $messageFormText.value = '';
        $messageFormText.focus();
    });
})

// https://developer.mozilla.org/en-US/docs/Web/API/Navigator
// https://w3c.github.io/geolocation-api/#getcurrentposition-method

$locationButton.addEventListener('click', (event) => {
    console.log('send location button clicked');

    if(!navigator.geolocation)
    {
        return alert('geolocation is not supported by browser');
    }

    $locationButton.setAttribute('disabled', 'disabledVal');
    navigator.geolocation.getCurrentPosition((position, errorCallback) => {

        if (errorCallback) {
            alert('geo location is not supported by the browser');
        }
        else {
            console.log(position.coords.latitude, position.coords.longitude);
            socket.emit('sendLocation', { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude }, (msg) => {
                console.log(msg);
                console.log('location shared confirmed');
                $locationButton.removeAttribute('disabled');
            })
        }
    })
});

//sending the data to the server.
socket.emit('join', {username, room});
