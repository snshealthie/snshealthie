import React from 'react'
import {
    Card,
    Rating,
    Reveal,
} from 'semantic-ui-react'

export class Class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedClass: null,
        }

    }


    render() {

        return (

            <Reveal animated="move" onClick={this.props.handleClassSelect}>
                <Reveal.Content visible>

                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>{this.props.type}</Card.Meta>
                            <Card.Description>{this.props.description}</Card.Description>
                            <Card.Description extra>
                                <Rating icon="heart" rating={this.props.rating} maxRating={5} disabled/>
                            </Card.Description>
                        </Card.Content>
                    </Card>

                </Reveal.Content>

                <Reveal.Content hidden>

                    <Card >
                        <Card.Content>
                            <Card.Header>{this.props.name}</Card.Header>
                            <Card.Meta>{this.props.duration_minutes}</Card.Meta>
                            <Card.Description>{this.props.instructor}</Card.Description>
                            <Card.Description extra>
                                {this.props.gym}
                            </Card.Description>
                        </Card.Content>
                    </Card>

                </Reveal.Content>
            </Reveal>
        )
    }
}