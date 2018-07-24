import styled from 'styled-components'
import { styleVariables, Default } from '../../../../Assets/Styles';
const { colors } = styleVariables


const TileBody = styled.div`
    display: flex;
    width: 350px;
    height: 150px;
    border-radius: 5px;
    background: ${colors.white};
    margin-right: 30px;
    margin-top: 30px;
`
const TileIMG = Default.Image.extend`
    
    width: 150px;
    height: 100%;
    border-radius: 5px 0 0 5px;
`
const TextBox = styled.div`
    height: 100%;
    width: 200px;
    padding: 10px;
    position: relative;
`

const CompanyName = styled.p`
    font-weight: bold;
    // font-size: 
    margin: 5px;
`
const CompanyType = styled.p`
    // color: grey;
    margin: 5px;
`
const CompanyAddress = styled.p`
    // color: grey;
    margin: 5px;
`

const ButtonLink = Default.ButtonLink.extend`
    margin-top: 10px;
    text-align: center;
    padding: 0 auto;
    color: ${colors.white}
    background: ${colors.orange};
    border-color: ${colors.orange};
    height: 45px;
    width: 100%;
    &:hover {
        border-color: ${colors.lightOrange};
        background: ${colors.lightOrange};
    } 
`
export {
    TileBody,
    TileIMG,
    TextBox,
    CompanyName,
    CompanyType,
    CompanyAddress,
    ButtonLink
}
