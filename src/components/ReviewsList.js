"use strict"

import React from 'react'
import {
    Card,
    Rating,
    Container,
} from 'semantic-ui-react'
import axios from "axios"
import Review from "./Review"

const auth_token = "Token ced12082a40905503ad2ad29367aeafb824ed2b8"

let configs = {
    "async": true,
    "crossDomain": true,
    "headers": {
        "authorization": auth_token,
    }
}

export default class ReviewsList extends React.Component {

    constructor() {
        super();
        this.state = {
            reviews: []
        }
    }

    componentWillMount() {
        axios.get("https://snshealthie.herokuapp.com/api/v2/classes/33/reviews/", configs)
            .then((response) => {
                this.setState({
                    reviews: response.data.results
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {
        return (
            <div>
                <Container>
                    <Card>
                      <Review data={this.state.reviews} />
                    </Card>

                </Container>
            </div>

        )
    }
}

