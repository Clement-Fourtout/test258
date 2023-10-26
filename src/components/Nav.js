import styled from 'styled-components'
import { Button } from 'bootstrap'
import React from 'react'

const NavContainer = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: auto;
height: 30px;
padding-left: 50px;
padding-right: 50px;
border-bottom: solid;
border-top: solid;
position: fixed;
left: 0;
right: 0;
background-color: #FFFFFF;
opacity: 0.8;
`


export default function Nav(){
	return (
    <>
        <NavContainer>
          <button>Réparation</button>
          <button>Entretien</button>
          <button>Voiture d'occasions</button>
          <button>Espace Pro</button>
        </NavContainer>
    </>

  )
}

