var str = 0;
var fort = 0;
var agil = 0;
var int = 0;
var will = 0;
var char = 0;

var hw = 0;
var mw = 0;
var lw = 0;

var flm = 0;
var ice = 0;
var ltn = 0;
var gale = 0;
var shdw = 0;
var bld = 0;
var mtl = 0;

const vars1 = ['str', 'fort', 'agil', 'int', 'will', 'char', 'hw', 'mw', 'lw', 'flm', 'ice', 'ltn', 'gale', 'shdw', 'bld', 'mtl'];
const vars2 = ['strinput', 'fortinput', 'agilinput', 'intinput', 'willinput', 'charinput', 'hwinput', 'mwinput', 'lwinput', 'flminput', 'iceinput', 'ltninput', 'galeinput', 'shdwinput', 'bldinput', 'mtlinput'];

function change(p1, p2) {
    window[p1] = Math.max(0, Math.min(100, Math.floor(document.getElementById(p2).value)));
    if (!(Number.isNaN(window[p1]))) {
        if ((330 - (str + fort + agil + int + will + char + hw + mw + lw + flm + ice + ltn + gale + shdw + bld + mtl)) >= 1) {
    document.getElementById(p2).value = window[p1];
    } else {
        window[p1] = Math.min(100, (330 - (str + fort + agil + int + will + char + hw + mw + lw + flm + ice + ltn + gale + shdw + bld + mtl) + window [p1]));
        document.getElementById(p2).value = window[p1];
    };
    } else {
        window[p1] = 0;
        document.getElementById(p2).value = '';
    };
    if (window[p1] === 0) {
        document.getElementById(p2).value = '';
    }
    document.getElementById("invcount").innerHTML = 330 - (str + fort + agil + int + will + char + hw + mw + lw + flm + ice + ltn + gale + shdw + bld + mtl);
};

function check(key) {
    if (key.code == "Enter") {
        num = vars2.indexOf(event.target.id);
        change(vars1[num], vars2[num]);
    };
};

function check2() {
        num = vars2.indexOf(event.target.id);
        change(vars1[num], vars2[num]);
};

for (var i = 0; i < vars1.length; i++) {
    document.getElementById(vars2[i]).addEventListener("keydown", check)
    document.getElementById(vars2[i]).addEventListener("focusout", check2)
};
