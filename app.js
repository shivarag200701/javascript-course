// let input = prompt("What would you like to do?").toLowerCase()
// let toDos=[]
// while(input !== "quit"){
//     if(input === "new"){
//         new_input = prompt("type yout toDo")
//         toDos.push(new_input)
//         console.log("In new")
//     }
//     else if(input === "list"){
//         for(let toDo of toDos){
//             console.log(toDo)
//         }

//     }
//     else if(input === "delete"){
//         delete_input = prompt("What do want to delete")
//         index = toDos.indexOf(delete_input)
//         if(index != -1){
//             toDos.splice(index,1)
//         }
//         else{
//             alert("Not present")
//         }

//     }
//     input = prompt("What would you like to do?").toLowerCase()
// }

// try-catch
// try {
//     hello.toUpperCase()
// }
// catch{
//     console.log("ERROR")
// }


// function yell(msg){
//     try{
//         msg.toUpperCase().repeat(5)
//     } catch (e) {
//         console.log(e)
//         console.log("Pass a String")
//     }
// }

// numbers = [0,1,2,3,4,5,6,7,8,9,10]

// function print(element){
//     console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function(el){
//     console.log(el)
// })

movies = [
    {
        title: "Kaapaan",
        score: 30
    },
    {
        title: "Singam",
        score: 70
    },
    {
        title: "Pizza",
        score: 95
    }
]

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`)
// })

// texts = ["shiva", "minal","sohan"]

// const caps = texts.map(function(t){
//     return t.toUpperCase()
// })

// console.log(caps)

// movieName = movies.map(function(movie){
//     return movie.title
// })

// const add = (x) =>{
//     return x + y
// }

// const add = (x,y) => (x+y)


// const newMovies = movies.map((movie) => {
//     return movie.title
// })

// setTimeout(()=>{
//     console.log("Helooooo!!!!")
// },3000)

// setInterval(() => {
//     console.log(Math.random())
    
// }, 2000);


// const id = setInterval(() => {
//     console.log(Math.random())
    
// }, 2000);

numbers = [1,2,3,4,5,6,7,8,9,10]

const odd = numbers.filter((number)=>{
    return number % 2 === 1
})
