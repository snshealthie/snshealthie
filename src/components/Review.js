import React from 'react'
import {
    Card,
    Rating,
    Image,
} from 'semantic-ui-react'

export const Review = (props) => {

    const results = props.data;

    if (props.data.length === 0) {

       return <div>Sorry no data</div>

    } else {

        let reviews = results.map((review) =>
            <Card key={review.id}>
                <Card.Content>

                    <Card.Header>{review.title}</Card.Header>
                        <Card.Meta>Date Review Created</Card.Meta>

                    <Card.Description>
                        <p>{review.review}</p>
                        <Rating icon="heart" defaultRating={review.rating} maxRating={5} disabled />
                    </Card.Description>

                        <Card.Content extra>
                            <Image floated="left">Image</Image>Reviewed by {review.submitted_by}
                        </Card.Content>

                </Card.Content>
            </Card>
        )

        return (
            <div>{reviews}</div>
        );
    }

}

