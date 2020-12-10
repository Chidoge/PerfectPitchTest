import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import PageWrapper from './containers/PageWrapper/PageWrapper'
import './styles/main.scss'

class App extends React.Component<any, any> {
    /* TODO - Move this into Redux store*/
    state = {
        theme: 'LIGHT'
    }
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <PageWrapper theme={this.state.theme}>
                            <Home />
                        </PageWrapper>
                    </Route>
                    <Route path="/test">
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App