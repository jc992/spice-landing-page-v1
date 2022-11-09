import styled from "styled-components";

export const Button = styled.button`
  font-family: "Suisse Regular";
  font-size: 10px;
  letter-spacing: 1px;
  min-height: 32px;
  min-width: 175px;
  border-radius: 10px;
  border: none;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
  background-image: linear-gradient(to right, #b94947, #b26566);

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  &:hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }
`;
