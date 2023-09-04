import styled from "styled-components";

export const PagamentoContainer = styled.div`
  width: min(100%, 58rem);
  min-width: min-content;
  padding: 2rem;
  margin: 0 auto;
`

export const MainTile = styled.main`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 2.5rem 0 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  .error {
    color: ${({ theme }) => theme.colors.red};
    font-size: 0.8rem;
  }

  .grouped {
    flex-grow:1;

    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
    width: 100%;

    .field {
      flex: 1 1 188px;
    }
  }

  .field {
    min-width: 20px;
    flex: 1;
    margin-bottom: 1rem;
  }

  label {
    display: block;
    ${({ theme }) => theme.colors.white};
    margin-bottom:0.5rem;
  }

  input, select {
    flex-grow: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    border-radius: 4px;
    height: 42px;
    width:100%;
    margin-bottom: 1rem;
    padding: 0.7rem;
  }

  @media (max-width:523px) {
    .grouped .email {
      order: -1;
    }
  }
`
