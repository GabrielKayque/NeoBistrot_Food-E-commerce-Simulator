import styled from "styled-components";

export const SnacksContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  .snack {
    width: 100%;
    max-width: 500px;
    position: relative;
    border: 1px solid black;
    background-color:#1a1e22;
    padding: 1.7rem 1.5rem;
    border-radius: 10px;
    box-shadow: 1px 1px 10px black;
    justify-self: center;

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 11.5rem;
      border-radius: 4px;
      margin-bottom: 0.35rem;
    }

    > div {
      margin-top: 0.875rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 2rem;
    }

    p {
      font-size: 0.9rem;
      text-align: center;
    }

    strong {
      font-size: 2rem;
      font-weight: 600;
    }

    button {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: #E03131;
      border: none;
      font-size: 2.5rem;
      color: white;

      &:hover {
        background-color: #7a1212;
      }

    }

    span {
      position: absolute;
      left: -0.5rem;
      top: -0.5rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: #E03131;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: 1.15rem;
    }
  }
`
