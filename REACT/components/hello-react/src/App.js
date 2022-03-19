import './App.css';
// 1 - 2.3
// import React from 'react';
import Header from './components/Header'; // Buyuk harf (html etiketlerinden ayirt edebilmek icin.)

// function App() {
//   // 1
//   // return React.createElement("div", null, "Hello");


//   // 2
//   return (
//     // 2.1
//     // <div>
//     //   <h1>Hello React</h1>
//     //   <Header />
//     //   {/* <Header>Merhaba</Header> */}
//     // </div>

//     // 2.2 - Optimum
//     <>
//       <Header />
//       <p className="xyz">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae
//         vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia
//         quibusdam deleniti eos cupiditate dolore doloribus!</p>
//       <label htmlFor="myinput">
//         Name
//         <input id="myinput"/>

//       </label>
//     </>

//     // 2.3
//     // <React.Fragment>
//     //   <Header />
//     //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae
//     //     vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia
//     //     quibusdam deleniti eos cupiditate dolore doloribus!</p>
//     // </React.Fragment>
//   );
// }
// export default App;

/**
 * Fonksiyonlar import edilirken buyuk harfle baslamali.
 * Fonksiyonlarda genelde buyuk harfle tanimlanir. html etiketlerinden ayrilmasi icin.
 * Kapsayici bir etiket bulunmali. Or.<div><Header /></div>
 * Fragment kullanimi yeterli. --> <></>--> JSX Fragment
 * Javascript icin ozel tanimli degisken isimlerinikullanmaktan kacinilir. class yerine className yazilabilir.
 * for yerine htmlFor kullanilir.
 */


// === Componentlerde Degisken Render Etmek ===
// const name = "John";
// const surname = "Doe";
// function App() {
//   return (
//     <>
//       {/* <h1>{name} {surname}</h1> */}
//       <h1>{` Benim adım ${name}, soyadım ${surname} `}</h1>
//     </>

//   );
// }
// export default App;

// === Kosullu Render Islemi ===
// const name = "John";
// const surname = "Doe";
// const isLoggedIn = true;
// function App() {
//   return (
//     <>
//       {/* 1
//       <h1>{isLoggedIn && ` Benim adım ${name}, soyadım ${surname} `}</h1>
//       {!isLoggedIn && 'Giriş Yapmadınız!'} */}

//       {/* 2 */}
//       <h1>{isLoggedIn ? ` Benim adım ${name}, soyadım ${surname} ` : 'Giriş Yapmadınız!'}</h1>
//     </>

//   );
// }
// export default App;


// ====Props====
// import User from './components/User';
// const name = "John";
// const surname = "Doe";
// const isLoggedIn = true;
// function App() {
//   return (
//     <>
//       {/* Kendi yazdigimiz componentlere property gecebiliriz. */}
//       <User name="Esra" surname={"Uluturk"} isLoggedIn={true} age={22} />
//       {/* <h1>{isLoggedIn ? ` Benim adım ${name}, soyadım ${surname} ` : 'Giriş Yapmadınız!'}</h1> */}

//     </>

//   );
// }
// export default App;

// ====Dongulerde "key" Prop====
// import User from './components/User';

// const friends = ["Ahmet", "Tayfun", "Gökhan", 'Ayşe', 'Fatma']

// function App() {
//   return (
//     <>
//       <User
//         name="Esra"
//         surname={"Uluturk"}
//         isLoggedIn={true}
//         age={22}
//         friends={friends}
//       />
//     </>

//   );
// }
// export default App;

// 2 - Array altindaki elemanlarda birer obje olsun.
// import User from './components/User';

// const friends = [
//   {
//     name:"Ahmet",
//   }, 
//   {
//     name:"Tayfun",
//   }, 
//   {
//     name:"Gökhan",
//   }, 
// ];

// function App() {
//   return (
//     <>
//       <User
//         name="Esra"
//         surname={"Uluturk"}
//         isLoggedIn={true}
//         age={22}
//         friends={friends}
//       />
//     </>

//   );
// }
// 3
import User from './components/User';

const friends = [
  {
    id:1,
    name:"Ahmet",
  }, 
  {
    id:2,
    name:"Tayfun",
  }, 
  {
    id:3,
    name:"Gökhan",
  }, 
];

function App() {
  return (
    <>
      <User
        name="Esra"
        surname={"Uluturk"}
        isLoggedIn={true}
        age={22}
        friends={friends}
        // propTypes - shape
        address={{
          title: 'Ataşehir/Istanbul',
          zip: 34755
        }}
      />
    </>

  );
}
export default App;