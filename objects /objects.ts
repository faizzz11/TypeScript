// const User = {
//     name: "faizzz",
//     email: "faizzz@xx.com",
//     isAvtive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "faizzz", isPaid: false, email: "h@h.com"}

// createUser(newUser)



// function createCourse():{name: string, price: number}{
//     return {name: "NextJS", price: 6969}
// }


///////////// type alias

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "faizz", email: "f@.com", isActive: true}
// }

// createUser({name: "faizz", email: "f@.com", isActive: true})



type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number // optional hai yeh value nhi bhi hoga toh bhi chalega
}

let myUser: User = {
    _id: "245",
    name: "faizz",
    email: "faizz@xx.com",
    isActive: false
}

myUser.email = "faizz@gmail.com"
// myUser._id = "fdfhg"


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// this is combining multiple types into one 
type cardDetails = cardNumber & cardDate & {  
    cvv: number
}
console.log(myUser.email);

export {}