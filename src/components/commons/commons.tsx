import styled from 'styled-components';
import { white, blue, darkblue } from './variables';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 70rem;
  padding: 2rem 5rem;
  margin: 0 auto;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  color: ${white};
  background-color: ${blue};
  transition: transform 0.128s;
  &:hover {
    transform: translateY(-3px);
    background-color: ${darkblue};
  }
`;

const Row = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export { Stack, Container, Row, Button };
