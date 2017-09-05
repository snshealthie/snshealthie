import React from 'react'
import {
    Card,
    Rating,
} from 'semantic-ui-react'

const Review = (props) => {

    const results = props.data;

    if (props.data.length === 0) {

       return <div>Sorry no data</div>

    } else {

        let reviews = results.map((review) =>
            <Card key={review.id}>
                <Card.Content>
                    <Card.Header>{review.review}</Card.Header>
                    <Card.Description>
                        <Rating icon="heart" defaultRating={review.rating} maxRating={5} disabled />
                    </Card.Description>
                </Card.Content>
            </Card>
        );

        return (
            <div>{reviews}</div>
        );
    }

}

export default Review

