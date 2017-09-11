import React from "react"
import {
    Modal,
    Button,
    Container,
    Form,
    Rating,
} from "semantic-ui-react"
import axios from "axios"
import { configs } from "../constants/APIconfigs";
import { CreateReviewParameters } from "../constants/InputFieldParameters"

export default class CreateReviewFormModal extends React.Component {

    constructor(props) {
        super(props)

        let inputReviewParameters = CreateReviewParameters.reduce(function(object, item) {
            object[item] = ""
            return object
        }, {})

        let errorsReviewParameters = CreateReviewParameters.reduce(function(object, item) {
            object[item] = false
            return object
        }, {})

        this.state = {
            modalOpen: false,
            formContent: inputReviewParameters,
            touched: errorsReviewParameters,
            errors: errorsReviewParameters,
        }

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRate = this.handleRate.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleOpen() {
        this.setState({
            modalOpen: true,
        })
    }

    handleClose() {
        this.setState({
            modalOpen: false,
        })
    }

    handleRate(e, {rating}) {
        this.setState({
            formContent:{
                ...this.state.formContent,
                rating: rating,}
        })
    }

    handleChange(e, {name, value}) {
        this.setState({
            formContent:{
                ...this.state.formContent,
                [name]: value,}
        })
    }

    handleBlur(e) {
        this.setState({
            touched: {
                ...this.state.touched,
                [e.target.name]: true,
            }
        })
    }

    handleSubmit() {
        let data = this.state.formContent
        console.log(this.state.formContent)
        axios.post(`https://snshealthie.herokuapp.com/api/v2/reviews/`, data, configs)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error.response)
            })
        this.handleClose()
    }

    fieldValidationCheck(title, rating, review, class_reviewed, submitted_by,) {

        return {
            title: title.length === 0,
            rating: rating === 0,
            review: review.length === 0,
            class_reviewed: class_reviewed.length === 0,
            submitted_by: submitted_by.length === 0,
        }
    }



    render() {


        const { title, rating, review, class_reviewed, submitted_by, } = this.state.formContent
        const errors = this.fieldValidationCheck(title, rating, review, class_reviewed, submitted_by,)
        const isEnabled = !Object.keys(errors).some((x) => errors[x])

        const shouldMarkError = (field) => {

            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false
        }

        return (

            <Modal
                trigger={<Button size="huge" color={this.props.color} onClick={this.handleOpen}>Create a New Review</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>Submit a New Review for //Selected Class//</Modal.Header>
                <Modal.Content>
                    <Container>
                        <Form>
                            <Form.Group>
                                <Form.Input
                                    label="Review Title"
                                    placeholder="Review Title"
                                    value={this.state.formContent.title}
                                    name="title"
                                    width={8}
                                    className={shouldMarkError("title") ? "error" : ""}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Rating
                                    icon="heart"
                                    maxRating={5}
                                    size="huge"
                                    onRate={this.handleRate}
                                    width={6}
                                />
                            </Form.Group>
                            <Form.Input
                                control="textarea"
                                label="Review"
                                placeholder="Review"
                                value={this.state.formContent.review}
                                name="review"
                                className={shouldMarkError("review") ? "error" : ""}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />

                            <Form.Input
                                label="Class Reviewed"
                                placeholder="Class Reviewed"
                                value={this.state.formContent.class_reviewed}
                                name="class_reviewed"
                                className={shouldMarkError("class_reviewed") ? "error" : ""}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                            <Form.Input
                                label="Submitted by"
                                placeholder="Submitted by"
                                value={this.state.formContent.submitted_by}
                                name="submitted_by"
                                className={shouldMarkError("submitted_by") ? "error" : ""}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                        </Form>
                    </Container>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        color={this.props.color}
                        onClick={this.handleSubmit}
                        disabled={!isEnabled}
                    >
                        Submit a Review
                    </Button>
                </Modal.Actions>
            </Modal>

        )

    }

}
