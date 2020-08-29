import './assets/bootstrap.css'
import "slick-carousel/slick/slick-theme.css"
import './assets/slick.css'
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'

import AppRoutes from './AppRoutes'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <AppRoutes></AppRoutes>
            </Router>
        </Provider>
    )
}

export default App
