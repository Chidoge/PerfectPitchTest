import React from 'react'
import { connect } from 'react-redux'
import { checkFilenameCondition, formatNote } from '../../utility/notes'
import Button from '../StyledComponents/Button/Button'
import allNotes from './allNotes'

interface IProps {
    ordered: any[]
    instrument: string
}

class TestingSection extends React.Component<IProps, any> {
    state = {
        currentNote: "",
        nextQuestion: true,
        correctAnswers: 0,
        totalAnswers: 0
    }

    pickRandomNote = () => {
        let selectedNotes = this.props.ordered.slice();
        let randomIndex = Math.floor(Math.random() * selectedNotes.length)
        let note = selectedNotes[randomIndex]

        note.replace("♯/", "#").replace("♭", "b")

        let notes: string[] = []

        allNotes.Piano.forEach(fileNote => {
            checkFilenameCondition(note, fileNote) && notes.push(fileNote)
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

    pickAnswer = (note: string) => {
        if (checkFilenameCondition(note, this.state.currentNote)) {
            this.setState({correctAnswers: this.state.correctAnswers + 1})
        }
        this.setState({totalAnswers: this.state.totalAnswers + 1, nextQuestion: true})
    }

    render() {
        let { correctAnswers, totalAnswers } = this.state;
        return (
            <div className="test-container container-flex-column-center">
                <h1>Perfect Pitch Test</h1>
                <div>Score: {correctAnswers} / {totalAnswers} correct</div>
                <Button onClick={this.playAudio}>Hear Again</Button>
                <h1>Choices</h1>
                <div>
                    {this.props.ordered.map(note => (
                        <Button onClick={() => this.pickAnswer(note)}>{formatNote(note)}</Button>
                    ))}
                </div>
                <Button className="button">End Quiz</Button>
            </div>
        )
    }
}

export default connect(null, null)(TestingSection)