var arr = [10,9,8,7,6,5,4,3,2,1]
//从小到大排序
//method1
for (var i = 0; i < arr.length - 1; i++) {   // 比较的趟数
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
        }
    }
}

//method2
/*var i = 0;
while (i < arr.length - 1) {
    var j = 0;
    while (j < arr.length - 1 - i) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
        }
        j++
    }
    i++
}*/
/*for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j + 1]
            arr[j + 1] = arr[j]
            arr[j] = temp
        }
    }
}*/

console.log(arr)
