import React from 'react';
import Button from '../../components/StyledComponents/Button/Button';
import options from './options';

export default class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedNotes: ["C", "D"],
            selectedInstrument: "Piano",
            instrumentChoices: []
        }
    }

    componentDidMount() {
        let instruments = [];

        for (let instrument of options.instruments) {
            instruments.push(<option value={instrument.toLowerCase()}>{instrument}</option>);
        }

        this.setState({instrumentChoices: instruments});
    }

    selectNote(note: string) {
        let array = this.state.selectedNotes.slice();
        let index = array.indexOf(note);

        if (index === -1) {
            array.push(note);
        }
        else {
            array.splice(index, 1);
        }

        this.setState({selectedNotes: array});
    }

    render() {
        const { instrumentChoices } = this.state

        let selectedNotes = [];
        let notes = [];
        const ordered = this.state.selectedNotes.sort()

        for (let selectedNote of ordered) {
            selectedNotes.push(<Button>{selectedNote}</Button>);
        }

        for (let i = 0; i < options.notes.length; i++) {
            let note = options.notes[i];
            let nextNote = options.notes[i+1]
            
            if (nextNote.charAt(0) === note) {
                notes.push(
                    <div>
                        <Button isHighlighted={ordered.includes(note)} onClick={() => this.selectNote(note)}>{note}</Button>
                        <Button isHighlighted={ordered.includes(nextNote)} onClick={() => this.selectNote(nextNote)}>{nextNote}</Button>
                    </div>
                )
                i++
            }
            else {
                notes.push(<Button isHighlighted={ordered.includes(note)} onClick={() => this.selectNote(note)}>{note}</Button>);
            }
        }

        return (
            <div className="test-page container-flex-column-center">
                <div className="test-container container-flex-column-center">
                    <h1>Perfect Pitch Test</h1>
                    <div>Score: 0 / 0 correct</div>
                    <Button>Hear Again</Button>
                    <h1>Choices</h1>
                    <div>
                        {selectedNotes}
                    </div>
                    <Button className="button">End Quiz</Button>
                </div>
                <div className="options-container container-flex-column-center">
                    <h1>Options</h1>
                    <p>Select the instrument which you would like played</p>
                    <select name="instruments">
                        {instrumentChoices}
                    </select>
                    <p>Select the notes on which you would like to be tested</p>
                    <div className="note-container">
                        {notes}
                    </div>
                </div>
            </div>
        )
    }
}