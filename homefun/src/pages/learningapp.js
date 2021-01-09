import React from 'react'
import SideBar from '../components/LearningAppSidebar/SideBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import overview from './overview'
import { homework, newHomework, archHomework } from './homework'
import Home from '.'

const LearningApp = () => {
    return (
        <>
            <Router>
                {/* <Switch>
                    <Route path='/' component={Home} exact />
                </Switch> */}
                <SideBar />
                <Switch>
                    <Route path="/overview" exact component={overview} />
                    <Route path="/homework" exact component={homework} />
                    <Route path="/homework/new" exact component={newHomework} />
                    <Route path="/homework/archive" exact component={archHomework} />
                </Switch>
            </Router>
            <Router>
                <Route path='/' component={Home} exact />
            </Router>
        </>
    )
}

export default LearningApp
