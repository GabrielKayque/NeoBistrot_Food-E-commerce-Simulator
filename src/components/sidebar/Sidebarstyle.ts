import styled, { css } from "styled-components";

interface SidebarContainerProps {
  isMenuOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background-color: #E03131;

  ${({ isMenuOpen }) => isMenuOpen
    ? css`width:16rem`
    : css`width:7.75rem`
  };

  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;

  button {
    background: none;
    border: none;
    width: 100%;
  }

  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;

    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding: 0 1.875rem 0;
        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: white;
          width: 4rem;
          height: 4rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            transform: translate(-50%);

            background-color: #FCC419;
            width: 7px;
            height: calc(100% + 0.5rem);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: #FCC419;;
          }

          span {
            color: #FCC419
          }

        }

      }

    }

  }

  @media (max-width: 720px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0;

    button {
      display: none;
    }

    nav {
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display:none;
          }
        }

        a::after {
          display: none;
        }

      }
    }
  }
`
