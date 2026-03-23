const text = "❤️ Я тебе дуже сильно люблю ❤️";
const loveText = document.getElementById("loveText");
let i = 0;

const btn = document.getElementById("loveBtn");
const loveMsg = document.getElementById("love");

function typeWriter(){
    if(i < text.length){
        loveText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

function createHeart(){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (10 + Math.random()*30) + "px";
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);
    setTimeout(()=> heart.remove(), 3000);
}

function showLove(){
    typeWriter();
    const heartInterval = setInterval(createHeart, 300);
    setTimeout(()=> clearInterval(heartInterval), 3000);
    loveMsg.innerHTML = "Мій мицька 💖";
}

btn.addEventListener("click", showLove);