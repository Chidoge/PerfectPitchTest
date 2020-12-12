import { UPDATE_INSTRUMENT, UPDATE_NOTES } from "../constants"
import { ITestSettings } from "../interfaces"

const initialState: ITestSettings = {
    instrument: 'Piano',
    selectedNotes: ["C", "D"]
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case UPDATE_NOTES:
            let selectedNotes = state.selectedNotes.slice();
            let index = selectedNotes.indexOf(action.payload);

            if (index === -1) {
                selectedNotes.push(action.payload);
            }
            else {
                if (state.selectedNotes.length > 1){
                    selectedNotes.splice(index, 1);
                }
            }

            return {
                ...state,
                selectedNotes
            }
        case UPDATE_INSTRUMENT:
            return {
                ...state,
                instrument: action.payload
            }
        default:
            return state
    }
}

export default reducer