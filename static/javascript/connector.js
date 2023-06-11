const _button_post = document.getElementById("button-1")
const _button_send = document.getElementById("button-2")
const data = document.getElementById("info")
const text = document.getElementById("text-1")



const cars = [
    {"make": "Porsche", "model": "911S"},
    {"make": "Mercedes-Benz", "model": "220SE"},
    {"make": "Jaguar", "model": "Mark VII"}
];

_button_send.onclick = function () {


    fetch("http://127.0.0.1:5000/send_text",
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(text.value)
        }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert("something is wrong")
        }
    }).then(jsonResponse => {

            // Log the response data in the console
            console.log(jsonResponse)
            jsonResponse.map(Main=>
            Main.make==="Porsche"? data.innerHTML +="<p>"+ Main.make+" "+" is a good product":
            data.innerHTML +="<p>"+ Main.make+" "+"is an average product")
            jsonResponse.map(Main=>
            Main.model==="220SE"? data.innerHTML +="<p>"+ Main.make+" "+" is a good product":
            data.innerHTML +="<p>"+ Main.make+" "+"is an average product")

        }
    ).catch((err) => console.error(err));

}



_button_post.onclick = function () {


    fetch("http://127.0.0.1:5000/receiver",
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(cars)
        }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert("something is wrong")
        }
    }).then(jsonResponse => {

            // Log the response data in the console
            console.log(jsonResponse)
            jsonResponse.map(Main=>
            Main.make==="Porsche"? data.innerHTML +="<p>"+ Main.make+" "+" is a good product":
            data.innerHTML +="<p>"+ Main.make+" "+"is an average product")
            jsonResponse.map(Main=>
            Main.model==="220SE"? data.innerHTML +="<p>"+ Main.make+" "+" is a good product":
            data.innerHTML +="<p>"+ Main.make+" "+"is an average product")

        }
    ).catch((err) => console.error(err));

}


// Enable audio playback

const audio = document.getElementById("audio");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.onclick = function () {
    audio.play();
}

pauseButton.onclick = function () {
    audio.pause();
}

audio.onclick = function () {
    audio.pause();
}