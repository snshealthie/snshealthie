import React from 'react'
import {
    Container,
    Header,
    Loader,
} from 'semantic-ui-react'
import axios from "axios"
import {Class} from './Class'
import {configs} from '../constants/APIconfigs'
import ReviewsList from "./ReviewsList";

export default class ClassesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classes: [],
            isLoading: false,
            classType: this.props.selectedCategory,
            selectedClassId: null,
            selectedClassName: null,
        }

        this.handleClassSelect = this.handleClassSelect.bind(this)

    }

    //need error callback function
    componentWillReceiveProps(nextProps) {

        if (this.state.classType !== nextProps.selectedCategory && this.props.selectedCategory !== "") {
            this.setState({
                isLoading: true,
                classType: nextProps.selectedCategory,
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        return false
    }

    handleClassSelect(classId, className) {
        this.setState({
            ...this.state,
            selectedClassId: classId,
            selectedClassName: className,
        })
    }

    render() {

        let results = this.state.classes;
        let classes = results.map((aclass) =>
            <Class
                key={aclass.id}
                classId={aclass.id}
                name={aclass.name}
                type={this.props.selectedCategoryText}    //using the human readable version of category type
                description={aclass.description}
                instructor={aclass.instructor}
                duration_minutes={aclass.duration_minutes}
                gym={aclass.gym}
                createdDate={aclass.created}
                color={this.props.color}
                handleClassSelect={() => this.handleClassSelect(aclass.id, aclass.name)}
            />
        );

        return (

            <div>
                <Header content={this.props.initialSelectionMade === false ? "Select a category to begin browsing!" : ""} />

                <Header content={this.props.initialSelectionMade === true
                    && this.state.classes.length === 0
                    && this.state.isLoading === false
                    ? `Sorry, no results found for ${this.props.selectedCategoryText}. Maybe you can create the first?`
                    : ""} />

                <Header content={this.props.initialSelectionMade === true
                    && this.state.classes.length > 0
                    && this.state.isLoading === false
                        ? `${this.state.classes.length} classes found for ${this.props.selectedCategoryText}.`
                        : ""} />

                <Loader active={this.state.isLoading} />

                <Container>
                    {classes}
                </Container>

                <ReviewsList
                    selectedClassId={this.state.selectedClassId}
                    selectedClassName={this.state.selectedClassName}
                />

            </div>

        )
    }
}
