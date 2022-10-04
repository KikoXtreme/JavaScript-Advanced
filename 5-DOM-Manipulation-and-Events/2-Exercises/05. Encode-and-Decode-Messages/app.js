function encodeAndDecodeMessages() {
    let input = document.querySelector('textarea[placeholder="Write your message here..."]');
    let output = document.querySelector('textarea[placeholder="No messages..."]');
    let encoded = '';

    document.querySelectorAll('button')[0].addEventListener('click', encode);
    document.querySelectorAll('button')[1].addEventListener('click', decode);

    function encode(e) {
        encoded = input.value.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        output.value = encoded;
        input.value = '';
    }

    function decode(e) {
        let decoded = encoded.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        output.value = decoded;
    }
}