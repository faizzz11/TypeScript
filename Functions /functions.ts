function addFive(num: number): number{
    return num + 5
   //return "hello"
  // function addFive(num: number(yeh number hona chahiye hamesha)): number(yeh function hamesha number return karegaaaa)
}

function getUpper(val: string){
   return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addFive(34)
getUpper("faizzzz")

signUpUser("faizz", "faiz@g.com", true)
loginUser("f", "faizz@xxx.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "404 error"
// }

const getHello = (s: string):string => {
   return ""
}

const BGMI = ["goblin", "neyo", "hector"]
// const BGMI = [1, 2, 3]

BGMI.map((pubg): string => {
   return `hero is ${pubg}`
})


function consoleError(errmsg: string): void{
   console.log(errmsg);
   
}
function handleError(errmsg: string): never{
   throw new Error(errmsg);
   
}



export {}