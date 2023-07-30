import styled from "styled-components";


export const Title = styled.h1`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  margin-bottom: 3rem;

  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;

  @media (min-width:721px) {
    font-size: 3rem;
    align-items: center;
    justify-content: flex-start;

    &::before {
      content:'';
      background-color: white;
      width: 42px;
      height: 5px;
      flex-shrink: 0;
      border-radius: 4px;
    }
  }

`
