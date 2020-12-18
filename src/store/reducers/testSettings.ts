import { UPDATE_INSTRUMENT, UPDATE_IS_QUESTION_COMPLETED, UPDATE_NOTES } from "../constants"
import { ITestSettings } from "../interfaces"

const initialState: ITestSettings = {
    instrument: 'Piano',
    isQuestionCompleted: true,
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
        case UPDATE_IS_QUESTION_COMPLETED:
            return {
                ...state,
                isQuestionCompleted: action.payload
            }
        default:
            return state
    }
}

export default reducer