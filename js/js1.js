// 数组去重  方法一：
var arr = ['a','v','b','c','a','c','b','d'];
function fn1(a){
    var brr = [];
    for(var i=0;i<a.length;i++){
        if(brr.indexOf(a[i]) === -1){
            brr.push(a[i]);
        }
    }
    return '原数组：'+ a + '  去重后的数组：' + brr;
}
console.log(fn1(arr));