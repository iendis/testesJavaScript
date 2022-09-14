const myPromise = new Promise((resolve,reject) => {
    const nome = "Iendis"

    if (nome === "Iendis"){
    resolve("Usuário Iendis encontrado!")
    } else {
        reject("O usuário não foi encontrado!")
    }
})

myPromise.then((data) =>{
    console.log(data)
})

const myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(console.log("Resolvida"))
    }, 2000);
});