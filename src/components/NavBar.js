import React from 'react'
import {
    Menu,
    Icon,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
    SignUpModal,
    LoginModal,
    LogoutModal,
} from "./NavBarModals";

export default class NavBar extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted size="large" fixed="top">
                <Menu.Item as={Link} to="/"
                           active={activeItem === 'home'}
                           onClick={this.handleItemClick}>
                    <Icon name="soccer" />
                </Menu.Item>
                <Menu.Item as={Link} to="/categories"
                           name='categories'
                           active={activeItem === 'categories'}
                           onClick={this.handleItemClick} />
                <Menu.Item name='friends'
                           active={activeItem === 'friends'}
                           onClick={this.handleItemClick} />
                <Menu.Menu position="right">
                    <Menu.Item as={Link} to="/profile"
                               active={activeItem === 'profile'}
                               onClick={this.handleItemClick}>
                        <Icon color="grey" size="big" name="user circle" />
                    </Menu.Item>
                    <LoginModal />
                    <SignUpModal />
                    <LogoutModal />
                </Menu.Menu>
            </Menu>

        )
    }
}
