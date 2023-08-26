import styled from "styled-components";

export const TableContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.black};
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
      border-top: 3px solid ${({ theme }) => theme.colors.primary};

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

          svg {
            width: 1.8rem;
            height: 1.8rem;
            fill: ${({ theme }) => theme.colors.red};
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

      &:last-child{
        button {
          background: none;
          border: none;

        }

        svg {
          width: 1.8rem;
          height: 1.8rem;
          fill: ${({ theme }) => theme.colors.yellow};
        }
      }
    }
  }
`
export const TableMobile = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .table-mobile {
    background-color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 1.75rem 1.5rem;
    border-radius: 8px;

    div img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      padding-bottom: 1rem;
    }

    >div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.75rem;
      }

      > span {
        font-weight: 700;
        font-size:2rem;
      }


      div {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 0.8rem 0;

        span {
          display: block;
          background-color: ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.white};
          padding: 0.125rem 0.75rem;
          border-radius: 4px;

          font-weight: 500;
          font-size: 1.5rem;
        }


        div {
          flex-shrink: 0;
          gap: 0.5rem;

          button {
            background: none;
            flex: 0;
            border: none;

            display: flex;
            align-items:center;
            justify-content:center;

            svg {
              fill: ${({ theme }) => theme.colors.red};
            }
          }
        }

        button {
          background: none;
          border: none;

          svg {

            fill: ${({ theme }) => theme.colors.yellow};
            width: 2rem;
            height: 2rem;
          }
        }
      }

      h5 {
       span {
        display: block;
        font-size: 1.75rem;
        font-weight: 400;
       }

       font-weight: 700;
       font-size: 2rem;
      }
    }
    @media( min-width:480px){
      display: grid;
      grid-template-columns: 250px 1fr;
      gap:1.5rem;

      div {
        padding-left: 0;
        img {
        padding-bottom: 0rem;
      }}
    }
  }
`
