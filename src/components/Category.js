import React from "react"
import {
    Grid,
    Segment,
} from "semantic-ui-react"

export const Category = (props) => (

    <Grid.Column>
        <Segment data-value={props.value}
                 color={props.isActive ? "blue" : null }
                 textAlign="center"
                 onClick={props.onClick}>{props.text}</Segment>
    </Grid.Column>

)