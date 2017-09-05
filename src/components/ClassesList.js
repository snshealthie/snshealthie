import React from 'react'
import {
    Container,
    Header,
    Loader,
} from 'semantic-ui-react'
import axios from "axios"
import Class from './Class'
import {configs} from '../constants/APIconfigs'

export default class ClassesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: [],
            isLoading: false,
        }
    }

    //need error callback function
    componentWillReceiveProps(nextProps) {
        if (this.state.classes !== this.props.selectedCategory) {
            this.setState({
                isLoading: true,
            })

            axios.get(`https://snshealthie.herokuapp.com/api/v2/classes/?type=${nextProps.selectedCategory}`, configs)
                .then((response) => {
                    this.setState({
                        classes: response.data.results,
                        isLoading: false,
                    })
                })
                .catch((error) => {
                    this.setState({
                        isLoading: false,
                    })
                    console.log(error.response)
                })
        }
    }

    render() {
        return (
            <div>
                <Header content={this.props.initialSelectionMade === false ? "Select a category to begin browsing!" : ""} />

                <Header content={this.props.initialSelectionMade === true
                    && this.state.classes.length === 0
                    && this.state.isLoading === false
                    ? `Sorry, no results found for ${this.props.selectedCategory}. Maybe you can create the first?`
                    : ""} />

                <Loader active={this.state.isLoading} />

                <Container>
                    <Class
                        data={this.state.classes}
                    />
                </Container>
            </div>

        )
    }
}
