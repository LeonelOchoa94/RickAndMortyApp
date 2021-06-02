import {BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/HomePage/HomePage';
import { Character } from '../pages/character/Character';
import React from 'react';

export const Router = () => {
  const [character,setCharacter] = React.useState("");

  function handleSetCharacter(character){
    setCharacter(character);
}
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/character">
              <Character character = {character}/>
            </Route>
    
            <Route path="/">
              <HomePage setCharacter={handleSetCharacter} />
            </Route> 
          </Switch>
        </BrowserRouter>
      );
};

