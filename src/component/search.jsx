import React from 'react';
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
//using useNavigate 
import { useNavigate } from 'react-router-dom';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const movieSearch = (e) => {
    const newValue = e.target.value
    setSearchValue(newValue);
  }

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + searchValue)
  }

  return (
    <FormStyle onSubmit={searchSubmitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input type="text" onChange={movieSearch} placeholder='Search for a movie' />
      </div>
    </FormStyle>
  )
}



export default Search;

const FormStyle = styled.form`
div{
  position:relative;
  display:flex; 
  align-items:center; 
  justify-content:center;
  max-width:20rem;  
  margin:1rem auto;
  input{
width:100%;
  height:2rem;
  border-radius:2rem;
  outline:none;
  border:none;
  background:linear-gradient(35deg, #494949, #313131);
  color:white; 
  padding:0 3rem;
  font-size:1rem;
  }
  svg{
    position: absolute; 
    top:50%;
    left:0%;
    transform:translate(100%, -50%); 
    color:white;
  } 
 
}


`



