import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    background: #e03131;
    width: min(100%, 16.5rem);
    min-height: 4rem;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 1.25rem;
    text-transform: uppercase;
    color: white;

    transition: background 0.3s;

    &:hover {
      background: #7a1212;
    }
  }

  span {
    font-weight: 500;
    text-transform: uppercase;

    strong {
      margin-left: 0.75rem;
      font-weight: 700;
      font-size: 2.25rem;
    }
  }
`
