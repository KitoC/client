import React, { Fragment } from 'react'
import Form from '../../../../UI/Form'
import FormField from '../../../../UI/FormField'
import { StyledLink, ErrorMessage, Center,} from '../../../Authentication/Auth.styles.js'
import {Body, Button} from './StaffRegisterStyles'



const StaffRegister = (props) => {
   const { registerError, register, url} = props

       return (
        <Body>
            <div>
                <Form onSubmit={(e) => register(e, url)} title="Register an account!">
                    <FormField label="First Name" name="firstName" type="text" />
                    <FormField label="Last Name" name="lastName" type="text" />
                    <FormField label="Email" name="email" type="email" />
                    <FormField label="Password" name="password" type="password" />
                    <ErrorMessage>{registerError}</ErrorMessage>

                    <Button>Create account</Button>
                </Form>
            </div>
        </Body>
   )
}

export default StaffRegister