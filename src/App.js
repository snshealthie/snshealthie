import React from 'react'
import { BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import ActivityCategoriesContainer from "./components/ActivityCategoriesPageContainer"
import ProfilePageMain from "./components/ProfilePage/ProfilePageContainer"
import GymPageContainer from "./components/GymPageContainer"
import { MainPageBody } from "./components/MainPage/MainPageBody"
import { Error404 } from "./components/Error404"
import { AboutUs } from "./components/FooterPages/AboutUs"
import { ContactUs} from "./components/FooterPages/ContactUs"
import { Careers } from "./components/FooterPages/Careers"

class App extends React.Component {

    constructor() {
        super()
        this.state ={
            user: [],
            isLoggedIn: false,
        }
    }

    componentDidMount() {
        //check login, update state
        console.log("Login status is "+this.state.isLoggedIn)
    }


    render() {

        //pass props down to navbar

        return (

           <BrowserRouter>
               <div>

                    <NavBar
                        isLoggedIn={this.state.isLoggedIn}
                    />

                    <Switch>

                        <Route
                            exact path="/"
                            component={MainPageBody}
                        />

                        <Route
                            path="/categories"
                            render={(props) => ( <ActivityCategoriesContainer isLoggedIn={this.state.isLoggedIn}/> )}
                        />

                        <Route
                            path="/gyms"
                            render={(props) => ( <GymPageContainer isLoggedIn={this.state.isLoggedIn}/> )}
                        />


                        <Route
                            path="/profile"
                            render={(props) => ( <ProfilePageMain isLoggedIn={this.state.isLoggedIn}/> )}
                        />

                        <Route
                            path="/aboutus"
                            component={AboutUs}
                        />

                        <Route
                            path="/contactus"
                            component={ContactUs}
                        />

                        <Route
                            path="/careers"
                            componen={Careers}
                        />

                        <Route component={Error404} />

                    </Switch>

                    <Footer />

                </div>
           </BrowserRouter>
        )
    }
}

export default App;

