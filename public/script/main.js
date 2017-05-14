console.log('working hahahhahaha');

let user = '';

const submitbttn = document.getElementById('submitbttn');
let nameInput = document.getElementById('nameInput');
let enterName = document.getElementById('enterName');

submitbttn.addEventListener("click", function () {
    user = nameInput.value;
    enterName.style.display = "none";

});

(function () {
        var pubnub = new PubNub({ publishKey: 'demo', subscribeKey: 'demo' });
        function $(id) { return document.getElementById(id); }
        var box = $('box'), input = $('input'), channel = '10chat-demo';
        pubnub.addListener({
            message: function (obj) {
                box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
            }
        });
        pubnub.subscribe({ channels: [channel] });
        input.addEventListener('keyup', function (e) {
          
            if ((e.keyCode || e.charCode) === 13) {
                pubnub.publish({ channel: channel, message: user + ': ' + input.value, x: (input.value = '') });
            }
        
        });
    }

)();