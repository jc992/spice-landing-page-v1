import styled from "styled-components";

const getWidth = (span) => {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width: ${width}%`;
};

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Col = styled.div`
  float: left;
  ${({ xs }) => (xs && getWidth(xs))};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidth(sm)};
  }

	@media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidth(md)};
  }

	@media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidth(lg)};
  }
`;
