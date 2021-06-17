
const KEY_IMG = {
    65: "hello.png",
    83: "mynameis.png",
    68: "god.png",
    70: "die.png",
    81: "youngcha.png",
    87: "hoo.png",
    69: "howdare.png"
}

const imgContainer = document.querySelector("section");

function onKey(event) {
    const pushedKeyCode = event.keyCode;
    const audio = document.querySelector(`audio[data-key="${pushedKeyCode}"]`);
    
    if (!audio) return;

    showImg(pushedKeyCode);
    playSound(audio);
    pushEffect(pushedKeyCode);
}

function removeEffect (event) {
    console.log(event);
    console.log('transition ended');

    if (event.propertyName == "transform") {
        this.classList.remove("playing"); // this는 어떻게 나오는 거지?
        // pushedKey.classList.remove("playing");
    }
};

function pushEffect (pushedKeyCode) {
    const pushedKey = document.querySelector(`div[data-key="${pushedKeyCode}"]`)
    pushedKey.classList.add("playing");
    const keys = document.querySelectorAll('.key');
    console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend', removeEffect));
}

function playSound(audio) {
    audio.currentTime = 0; // 이미 play되고 있던 audio는 중지
    audio.play();
}

function showImg(pushedKeyCode) {
    const img = document.createElement("img")
    img.setAttribute("src", `img/${KEY_IMG[pushedKeyCode]}`); // 스트링으로 object 안의 value 호출 시 [] 사용
    img.setAttribute("height", "400px")
    img.setAttribute("alt", `${KEY_IMG[pushedKeyCode]}`);

    imgContainer.innerText = ""; // 기존 이미지 삭제
    imgContainer.appendChild(img); // 새로운 이미지 추가
}

window.addEventListener("keydown", onKey)
