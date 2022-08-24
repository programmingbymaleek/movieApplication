import styled from "styled-components"

function Header() {
  return (
    <Header_style>
      <h3>Find Movies at Wilmatech Movie Base</h3>
    </Header_style>
  )

}
export default Header;

const Header_style = styled.div`
display:flex;
flex-direction:column; 
align-items:center;
justify-items:center; 
background-color:#14355E;
padding:0rem 1rem; 

h3{
  text-align:center;
  font-size:1.5rem;
  font-family: 'Roboto', sans-serif;
font-family: 'Silkscreen', cursive;
}


`