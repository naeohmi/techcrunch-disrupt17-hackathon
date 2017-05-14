console.log('working hahahhahaha');

(function() {
    var pubnub = new PubNub({ publishKey: 'demo', subscribeKey: 'demo' });

    function $(id) { return document.getElementById(id); }
    var box = $('box'),
        input = $('input'),
        channel = '10chat-demo';
    pubnub.addListener({
        message: function(obj) {
            box.innerHTML = ('' + obj.message).replace(/[<>]/g, '') + '<br>' + box.innerHTML;
        }
    });
    pubnub.subscribe({ channels: [channel] });
    input.addEventListener('keyup', function(e) {
        if ((e.keyCode || e.charCode) === 13) {
            pubnub.publish({ channel: channel, message: input.value, x: (input.value = '') });
        }
    });
})();


