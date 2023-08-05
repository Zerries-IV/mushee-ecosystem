import { keyframes, styled } from "styled-components"
import IMAGE from '../assets/features.webp'
import { BoltRounded, CreditCardOutlined } from "@mui/icons-material"

const Background = styled.div`
    height: 100vh;
    background-image: url(${IMAGE});
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    place-items: center;

    @media(max-width: 768px){
        height: 100%;
        padding: 0 0 0 0;
    }
`

const H1 = styled.h1`
    color: white;
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -2.5px;
    line-height: 90px;

    @media(max-width: 768px){
        font-size: 40px;
        line-height: 40px;
    }

    @media(max-width: 376px){
        font-size: 35px;
    }
`

const P = styled.p`
    color: white;
    line-height: 30px;
    font-weight: 600;

    @media(max-width: 321px){
        font-size: 14px;
        line-height: 20px;
    }
`

const slideInUp = keyframes`
0% {
    opacity: 0;
    transform: translateY(100px);
}
20% {
    opacity: 15%;
}
40% {
    opacity: 1;
    transform: translateY(-3px);
}
100% {
    opacity: 1;
    transform: translateY(0);
}
`
const scaleInGrow = keyframes`
0% {
    opacity: 0;
    transform: scale(.5);
}
20% {
    opacity: 15%;
}
40% {
    opacity: 1;
    transform: scale(103%);
}
100% {
    opacity: 1;
    transform: scale(1);
}
`

const AnimatedDiv = styled.div`
    width: 100%;
    animation: ${slideInUp} 1s ease-in-out;
`

const GridContainer =  styled.div`
    margin: 50px -15px 0 -15px;
    color: white;
    display: flex;
    justify-content: space-around;

    @media(max-width: 768px){
        flex-direction: column;
    }

    @media(max-width: 376px){
        margin-top: 20px;
    }
`
const FlexContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 15px;
    animation: ${scaleInGrow} 3s ease-in-out;
    animation-fill-mode: forwards;

    @media(max-width: 768px){
        width: 100%;
        padding: 10px 55px;
    }
`

const Features = () => {
  return (
    <Background>
        <AnimatedDiv>
        <H1>One Hub. One App.</H1>
            <P>You can manage your crypto only using Mushee Hub.</P>
            <GridContainer>
                <FlexContainer>
                    <BoltRounded sx={{ fontSize: 50, alignSelf: 'center', }} />
                    <strong>Mushee wallet</strong>
                    <span>We will process your transaction as quickly as possible. You do not need to worry about how long it will take for your money to arrive.</span>
                </FlexContainer>
                <FlexContainer>
                    <CreditCardOutlined sx={{ fontSize: 50, alignSelf: 'center', }} />
                    <strong>Virtual Card</strong>
                    <span>You don&apos;t need to use a physical card, we will provide you with a virtual card for doing cashless payments.</span>
                </FlexContainer>
                <FlexContainer>
                    <BoltRounded sx={{ fontSize: 50, alignSelf: 'center', }} />
                    <strong>Contactless Payment</strong>
                    <span>Mushee swap is a decentralized exchange (DEX) built on the (BSC). Our mission is to provide a fair and accessible platform for everyone.</span>
                </FlexContainer>
            </GridContainer>  
       </AnimatedDiv>
    </Background>
  )
}

export default Features