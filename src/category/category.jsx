import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { GiDistraction, GiCrimeSceneTape } from "react-icons/gi";
import { MdTheaterComedy, MdAnimation, MdMovie } from "react-icons/md";


function Category() {
  return (
    <Menu_wrapper>
      <Sl to={'/genere/action'}>
        <GiDistraction />
        <h4>Action</h4>
      </Sl>
      <Sl to={'/genere/adventure'}>
        <MdAnimation />
        <h4>Adventure</h4>
      </Sl>
      <Sl to={'/genere/comedy'}>
        <GiNoodles />
        <h4>Comedy</h4>
      </Sl>
      <Sl to={'/genere/crime'}>
        <GiCrimeSceneTape />
        <h4>Crime</h4>
      </Sl>
      <Sl to={'/genere/drama'}>
        <MdMovie />
        <h4>Drama</h4>
      </Sl>
      <Sl to={'/genere/crime'}>
        <MdTheaterComedy />
        <h4>Crime</h4>
      </Sl>

    </Menu_wrapper>
  )
}
export default Icons

const Menu_wrapper = styled.div`
display:flex;
margin:0 auto; 
max-width:60%; 
gap: 1rem;
justify-content:center;
text-align:center;
margin-bottom:2rem;
`


const Sl = styled(NavLink)`

background:linear-gradient(35deg, #494949, #313131); 
border-radius:50%;
height:6rem; 
min-width:6rem;
transform:scale(0.8); 
display:flex; 
justify-content:center; 
align-items:center; 
flex-direction:column;
text-decoration:none; 
color:white;
h4{
  color:gray;
}
&.active{
  background:linear-gradient(to right, #f27121, #e94057);
  svg{
    color:white;
  }
  h4{
    color:white; 
  }
}

`