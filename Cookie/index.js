let form = document.getElementById("form");
let msg = document.getElementById("msg");
let text = document.getElementById("text");

function MsgCookie() {
    const cookies = document.cookie.split("; ")
    for (const cookie of cookies) {
        const [nome, valor] = document.cookie.split("=");
        if (nome === "Cookie") {
            msg.textContent = decodeURIComponent(valor);
            break;
        };
    };
};

if (document.cookie.includes("Cookie=")) {
    MsgCookie();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const expires = new Date();
    expires.setDate(expires.getDate() + 365);
    document.cookie = `Cookie=${encodeURIComponent(text.value)}; expires=${expires}`;
    msg.textContent = "Mensagem salva!";
    msg.style.color = "green";
    setInterval(() => {
        MsgCookie();
        msg.style.color = "white";
    }, 4000);
});