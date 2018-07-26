import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { Header, BodyWindow } from './StaffContainer.styles'
import { setJwt } from '../../../../Api/init'
import StaffRegister from './StaffRegister'
import StaffLogin from './StaffLogin'
import store from '../../../../Redux/store'
import helpers from '../../../../Helpers'
import AllStaff from '../AllStaff/AllStaff'


const { api } = helpers

class StaffContainer extends Component {
    // These 'StoreStaff' functions are to set and retrieve data form localStorage in the staff browser
    get storeStaff() {
        return localStorage.staff && JSON.parse(localStorage.staff)
    }

    set storeStaff(staffDetails) {
        localStorage.setItem('staff', JSON.stringify(staffDetails))
    }

    // This authenticate function allows for both registration and sign in 
    authenticate = (e, url) => {
        e.preventDefault()
        const form = e.target.elements

        const newStaff = {
            email: form.email.value,
            password: form.password.value,
            firstName: form.firstName && form.firstName.value,
            lastName: form.lastName && form.lastName.value
        }

        api.staff.authenticateStaff(newStaff, url, (registeredStaff) => {
            this.storeStaff = registeredStaff
            this.props.history.push('/dashboard')
        })

    }

    expiryCheck = () => {
        const staff = this.storeStaff
        const isExpired = staff && (staff.exp * 1000) - Date.now()
 
        if (isExpired >= 0) {
            setJwt(staff)
            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true,
                currentStaff: staff
            })
        } else {
            localStorage.removeItem('staff')
        }
    }

    componentWillMount() {
        this.expiryCheck()
    }

    render(){

        const {path} = this.props.match        
        const {loginError} = store.getState()

        return (
            <Fragment>
                <Header>
                    
                </Header>
                <BodyWindow>
                    <Route exact path='/dashboard/staff' render={() => (
                        <AllStaff />
                    )} />
                    <Route path='/dashboard/staff/new' render={() => (
                        <StaffRegister registerError={loginError} url="/staff/register" register={this.authenticate} />
                    )} />
                </BodyWindow>
            </Fragment>
        )
    }
}


export default StaffContainer
