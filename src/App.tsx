import React from 'react'
import './App.css'
import Header from './components/Header/Header'

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="app">
                <Header />
            </div>
        )
    }
}

export default App