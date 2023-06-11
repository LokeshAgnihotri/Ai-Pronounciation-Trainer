
const _button_pronounce_trainer = document.getElementById("button_pronounce_trainer")
const _reftext = document.getElementById("reftext")

_button_pronounce_trainer.onclick = function () {


    fetch("http://127.0.0.1:5000/send_text",
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(_reftext.value)
        }).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            alert("something is wrong")
        }
    }).then(jsonResponse => {

            // Log the response data in the console
            console.log(jsonResponse)
            _reftext.value = jsonResponse

        }
    ).catch((err) => console.error(err));

}