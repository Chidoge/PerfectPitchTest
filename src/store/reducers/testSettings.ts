import { UPDATE_NOTES } from "../constants"
import { ITestSettings } from "../interfaces"

const initialState: ITestSettings = {
    selectedNotes: ["C", "D"]
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case UPDATE_NOTES:
            return state
        default:
            return state
    }
}

export default reducer