const btn = document.getElementById('btn')

btn.addEventListener('click',function() {
    getPerson(getData);
});

function getPerson(cb){
    const url = "https://randomuser.me/api/";
    const req = new XMLHttpRequest();

    req.open('GET', url, true)
    req.onload = function(){
        if (this.status === 200) {
            cb(this.responseText, showData);
        }
    }
    req.send();
}

function getData(res, cb){
    const d =JSON.parse(res);
    const {
        name:{first},
        name:{last},
        picture:{large},
        location:{street},
        phone,
        email
    } = d.results[0];
    cb(first,last,large,street,phone,email);
}

function showData(first,last,large,street,phone,email) {
    document.getElementById('name').textContent = `${first} ${last}`;
    document.getElementById('first').textContent = first;
    document.getElementById('last').textContent = last;
    document.getElementById('street').textContent = street.name;
    document.getElementById('phone').textContent = phone;
    document.getElementById('email').textContent = email;
    document.getElementById('photo').src = large;
}