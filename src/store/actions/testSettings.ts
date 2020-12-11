import { UPDATE_INSTRUMENT, UPDATE_NOTES } from "../constants"

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