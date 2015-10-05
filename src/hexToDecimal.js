
function hexToDec(hexNum) {
    var mapArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var decNum = 0;
    Array.prototype.slice.call(hexNum).reverse().forEach(function (d, i) {
        d = mapArr.indexOf(d);
        decNum += (d * Math.pow(16,i));
    });
    return decNum;
}