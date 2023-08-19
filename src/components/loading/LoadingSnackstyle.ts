import styled, { css , keyframes} from "styled-components";
import { LoadingProps } from "./LoadingSnack";


export const LoadingContainer = styled.li`
  width: 100%;
  max-width: 500px;
  border: 1px solid black;
  background-color:${({ theme }) => theme.colors.primary};
  padding: 1rem 1rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px black;
  justify-self: center;
  display:flex;
  flex-direction: column;

  div:last-child {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .realTitle{
    margin: 0.5rem auto;
    width: 70%;
  }
`


const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -200%;
  }
`

export const LoadingTile = styled.div<LoadingProps>`
  background: linear-gradient(
    90deg,
    gray 0%,
    #0a0a0a 40%,
    gray 100%
  );
  background-size: 200%;
  border-radius: 4px;

  animation: ${shimmerEffect} 1s linear infinite;

  ${({ type }) =>
    type === 'title' &&
    css`
      width: 115px;
      height: 32px;
      margin: 0.5rem 0;
    `}

  ${({ type }) =>
    type === 'text' &&
    css`
      width: 100%;
      height: 0.9rem;
      margin: 0.25rem 0;
    `}

  ${({ type }) =>
    type === 'image' &&
    css`
      width: 3rem;
      height: 3rem;
      margin: 0.25rem 0;
      border-radius: 50%;
    `}

  ${({ type }) =>
    type === 'thumbnail' &&
    css`
      width: 100%;
      height: 11.5rem;
      margin: 0.5rem 0;
      border-radius: 10px;
    `}
`
