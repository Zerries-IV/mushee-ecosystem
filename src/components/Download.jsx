import { keyframes, styled } from "styled-components"
import APPSTORE from '../assets/appstore.webp'
import PLAYSTORE from '../assets/playstore.webp'

const Background = styled.div`
    height: 100vh;
    background: #020710;
    margin: -20px 0;
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    place-items: center;
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

const AnimatedDiv = styled.div`
    width: 100%;
    animation: ${slideInUp} 1s ease-in-out;
`

const GridContainer =  styled.div`
    margin: 50px -15px 0 -15px;
    color: white;
    display: flex;
    justify-content: center;
    gap: 10%;

    @media(max-width: 321px){
        flex-direction: column;
        align-items: center;
    }
`

const Image = styled.img`
    width: 150px;
    height: 57px;
    margin-bottom: 10px;
`

const Download = () => {
  return (
    <Background>
        <AnimatedDiv>
        <H1> Start using Mushee to Send & Receive Crypto.</H1>
            <GridContainer>
                <Image src={APPSTORE} srcSet="" alt="App Store" />
                <Image src={PLAYSTORE} srcSet="" alt="Play Store" />
            </GridContainer>  
       </AnimatedDiv>
    </Background>
  )
}

export default Download