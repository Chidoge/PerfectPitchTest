import { UPDATE_INSTRUMENT, UPDATE_IS_QUESTION_COMPLETED, UPDATE_NOTES } from "../constants"

export const changeSelectedNotes = (note: string) => {
    return {
        type: UPDATE_NOTES,
        payload: note
    }
}

export const changeInstrument = (instrument: string) => {
    return  {
        type: UPDATE_INSTRUMENT,
        payload: instrument
    }
}

export const changeIsQuestionCompleted = (isQuestionCompleted: boolean) => {
    return  {
        type: UPDATE_IS_QUESTION_COMPLETED,
        payload: isQuestionCompleted
    }
}