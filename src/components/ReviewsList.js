import React from 'react'
import {
    Card,
    Container,
} from 'semantic-ui-react'
import axios from "axios"
import { Review } from "./Review"
import {configs} from "../constants/APIconfigs"

export default class ReviewsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
        }
    }

    shouldComponentUpdate(nextProps, nextState) {

        return (
            (nextProps.selectedClassId !== null && nextProps.selectedClassName !== null)
            || (nextProps.selectedClassId !== this.props.selectedClassId && nextProps.selectedClassName !== this.props.selectedClassName)
        )
    }

    componentWillUpdate(nextProps) {
        axios.get(`https://snshealthie.herokuapp.com/api/v2/classes/${nextProps.selectedClassId}/reviews/`, configs)
            .then((response) => {
                this.setState({
                    reviews: response.data.results
                })
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    render() {

        return (

            <div>
                <Container>

                    { this.props.selectedClassId !== null
                        ? (<Card>
                                <Review data={this.state.reviews} />
                            </Card>
                        )
                        : ""
                    }

                </Container>
            </div>

        )
    }
}

