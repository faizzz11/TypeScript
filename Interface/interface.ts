interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const faizzz: Admin = { dbId: 22, email: "f@f.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "faizzz69", off: 69) => {
    return 69
}
}
faizzz.email = "f@fm.com"
// faizzz.dbId = 33