var a = [1, 3, 2, 6, 1, 2];
var k = 3;


for (i = 0; i < a.length - 1; i++) {
    for ( j = i + 1; j < a.length; j++) {
        if ((a[i] + a[j]) % k == 0) {
            console.log(`(${i}, ${j}) `);
        }
    }
}