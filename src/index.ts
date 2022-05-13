import { MicroServiceController } from "./controller";
import { IdDto } from "./dto/id.dto";

// this global determines the state of the server our controller logic is running on
const globalState:boolean = true

/**
 * 
 * @param { number } start the starting point for the number of ids to be generated
 * @returns { Array<string> } the array of sequential ids generated
 */
export const instantiateTestIds = (data:IdDto) => {
    try {
        const newId = new MicroServiceController()
        // a global state which is true indicates the server is operational and can generate ids
        // false indicates otherwise
        if (!globalState) {
            throw new Error("an error occurred, please try in a few minutes!")
        }
        return newId.generateIds(data.start)
    } catch (error) {
        console.error(error)
        throw new Error(error.message)
    }
}

// test
console.log(instantiateTestIds({
    start:5
}))