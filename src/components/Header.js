import LogoGarage from '../style/Logo/simple.png'
import styled from 'styled-components'
import '../style/popup.css'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 15vh;
`

const Title = styled.h1`
				display: flex;
        text-transform : uppercase;
        font-size : 1.5em;
        position : fixed;
        left : 0;
				right: 0;
				justify-content: flex-end;
				padding-right: 5px;
				padding-top: 15px;
`



export default function Header(){
	return(
		<>
		<HeaderContainer>
			<img src={LogoGarage} alt='logo' style={{display: 'flex', position: 'fixed', height: '100px'}}/>
			<Title>
				La fiabilité, pour de vrai !
			</Title>
		</HeaderContainer>
		</>
    )
}