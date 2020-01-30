import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  background: #222;
  border-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 150px auto 10px;
`;

export const Form = styled.form`
  p:nth-child(1) {
    margin-top: -12px;
  }

  p:nth-child(3) {
    margin-top: 15px;
  }

  p {
    font-size: 22px;
    color: #cfcf27;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.load,
}))`
  background: #cfcf27;
  border: 0;
  border-radius: 4px;
  padding: 10px;
  color: #000;
  margin: 0px -40px;
  position: relative;
  top: 50%;
  left: 50%;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }

  ${props =>
    props.load &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
