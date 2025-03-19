// console.log("TypeScript Sikh rha huu!!!!!!")
// console.log("duplicate krke dekh rha hu watch mode barabar chal rha hai ya nahi")

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "mira road"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {

    protected _courseCount = 1
    
    readonly city: string = "mira road"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("bsdk ek se jyada course hone chahiye")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const faizzz = new User("f@m.com","faizzz")
// faizzz.name 

// faizzz.deleteToken()