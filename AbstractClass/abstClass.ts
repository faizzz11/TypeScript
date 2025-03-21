abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getBrain(): void
    getReelTime(): number{
        //some complex calculation
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getBrain(): void {
            console.log("Brain");
            
        }
}

const fm = new Instagram("bgmi", "bgmi", 7)

fm.getReelTime()

export {}