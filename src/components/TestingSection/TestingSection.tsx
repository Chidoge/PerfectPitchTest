import React from 'react'
import { connect } from 'react-redux'
import { checkFilenameCondition, formatNote } from '../../utility/notes'
import Button from '../StyledComponents/Button/Button'
import allNotes from './allNotes'

interface IProps {
    ordered: any[]
    instrument: string
    isQuestionCompleted: boolean
    changeIsQuestionCompleted(i: boolean): any
}

interface SelectedNoteButton {
    note: string,
    status: string
}
 
class TestingSection extends React.Component<IProps, any> {
    state = {
        currentNote: "",
        currentSelectedNote: "",
        testStarted: false,
        nextQuestion: true,
        questionCorrectlyAnswered: true,
        showAnswerFeedback: false,
        correctAnswers: 0,
        totalAnswers: 0,
        selectedAnswersStatus: []
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

    playNext = () => {
        this.setState({ nextQuestion: true, showAnswerFeedback: false, selectedAnswersStatus: [] })
        this.props.changeIsQuestionCompleted(false)
        this.playAudio()
    }

    playAudio = () => {
        if (!this.state.testStarted){
            this.setState({ testStarted: true })
            this.props.changeIsQuestionCompleted(false)
        }

        let randomNote
        if (this.state.nextQuestion) {
            randomNote = this.pickRandomNote()
            this.setState({ currentNote: randomNote, nextQuestion: false })
        }
        let audio = new Audio(`sounds/Piano/${this.state.nextQuestion ? randomNote : this.state.currentNote}`)
        audio.play()
    }

    pickAnswer = (note: string) => {
        if (!this.props.isQuestionCompleted){
            let selected: SelectedNoteButton[] = this.state.selectedAnswersStatus.slice()

            if (checkFilenameCondition(note, this.state.currentNote)) {
                if (this.state.questionCorrectlyAnswered) {
                    this.updateAnswerCount(1, 1)
                    this.props.changeIsQuestionCompleted(true)
                }
                else {
                    this.setState({ questionCorrectlyAnswered: true })
                    this.props.changeIsQuestionCompleted(true)
                }

                //TODO: make this not push duplicates
                selected.push({note: note, status: 'correct'})
            }
            else {
                this.updateAnswerCount(0, this.state.questionCorrectlyAnswered ? 1 : 0)
                this.setState({  questionCorrectlyAnswered: false })
                //TODO: make this not push duplicates
                selected.push({note: note, status: 'incorrect'})
            }
            
            this.setState({ currentSelectedNote: note, showAnswerFeedback: true, selectedAnswersStatus: selected });
        }
    }

    updateAnswerCount = (addAmountCorrectAnswers: number, addAmountTotalAnswers: number) => {
        this.setState({ correctAnswers: this.state.correctAnswers + addAmountCorrectAnswers, totalAnswers: this.state.totalAnswers + addAmountTotalAnswers })

        let localCorrectAnswers = localStorage.getItem('correctAnswers')
        let localTotalAnswers = localStorage.getItem('totalAnswers')

        if (localCorrectAnswers !== null && localTotalAnswers !== null) {
            let newCorrectAnswers = parseInt(localCorrectAnswers) + addAmountCorrectAnswers
            let newTotalAnswers = parseInt(localTotalAnswers) + addAmountTotalAnswers

            localStorage.setItem("correctAnswers", newCorrectAnswers.toString())
            localStorage.setItem("totalAnswers", newTotalAnswers.toString())
        }
        else {
            localStorage.setItem("correctAnswers", addAmountCorrectAnswers.toString())
            localStorage.setItem("totalAnswers", addAmountTotalAnswers.toString())
        }
    }

    checkArray = (array: SelectedNoteButton[], note: string) => {
        for (let element of array) {
            if (note === element.note) {
                return element.status
            }
        }
        return ""
    }

    render() {
        let { correctAnswers, totalAnswers, testStarted, questionCorrectlyAnswered, currentSelectedNote, showAnswerFeedback, selectedAnswersStatus } = this.state;
        return (
            <div className="test-container container-flex-column-center">
                <h1>Perfect Pitch Test</h1>
                <div>Score: {correctAnswers} / {totalAnswers} correct</div>
                {
                    testStarted ?
                    <div>
                    { this.props.isQuestionCompleted && <Button onClick={this.playNext}>Hear Next</Button>}
                    <Button onClick={this.playAudio}>Play Note</Button>
                    </div>
                    :
                    <Button onClick={this.playAudio}>Start Test</Button>
                }
               
                {
                    showAnswerFeedback ?
                    (!questionCorrectlyAnswered 
                    ? <p>Nope, "{ currentSelectedNote }" is not correct.</p>
                    : <p>Nice! "{ currentSelectedNote }" is correct!</p>
                    )
                    : <p className="hide-p">If you can see this, you're cool :)</p>
                }
                <h1>Choices</h1>
                <div>
                    {this.props.ordered.map(note => (
                        <Button status={this.checkArray(selectedAnswersStatus, note)} onClick={() => this.pickAnswer(note)}>{formatNote(note)}</Button>
                    ))}
                </div>
                { localStorage.getItem("totalAnswers") && <div>Total score: {localStorage.getItem("correctAnswers")} / {localStorage.getItem("totalAnswers")}</div> }
            </div>
        )
    }
}

export default connect(null, null)(TestingSection)