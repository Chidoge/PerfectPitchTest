import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import HowTo from './containers/HowTo/HowTo'
import PageWrapper from './containers/PageWrapper/PageWrapper'
import Test from './containers/TestPage/Test'
import './styles/main.scss'

class App extends React.Component<any, any> {
    /* TODO - Move this into Redux store*/
    state = {
        theme: 'LIGHT'
    }

    render() {
        return (
            <div className="app-container">
                <Router>
                    <Switch>
                        <Route path="/test">
                            <PageWrapper theme={this.state.theme}>
                                <Test />
                            </PageWrapper>
                        </Route>
                        <Route path="/how">
                            <PageWrapper theme={this.state.theme}>
                                <HowTo />
                            </PageWrapper>
                        </Route>
                        <Route exact path="/">
                            <PageWrapper theme={this.state.theme}>
                                <Home />
                            </PageWrapper>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App