const historyMenu = document.getElementById('history');
const list = document.getElementById("menuList");
const code = document.getElementById("code");
let y1, y2, x1, x2;
historyMenu.addEventListener("mouseover", (e) => {
    y1 = e.clientY;
    x1 = e.clientX;
    list.style.display = "block";
});
historyMenu.addEventListener("mouseout", (e) => {
    y2 = e.clientY;
    x2 = e.clientX;
    if (y2 < y1 || Math.abs(x2 - x1) > 40) {
        list.style.display = "none";
    }
});
list.addEventListener("mouseleave", () => {
    list.style.display = "none";
})
// 代码展示部分
const res = hljs.highlight(htmlStr.str,{
    language:htmlStr.lang
})
code.className = `hljs language-${htmlStr.lang}`
code.innerHTML = res.value;