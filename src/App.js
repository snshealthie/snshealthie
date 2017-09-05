import React, { Component } from 'react'
import {
    Container,
    Header,
    Segment,
} from 'semantic-ui-react'
import { BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from "./components/Footer"
import CategoriesFrontPage from "./components/CategoriesFrontPage";
import CategoriesView from "./components/ActivityCategoriesContainer";
import {Error404} from "./components/Error404"
import ProfilePageMain from "./components/ProfilePageMain";

const Body = () => (
    <div>
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
        >
            <Container text>
                <Header
                    as='h1'
                    content="Healthie is coming"
                    inverted
                    style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                />
            </Container>
        </Segment>

        <Container text>
            <Header as='h2'>Header</Header>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
        </Container>

        <CategoriesFrontPage />

    </div>

)


class App extends Component {


    render() {
        return (
           <BrowserRouter>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Body} />>
                    <Route path="/categories" component={CategoriesView} />
                    <Route path="/profile" component={ProfilePageMain} />
                    <Route component={Error404} />
                </Switch>
                <Footer />
            </div>
           </BrowserRouter>
        )
    }
}

export default App;

