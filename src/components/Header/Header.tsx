import React  from 'react'

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <div className="app-header">
                <div className="link-button">Home</div>
                <div className="link-button">How to practice</div>
                <div className="link-button">Test</div>
            </div>
        )
    }
}