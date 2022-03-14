import axios from "axios";
// 1
// const getData = async (user_id) => {
//     const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);

//     const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);
//     console.log("User:", user, "Posts:", posts)
// }

// export default getData;

// 2 - Anonymous
// export default (async (user_id) => {

//     const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
//     const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`);

//     console.log("User:", user, "Posts:", posts)
// });


// 3 - Promise
const getData = (user_id) => {
    return new Promise(async (resolve, reject) => {

        const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`); // Tum postları getirir.

        // const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id); // 1 tane post getirir.

        resolve(["User : ", user, "Posts : ", posts]);
        reject("Hatalı");
    })
};

export default getData;