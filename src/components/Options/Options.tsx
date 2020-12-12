import React from 'react';
import Button from '../StyledComponents/Button/Button';
import testOptions from './testingOptions';

class Options extends React.Component<any, any> {
    render() {
        const { ordered } = this.props

        let notes = []

        for (let i = 0; i < testOptions.notes.length; i++) {
            let note = testOptions.notes[i]
            let nextNote = testOptions.notes[i+1]
            
            if (nextNote.charAt(0) === note) {
                notes.push(
                    <div>
                        <Button isHighlighted={ordered.includes(note)} onClick={() => this.props.changeSelectedNotes(note)}>{note}</Button>
                        <Button isHighlighted={ordered.includes(nextNote)} onClick={() => this.props.changeSelectedNotes(nextNote)}>{nextNote}</Button>
                    </div>
                )
                i++
            }
            else {
                notes.push(<Button isHighlighted={ordered.includes(note)} onClick={() => this.props.changeSelectedNotes(note)}>{note}</Button>)
            }
        }

        return (
            <div className="options-container container-flex-column-center">
                <h1>Options</h1>
                <p>Select the instrument which you would like played</p>
                <select name="instruments">
                    {testOptions.instruments.map(instrument => (
                        <option value={instrument.toLowerCase()} onClick={() => this.props.changeInstrument(instrument)}>{instrument}</option>
                    ))}
                </select>
                <p>Select the notes on which you would like to be tested</p>
                <div className="note-container">
                    {notes}
                </div>
            </div>
        )
    }
}

export default Options