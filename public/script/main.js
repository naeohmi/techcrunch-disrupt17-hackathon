let trust = "";
let user = '';
let dime = false;
var pubnub = new PubNub({ publishKey: 'pub-c-c380fb6c-9e63-4585-b543-fbf2a36c5cc0',
    subscribeKey: 'sub-c-e2bcc08c-381a-11e7-a268-0619f8945a4f' });



let grab = () => {
    //if button is pressed, run subscribe function
    dime = true;
    let Userchannel = "anthonychannel";
    console.log("grab called")

    pubnub.addListener({
            status: function(statusEvent) {
                if (statusEvent.category === "PNConnectedCategory") {
                   console.log("print")
                }
            },
            message: function (obj) {

                let k2 = document.createElement("DIV")
                 // trust.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
                 k2.innerText = obj.message
                 trust[0].appendChild(k2)

             }
                })
    $("#mod")[0].addEventListener("click", function(e) {
        console.log("clicked")
      pubnub.publish({ channel: Userchannel, message:  ': ' + $(".modal-footer > input").val()});
      pubnub.subscribe({ channels: [Userchannel] });
      trust = $(e.target.parentElement.parentElement.children[1])
      $(".modal-footer > input").val("")
        // console.log($(".modal-footer > input").val());
    });

};

if ($(".UserChat > button")[0] !== undefined) {
    $(".UserChat > button")[0].addEventListener("click", function(e) {
        console.log(e);
        if(!dime){grab()}
    }, false);
};

// })();

const submitbttn = document.getElementById('submitbttn');
let nameInput = document.getElementById('nameInput');
let enterName = document.getElementById('enterName');

submitbttn.addEventListener("click", function () {
    user = nameInput.value;
    enterName.style.display = "none";
    console.log(user);

    user = nameInput.value;
    enterName.style.display = "none";
});

// (function () {
//         var pubnub = new PubNub({ publishKey: 'demo', subscribeKey: 'demo' });
//         function $(id) { return document.getElementById(id); }

//         var box = $('box'), input = $('#input'), channel = '10chat-demo';

//         pubnub.addListener({
//             message: function (obj) {
//                 box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML
//             }
//         });
//         pubnub.subscribe({ channels: [channel] });
//         input.addEventListener('keyup', function (e) {

//             if ((e.keyCode || e.charCode) === 13) {
//                 pubnub.publish({ channel: channel, message: ': ' + input.value, x: (input.value = '') });
//             }

//         });
//     }

// )();
          
//             if ((e.keyCode || e.charCode) === 13) {
//                 pubnub.publish({ channel: channel, message: user + ': ' + input.value, x: (input.value = '') });
//             }
        
//         });
//     }

// )();

/////.  have to include admin page so helper bees can select different chat
/// the admin page will have a list of users who request a chat
/// the helper bee could click a username, which luanches a modal/chat window and subscribes to that user channel
/// once they are finish,  they both would unsubcribe

////. ***** check subscribe method....create achannel name with the user input (username)


/// https://www.pubnub.com/blog/2014-03-11-five-creative-ways-to-use-pubnub-data-stream/
// c489eefa5f1fe70cd00ca001f09c00bb3e23c398

