// 数组去重  方法二：
var arr = ['a','v','b','c','a','c','b','d'];
function fn2(a){
    var brr = [];
    var obj = {};
    for(var i=0;i<a.length;i++){
        if(!obj[a[i]]){
            brr.push(a[i])
            obj[a[i]] = 1
        }
    }
    return brr;
}
console.log(fn2(arr));