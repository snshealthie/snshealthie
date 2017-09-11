import React from "react"
import {
    Modal,
    Button,
    Container,
    Form,
    Dropdown,
} from "semantic-ui-react"
import axios from "axios"
import { activityCategories } from "../constants/ActivityCategories"
import { configs } from "../constants/APIconfigs";
import { CreateClassParameters } from "../constants/InputFieldParameters";


export default class CreateClassFormModal extends React.Component {

    constructor(props) {
        super(props)

        let inputClassParameters = CreateClassParameters.reduce(function(object, item) {
            object[item] = ""
            return object
        }, {})

        let errorsClassParameters = CreateClassParameters.reduce(function(object, item) {
            object[item] = false
            return object
        }, {})


        this.state = {
            modalOpen: false,
            formContent: inputClassParameters,
            touched: errorsClassParameters,
            errors: errorsClassParameters,
        };

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDropdownChange = this.handleDropdownChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.baseState = this.state
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.formContent.type !== nextProps.selectedCategory) {
            this.setState({
                formContent: {
                    ...this.state.formContent,
                    type: nextProps.selectedCategory,
                }
            })
        }
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

    handleChange(e) {
        this.setState({
            formContent:{
                ...this.state.formContent,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleDropdownChange(e, {value}) {
        this.setState({
            formContent:{
                ...this.state.formContent,
                type: value,
            }
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

    handleResetForm() {
        this.setState(this.baseState)
    }

    handleSubmit() {
        let data = this.state.formContent
        data.reviews = [] //figure out how to kill this
        axios.post("https://snshealthie.herokuapp.com/api/v2/classes/", data, configs)
            .then(() => {
                this.props.handleAPISuccess()
            })
            .catch((error) => {
                console.log(error.response)
                this.props.handleAPIError()
            })
        this.handleClose()
        this.handleResetForm()
    }

    fieldValidationCheck(name, gym, type, description, instructor, submitted_by, duration_minutes) {

        return {
                name: name.length === 0,
                gym: gym.length === 0,
                type: type === null,
                description: description.length === 0,
                instructor: instructor.length === 0,
                submitted_by: submitted_by.length === 0,
                duration_minutes: duration_minutes.length === 0,
        }
    }

    render() {

        const {name, gym, type, description, instructor, submitted_by, duration_minutes} = this.state.formContent
        const errors = this.fieldValidationCheck(name, gym, type, description, instructor, submitted_by, duration_minutes)
        const isEnabled = !Object.keys(errors).some((x) => errors[x])

        const shouldMarkError = (field) => {

            const hasError = errors[field];
            const shouldShow = this.state.touched[field];

            return hasError ? shouldShow : false
        }

        return(

            <Modal
                trigger={<Button size="huge" disabled={this.props.selectedCategory === ""} color={this.props.color} onClick={this.handleOpen}>Create a New Class</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Modal.Header>Create a new {this.props.selectedCategoryText} Class</Modal.Header>
                <Modal.Content>
                    <Container>
                        <Form>
                            <Form.Input
                                label="Class Name"
                                placeholder="text"
                                value={name}
                                name="name"
                                className={shouldMarkError("name") ? "error" : ""}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                />
                            <Form.Input
                                    control="textarea"
                                    label="Description"
                                    rows="3"
                                    placeholder="text"
                                    value={description}
                                    name="description"
                                    className={shouldMarkError("description") ? "error" : ""}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />

                            <Form.Group>
                                <Form.Input
                                    label="Gym Name"
                                    placeholder="text"
                                    value={gym}
                                    width={4}
                                    name="gym"
                                    className={shouldMarkError("gym") ? "error" : ""}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Form.Field>
                                    <label>Class Type</label>
                                    <Dropdown
                                        placeholder="Type"
                                        value={type}
                                        width={4}
                                        selection
                                        options={activityCategories}
                                        className={shouldMarkError("type") ? "error" : ""}
                                        onChange={this.handleDropdownChange}
                                        onBlur={this.handleBlur}
                                    />
                                </Form.Field>
                                <Form.Input
                                    label="Instructor"
                                    placeholder="text"
                                    value={instructor}
                                    width={4}
                                    name="instructor"
                                    className={shouldMarkError("instructor") ? "error" : ""}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                                <Form.Input
                                    label="Class Duration (minutes)"
                                    placeholder="text"
                                    value={duration_minutes}
                                    width={4}
                                    name="duration_minutes"
                                    className={shouldMarkError("duration_minutes") ? "error" : ""}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                />
                            </Form.Group>
                            <Form.Input
                                label="Created By"
                                placeholder="text"
                                value={submitted_by}
                                name="submitted_by"
                                className={shouldMarkError("submitted_by") ? "error" : ""}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                            />
                        </Form>
                    </Container>
                </Modal.Content>
                <Modal.Actions>
                    <Button color={this.props.color}
                            disabled={!isEnabled}
                            onClick={this.handleSubmit}>Create a Class</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}