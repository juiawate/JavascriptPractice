
function areAnagrams(mainWord, checkWord) {
    /*
    var mainArr = mainWord.match(/\w/g).sort();
    var checkArr = checkWord.match(/\w/g).sort();

    for(var i = 0; i < mainArr.length; i++) {
        if(mainArr[i] !== checkArr[i]) return false;
    }
    return true;
    */

    var main = mainWord.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    var check = checkWord.replace(/[^a-zA-Z]+/g, '').toLowerCase();
    var mapObj = {};

    if(main.length !== check.length) return false;

    Array.prototype.forEach.call(main, function (m) {
        if(mapObj[m]) mapObj[m] = ++mapObj[m];
        else mapObj[m] = 1;
    });

    Array.prototype.forEach.call(check, function (m) {
        if(mapObj[m]) mapObj[m] = --mapObj[m];
        else return false;
    });

    for(var p in mapObj) {
        if(mapObj[p] !== 0) return false;
    }
    return true;
}