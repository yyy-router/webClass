const toTop = document.getElementById("toTop");
const head = document.getElementById("head");
const music = document.getElementById("music");
const but = document.getElementById("but");
const record = document.getElementById("img");
const downMusic = document.getElementById("downMusic");
let topOld = 0, topNew = 0;
let s1 = "./src/images/play.png",
    s2 = "./src/images/pause.png";
window.addEventListener("scroll", () => {
    let timer = setInterval(() => {
        topNew = getTop();
    })
    if (topOld - topNew > 200) {
        toTop.style.display = "block";
        clearInterval(timer);
    } else {
        toTop.style.display = "none";
    }
})
toTop.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

function getTop() {
    let top = head.getClientRects()[0].y;
    return top;
}
but.addEventListener("click", () => {
    if (music.paused) {
        // 暂停中
        music.play();
        but.src = s2;
        record.classList.add("play");
        record.classList.remove("pause");

    } else {
        // 播放中
        music.pause();
        but.src = s1;
        record.classList.add("pause");
        record.classList.remove("play");

    }

})
downMusic.addEventListener("click", () => {
    const a = document.createElement("a");
    record.appendChild(a);
    a.download = Date.now();
    a.href = "./src/music/music.mp3";
    a.style.display = "none";
    a.click();
    record.removeChild(a);
})
music.addEventListener("ended", () => {
    music.pause();
    record.classList.add("pause");
    record.classList.remove("play");
    but.src = s1;
})