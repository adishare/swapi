import React from "react"
import { Switch, withRouter, Route, Redirect } from 'react-router-dom'

import PeoplePage from "./views/PeoplePage"
// import NotFoundPage from "./views/NotFoundPage"
import PeopleDetail from "./views/PeopleDetail"
// import UserProfile from "./views/UserProfile"

const routes = [
    { path: "/people", component: PeoplePage, exact: true },
    { path: "/people/:peopleId", component: PeopleDetail, exact: true },
    // { path: "/user/:userId", component: UserProfile, exact: false },
    // { path: "*", component: NotFoundPage, exact: false }
]

const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={props => <Component {...props} /> } />
}

const Routes = ({ ...props }) => {

    const routeComponents = routes.map(({ path, component, exact }, key) => {
        return exact 
            ? <PublicRoute exact path={path} component={component} key={key} />
            : <PublicRoute path={path} component={component} key={key} />
    })

    return (
        <Switch>
            { routeComponents }
            <Redirect path='/' to='/people'></Redirect>
        </Switch>
    )
}

export default withRouter(Routes)