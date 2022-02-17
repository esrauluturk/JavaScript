//*** DOM a CSS Class Bilgisi Eklemek veya Çıkarmak ***
/**
 * JavaScrip’te CSS class'larını manipüle etmenin en iyi yollarından biri classList kullanmaktır. 
 * classList bir öğenin sınıf isimlerini DOMTokenList olarak döndürür. 
 * classList özelliği tüm modern browserlarda çalışır.
 */

let great = document.querySelector("#great")
//console.log(great.classList) //DOMTokenList [value: '']

//*** add() methodu ***

//classList e Ekleme 
great.classList.add("text-primary") //<h1 id="great" class="text-primary">Hello World!</h1>
great.classList.add("title") //<h1 id="great" class="text-primary title">Hello World!</h1>
console.log(great.classList)

//Birden fazla class ekleme
great.classList.add("new-info", "second-class", "third-class")
console.log(great.classList) //DOMTokenList(5) ['text-primary', 'title', 'new-info', 'second-class', 'third-class', value: 'text-primary title new-info second-class third-class']

//*** remove() methodu ***

//Class Silme
great.classList.remove("title")
console.log(great.classList) //DOMTokenList(4) ['text-primary', 'new-info', 'second-class', 'third-class', value: 'text-primary new-info second-class third-class']

//Birden fazla class silme
great.classList.remove("second-class","third-class")

//Olmayan bir class ı silmeye calısırsak hata vermez.
great.classList.remove("new-infoooo")
console.log(great.classList)

//*** item() methodu ***

//item() : HTML de class'ı verilen index sırasına göre döndürür. Eğer index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa undefined döner.
great.classList.item(0) //great id'li ogenin ilk class ı //text-primary

//*** contains() methodu ***

//contains() : Element verilen class'ı içeriyorsa true, içermiyorsa false döner. Bu sayede bir işlem yaptırmadan önce kontrol edebiliriz.
great.classList.contains('warning') //false

//*** toggle() methodu ***

//Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir.
//Bu metodu kullanmadan önce contains() metodu ile sınıfın var olup olmadığını manuel olarak kontrol etmek gerekir.
//Eğer class varsa siliyor yoksa ekliyor.
great.classList.toggle('visible') //false //visible ekledi
great.classList.toggle('text-primary') //true //text-primary sildi

//*** replace() ***

//replace() : Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanılır.
great.classList.replace('new-info','block')
console.log(great.classList) //DOMTokenList(2) ['block', 'visible', value: 'block visible']

//*** length ***

//length : Bir öğede bulunan sınıf sayısını bilmemizi sağlar.
great.classList.length; //2
