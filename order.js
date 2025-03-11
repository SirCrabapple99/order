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

//horrible horrible worst way of going about this im sorry

function order() {
    var orderlist = [];
    var orderlistfinal = [];
    var ordernumlist = [];
    var ordertotal = 0;
    var orderfinal = 0;
    var ordernum = 0;
    var ordernumfinal = 0;
//get total order thing
    for (var i = 0; i < vars1.length; i++) {
        if (window[vars1[i]] >= 1) {
            ordertotal += window[vars1[i]];
            ordernum++;
            orderlist.push(window[vars1[i]]);
            ordernumlist.push(vars1.indexOf(vars1[i]));
        };
    };
//get and list all things
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if (orderlistfinal[i] <= orderlist[i] - 25) {
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
        if (orderlistfinal[i] <= orderlist[i] - 25) {
        } else {
            orderlistfinal[i] = (orderfinal / ordernumfinal);
        };
    };
//adjust final distribution amount and division amount accordingly
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if (orderlistfinal[i] < orderlist[i] - 25) {
            orderlistfinal[i] = orderlist[i] - 25;
            ordernumfinal--;
            orderfinal -= 25;
        } else {
        };
    };
//distribute the final amount
    for (var i = 0; i < ordernumlist.length; i++) {
        orderlistfinal.push(ordertotal / ordernum)
        if (orderlistfinal[i] <= orderlist[i] - 25) {
        } else {
            orderlistfinal[i] = (orderfinal / ordernumfinal);
        };
    };
//change the numbers accordingly
    for (var i = 0; i < ordernumlist.length; i++) {
        document.getElementById(vars2[ordernumlist[i]]).value = Math.floor(orderlistfinal[i]);
    };

    document.getElementById("orderft").innerHTML = orderfinal;
    document.getElementById("orderfa").innerHTML = Math.floor(orderfinal / ordernum);
    document.getElementById("orderfl").innerHTML = (ordernum * ((orderfinal / ordernum) - Math.floor(orderfinal / ordernum)));
};

for (var i = 0; i < vars1.length; i++) {
    document.getElementById(vars2[i]).addEventListener("keydown", check)
    document.getElementById(vars2[i]).addEventListener("focusout", check2)
};
