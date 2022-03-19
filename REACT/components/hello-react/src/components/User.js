// 1.Yol
// function User(props) {
//     // console.log(props)
//     // 1
//     // return <h1>Selam {props.name} {props.surname}</h1>
//     // 2
//     return (
//         <h1>
//             {
//                 props.isLoggedIn ? `${props.name} ${props.surname}` : 'Giriş Yapmadınız!'
//             }
//         </h1>
//     )

// }
// 2.Yol , props olmadan
// function User({ name, surname, age, isLoggedIn }) { // Object gelecek
//     return (
//         <h1>
//             {
//                 isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız!'
//             }
//         </h1>
//     )

// }


// ====Dongulerde key prop
// function User({ name, surname, age, isLoggedIn, friends }) { // Object gelecek
//     return (
//         <>
//         <h1>{isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız!'}</h1>
//         {/* Unique key lazim oldugu icin index kullandik. En distaki elemana vermek gerekir. */}
//         {friends.map((friend, index) =>(
//             <div key={index}>
//                 {index} - {friend}
//             </div>
//         ))}
//         </>

//     )

// }
// 2 - obje cagirma - friend.name
// function User({ name, surname, age, isLoggedIn, friends }) { // Object gelecek
//     return (
//         <>
//         <h1>{isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız!'}</h1>
//         {friends.map((friend, index) =>(
//             <div key={index}>
//                 {index} - {friend.name}
//             </div>
//         ))}
//         </>

//     )

// }
// 3 -index kullanmadan -id -return
// function User({ name, surname, age, isLoggedIn, friends }) { // Object gelecek
//     return (
//         <>
//             <h1>{isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız!'}</h1>
//             {friends.map((friend) => {
//                 // Birden fazla islem yapmak icin.
//                 return <div key={friend.id}>{friend.name}</div>;
//             })}
//         </>

//     )

// }
// friends.map(friend => <div key={friend.id}>{friend.name}</div> )



// ==== Prop Types
// Componentlere gonderdigimiz propertylerin tiplerini belirleyebilecegimiz arac : Prop Types
// import PropTypes from 'prop-types';
// function User({ name, surname, age, isLoggedIn, friends, address }) { // Object gelecek
//     return (
//         <>
//             <h1>{isLoggedIn ? `${name} ${surname} (${age})` : 'Giriş Yapmadınız!'}</h1>
//             {/* propTypes - shape */}
//             {address.title} {address.zip}
//             <br />
//             <br />
//             {friends &&              // friends varsa. gonderilmezse hata almayi engelledik.
//                 friends.map((friend) => (

//                     <div key={friend.id}>{friend.name}</div>
//                 ))}
//         </>

//     )
// }


// User.propTypes = {
//     // name: PropTypes.string,
//     // Zorunlu alan belirtmek - isRequired
//     name: PropTypes.string.isRequired, // name gondermezsek hata aliriz.
//     surname: PropTypes.string,
//     isLoggedIn: PropTypes.bool,
//     // age: PropTypes.number,
//     // Birden fazla veri tipinin gonderilmesine olanak tanimak icin - oneOfType
//     age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     friends: PropTypes.array,
//     // propTypes - shape
       // Belirli bir sekilde nesne tanimi yapmayi saglar.
//     address: PropTypes.shape({
//         title: PropTypes.string,
//         zip: PropTypes.number,
//     })
// };

// ========defaultProps()

import PropTypes from 'prop-types';
function User({ name, surname, age, isLoggedIn, friends, address }) { // Object gelecek
    if(!isLoggedIn){
        return <div>Giriş Yapmadınız!</div>
    }
    return (
        <>
            <h1>{ `${name} ${surname} (${age})`}</h1>
            {/* propTypes - shape */}
            {address.title} {address.zip}
            <br />
            <br />
            {friends &&              // friends varsa. gonderilmezse hata almayi engelledik.
                friends.map((friend) => (

                    <div key={friend.id}>{friend.name}</div>
                ))}
        </>

    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
};

// Herhangi bir tanim yapilmamis bir prop a varsayilan bir deger de verebiliriz.
// Eger gonderdigimiz bir deger varsa defaultProps a bakilmaz.
User.defaultProps = {
    name: 'isimsiz',
    isLoggedIn: false, // Bircok hatanin onune gecmede kullanilabilir.(bu property gonderilmediginde default bir atama yapip devam eder.)
}

export default User;

