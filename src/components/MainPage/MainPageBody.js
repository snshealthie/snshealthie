import React from "react"
import {
    Segment,
    Header,
    Container,
    Card,
    Grid,
    Statistic,
    Reveal,
} from "semantic-ui-react"
import { activityCategories } from "../../constants/ActivityCategories";

export const MainPageBody = () => {

    let category = activityCategories.map((category, index) =>
        <Grid.Column key={index}>
           <Reveal animated="fade">
               <Reveal.Content visible>
                    <Card
                        image={category.image}
                    />
               </Reveal.Content>
               <Reveal.Content hidden>
                   <Card
                       header={category.text}
                       description="hi"/>
               </Reveal.Content>
           </Reveal>
        </Grid.Column>
    )

    return (

        <div>
            <Segment
                inverted
                textAlign='center'
                style={{minHeight: 700, padding: '1em 0em'}}
                vertical
            >
                <Container text>
                    <Header
                        as='h1'
                        content="Healthie is coming"
                        inverted
                        style={{fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em'}}
                    />
                </Container>
            </Segment>

            <Container text style={{padding: "2em 0em"}}>
                <Header as='h2'>Header</Header>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                    strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                    eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                    vel augue. Curabitur ullamcorper ultricies nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                    strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
                    felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                    dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                    eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                    vel augue. Curabitur ullamcorper ultricies nisi.</p>
            </Container>

                <Segment inverted>
                <Statistic.Group inverted widths="four" style={{padding: "4em 0em"}}>
                    <Statistic inverted
                        value="1000"
                        label="gyms"
                    />
                    <Statistic inverted
                        value="1000"
                        label="gyms"
                    />
                    <Statistic inverted
                        value="1000"
                        label="gyms"
                    />
                    <Statistic inverted
                        value="1000"
                        label="gyms"
                    />
                </Statistic.Group>
            </Segment>


            <Segment style={{padding: '5em'}}>
                <Header as="h1" textAlign="center" style={{paddingBottom: "2em"}}>Choose an exercise category and begin recording</Header>
                <Grid columns={5}
                      relaxed
                      stackable>
                    {category}
                </Grid>
            </Segment>

        </div>
    )

}
