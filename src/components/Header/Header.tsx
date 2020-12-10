import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <div className="app-header">
                <Link to="/"><div className="link-button">Home</div></Link>
                <Link to="/how"><div className="link-button">How to practice</div></Link>
                <Link to="/test"><div className="link-button">Test</div></Link>
            </div>
        )
    }
}