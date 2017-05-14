
let trust = "";
let user = '';

let grab = () => {
    $("#mod")[0].addEventListener("click", function(e) {
        startChat(user, $(".modal-footer > input").val())
        // debugger
        $(".modal-footer > input").val("")
        console.log(e)
         trust = e.target.parentElement.parentElement.children[1]
        console.log($(".modal-footer > input").val());
    });

};

if ($(".UserChat > button")[0] !== undefined) {
    $(".UserChat > button")[0].addEventListener("click", function(e) {
        console.log(e);
        grab();
    }, false);
}

let startChat = (user, message) => {

let k = $("<div>")
    var pubnub = new PubNub({ publishKey: 'pub-c-c380fb6c-9e63-4585-b543-fbf2a36c5cc0', subscribeKey: 'sub-c-e2bcc08c-381a-11e7-a268-0619f8945a4f' });

    pubnub.subscribe({ channels: ['helperChannel'] });

      pubnub.addListener({
            message: function (obj) {

                 // trust.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
                 k[0].innerHTML = message
                 trust.appendChild(k[0])

             }
                })
                 pubnub.publish({ channel: "helperChannel", message: user + ': ' + input.value, x: (input.value = '') });


    // pubnub.publish({
    //  channel: helperChannel,
    //   message: input.value,
    //    x: (input.value = '') });
};

// })();


let user = '';


const submitbttn = document.getElementById('submitbttn');
let nameInput = document.getElementById('nameInput');
let enterName = document.getElementById('enterName');

submitbttn.addEventListener("click", function () {


    user = nameInput.value;
    enterName.style.display = "none";
      console.log(user)

    user = nameInput.value;
    enterName.style.display = "none";


});

(function () {
        var pubnub = new PubNub({ publishKey: 'demo', subscribeKey: 'demo' });
        function $(id) { return document.getElementById(id); }

        var box = $('box'), input = $('#input'), channel = '10chat-demo';

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

          
            if ((e.keyCode || e.charCode) === 13) {
                pubnub.publish({ channel: channel, message: user + ': ' + input.value, x: (input.value = '') });
            }
        
        });
    }

)();

