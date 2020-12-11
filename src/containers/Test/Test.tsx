import React from 'react';
import Button from '../../components/StyledComponents/Button/Button';
import options from './options';
import { connect } from 'react-redux'
import { changeInstrument, changeSelectedNotes } from '../../store/actions/testSettings';

const mapStateToProps = (state: any) => {
    return {
        selectedNotes: state.test.selectedNotes,
        instrument: state.test.instrument
    }
}
  
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeSelectedNotes: (n: string) => dispatch(changeSelectedNotes(n)),
        changeInstrument: (i: string) => dispatch(changeInstrument(i))
    }
}
  

class Test extends React.Component<any, any> {
    state = {
        instrumentChoices: []
    }

    componentDidMount() {
        let instruments = []

        for (let instrument of options.instruments) {
            instruments.push(<option value={instrument.toLowerCase()} onClick={() => this.props.changeInstrument(instrument)}>{instrument}</option>)
        }

        this.setState({instrumentChoices: instruments})
    }

    render() {
        const { instrumentChoices } = this.state

        let selectedNotes = []
        let notes = []
        const ordered = this.props.selectedNotes.sort()

        for (let selectedNote of ordered) {
            selectedNotes.push(<Button>{selectedNote}</Button>)
        }

        for (let i = 0; i < options.notes.length; i++) {
            let note = options.notes[i]
            let nextNote = options.notes[i+1]
            
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

export default connect(mapStateToProps, mapDispatchToProps)(Test)