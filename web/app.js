const pTag = document.getElementsByTagName('p')

for(p of pTag){
    console.log(p.innerText)
}

const name = document.getElementsByClassName('name')
console.log(name)

const link = document.querySelectorAll('p')

for(let p in link){
    console.log(p)
}