// FORM SUBMIT
//Her defasinda islem yapmasini engellemek
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

//Default islemi engelledik
function formSubmit(event) {
    event.preventDefault() //GET ile olan islemi yapma. Butona bassakta http://127.0.0.1:5500/index.html?score=-1 sabit kaliyor
    console.log("İşlem Gerçekleşti");
}

/**
 * Form içinde bulundurduğu form elementlerinin name'leri sayesinde değerlerini alıp bu değerlerle işlem yapmanıza olanak sağlayan bir yapıdır.

Form;

<form action="siteadi" method="get|post">*form elementleri*</form>
şeklinde tanımlanır.

Genellikle backend'e istek yapılacağı zaman kullanılır.(Veri göndermek gibi)

En önemli parametresi method parametresidir. Method, "post" veya "get" olmak üzere iki türlü değer alabilir.

GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. 
Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.

Örnek;

<form method="GET"><input type="text" name="yas" placeholder="Yaşınızı giriniz." /><button type="submit">Gönder</button>
</form>

UYARI: Get metodu önemsiz verilerde kullanılmalıdır, kullanıcı adı, şifre gibi bilgilerin bu method ile gönderilmesi uygun değildir.

POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.

Örnek;

<form method="POST"><input type="email" name="email" placeholder="Email adresinizi giriniz." /><button type="submit">Gönder</button>
</form>
 */

/**
 * Giriş (Input) elementi/etiketi
Form oluşturulduktan sonra içerisine text, buton, şifre vb. tiplerinde input (giriş) elementleri oluşturulur.
Bu input tipleri ile tasarımcının isteğine göre formlar tasarlanabilir. Şimdi input elementini ve en çok kullanılan önemli tiplerini inceleyelim.

Temel Input Tipleri
<input type="text">
Input(giriş) elementi text tipinde belirlenir. Yani klasik textbox kullanımı olarak ifade etsek yanlış olmaz. Örn; kullanıcı adı girişi için idealdir.

<input type="password">
Şifre tipinde veri girişi için kullanılır. Textbox’a girilen ifadeler “*” şeklinde gizlenerek gösterilir.

<input type="radio"> 
Radio button tipinde, istenilen verileri seçmek için geliştirilen giriş yöntemidir.

<input type="checkbox">
Checkbox tipinde, onay gerektiren durumlarda kullanılması için geliştirilen giriş yöntemidir.

<input type="button"> 
Klasik buton oluşturur. Varsayılan olarak herhangi bir işlem yapmaz. JavaScript vb. programlama dilleri ile birlikte işlevsel hale gelir.

<input type="submit">
Form içerisindeki elementlere girilen verileri, gönderme işlemini yapar. action ile açılacak yeni sayfaya veya mevcut sayfanın kendisine,
get veya post metoduna göre değişecek şekilde veri gönderme işlevini gerçekleştirir.
methot="get" kullanılmışsa action durumunda göre sayfanın adres çubuğundaki url’in sonunda, methot="post" kullanılmışsa sayfanın arka planında veriler saklanır.

<input type="reset">
Buton tipinde bir nesne oluşturur. Form içerisindeki elementlere veriler girilmiş halde iken reset’e tıklandığında görünen tüm verileri temizler 
ve elementleri ilk haline getirir.

<input type="color">
Renk çeşitlerini tasarımcıya sunan ve seçimini sağlayan giriş tipidir.

<input type="date"> 
Tarayıcıda tarih gösterimini sağlayan tiptir. gg.aa.yyyy varsayılan formatında görünür.

<input type="email">
Sadece e-mail girişi yapabilmek için kullanılır. E-mail formatı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir.
Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="number">
Sadece sayı girişi yapabilmek için kullanılır. Sayı dışındaki girişlerde, düzgün veri girişi yapılması gerektiği yönünde uyarı vermektedir.
Safari dışındaki tüm tarayıcılar desteklemektedir.

<input type="range">
Bir aralık belirtmemiz gerektiğinde, bu giriş tipini kullanmamız gerekmektedir. Dizi şeklinde veri gösterimi yapar. 
min="başlangıç değer" ve max="son değer" ile aralık belirlemesi yapılır. Tüm tarayıcılar tarafından desteklenmektedir.

<input type="search">
Arama yapmamızı sağlayan giriş tipidir. Aktif olacak form içerisinde, girilecek olan veri aranır. Sadece Google Chrome ve Safari tarafından desteklenmektedir.

<input type="time">
Tarayıcıda saat gösterimini sağlayan tiptir. hh.mm varsayılan formatında görünür. Element üzerinde saat belirlemesi yapılması mümkündür. 
İnternet Explorer ve Mozilla Firefox dışındaki tarayıcılar tarafından desteklenmektedir.
 */

