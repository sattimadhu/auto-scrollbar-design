let form=document.querySelector('.inputs');
let send=document.querySelector('.submit');
let input=document.querySelector('.input-text');

function addMessage(message) {
    const chatWindow = document.getElementById("chatWindow");
    const newMessage = document.createElement("div");
    newMessage.innerText = message;
    chatWindow.appendChild(newMessage);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

send.addEventListener('click', function(event) {
    event.preventDefault();
    const message = input.value.trim();
    if (message !== "") {
        addMessage(message);
        input.value = '';
    }
});
