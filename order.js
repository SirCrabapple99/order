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

var pre = [];
var post = [];

var importdata = [];
var exportdata = [];

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

//horrible horrible worst way of going about this im sorry

function order() {
    if (localStorage.getItem("savepreshrineonorder") == 1) {
        savepre();
    };
    var orderlist = [];
    var orderlistfinal = [];
    var ordernumlist = [];
    var ismagic = [];
    var ordertotal = 0;
    var orderfinal = 0;
    var ordernum = 0;
    var ordernumfinal = 0;
//get total order thing and check for magic
    for (var i = 0; i < vars1.length; i++) {
        if (window[vars1[i]] >= 1) {
            ordertotal += window[vars1[i]];
            ordernum++;
            orderlist.push(window[vars1[i]]);
            ordernumlist.push(vars1.indexOf(vars1[i]));
            if (i < 9) {
                ismagic.push(0);
            } else {
                ismagic.push(1);
            }
        };
    };
//get and list all things
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if ((orderlistfinal[i] <= orderlist[i] - 25) && (ismagic[i] == 0)) {
            orderlistfinal[i] = orderlist[i] - 25;
            orderfinal += 25;
        } else {
            orderfinal += orderlist[i];
            ordernumfinal++;
        };
    };
//fix the ones that go down more than 25
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if ((orderlistfinal[i] <= orderlist[i] - 25) && (ismagic[i] == 0)) {
        } else {
            orderlistfinal[i] = (orderfinal / ordernumfinal);
        };
    };
//adjust final distribution amount and division amount accordingly
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if ((orderlistfinal[i] < orderlist[i] - 25) && (ismagic[i] == 0)) {
            orderlistfinal[i] = orderlist[i] - 25;
            ordernumfinal--;
            orderfinal -= 25;
        } else {
        };
    };
//distribute the final amount
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if ((orderlistfinal[i] <= orderlist[i] - 25) && (ismagic[i] == 0)) {
        } else {
            orderlistfinal[i] = (orderfinal / ordernumfinal);
        };
    };
//change the numbers accordingly
    for (var i = 0; i < ordernumlist.length; i++) {
        document.getElementById(vars2[ordernumlist[i]]).value = Math.floor(orderlistfinal[i]);
    };
//make sure investment points are right
    for (var i = 0; i < vars1.length; i++) {
        change (vars1[i], vars2[i]);
    };
    document.getElementById("orderft").innerHTML = orderfinal;
    document.getElementById("orderfa").innerHTML = Math.floor(orderfinal / ordernum);
    document.getElementById("orderfl").innerHTML = (ordernum * ((orderfinal / ordernum) - Math.floor(orderfinal / ordernum)));
};

for (var i = 0; i < vars1.length; i++) {
    document.getElementById(vars2[i]).addEventListener("keydown", check)
    document.getElementById(vars2[i]).addEventListener("focusout", check2)
};

function savepre() {
    pre = [];
    for (var i = 0; i < vars1.length; i++) {
        pre.push(document.getElementById(vars2[i]).value);
    };
    setpre();
};

function savepost() {
    post = [];
    for (var i = 0; i < vars1.length; i++) {
        post.push(document.getElementById(vars2[i]).value);
    };
};

function loadpre() {
    for (var i = 0; i < vars1.length; i++) {
        document.getElementById(vars2[i]).value = pre[i];
    };
    for (var i = 0; i < vars1.length; i++) {
        change (vars1[i], vars2[i]);
    };
};

function loadpost() {
    for (var i = 0; i < vars1.length; i++) {
        document.getElementById(vars2[i]).value = post[i];
    };
    for (var i = 0; i < vars1.length; i++) {
        change (vars1[i], vars2[i]);
    };
};

function exportshrine() {
    exportdata = [];
    for (var i = 0; i < vars1.length; i++) {
       exportdata.push(pre[i]);
    }
    for (var i = 0; i < vars1.length; i++) {
        exportdata.push(post[i]);
     }
    navigator.clipboard.writeText(JSON.stringify(exportdata));
};

function importshrine() {
    pre = [];
    post = [];
    importdata = window.prompt("data");
    var parsed = JSON.parse(importdata);
    for (var i = 0; i < (34); i++) {
        if (i < vars1.length) {
            pre.push(parsed[i]);
        } else {
            post.push(parsed[i]);
        }
    }
    setpre();
};

function setpre() {
    for (var i = 0; i < (pre.length); i++) {
        if (pre[i] === '') {
            document.getElementById("pre" + i).innerHTML = '0';
        } else {
            document.getElementById("pre" + i).innerHTML = pre[i];
        }
    };
};

function load() {
    for (var i = 0; i < vars1.length; i++) {
        pre.push(0);
        post.push(0);
        change(vars1[i], vars2[i]);
    };
    setpre();
    for (var i = 0; i < vars1.length; i++) {
        change (vars1[i], vars2[i]);
    };
    //worlds most inefficient way of updating the button
    if (localStorage.getItem("savepreshrineonorder") == 0 || localStorage.getItem("savepreshrineonorder") == 1) {
        savesetting();
        savesetting();
    } else {
        localStorage.setItem("savepreshrineonorder", 0) 
        document.getElementById("savesetting").innerHTML = "autosave on shrine: disabled"
    };
    sendnotif("setup finished!");
};

function savesetting() {
        if (localStorage.getItem("savepreshrineonorder") == 0) {
            localStorage.setItem("savepreshrineonorder", 1);
            document.getElementById("savesetting").innerHTML = "autosave on shrine: enabled"
        } else {
            localStorage.setItem("savepreshrineonorder", 0);
            document.getElementById("savesetting").innerHTML = "autosave on shrine: disabled"
        };
    };
