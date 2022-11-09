import React from "react";
import styled from "styled-components";

const Video = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 0;
  height: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export default ({ src, type }) => {
  return (
    <Video autoPlay muted loop>
      <source
        type={type}
        src={src}
      />
    </Video>
  );
};
