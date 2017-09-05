import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    } from 'semantic-ui-react'


const Footer = () => (

    <Segment inverted vertical style={{ padding: '3em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Sitemap</List.Item>
                            <List.Item as='a'>Contact Us</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Consulting</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>

)

export default Footer