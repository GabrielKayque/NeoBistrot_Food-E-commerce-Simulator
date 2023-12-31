import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display:flex;

  >section  {
    flex: 1;
    width: 100%;
    height: 100vh;
    padding: 2rem 2rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }
    @media (max-width:720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 5rem;

      img {
        align-self: center;
      }
    }
  }
`
