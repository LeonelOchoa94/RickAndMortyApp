import { useHistory } from 'react-router';
import styled from 'styled-components'
import React from 'react';
import {Logo} from './Constants'

export const HomePage = ({setCharacter}) => {

  const [input, setInput] = React.useState();
  const history = useHistory()

  function handleSearchClick() {
    setCharacter(input);
    history.replace("/character")
  }

  function handleInputChange(event){
    setInput(event.target.value);
  }

  function handleSearchClickAzar(){
    const random = Math.floor(Math.random()*100);
    setCharacter(random);
    history.replace("/character");
  }

  return (
    <Home>
      <Wrapper>
        <img src={Logo} alt="Imagen de Logo"/>
        
        <SearchBar
          placeholder= "Buscar el personaje"
          value={input}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button onClick={handleSearchClickAzar} >¡Azar!</button>
        </ButtonsWrapper>
      </Wrapper>
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
  /* background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);; */
  color: white;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin-bottom: 150px;
`



const ButtonsWrapper = styled.div`
width: 100%;
display: flex;
gap: 20px;

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

  &:first-child {
    
    width: 70%;
  }
  &:last-child {
    
    width: 30%;
  }
}
`
const SearchBar = styled.input`
width: 100%;
margin-bottom: 10px;
padding : 10px;
border: none;
border-Radius: 6px;
`



