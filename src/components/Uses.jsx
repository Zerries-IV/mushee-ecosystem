import { keyframes, styled } from "styled-components"
import IMAGE from '../assets/uses.webp'
import { Card } from "react-bootstrap"
import { Divider } from "@mui/material"
import { Check } from "@mui/icons-material"


const Background = styled.div`
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
    font-size: 70px;
    font-weight: 800;
    letter-spacing: -2.5px;
    line-height: 90px;

    @media(max-width: 768px){
        font-size: 40px;
        line-height: 40px;
    }
`

const P = styled.p`
    color: white;
    line-height: 30px;
    font-weight: 600
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
    width: 80vw;
    margin: 20px auto;
    color: white;
    display: flex;
    justify-content: center;
    place-items: center;
    gap: 3%;
    
    @media(max-width: 768px){
        flex-direction: column;
    }
`

const FlexRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 0 0 20px 0;
`

const CARDDETAILS = [
    {
        title: 'Trading Competition',
        text: 'Staking',
        info: [{
            1: 'Access to basic features',
            2: 'Basic reporting and analytics',
            3: 'Basic chat and email support'
        }]
    },
    {
        title: 'Presale & Airdrop',
        text: 'Investing',
        info: [{
            1: 'All basic and crypto features',
            2: 'Invest in the Mushee ecosystem',
            3: 'Bonus annual payment from Mushee'
        }]
    },
    {
        title: 'Saving',
        text: 'Saving',
        info: [{
            1: 'All basic features',
            2: 'Saving on staking pools',
            3: 'Interest in staking Mushee'
        }]
    },
]

function Cards(){
    return(
        CARDDETAILS.map((details, index) => {
            return(
                <Card key={index} style={{ padding: '20px 15px', width: '100%', background: '#000f00', borderRadius: '10px', margin:'0 0 20px 0'}}>
                    <Card.Body style={{ padding: '20px 25px', textAlign: 'start'}}>
                        <Card.Title style={{ color: '#5cb5a2', padding: '0 0 10px 0'}}>{details.title}</Card.Title>
                        <Card.Subtitle style={{ color: 'gray', padding: '0 0 30px 0' }}>Mushee Hub</Card.Subtitle>
                        <Card.Text style={{ color: 'white', fontSize: '30px', fontWeight: '800', textAlign: 'start'}}>{details.text}</Card.Text>
                        <Divider style={{ border: '1px solid gray', margin: '0 0 30px 0'}}/>
                            {
                                details.info.map((info, index) => {
                                    return(
                                        <div key={index}>
                                            <FlexRow >
                                                <Check sx={{ color: '#5cb5a2' }}/>
                                                <span style={{ color: 'grey'}}>{info[1]}</span>
                                            </FlexRow>
                                            <FlexRow >
                                                <Check sx={{ color: '#5cb5a2' }}/>
                                                <span style={{ color: 'grey'}}>{info[2]}</span>
                                            </FlexRow>
                                            <FlexRow >
                                                <Check sx={{ color: '#5cb5a2' }}/>
                                                <span style={{ color: 'grey'}}>{info[3]}</span>
                                            </FlexRow>
                                        </div>
                                    )
                                })
                            }
                        <Divider style={{ border: '1px solid gray', margin: '30px 0 0 0'}}/>
                    </Card.Body>
                </Card>
            )
        })
    )
}

const Uses = () => {
  return (
    <Background>
        <AnimatedDiv>
        <H1>Mushee Hub on Crypto</H1>
            <P>Direct EUR & GBP or other fiat buy BTC, BNB,MUSHEE and 200+ cryptos</P>
            <GridContainer>
                <Cards />
            </GridContainer>  
       </AnimatedDiv>
    </Background>
  )
}

export default Uses