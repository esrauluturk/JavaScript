/**
 * State: Componentlerimiz uzerinde degerinin degisme potansiyeli olan 
 * butun verileri tutan bir js objesi olarak nitelendirilebilir. 
 * state degisince ilgili component render edilerek degisim ekrana yansitilmis olur.
 */

// 1
// useState adinda bir hook var.
// import { useState } from "react";
// function App() {
//   // isim verisini tutan bir state tanimlayalim.
//   // setName, state degerini degistirir.

//   // State Tanimlama
//   const [name, setName] = useState('JohnDoe');// Camel Case
//   const [age, setAge] = useState(29); // number

//   console.log(age, name); // Herhangi bir state guncellendigi anda render (return) islemi bastan yapilir. Yani goruntu yeniden olusturulur.
//   // Cunku state degisti.
//   // Bir defa calisir. jsx

//   // State Guncelleme
//   return (
//     <div className="App">
//       <h1>Merhaba! {name}</h1>
//       <h2>{age}</h2>
//       <button onClick={() => setName("LoremIpsum")}>Change Name</button>
//       <button onClick={() => setAge(25)}>Change Age</button>
//     </div>
//   );

// }

// 2 - Array States
// State bir array olarak tanimlayip - guncelleme
// !!!! State baslangicta hangi veri tipinde tanimlandigi ONEMLI. Dikkat edilmeli.
// import { useState } from "react";
// function App() {

//   const [name, setName] = useState('JohnDoe');// Camel Case
//   const [age, setAge] = useState(29); // number
//   // Array States
//   const [friends, setFriends] = useState(["Jude", "June"]);

//   // console.log(age, name);

//   // State Guncelleme
//   return (
//     <div className="App">
//       <h1>Merhaba! {name}</h1>
//       <h2>{age}</h2>
//       <button onClick={() => setName("LoremIpsum")}>Change Name</button>
//       <button onClick={() => setAge(25)}>Change Age</button>

//       <hr />
//       <br></br>
//       {/* Eger bir listeleme islemi yapiyorsak return ettigimiz en distaki etikete bir key(index) vermemiz gerekir. */}
//       <h2>Friends</h2>
//       {
//         friends.map((friend, index) => (
//           <div key={index}>{friend}</div>
//         ))
//       }
//       {/* friends icine daha onceki degerleri de koruyarak bir atama yapmamiz gerekir. Ne kadar basarsan o kadar ekler.*/}
//       {/* <button onClick={() => setFriends([...friends, "Dolor"])}>Add new friends</button> */}
//       {/* Basina eklemek icin */}
//       <button onClick={() => setFriends(["Dolor", ...friends])}>Add new friends</button>
//       {/*Onceki verileri basmaz. Sadece "Dolor" yazar.*/}
//       {/* <button onClick={() => setFriends(["Dolor"])}>Add new friends</button> */}

//     </div>
//   );

// }

// 3 - Object States
import { useState } from "react";
function App() {

  const [name, setName] = useState('JohnDoe');// Camel Case
  const [age, setAge] = useState(29); // number
  const [friends, setFriends] = useState(["Jude", "June"]);
  // Object states
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34756 });

  return (
    <div className="App">
      <h1>Merhaba! {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("LoremIpsum")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))
      }
      <br />
      <button onClick={() => setFriends(["Dolor", ...friends])}>Add new friends</button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      {/* <button onClick={() => setAddress({ title: "Ankara", zip: 44444 })}>Change the address</button> */}
      {/* zip yazmayip sadece title dersek ekrana sadece title basar. zip tamamen yok olur. E.g. */}
      {/* <button onClick={() => setAddress({ title: "Ankara"})}>Change the address</button> */}
      {/* Mesela sadece title degissin zip ayni kalsin. */}
      {/* <button onClick={() => setAddress({ ...address, title: "Ankara" })}>Change the address</button> */}
      {/* Hem title hem zip degistirme alternatif. Eski bilgileri tutmak: ...address */}
      <button onClick={() => setAddress({ ...address, zip: 44444, title: "Ankara" })}>Change the address</button>

    </div>
  );

}

export default App;
