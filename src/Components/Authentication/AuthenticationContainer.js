import React, { Component, Fragment, View } from 'react'
import { setJwt } from '../../Api/init'
import Register from './Register'
import Login from './Login'
import CreateCompany from './CreateCompany'
import store from '../../Redux/store'
import {api} from '../../Helpers'






class AuthenticationContainer extends Component {

    // These 'StoreUser' functions are to set and retrieve data form localStorage in the users browser
    get storeUser() {
        return localStorage.user && JSON.parse(localStorage.user)
    }

    set storeUser(userDetails) {
        localStorage.setItem('user', JSON.stringify(userDetails))
    }

    // This authenticate function allows for both registration and sign in 
    authenticate = (e, url) => {
        e.preventDefault()
        const form = e.target.elements

        const newUser = {
            email: form.email.value,
            password: form.password.value,
            firstName: form.firstName && form.firstName.value,
            lastName: form.lastName && form.lastName.value
        }

        api.user.authenticate(newUser, url, (registeredUser) => {
            this.storeUser = registeredUser
            this.props.history.push('/dashboard')
        })

    }

    expiryCheck = () => {
        const user = this.storeUser
        const isExpired = user && (user.exp * 1000) - Date.now()
 
        if (isExpired >= 0) {
            setJwt(user)
            store.dispatch({
                type: 'set_loggedIn',
                loggedIn: true,
                currentUser: user
            })
        } else {
            localStorage.removeItem('user')
        }
    }

    componentWillMount() {
        this.expiryCheck()
    }

    createCompany = (e) => {
        e.preventDefault()
        const form = e.target.elements
        const address = {
            lineOne: form.lineOne.value,
            city: form.city.value,
            country: form.country.value,
            postcode: form.postcode.value
        }

       const newCompany = {
            name: form.name.value,
            abn: form.abn.value,
            companyType: form.companyType.value,
            address: address,
            phoneNumber: form.phoneNumber.value,
            accountType: 'purchaser',
            companyOwnerId: store.getState().currentUser.sub
        }

        
        api.company.create(newCompany, (newCompany) => {
            const currentUser = store.getState().currentUser
            api.user.update(currentUser.sub, {company: newCompany})
            this.storeUser = currentUser
            this.props.history.push('/dashboard')
        })      
    }


    render() {
        const {path} = this.props.match
        // console.log('THIS.PROPS IN AC', this.props)
        // console.log(path) 
        const {loginError} = store.getState()
        return(
                    <Fragment>
                            {path === '/register' && <Register registerError={loginError} url={path} register={this.authenticate} />}
                            {path === '/login' && <Login loginError={loginError} url={path} login={this.authenticate} />}
                            {path === '/create-company' && <CreateCompany createCompany={this.createCompany} />}
                    </Fragment>
        )
    }
}

export default AuthenticationContainer