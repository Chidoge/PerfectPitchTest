import React from 'react'

export default class Test extends React.Component<any, any> {
    render() {
        return (
            <div className="test-page">
                <div className="test-container">
                    <h1>Perfect Pitch Test</h1>
                    <div>Score: 0 / 0 correct</div>
                    <button className="button">Hear Again</button>
                    <h1>Choices</h1>
                    <div>
                        <button className="choices">C</button>
                        <button className="choices">D</button>
                        <button className="choices">E</button>
                    </div>
                    <button className="button">End Quiz</button>
                </div>
                <div className="options-container">
                    <h1>Options</h1>
                    <p>Select the instrument which you would like played</p>
                    <select name="instruments">
                        
                    </select>
                    <p>Select the notes on which you would like to be tested</p>
                    <button className="choices">C</button>
                    <button className="choices">D</button>
                    <button className="choices">E</button>
                </div>
                
            </div>
        )
    }
}