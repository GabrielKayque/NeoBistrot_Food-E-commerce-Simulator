import styled from "styled-components";
import { Link } from "react-router-dom";

export const OrderButtonContainer = styled(Link)`
  position: absolute;
  right: 1.5rem;
  bottom: 0.5rem;

  background-color: #E03131;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #7a1212;
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
  }

  svg {
    fill: white;
    width: 1.5rem;
    height: 1.5rem;
  }

  span:last-child {
    margin-left: 0.75rem;
    font-weight: 500;
    font-size: 1.5rem;
    color: #FCC419;
  }
`
