let box = document.querySelector("#tb");
let wrd = document.querySelector("#wrd");
let chr = document.querySelector("#chr");
box.addEventListener("input", function () {
let text = this.value;
let ch = text.length;
chr.innerHTML = ch;
text = text.trim();
let words = text.split(" ");
let cleanwords = words.filter(function (fw) {
    return fw != "";
});
wrd.innerHTML = cleanwords.length;
});