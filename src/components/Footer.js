import styled from 'styled-components'
import React from 'react'
import '../style/popup.css'


const FooterContainer = styled.div `
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 20vw;
  height: 10vh;
  bottom: 0;
  left: 0;
  right: 0;

`

const Horaire = styled.div `
  display: flex;
  justify-content: flex-end;
  position: fixed;
  align-items: center;
  align-content: center;
  flex-direction: column;
  width: 22vw;
  height: 30vh;
  bottom: 0;
  left: 1;
  right: 0;
  padding-right: 0;
`

const Indications = styled.div `
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: auto;
  height: auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 10px;
  border: solid;
`

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <button onClick={this.props.closePopup} 
        style={{
          display: 'block', position: 'absolute', left: '0', right: '0', bottom: '0', top: '0', 
          stroke: '100px', backgroundColor: '#C2AC89', opacity: '0.9', height: 'auto', width: 'auto'
          }}> 
            <p className='horaires' >Nos Horaires d'ouvertures</p>           
            <p>Lundi 09:00 - 13:00  14:30 - 18:00</p>
            <p>Mardi 09:00 - 13:00  14:30 - 18:00</p>
            <p>Mercredi 09:00 - 13:00  14:30 - 18:00</p>
            <p>Jeudi 09:00 - 13:00  14:30 - 18:00</p>
            <p>Vendredi 09:00 - 13:00  14:30 - 18:00</p>
            <p>Samedi 09:00 - 13:00</p></button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
      <div className='app'>
        <button onClick={this.togglePopup.bind(this)}>Nos horaires</button>
        {this.state.showPopup ? 
          <Popup
            
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
      </div>
    );
  }
};

export default function Footer(){
	return (
          <>
          <FooterContainer>
            <Indications>
              <p className='adresse'>31 rue Général Ferry, 31000 Toulouse</p>
              <p>Politiques de confidentialités</p>
              <p>Mentions légales de ventes</p>
              <p></p>
              <p className='contact'>Nous contacter</p>
            </Indications>
            <Horaire>
            <App></App>
            </Horaire>
          </FooterContainer>
          </>
         )
}