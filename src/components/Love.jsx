import { keyframes, styled } from "styled-components"
import IMAGE from '../assets/uses.webp'
import ms_1 from '../assets/ms_1.jpg'
import ms_2 from '../assets/ms_2.jpg'
import ms_3 from '../assets/ms_3.jpg'
import ms_4 from '../assets/ms_4.jpg'
import { Card, Accordion } from "react-bootstrap"
import { Divider } from "@mui/material"

const Background = styled.div`
    background-image: url(${IMAGE});
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    place-items: center;
`

const H1 = styled.h1`
    margin: 200px 0 0 0;
    color: white;
    font-size: 50px;
    font-weight: 800;
    letter-spacing: -2.5px;
    line-height: 90px;

    @media(max-width: 768px){
        margin: 20px 0 0 0;
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
    width: 100%;
    margin: 20px auto;
    color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));;
    justify-content: center;
    place-items: center;
    gap: 3%;

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
    }
`

const TEAM = [
    {
        text: 'Amazing testnet activities going on, and solid team support from angles.',
        image: ms_1,
        name: 'Santino Luca',
        position: 'C.E.O Dush'
    },
    {
        text: 'For the first time, we have an easy-to-use, comprehensive, and affordable crypto hub to manage our finances.',
        image: ms_2,
        name: ' Filo Clau',
        position: 'C.O.O Huafi labs'
    },
    {
        text: 'The product is very intuitive, easy to use and other financial systems. The support is also very good and I have always sent crypto transactions.',
        image: ms_3,
        name: 'Sussan Nala ',
        position: 'C.E.O Poox'
    },
    {
        text: "Mushee Hub helps us monitor and manage crypto activities.  It is so easy to set up, I'm still not sure how to use it properly. I'm a total beginner and I can use Mushee Hub without any problems.",
        image: ms_4,
        name: 'Scano Nomer',
        position: 'Co-Founder Rotten House'
    },

]

function Cards(){
    return(
        TEAM.map((team, index) => {
            return(
                <Card key={index} style={{ width: '100%', height: 'fit-content', background: '#232323', borderRadius: '10px', margin: '0 0 20px 0'}}>
                    <Card.Body style={{ padding: '20px 25px', textAlign: 'start'}}>
                        <Card.Text style={{ color: 'white', padding: '0 0 10px 0', fontWeight: '800',}}>
                            {team.text}
                        </Card.Text>
                        <Divider style={{ border: '1px solid gray', margin: '0 0 30px 0', width: '20%'}}/>
                        <Card.Img style={{ width: '50px', height: '50px' }} src={team.image} srcSet=""/>
                        <Card.Text style={{ color: 'white', fontSize: '30px', fontWeight: '800', textAlign: 'start'}}>{team.name}</Card.Text>
                        <Card.Subtitle style={{ color: 'white', fontSize: '18px',}}>{team.position}</Card.Subtitle>
                    </Card.Body>
                </Card>
            )
        })
    )
}

function FAQ() {
  return (
    <Accordion style={{ width: '100%'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Mushee Hub? </Accordion.Header>
        <Accordion.Body style={{ textAlign: 'start'}}>
            Mushee is building a decentralized ecosystem focusing on assets, identity, and socializing. Mushee is a wallet, social tool, transaction medium, and value router in the era of the digital economy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What you benefit?</Accordion.Header>
        <Accordion.Body style={{ textAlign: 'start'}}>
            Mushee Hub offers a non-custodial wallet, which means that you have complete control over your private keys. Has a built-in decentralized exchange (DEX), which allows you to swap cryptocurrencies without having to go through a centralized exchange.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{ textAlign: 'start'}}>
        <Accordion.Header>How to use Mushee app?</Accordion.Header>
        <Accordion.Body>
            <ol>
                <li>Download and install the Trust Wallet app from the App Store or Google Play.</li>
                <li>Create a new wallet or import an existing wallet.</li>
                <li>Add cryptocurrency to your wallet.</li>
                <li>Send and receive cryptocurrency.</li>
            </ol>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

const Love = () => {
  return (
    <Background>
        <AnimatedDiv>
        <H1>Why do people love us</H1>
            <GridContainer>
                <Cards />
            </GridContainer>  
        <H1 style={{  margin: '50px 0 0 0' }}>FAQ</H1>
        <GridContainer>
            <FAQ />
        </GridContainer>
       </AnimatedDiv>
    </Background>
  )
}

export default Love