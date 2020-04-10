//Using Fetch
const githubURI = 'https://api.github.com/users/arb712/following'
fetch(githubURI).then(res =>{
    return res.json
}).then(data=>{
    console.log(data);
}).catch(error =>{
    console.log(error)
})
//Using Axios

// axios
//     .get(githubURI)
//     .then(res =>{
//         console.log(res)
//     })
//     .catch(error=>{
//         console.log(error)
//     })