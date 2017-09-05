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
    APIErrorMessage, APISuccessMessage
} from "./ResponseMessages";

export default class ActivityCategoriesContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            selectedCategory: "",
            initialSelectionMade: false,
            wasSuccessful: null,
            isLoading: false,
            hovered: false,
        }

        this.handleCategorySelect = this.handleCategorySelect.bind(this)
        this.handleAPIError = this.handleAPIError.bind(this)
        this.handleAPISuccess = this.handleAPISuccess.bind(this) //doesnt do anything
        this.handleLoader = this.handleLoader.bind(this)
    }

    handleCategorySelect(e) {
        e.preventDefault()
        this.setState({
            selectedCategory: e.target.getAttribute('data-value'),
            initialSelectionMade: true,
        })
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

    //unclear if we need this
    handleMouseEnter() {
        this.setState({
            hovered:true,
        })
    }

    handleMouseExit() {
        this.setState({
            hovered: true,
        })
    }


    render() {

        return(

            <Container style={{margin: '5em'}}>
                <ActivityCategoriesList
                    onCategorySelect={this.handleCategorySelect}
                    selectedCategory={this.state.selectedCategory}
                    activityCategories={activityCategories}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseExit={this.handleMouseExit}
                />
                <Divider />
                <CreateClassFormModal
                    selectedCategory={this.state.selectedCategory}
                    handleAPIError={this.handleAPIError}
                    handleAPISuccess={this.handleAPISuccess}
                />
                <CreateReviewFormModal/>
                <Divider />
                <Loader active={this.state.isLoading} />
                <APIErrorMessage
                    wasSuccessful={this.state.wasSuccessful} />
                <APISuccessMessage
                    wasSuccessful={this.state.wasSuccessful} />
                <ClassesList
                    selectedCategory={this.state.selectedCategory}
                    initialSelectionMade={this.state.initialSelectionMade}
                    handleAPIError={this.handleAPIError}
                    handleAPISuccess={this.handleAPISuccess}
                    handleLoader={this.handleLoader}
                />
            </Container>

        )
    }

}