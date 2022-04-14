console.log("working");


let a = new Set();
function removeDuplicate(STR,N){
    for(let i=0;i<STR.length;i++){
        a.add(STR[i]);
    }
    let str = " ";
    for (let val of a.values()){
        str+=val;
    }
    console.log(str);
}
removeDuplicate("abcadeecfb");



let str = "abcadeecfb";
let p = str.split("");
let newMap = new Map();

for (let i = 0; i < p.length; i++) {
    let count = 1;
    for (let b = i + 1; b < p.length; b++) {
        if (p[i] === p[b]) {
            count++;
            p.splice(b, 1);
            b--;
        }
    }
    newMap.set(p[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}







