import { ISettings } from "../interfaces"

const initialState: ISettings = {
    instrument: 'piano',
    personalBest: 0,
    theme: 'light'
}

const reducer = (state = initialState, action: any) => {
    switch(action.type) {
      default:
        return state
    }
}

export default reducer