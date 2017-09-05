import React from 'react'
import {
    Card,
    Rating,
} from 'semantic-ui-react'

const Class = (props) => {

    const results = props.data;
    let classes = results.map((aclass) =>
        <Card color="blue" key={aclass.id}>
            <Card.Content>
                <Card.Header>{aclass.name}</Card.Header>
                <Card.Meta>{aclass.type}</Card.Meta>
                <Card.Description>{aclass.description}</Card.Description>
                <Card.Description extra>
                    <Rating icon="heart" rating={aclass.rating} maxRating={5} disabled />
                </Card.Description>
            </Card.Content>
        </Card>
    );

    return (
        <div>{classes}</div>
    );
}

export default Class

