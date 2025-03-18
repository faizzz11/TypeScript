// const user: (string | number)[] = [5, "fm"]
let User: [string, number, boolean]

User = ["fm", 131, true]

let rgb: [number, number, number] = [1234315, 2321, 1232]

type User = [number, string]

const newUser: User = [121132, "example@google.com"]

newUser[1] = "faizzzz"
// newUser.push(true)  // this is not allowed in the new version of ts for tuples


export {}