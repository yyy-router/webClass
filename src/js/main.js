const historyMenu = document.getElementById('history');
const exm = document.getElementById('exm');
const list = document.getElementById("menuList");
const exmlist = document.getElementById("exmList");
const code = document.getElementById("code");
let y1, y2, x1, x2;
historyMenu.addEventListener("mouseover", (e) => { show(e, list) });
historyMenu.addEventListener("mouseout", (e) => { hide(e, list) });
list.addEventListener("mouseleave", () => {
    list.style.display = "none";
})
// 实验展示
exm.addEventListener("mouseover", (e) => { show(e, exmlist) });
exm.addEventListener("mouseout", (e) => { hide(e, exmlist) });
exmlist.addEventListener("mouseleave", () => {
    exmlist.style.display = "none";
})
// 展示函数
function show(e, dom) {
    if (dom === list) {
        exmlist.style.display = "none";
    } else {
        list.style.display = "none";
    }
    y1 = e.clientY;
    x1 = e.clientX;
    dom.style.display = "block";
}
// 隐藏函数
function hide(e, dom) {
    y2 = e.clientY;
    x2 = e.clientX;
    if (y2 < y1 || Math.abs(x2 - x1) > 40) {
        dom.style.display = "none";
    }
}
// 代码展示部分
const res = hljs.highlight(htmlStr.str, {
    language: htmlStr.lang
})
code.className = `hljs language-${htmlStr.lang}`
code.innerHTML = res.value;