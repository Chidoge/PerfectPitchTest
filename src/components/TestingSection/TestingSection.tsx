import React from 'react'
import { connect } from 'react-redux'
import Button from '../StyledComponents/Button/Button'


class TestingSection extends React.Component<any, any> {
    state = {
        selectedNotes: []
    }

    componentDidUpdate = () => {
        let selectedNotes = []

        for (let selectedNote of this.props.ordered) {
            selectedNotes.push(<Button>{selectedNote}</Button>)
        }

        this.setState(selectedNotes);
    }

    playAudio = () => {
        let audio = new Audio('sounds/piano/A3.mp3')
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
                    {this.state.selectedNotes}
                </div>
                <Button className="button">End Quiz</Button>
            </div>
        )
    }
}

export default connect(null, null)(TestingSection)