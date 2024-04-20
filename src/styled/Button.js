import styled from "styled-components";
export const Button = styled.button`
color: white;
padding:10px 18px;
background:#000000;
border-radius:5px;
min-width:220px;
border: none;
font-Size:16px;
border:1px solid transparent;
transition:0.4s background ease-in;
cursor:pointer;

&:hover{
    border:1px solid black;
    color:black;
    background-color:white;
    transition:0.3s background ease-in;
}
`;