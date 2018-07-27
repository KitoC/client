import styled from 'styled-components'
import styleVariables from './styleVariables'
import { Link } from 'react-router-dom'
import defaultImg from '../Images/murloc.png'
const { colors } = styleVariables

const Default = {
    Link: styled(Link)`
                color: ${colors.white};
                text-decoration: none;
                padding: 10px 0;
                font-weight: bold;

                &:visited {
                        color: ${colors.white};
                }
    `, ButtonLink: styled(Link)`
                display: inline-block;
                border-radius: 2.5px;
                font-weight: bold;
                cursor: pointer;
                transition: 1s;
                border: 2px solid ${colors.lightGrey};
                color: grey;
                background: ${colors.lightGrey};
                height: 35px;
                width: fit-content;
                text-decoration: none;
                padding: 10px;
                
                font-weight: bold;
                font-size: 1.2rem;

                &:hover {
                        background: ${colors.darkGrey};
                        border: 2px solid ${colors.darkGrey};
                }
    `, Body: styled.div`
                height: 100%;
                width: 100%;
    `, Window: styled.div`
                width: 100%;
                height: 92.5%;
                position: relative;
                z-index: 50;
    `, Header: styled.div`
                width: 100%;
                height: 7.5%;
                background: ${colors.white};
                color: ${colors.black};
                & h3 {
                        font-size: 1.5rem;
                        margin: 0;
                }
    `, Panel: styled.div`
                background: ${colors.lightGrey};
                border-radius: 5px;
                padding: 10px;
                display: flex;
    `, Button: styled.button`
                display: inline-block;
                border-radius: 2.5px;
                font-weight: bold;
                cursor: pointer;
                transition: 1s;
                border: 2px solid ${colors.lightGrey};
                color: grey;
                background: ${colors.lightGrey};
                height: 35px;
                width: fit-content;
                
                font-weight: bold;
                font-size: 1.2rem;

                &:hover {
                        background: ${colors.darkGrey};
                        border: 2px solid ${colors.darkGrey};
                }
        `, Image: styled.div`
                background-image: url(${props => props.url ? props.url : defaultImg});
                background-size: auto 100%;
                background-repeat: no-repeat;
                background-position: center; 
        `

    

}



export default Default
