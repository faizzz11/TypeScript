let score: number | string = 743
score = 21
score = "chakkaaaa"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let faizzz: User | Admin = {name: "faizzz", id: 4444432}

faizzz = {username: "hc", id: 1342221}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(43)
getDbId("12")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLocaleUpperCase()
    }
  
}

//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "bhar" | "bichwali" | "khidki"

seatAllotment = "bhar"
// seatAllotment = "crew"


export {}