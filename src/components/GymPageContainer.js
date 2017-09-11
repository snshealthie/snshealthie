import React from "react"
import {
    Container,
    Header,
} from "semantic-ui-react"

export default class GymPageContainer extends React.Component {

    render() {

        return (

            <Container style={{margin: "5em 0em"}}>

                <Header as="h1">
                    All the gyms that we have:
                </Header>


            </Container>

        )
    }
}