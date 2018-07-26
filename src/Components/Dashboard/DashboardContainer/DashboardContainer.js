import React, { Component } from 'react'
import MenuContainer from '../Menu/MenuContainer/MenuContainer'
import OrdersContainer from '../Orders/OrdersContainer/OrdersContainer'
import ProductsContainer from '../Products/ProductsContainer/ProductsContainer'
import StaffContainer from '../Staff/StaffContainer/StaffContainer'
import AccountContainer from '../Account/AccountContainer/AccountContainer'
import SuppliersContainer from '../Suppliers/SuppliersContainer/SuppliersContainer'
import { DashboardLayout, Header, SidePanel, Window, LogoBackground } from './Dashboard.styles.js'
import { Route, Redirect } from 'react-router-dom'
import logoPath from "../../../Assets/Images/logo.svg"
import {authorization} from "../../../Helpers"





class Dashboard extends Component {

    render(){
        return(
                <DashboardLayout>
                    <SidePanel>
                        <Header>
                            <h3>Order-Ezy</h3>
                        </Header>
                        <MenuContainer />
                    </SidePanel>
                    <Window>  
                    
                    <LogoBackground>
                        <img
                            src={logoPath}
                            height='75%'
                            width='75%'
                            alt='Knife and spoon logo'

                        />
                    </LogoBackground> 
                        
                        <Route path='/dashboard/orders' component={OrdersContainer} />
                        <Route path='/dashboard/products' render={(rProps) => {
                            if (authorization.isSupplier()) {
                                return(
                                    <ProductsContainer {...rProps} />
                                )

                            } else {
                                return(
                                    <Redirect to='/dashboard' />
                                )
                            }
                        }} />
                        <Route path='/dashboard/account' component={AccountContainer} />
                        <Route path='/dashboard/suppliers' component={SuppliersContainer} />
                        <Route path='/dashboard/staff' component={StaffContainer} />

                    </Window>
                </DashboardLayout>
        )
    }

}

export default Dashboard
