import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    } from 'semantic-ui-react'
import { Link } from "react-router-dom"

const Footer = () => (

    <Segment inverted vertical style={{ padding: '3em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>

                    <Grid.Column width={6}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item
                                as={Link} to="/aboutus">About Us</List.Item>
                            <List.Item
                                as={Link} to="/contactus">Contact Us</List.Item>
                            <List.Item
                                as={Link} to="/careers">Careers</List.Item>
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