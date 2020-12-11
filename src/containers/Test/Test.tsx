import React from 'react';
import Button from '../../components/StyledComponents/Button/Button';
import options from './options';

export default class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedNotes: ["C", "D"],
            selectedInstrument: "Piano",
            notes: [],
            instrumentChoices: []
        }
    }

    componentDidMount() {
        let notes = [];
        let instruments = [];

        for (let note of options.notes) {
            notes.push(<Button onClick={() => this.selectNote(note)}>{note}</Button>);
        }

        for (let instrument of options.instruments) {
            instruments.push(<option value={instrument.toLowerCase()}>{instrument}</option>);
        }

        this.setState({notes, instrumentChoices: instruments});
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
        const { instrumentChoices, notes } = this.state

        let selectedNotes = [];
        const ordered = this.state.selectedNotes.sort()

        for (let selectedNote of ordered) {
            
            selectedNotes.push(<button className="choices">{selectedNote}</button>);
        }

        return (
            <div className="test-page">
                <div className="test-container">
                    <h1>Perfect Pitch Test</h1>
                    <div>Score: 0 / 0 correct</div>
                    <button className="button">Hear Again</button>
                    <h1>Choices</h1>
                    <div>
                        {selectedNotes}
                    </div>
                    <button className="button">End Quiz</button>
                </div>
                <div className="options-container">
                    <h1>Options</h1>
                    <p>Select the instrument which you would like played</p>
                    <select name="instruments">
                        {instrumentChoices}
                    </select>
                    <p>Select the notes on which you would like to be tested</p>
                    {notes}
                </div>
                
            </div>
        )
    }
}