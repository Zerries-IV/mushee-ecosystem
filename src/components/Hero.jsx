import { Button } from "react-bootstrap"
import { keyframes, styled } from "styled-components"
import IMAGE from '../assets/hero.webp'
import { Socials } from "./Footer"

const Background = styled.div`
  height: 100vh;
  background-image: url(${IMAGE});
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  place-items: center;
`

const H1 = styled.h1`
  color: white;
  font-size: 80px;
  font-weight: 800;
  letter-spacing: -2.5px;
  line-height: 90px;

  @media(max-width: 768px){
    font-size: 40px;
    line-height: 50px;
  }
`

const P = styled.p`
  color: white;
  line-height: 30px;
  font-weight: 600;

  @media(max-width: 768px){
    font-size: 16px;
  }
`
const slideInRight = keyframes`
 0% {
      opacity: 0;
      transform: translate(-100px);
    }
    20% {
      opacity: 15%;
    }
    40% {
      opacity: 1;
      transform: translate(3px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
`

const AnimatedDiv = styled.div`
  width: 700px;
  animation: ${slideInRight} 1s ease-in-out;
`

const Hero = () => {
  return (
    <Background>
       <AnimatedDiv>
        <H1>Decentralized ecosystem.</H1>
            <P>Mushee is building a decentralized ecosystem focusing on assets, identity, and socializing.</P>
            <P>Mushee is a wallet, social tool, transaction medium, and value router in the era of the digital economy</P>
            <Socials />
            <Button style={{
                color: 'white',
                background: 'rgb(92, 181, 162)',
                boxShadow: 'rgb(92, 181, 162) 0px 10px 20px -10px',
                padding: '12px 20px',
                margin: '30px 0 0 0',
                borderRadius: '999px',
                border: 'none',
                fontWeight: '800'
            }} href="https://mushee.gitbook.io/mushee_io/"> Whitepaper </Button>
       </AnimatedDiv>
    </Background>
  )
}

export default Hero