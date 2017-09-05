import React from "react"
import {
    Card,
    Grid,
    Segment,
    Header,
} from "semantic-ui-react"
import { activityCategories } from "../constants/ActivityCategories";

export default class CategoriesFrontPage extends React.Component {


    render() {

        let category = activityCategories.map((category, index) =>
            <Grid.Column key={index}>
                <Card
                    image={category.image}
                    header={category.text}
                    description="hi"
                />
            </Grid.Column>
        )

        return (
            <Segment style={{padding: '5em'}}>
                <Header as="h1" textAlign="center" style={{paddingBottom: "2em"}}>Choose an exercise category and begin recording</Header>
                <Grid columns={5} relaxed doubling stackable>
                    {category}
                </Grid>
            </Segment>
        )
    }

}
