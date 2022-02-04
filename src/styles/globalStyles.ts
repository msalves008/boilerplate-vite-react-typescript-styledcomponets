import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 :root {
    --background:#fff;
    --gray-300:#464242;
    --gray-500:#a3a3a3;
    --blue:#067687;
    --red:#ff505f;
    --orange:#ff9800;
    --shape: #1B1717;
  }
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
 html{
   @media(max-width: 1080px){
      font-size: 93.75%;
   }
   @media(max-width: 720px){
      font-size: 87.5%;
   }
 }
 body{ 
  background: var(--background);
  -webkit-font-smoothing: antialiased;
 }
 body, input, textarea, button{
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
 }
 .link{
  text-decoration: none;
  color: inherit;
}
 h1,h2,h3,h4,h5,h6,strong{
  font-weight: 600;
  color: var(--gray-300);
 }
 h1{
  font-family: 'Roboto';
  font-style: normal;
  font-size: 5rem;
  line-height: 5.18rem;
  letter-spacing: -0.9px;
 }
 h2{
  font-family: 'Roboto';
  font-style: normal;
  font-size: 3.75rem;
  line-height: 4rem;
  letter-spacing: -0.04rem;
 }
 h3{
  font-family: Roboto;
  font-style: normal;
  font-size: 2.5rem;
  line-height: 2.37rem;
  letter-spacing: -0.025rem;
 }
 h4{
  font-family: Roboto;
  font-style: normal;
  font-size: 1.87rem;
  line-height: 2.31rem;
  letter-spacing: -0.022rem;
 }
 h5{
  font-family: Roboto;
  font-style: normal;
  font-size: 1.5rem;
   line-height: 2.12rem;
 }
 h6{
  font-family: Roboto;
  font-style: normal;
  font-size: 1.25rem;
  line-height: 1.8rem;
 }
 span{
  font-family: Roboto;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.4rem;
 }
 p{
  font-family: Roboto;
  font-style: normal;
  font-size: 0.87rem;
  line-height: 1.3rem;
 }
 button{
   cursor: pointer;
 }
 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;
 }
`;