import { styled } from "styled-components"
import { Divider } from "@mui/material"


const Background = styled.footer`
    height: fit-content;
    background: #020710;
    margin: -20px 0;
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    place-items: center;
    flex-direction: column;
`

const P = styled.p`
    color: white;
    line-height: 20px;
    font-weight: 600
`
const Footer = () => {
  return (
    <Background>
        <Divider style={{ border: '1px solid white', margin: '0 0 30px 0', width: '100%'}}/>
        <P>Copyright © 2022 Mushee Hub, Inc. All rights reserved.</P>
    </Background>
  )
}

export default Footer