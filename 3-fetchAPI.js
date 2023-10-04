//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")

// fetch('https://api.github.com/users').then((res)=>console.log(res))
// fetch('https://api.github.com/users')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
fetch('https://api.github.com/user')
.then((res)=> {
  if(!res.ok){
    throw new Error(`something went wrong ,${res.status} error code`)
  }
  return res.json()
})
.then((data)=> showGithubUsers(data))
.catch((err)=>{
  console.log(err)
  const article = document.querySelector(".users")

  article.innerHTML += `<h2> ${err} </h2>`
})

const showGithubUsers = (users)=>{
  const article = document.querySelector('.users')
  console.log(users)
  users.forEach((user) => {
    console.log(user)
    article.innerHTML +=`
    <h2 class="h5 " >${user.login}</h2>
    <img class="w-25 mb-4" src=${user.avatar_url} alt=""/>` 
  });
}

// fetch("https://api.github.com/users")
//   .then((res) => {
//     console.log(res)

//     //! Error Handling
//     // if (res.status>= 200 && res.status <=299)
//     if (!res.ok) {
//       throw new Error(`Something went wrong: ${res.status} `)
//     }
//     return res.json()
//   })
//   .then((data) => showGithubUsers(data))
//   .catch((hata) => {
//     console.log(hata)
//     const userArticle = document.querySelector(".users")
//     userArticle.innerHTML = `
//      <h2 class="text-warning display-6">${hata}</h2>
//     `
//   })

// const showGithubUsers = (users) => {
//   console.log(users)
//   const userArticle = document.querySelector(".users")

//   users.forEach((user) => {
//     //  console.log(user)
//     userArticle.innerHTML += `
//     <h2 class="h6 text-warning">${user.login}</h2>
//     <img class="w-25 mb-4" src=${user.avatar_url} alt="" />`
//   })
// }

// console.log("Bitti")
