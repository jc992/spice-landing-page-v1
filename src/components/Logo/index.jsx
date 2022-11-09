import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  top: 560px;
  left: 340px;
  margin: -575px 0px 0px -140px;

  @media only screen and (max-width: 1200px) {
    left: 250px;
  }
`;

export default ({ src, width }) => {
  return <Img width={width} src={src} />;
};
