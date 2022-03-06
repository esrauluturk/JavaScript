const arguments = process.argv.slice(2);
const PI = Math.PI;
console.log(PI)
function areaCircle(radius) {
    let area = Math.ceil(PI * radius * radius);
    console.log('Alan: ' + area + ' Yaricap: ' + radius);
}
areaCircle(arguments[0] * 1)