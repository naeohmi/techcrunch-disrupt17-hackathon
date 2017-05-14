// console.log('working hahahhahaha');

// (function() {
//     var pubnub = new PubNub({ publishKey: 'pub-c-c380fb6c-9e63-4585-b543-fbf2a36c5cc0', subscribeKey: 'sub-c-e2bcc08c-381a-11e7-a268-0619f8945a4f' });

// function $(id) { return document.getElementById(id); }
//     var box = $('box'),
//         input = $('input'),
//         channel = '10chat-demo';
//     pubnub.addListener({
//         message: function(obj) {
//             box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML;
//         }
//     });
//     pubnub.subscribe({ channels: [helperChannel] });

//     input.addEventListener('keyup', function(e) {
//         if ((e.keyCode || e.charCode) === 13) {
//             pubnub.publish({ channel: helperChannel, message: input.value, x: (input.value = '') });
//         }
//     });
// })();











let grab = () => {
    $("#mod")[0].addEventListener("click", function(e) {
        startChat(userEmail)
        console.log(eh)
        console.log($(".modal-footer > input").val());
    });

};

if ($(".UserChat > button")[0] !== undefined) {
    $(".UserChat > button")[0].addEventListener("click", function(e) {
        console.log(e);
        grab();
    }, false);
}

let startChat = (user) => {
    var pubnub = new PubNub({ publishKey: 'pub-c-c380fb6c-9e63-4585-b543-fbf2a36c5cc0', subscribeKey: 'sub-c-e2bcc08c-381a-11e7-a268-0619f8945a4f' });

    pubnub.subscribe({ channels: [helperChannel] });

    pubnub.publish({
     channel: helperChannel,
      message: input.value,
       x: (input.value = '') });
};

// })();


// console.log('working hahahhahaha');

// let user = '';

// const submitbttn = document.getElementById('submitbttn');
// let nameInput = document.getElementById('nameInput');
// let enterName = document.getElementById('enterName');

// submitbttn.addEventListener("click", function () {
//     user = nameInput.value;
//     enterName.style.display = "none";

// });

// (function () {
//         var pubnub = new PubNub({ publishKey: 'demo', subscribeKey: 'demo' });
//         function $(id) { return document.getElementById(id); }
//         var box = $('box'), input = $('input'), channel = '10chat-demo';
//         pubnub.addListener({
//             message: function (obj) {
//                 box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
//             }
//         });
//         pubnub.subscribe({ channels: [channel] });
//         input.addEventListener('keyup', function (e) {

//             if ((e.keyCode || e.charCode) === 13) {
//                 pubnub.publish({ channel: channel, message: user + ': ' + input.value, x: (input.value = '') });
//             }

//         });
//     }

// )();













// c489eefa5f1fe70cd00ca001f09c00bb3e23c398
