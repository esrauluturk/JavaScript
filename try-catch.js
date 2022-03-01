// TRY CATCH
/**
 * try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, 
 * catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.
 */
let products;

try {
    products.forEach(item => console.log(item));
} catch (e) {
    console.log("error : ", e)
    console.error("Hata");
    //throw "Hatalı Durum Oluştu." // Eklendiginde altindaki satirlari gormez.
    products = [1, 2, 3]
    products.forEach(item => console.log(item));
}

console.log("Hata Yönetimi Düzgün Çalışıyor.");
let info = "kodluyoruz"
console.log(info)

/**
 * THROW ile istisnalar olusturma
 * Normalde kod çalışırken bir hata oluştuğunda, JavaScript durur ve bir hata mesajı oluşturur. Bu duruma JavaScript bir istisna atar (bir hata atar) olarak adlandırılır.
 * JavaScript aslında iki özelliğe sahip bir Error nesnesi oluşturacaktır: isim ve mesaj.
 * !!!
 * throw ifadesi bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak throw ile bir istisna (hata) atılabilir.
 * throw "Çok büyük";    // Çok büyük hatası at, oluştur
 * throw 500;            // 500 numarası hatasını at, oluştur
 * 
 * Sonuç olarak throw ile birlikte try...catch ifadesini kullanırsak, program akışını kontrol edebilir ve özel hata mesajları oluşturabiliriz.
 */

//Examples
/*
‘dogumTarihi’ adında bir input nesnesi oluşturalım ve butona tıkladığımızda eğer ‘dogumTarihi’ adındaki input nesnemize bir şey girilmediyse 
throw ifadesiyle kolay bir şekilde exception oluşturabiliriz.*/
function valid() {
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    } catch (err) {
        alert(err);
    }
}