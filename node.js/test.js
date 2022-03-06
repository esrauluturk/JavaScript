// Terminale "node" yazarak REPL ortamina girilir.
/**
 * --- REPL ---
 * Nasıl ki Windows işletim sistemimizin terminal ekranı "Komut Sistemi" ise benzer şekilde Node.js Javascript çalışma ortamının da bir terminal ekranı vardır 
 * ve Node REPL olarak adlandırılır. REPL, Read - Eval - Print - Loop kelimelerinin baş harflerinden oluşmaktadır
 * ve bizlere Node.js Javascript çalışma ortamında Javascript kodlarını çalıştırabileceğimiz bir komut satırı ortamı sunar.
 */
/**
 * REPL
 * Shell gibi dusunulebilir.
 * alert() tanimli degil.
 * console.log('Onemli bir bilgi')
 * console.clear() --console temizler
 * Examples:
 * let yourName = 'Esaret'
 * console.log(yourName)
 * 
 * Class tanimi yapilabilir:
 * class Employee{
 *   sayName(name){
 *      console.log(`Benim Adım: ${name}`)
 *   }
 * }
 * let employee1 = new Employee();
 * employee1.name = 'Esra'
 * 'Mustafa'
 * employee1
 * Employee{ name: 'Mustafa' }
 * Notes
 * Fonksiyon, Class oluşturmak, Classlardan nesneler türetmek gibi tüm klasik Javascript işlemlerini yapabiliriz.
 */
// 1
console.log('An important information from TEST.JS')
// test.js dosyasini repl icine almasi icin REPL da;
// Input : .load test.js
// Output : Aciklama satirlariyla birlikte kod ve kodun ciktisini verir.


/**
 * --- REPL Komutları - Açıklamaları ---

help - Tüm komutları listeler.

break - Çok satırlı ifadeden çıkar.

ctrl + c - Çalışan komutu durdurur.

ctrl + d - REPL ortamını sonlandırır.

.save dosya_adi - REPL ortamındaki kodları dosyaya kaydeder.

.load dosya_adi - Dosyadaki kodları REPL ortamına alır.

.exit
*/


