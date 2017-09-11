import React from "react"

import {
    Segment,
    Header,
    Grid,
    Icon,
    Divider,
} from "semantic-ui-react"

export default class ProfilePageMain extends React.Component {

    render() {

        return (
            <div>
              <Segment style={{padding: '6em'}}>
                  <Header as="h1" textAlign="center">Welcome back Naiqu</Header>
                  <Divider/>
                  <Grid columns={2}>
                      <Grid.Column>
                          <Header as="h2" textAlign="center">
                              <Icon name="settings"/>
                              Account Settings
                          </Header>

                      </Grid.Column>
                      <Grid.Column>
                          <Header as="h2" textAlign="center">
                              <Icon name="book" />
                              Your classes and reviews
                          </Header>

                      </Grid.Column>
                  </Grid>
              </Segment>
            </div>
        )
    }
}