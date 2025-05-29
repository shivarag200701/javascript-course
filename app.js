let input = prompt("What would you like to do?").toLowerCase()
let toDos=[]
while(input !== "quit"){
    if(input === "new"){
        new_input = prompt("type yout toDo")
        toDos.push(new_input)
        console.log("In new")
    }
    else if(input === "list"){
        for(let toDo of toDos){
            console.log(toDo)
        }

    }
    else if(input === "delete"){
        delete_input = prompt("What do want to delete")
        index = toDos.indexOf(delete_input)
        if(index != -1){
            toDos.splice(index,1)
        }
        else{
            alert("Not present")
        }

    }
    input = prompt("What would you like to do?").toLowerCase()
}