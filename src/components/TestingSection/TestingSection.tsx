import React from 'react'
import { connect } from 'react-redux'
import Button from '../StyledComponents/Button/Button'
import allNotes from './allNotes'

interface IProps {
    ordered: any[]
    instrument: string
}

class TestingSection extends React.Component<IProps, any> {
    state = {
        currentNote: "",
        nextQuestion: true
    }

    pickRandomNote = () => {
        let selectedNotes = this.props.ordered.slice();
        let randomIndex = Math.floor(Math.random() * selectedNotes.length)
        let key = selectedNotes[randomIndex]

        key.replace("♯/", "#")
        key.replace("♭", "b")

        let notes: string[] = []

        allNotes.Piano.forEach(fileNote => {
            if (fileNote.startsWith(key) && key.includes('#') && fileNote.includes("#")) {
                notes.push(fileNote)
            }
            else if (fileNote.startsWith(key) && !key.includes('#') && !fileNote.includes("#")) {
                notes.push(fileNote)
            }
        })

        randomIndex = Math.floor(Math.random() * notes.length)
        return notes[randomIndex]
    }

    playAudio = () => {
        let randomNote
        if (this.state.nextQuestion) {
            randomNote = this.pickRandomNote()
            this.setState({ currentNote: randomNote, nextQuestion: false })
        }

        let audio = new Audio(`sounds/Piano/${this.state.nextQuestion ? randomNote : this.state.currentNote}`)
        audio.play()
    }

    render() {
        return (
            <div className="test-container container-flex-column-center">
                <h1>Perfect Pitch Test</h1>
                <div>Score: 0 / 0 correct</div>
                <Button onClick={this.playAudio}>Hear Again</Button>
                <h1>Choices</h1>
                <div>
                    {this.props.ordered.map(note => (
                        <Button>{note}</Button>
                    ))}
                </div>
                <Button className="button">End Quiz</Button>
            </div>
        )
    }
}

export default connect(null, null)(TestingSection)