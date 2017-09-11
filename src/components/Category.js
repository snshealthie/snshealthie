import React from "react"
import {
    Grid,
    Segment,
} from "semantic-ui-react"

export const Category = (props) => (

    <Grid.Column>
        <Segment
            padded
            data-value={props.value}
            inverted={!!props.isActive }
            color={props.isActive || props.isHovered ? props.color : null }
            textAlign="center"
            onClick={props.onClick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {props.text}
        </Segment>
    </Grid.Column>

)