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

// numbers = [1,2,3,4,5,6,7,8,9,10]

// const odd = numbers.filter((number)=>{
//     return number % 2 === 1
// })

exams = [80,71,75,76,99]

const pass = exams.every( (score) => {
    return score > 70
})

const A = exams.some((score) => {
    return score >90
})

//finding min in array
minScore = exams.reduce((min,score) => {
    if(score < min){
        return score
    }
    else{
        return min
    }
})

//finding total
total = exams.reduce((sum, score) => {
    return sum + score
})

//avg score

avg = total / exams.length


maxRated = movies.reduce((bestMovie,currMovie) =>{
    if(currMovie.score > bestMovie.score){
        return currMovie
    }
    else{
        return bestMovie
    }
})

evens = [2,4,6,8,18]

sumNew = evens.reduce((sum,num) => {return sum + num},100)


const person = {
    firstName: "Shiva Raghav",
    lastName: "Rajasekar",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this.fullName())
        },3000)
    }

}

// default Params
function rollDie(numSides = 6){

    return Math.floor(Math.random() * numSides) + 1

}

function greet(name="Jane Doe", greeting="Hey there" ,punc ="!"){
    console.log(`${name}, ${greeting} ${punc}`)
}

nums=[1,7,56,45,90,1445,24143124]
//Spread
console.log(Math.max(...nums))

console.log(..."Hello")
console.log(...nums)

//spread with array literals

cats =["soap","mighty","buubles"]
dogs=["sohan","boogers"]

allPets = [...cats,...dogs]
console.log(allPets)

//spread with objects

const formInfo = {
    name:"freedy",
    password:"asdadad",
    userName:"nick123"
}

const newForm = {...formInfo,Id:1234, isAdmin:false}
console.log(newForm)