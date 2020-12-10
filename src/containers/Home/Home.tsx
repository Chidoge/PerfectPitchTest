import React from 'react'

export default class Home extends React.Component<any, any> {
    render() {
        return (
            <div className="home-page">
                <div className="main-section">
                    <h1>Perfect (Absolute) Pitch Training</h1>
                    <p>
                        Perfect pitch is the ability to determine the name of any given note on the chromatic scale without a reference note.
                    </p>
                    <p>
                        Most people who do have perfect pitch will develop it in the early stages of their life. 
                        However, it is possible to acquire perfect pitch as an adult.
                    </p>
                    <p>
                        This web application aims to help those without perfect pitch to develop it through consistent testing of note recognition.
                    </p>
                </div>

            </div>
        )
    }
}