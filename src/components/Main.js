import styled from 'styled-components'
import Mecanicien from '../style/Logo/Mecanicien.png'
import Reparation from '../style/Logo/Réparation.jpg'
import Occasions from '../style/Logo/parc-occasion.jpg.webp'

const MainContainer = styled.div`
display: flex;
width: auto;
height: 50vh;
padding-top: 8%;
padding-bottom: 100px;
padding-left: 20%;
padding-right: 20%;
justify-content: space-evenly;
align-items: center;
border: solid red;
`

export default function Main(){
	return(
    <>
    <MainContainer>
      <p>Mécanicien</p>
      <img src={Mecanicien} alt='mecanicien'/>
      <p>Réparation</p>
      <img src={Reparation} alt='reparation'/>
      <p>occasions</p>
      <img src={Occasions} alt='occasions'/>
    </MainContainer>
    </>
  )
  }