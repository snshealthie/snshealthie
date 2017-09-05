import React from "react"
import {
    Modal,
    Icon,
    Button,
    Header,
} from "semantic-ui-react"


export const SignUpModal = () => (

    <Modal trigger={<Button primary>Sign Up</Button>} size='small'>
        <Header icon='facebook' content='Sign up with Facebook' />
        <Modal.Content>
            <Button color='facebook'>
                <Icon name='facebook' /> Sign up with Facebook
            </Button>
        </Modal.Content>
    </Modal>

)

export const LogoutModal = () => (

    <Modal trigger={<Button>Log Out</Button>} size='small'>
        <Header content="Are you sure you want to log out?" />
        <Modal.Content>
            Are you sure you want to log out?
        </Modal.Content>
        <Modal.Actions>
            <Button color='red'>
                <Icon name='remove' /> No
            </Button>
            <Button color='green'>
                <Icon name='checkmark' /> Yes
            </Button>
        </Modal.Actions>
    </Modal>

)

export const LoginModal = () => (

    <Modal trigger={<Button>Log In</Button>} size='small'>
        <Header icon='facebook' content='Log In with Facebook' />
        <Modal.Content>
            <Button color='facebook'>
                <Icon name='facebook' /> Log in with Facebook
            </Button>
        </Modal.Content>
    </Modal>

)