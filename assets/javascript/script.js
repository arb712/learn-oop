let data = [];
axios.get('https://api.github.com/users/arb712/following')
    .then((response)=>{
        console.log(response)
        const listHTML = document.querySelector("#Data>ol")
        data = response.data;

        response.data.forEach(isi => {
            const {id,login} = isi;
            const isiHTML = `
            <li>
            ID User : ${id}
            <br>
            Nama User : ${login}
            </li>`;
            listHTML.innerHTML += isiHTML;
        }); 
        // id,login(user),avatar_url,
    })
    .catch((error)=>{
        console.log(error);
    })

// let data=[];
// const URL = 'https://api.github.com/users/arb712/following';
//     axios
//     .get(URL)
//     .then(response =>{
//         console.log(response)
//         const listHTML = document.querySelector("#content>#conRow>#Data>ol")
//         data = response.data;

//         response.data.forEach(isi => {
//             const {id,login,avatar_url} = isi;
//             const isiHTML = `<li>
//             ${avatar_url}
//             <br>
//             ID User : ${id}
//             Nama User : ${login}
//             </li>`;
//             listHTML.innerHTML += isiHTML;
//         }); 
//         // id,login(user),avatar_url,
//     })
//     .catch(error=>{
//         console.log(error)
//     })

// fetch('https://api.github.com/users/arb712/following')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//         const {
//             id,
//             login,
//             avatar_url
//         } = data;
//         const contentHTML = `<li>
//                     ${avatar_url}
//                     <br>
//                     ID User : ${id}
//                     Nama User : ${login}
//                     </li>`;
//                     document.getElementById('#Data').innerHTML += contentHTML;
//     })


