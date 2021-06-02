import React from 'react'
import styled from 'styled-components'

export const Character = ( {character} ) => {
    // const [character, setCharacter ] = React.useState()
    const [characterData, setCharacterData] = React.useState()

    React.useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json().then((data) => setCharacterData(data)))
    }, )

    // const history = useHistory()

    // function Back() {
    //     history.replace("/")
    //   }

    return (
        <Home>
        <ButtonsWrapper>
        <button>Volver</button>
        </ButtonsWrapper>
        {characterData && (
        <Wrapped>
            <div>
            <img src={characterData.image} alt="Imagen del personaje"/>
            </div>
            <div>
            <h1>
                Nombre: {characterData.name}
            </h1>
            <h2>
                Estado: {characterData.status}
            </h2>
            <h2>
                Especie: {characterData.species}
            </h2>
            <h2>
                Género: {characterData.gender}
            </h2>

            </div>
        </Wrapped>
    )}
        </Home>
    );
}

const Home = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
margin-bottom: 100px;
`

const Wrapped = styled.div`
margin-bottom: 150px;
`

const ButtonsWrapper = styled.div`
width: 100%;
display: flex;

button {
  background-color: #5e92f3;
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
  transition: all ease-out 0.4s;

  &:hover {
    background-color:#1565c0 ;
    transform: translateY(-4px);
  }
}
`