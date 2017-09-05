import React from "react"
import {
    Message,
} from "semantic-ui-react"

export const APIErrorMessage = (props) => (

    props.wasSuccessful === false ? <Message header="We're sorry, something went wrong. Please file critical OC ticket" negative /> : null

)

export const APISuccessMessage = (props) => (

    props.wasSuccessful ? <Message header="Submission complete!" success/> : null

)