/**
 * onSubmit ve onChange Eventleri
   onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.

   onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
 */
//E.g.
var username;
var password;
function handleSubmit(e) {
    e.preventDefault();
    console.log("username:" + username + "-" + "password:" + password);
}
function handleChange(e) {
    if (e.target.name === "username") {
        username = e.target.value;
    }
    if (e.target.name === "password") {
        password = e.target.value;
    }
}
/**
 * örneğimizde onSubmit event'i için handleSubmit, onChange event'i için handleChange function'larını kullanıyoruz. 
 * handleChange'e ve handleSubmit'e tetiklenen değeri yani event'i gönderiyoruz ve function'larımızda karşılıyoruz. 
 * handleChange'te (e.target.name) hangi input'un değerini okuduğumuzu e.target.value ise o input'un value'sunu verir.
 * Bu değerleri globalde tanımladığımız değişkenlere atadık. 
 * Böylece submit olduğumuz anda bu değerleri artık kullanabilir duruma geldik. Bu değer ile artık formumuz submit olduğunda ne yapmak istiyorsak onu yapabiliriz.
 */

/**
 *  Form Özellikleri
 * Formlar kullanıcıdan bilgi almak için kullanılırlar.
 * Formların en basit örneği olan input ile başlayalım. Tek satırlık numerik, harf veya ikisinin kombini olarak da girilebilir.
ACTION: action = Formunuzu submit ettikten sonra nasıl bir aksiyon alacağını belirlersiniz. 
Genellikle formlarda gönderi işlemi tamamlandıktan sonra form datası server'a gönderilir. 
Fakat server haricinde kendimiz bu form datasını başka bir dosyaya atayabiliriz. 
Örneğimizde görüleceği gibi dosyamız "script.js" adlı bir dosyaya gönderiliyor. Form datasının yönetimi bundan sonra bu dosya üzerinden yürütülür.
Örnek kullanım <form action="/script.js"></form>

METHOD: method = Form datanızın hangi methodla gönderileceğine karar verir. "Get" veya "Post" request olarak. 
Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır.
Örnek kullanım <form action="/script.js" method="get">" veya "<form action="/script.js" method="post">

AUTOCOMPLETE: autocomplete = Ingilizce isminden de anlaşılacağı üzere formunuzda otomatik tamamlama özelliğini açıp veya kapatmak için işinize yarar. 
Bu özelliği açmak daha önceki entry'lerinize göre formun tamamlama yapmasını sağlayacaktır.
Örnek kullanım <form action="/script.js" autocomplete="on"> veya <form action="/script.js" autocomplete="off">

NOVALIDATE: novalidate = Aktif olduğu sürece gönderdiğiniz form datanızın otomatik olarak doğrulanmamasını söyler.
Örnek kullanım "<form action="/my_script.js" novalidate>"

Form tag'lerinizde birden fazla element bulundurabilirsiniz. Bunlardan olmazsa olmazı input'lar & butonlardır. Input elemanlarının başlıca özellikleri olarak ;

fname = Görünecek olan yazıyı belirler. Bu yazı, adete bir html etiketi gibi görünür.

type = Bu kısımda formunuzun text/numerik bir form olacağına karar verirsiniz.

name = Input'unuzun name özelliğini belirlersiniz. Genelde isimlendirme küçük harf verilir backend kısmına uygun olması için

value = Input'taki aktif görünecek olan yazı için verilir. Örnek olarak butonların üzerindeki yazı gibi düşünebiliriz.
 */