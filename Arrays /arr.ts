const superHeros: string[] = []  // string[] - it defines that superheros is an array of string
// const heroPower: number[] = []
const heroPower: Array<number> = []  // we can also define array in this form too 
superHeros.push("shrey mishra")
heroPower.push(2)


type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({name: "", isActive: true})

//array inside an array
const MLModels: number[][] = [
    [2432, 54563, 3432332],
    []
]

export {}

