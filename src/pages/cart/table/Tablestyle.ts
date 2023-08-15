import styled from "styled-components";

export const TableContainer = styled.main`
  background-color: black;
  padding: 2rem 2.5rem;
  border-radius: 8px;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      padding: 0rem 1rem 0.5rem 1rem;

      font-weight: 500;
      font-size: 1.125rem;
      text-transform: uppercase;
      text-align: left;

      &:nth-child(2) {
        padding-left: 2rem;
      }

    }



    td {
      padding: 1.5rem 1rem;
      border-top: 3px solid #1a1e22;

      &:first-child {
        width: 7.5rem;
        padding-inline: 0;
      }

      img {
        object-fit: cover;
        width: 6rem;
        height: 6rem;
        border-radius: 8px;

      }

      h4 {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.125rem;
      }

      >span, h5 {
        font-weight: 700;
        font-size: 1.5rem;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          background: none;
          border: none;
          display:flex;
          align-items: center;
          justify-content: center;

          img {
            width: 1.8rem;
            height: 1.8rem;
          }
        }
      }

      &:nth-child(2) {
        padding-left: 2rem;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 11rem;
      }
    }
  }
`
