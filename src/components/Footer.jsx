import { styled } from "styled-components"
import { Divider } from "@mui/material"

const TelegramIcon = 'https://img.icons8.com/ios-filled/FFFFFF/20/telegram-app.png'
const TwitterIcon = 'https://img.icons8.com/?size=1x&color=ffffff&id=01GWmP9aUoPj&format=png'
// const MailIcon = 'https://img.icons8.com/?size=1x&color=ffffff&id=85119&format=png'

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

const NavSocials = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  justify-content: center;
  color: white
`

const SOCIALS = [
  {
      name: 'X',
      src: `${TwitterIcon}`,
      hrf: 'https://twitter.com/mushee_io'
  },    
  {
      name: 'Telegram',
      src: `${TelegramIcon}`,
      hrf: 'https://t.me/musheechat'
  },
  // {
  //     name: 'Mail',
  //     src: `${MailIcon}`,
  //     hrf: 'mailto:contact@mushee.xyz'
  // },
]

export function Socials(){
  return (
      <NavSocials >
      {
      SOCIALS.map((social) => {
          return (
              <div className={social.name} key={social.name} style={{ padding: '0 20px'}}>
                  <a href={social.hrf} target='_blank' rel='noreferrer'>
                  <img srcSet='' alt={social.name} src={social.src} />  
                  </a>                                
              </div>
          )
      })
      }
      </NavSocials>
  )
}

const Footer = () => {
  return (
    <Background>
        <Divider style={{ border: '1px solid white', margin: '0 0 30px 0', width: '100%'}}/>
        <Socials />
        <P>Copyright © 2022 Mushee Hub, Inc. All rights reserved.</P>
    </Background>
  )
}

export default Footer