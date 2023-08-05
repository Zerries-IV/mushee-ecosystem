import { keyframes, styled } from "styled-components"
import IMAGE from '../assets/usecase.webp'
import USECASE from '../assets/usecasetypes.webp'


const Background = styled.div`
    height: 100vh;
    background-image: url(${IMAGE});
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: center;
    place-items: center;

    @media(max-width: 768px){
        height: 100%;
    }
`

const H1 = styled.h1`
    color: white;
    font-size: 56px;
    font-weight: 800;
    letter-spacing: -2.5px;
    line-height: 90px;

    @media(max-width: 426px){
        font-size: 40px;
        line-height: 40px;
    }
`

const P = styled.p`
    color: white;
    line-height: 20px;
    font-weight: 600;
    align-items: flex-start;

    @media(max-width: 426px){
        font-weight: 200;
        padding: 4px 0 0 0;
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
    color: white;
    display: flex;
    justify-content: space-between;
    gap: 3%;

    @media(max-width: 768px){
        flex-direction: column;
    }
`
const FlexContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
        width: 100%;
    }
`

const Image = styled.img`
    height: auto;
    width: 500px;

    @media(max-width: 768px){
        margin: 20px 0 0 0;
        display: flex;
        align-self: center;
    }

    @media(max-width: 426px){
        width: 375px
    }

    @media(max-width: 321px){
        width: 270px
    }
    
`

const Usecase = () => {
  return (
    <Background>
        <AnimatedDiv>
        <GridContainer>
            <FlexContainer>
                <H1>Send Crypto easily.</H1>
                <P>You can organize your crypto with our platform. You can check your payment history or create a staking calendar.</P>
            </FlexContainer>
                <Image src={USECASE} srcSet="" alt='Usecase' />
            </GridContainer>  
       </AnimatedDiv>
    </Background>
  )
}

export default Usecase