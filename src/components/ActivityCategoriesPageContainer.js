import React from "react"

import {
    Container,
    Divider,
    Loader,
} from 'semantic-ui-react'

import ActivityCategoriesList from "./ActivityCategoriesList"
import ClassesList from "./ClassesList";
import CreateClassFormModal from "./CreateClassFormModal"
import CreateReviewFormModal from "./CreateReviewFormModal"
import {activityCategories} from "../constants/ActivityCategories";
import {
    APIErrorMessage,
    APISuccessMessage,
} from "./ResponseMessages";
import {randomColor} from "../constants/Colors"

export default class ActivityCategoriesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: "",
            selectedCategoryText: "",  // casing issue. values are lowercase but need a human readable version, so track two
            hoveredCategory: "",
            initialSelectionMade: false,
            wasSuccessful: null,
            isLoading: false,
            color: randomColor(),
        }

        this.handleCategorySelect = this.handleCategorySelect.bind(this)
        this.handleAPIError = this.handleAPIError.bind(this)
        this.handleAPISuccess = this.handleAPISuccess.bind(this) //doesnt do anything
        this.handleLoader = this.handleLoader.bind(this) //not being passed as props
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
    }

    handleCategorySelect(e) {
        e.preventDefault()
        this.setState({
            selectedCategory: e.target.getAttribute('data-value'),
            selectedCategoryText: e.currentTarget.textContent,
            initialSelectionMade: true,
        })
        this.resetColor()
    }

    handleAPIError() {
        this.setState({
            wasSuccessful: false,
        })
    }

    //not working?
    handleAPISuccess() {
        this.setState({
            wasSuccessful: true,
        })
        console.log(this.state.wasSuccessful)
    }

    //havent figured this out yet
    handleLoader() {
        this.setState({
            isLoading: !this.state.isLoading
        })
        console.log(this.state.isLoading)
    }

    handleMouseEnter(e) {
        this.setState({
            hoveredCategory: e.target.getAttribute('data-value'),
        })
    }

    handleMouseLeave() {
        this.setState({
            hoveredCategory: "",
        })
    }

    resetColor(){
        this.setState({
            color: randomColor()
        })
    }

    render() {

        return (

            <Container style={{margin: "5em 0em"}}>
                <ActivityCategoriesList
                    onCategorySelect={this.handleCategorySelect}
                    selectedCategory={this.state.selectedCategory}
                    activityCategories={activityCategories}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    color={this.state.color}
                    hoveredCategory={this.state.hoveredCategory}
                />
                <Divider />
                <CreateClassFormModal
                    selectedCategory={this.state.selectedCategory}
                    selectedCategoryText={this.state.selectedCategoryText}
                    handleAPIError={this.handleAPIError}
                    handleAPISuccess={this.handleAPISuccess}
                    color={this.state.color}
                />
                <CreateReviewFormModal
                    color={this.state.color}
                />
                <Divider />

                <Loader active={this.state.isLoading} />

                <APIErrorMessage
                    wasSuccessful={this.state.wasSuccessful} />
                <APISuccessMessage
                    wasSuccessful={this.state.wasSuccessful} />

                <ClassesList
                    selectedCategory={this.state.selectedCategory}
                    selectedCategoryText={this.state.selectedCategoryText}
                    initialSelectionMade={this.state.initialSelectionMade}
                    handleAPIError={this.handleAPIError}
                    handleAPISuccess={this.handleAPISuccess}
                    handleLoader={this.handleLoader}
                    color={this.state.color}
                />

            </Container>

        )
    }

}