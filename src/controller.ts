import {v4 as uuidv4} from 'uuid';

// write a disclaimer to notify users of the server usage to the generateId function
const noticeText:string = 'Howdy and welcome to generate my id! \
Please not that in order to ensure a scalable and seamless service for everyone to use, \
requests (number of ids) to be generated are throttled to 500 \
so if you plan on generating 1000 ids, you might get just half of that 😢  \
otherwise you are good to go!  😍'

export class MicroServiceController {

    constructor(){}
   
    /**
     * 
     * @param { number } start the starting point for the number of ids to be generated
     * @returns { Array<string> } the array of sequential ids generated
     */
    public generateIds(start:number){
        console.log(noticeText)
        let finalStart = start
        try {
            
            if (start > 500) {
                finalStart = 500
            }

            let sequentialIdArr: string[] = [];
            for (let index = 0; index < finalStart; index++) {
                sequentialIdArr.push(uuidv4())
            }
            return sequentialIdArr
        } catch (error) {
            console.error(error)
            throw new Error(error.message)
        }
    }
}