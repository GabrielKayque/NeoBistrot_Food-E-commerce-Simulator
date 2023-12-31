import styled from "styled-components";

export const OrderHeaderContainer = styled.header`
display: flex;
justify-content:  space-between;
align-items:center;
padding-bottom: 2rem;

img {
  width: 8rem;
}

> div {
  display: flex;
  align-items: center;
  gap:0.5rem;
  min-width: max-content;

  div {
    text-align: right;

    h3 {
      margin-bottom: 0.125rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.white};
    }

    span {
      color: ${({ theme }) => theme.colors.yellow};

      strong {
        font-weight: 500;
        font-size: 1.25rem;
      }

    }

  }

}

svg {
  width: 2.875rem;
  height: max-content;
  fill: white;
}
`
