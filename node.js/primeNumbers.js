// Iki sayi arasindaki asal sayilari gosterme
// 2
const arguments = process.argv.slice(2); // e.g. Terminal Input: node primeNumbers 8 12
function showPrimeNumbers(lowNumber, highNumber) {
    for (let i = lowNumber; i < highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0 && j !== i) isPrime = false

        }
        if (isPrime) {
            console.log(i);
        }

    }
}
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1) // Array string geri donus yaptigi icin 1 ile carparak kisa yoldan Number veri tipine donusturduk.
// showPrimeNumbers(2, 9)

// ***Montaigne Denemeler - 1***

// console.log(process) // Node.js o anki islemiyle ilgili bilgi verir.

// console.log(process.argv) // Array doner: Programi calistirirken kullandigimiz parametreler

// Terminalden donen array e 3. bir parametre verilebilir. // e.g. node primeNumbers test

// console.log(process.argv.slice(2)) // [ 'test' ]

// Terminal input : node primeNumbers 2 11 -> Output: [ '2', '11' ] (slice)

/**
 * Parametre; fonksiyon olustururken kullandigimiz degerler
 * Argüman; fonksiyon calistirilirken kullanilan degerler
 * 
 * test.js dosyasını node test.js "one two three" komutuyla çalıştırdığımızda, (rakamlar satır sırasını gösteriyor)
Output:
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
 */
