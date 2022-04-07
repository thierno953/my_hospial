import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

:root{
  --color-neutral:  #F2F6FF;
  --color-neutral-2:  #FAFAFF;
  --color-neutral-3: #F4F7F7;
  --color-primary: hsl(210, 22%, 49%);
  --color-primary-dark: hsl(210, 22%, 49%);
  --color-white: #fff;
  --color-dark: #272a33;
  color: #272a33;
}

body{
font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
}

a{
  color: var(--color-dark);
  font-size: 1rem;

}

p{
  color: #656565;
  font-size: 1rem;

}
.title-con{
  text-align: center;
}
.container {
  max-width: 75%;
  margin: auto;
}
.d_flex {
  display: flex;
  justify-content: space-between;
}
.f_flex {
  display: flex;
}
.btn_shadow {
  padding: 10px 20px;
  border-radius: 6px;
  transition: 0.3s all ease;
  cursor: pointer;

  color: #000;
  transition: 0.5s;
  margin-bottom: 5px;
}
.btn_shadow {
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 1px 1px 2px #cbcbcb, -1px -1px 2px #ffffff;
}
.btn_shadow:hover {
  background: #ff014f;
  color: white;
  transform: translateY(-10px);
}
.box_shodow {
  background: linear-gradient(145deg, #e2e8ec, #ffffff);
  box-shadow: 1px 1px 2px #cbcbcb, -1px -1px 2px #ffffff;
  border-radius: 7px;
}

`;

export default GlobalStyle;
