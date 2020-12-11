import React from 'react';
import options from './options';

export default class Test extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedNotes: ["C", "D"],
            selectedInstrument: "Piano",
            noteChoices: [],
            selectedNotesChoices: [],
            instrumentChoices: []
        }
    }

    componentDidMount() {
        var notes = [];
        var selectedNotes = [];
        var instruments = [];

        for (var note of options.notes) {
            notes.push(<button className="choices" onClick={() => this.selectNote(note)}>{note}</button>);
        }

        for (var instrument of options.instruments) {
            instruments.push(<option value={instrument.toLowerCase()}>{instrument}</option>);
        }

        for (var selectedNote of this.state.selectedNotes) {
            selectedNotes.push(<button className="choices">{selectedNote}</button>);
        }

        this.setState({noteChoices: notes, instrumentChoices: instruments});
    }

    selectNote(note: string) {
        var selectedNotes = [];
        var array = [...this.state.selectedNotes];
        var index = array.indexOf(note);

        if (index !== -1) {
            array.splice(index, 1);
            this.setState({selectedNotes: array})
        }
        else {
            //order array
            array.push(note);
        }
        
        for (var selectedNote of this.state.selectedNotes) {
            selectedNotes.push(<button className="choices">{selectedNote}</button>);
        }

        this.setState({selectedNotesChoices: selectedNotes});
    }

    render() {
        const { instrumentChoices, noteChoices, selectedNotesChoices } = this.state
        return (
            <div className="test-page">
                <div className="test-container">
                    <h1>Perfect Pitch Test</h1>
                    <div>Score: 0 / 0 correct</div>
                    <button className="button">Hear Again</button>
                    <h1>Choices</h1>
                    <div>
                        {selectedNotesChoices}
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
                    {noteChoices}
                </div>
                
            </div>
        )
    }
}