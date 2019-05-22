import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  height: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
`;

export const Label = styled.label`
  color: #311e1e;
  font-size: 16px;
  padding-bottom: 6px;
`;

export const Input = styled.input`
  min-height: 35px;
  width: 65%;
  padding: 0 15px;
  border-radius: 4px;
  background-color: transparent;
  border: 1px solid hsl(0, 14%, 11%);
  font: normal 16px/2 "varela-round", Helvetica, sans-serif;
  color:#311e1e;
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 270px;
  margin: auto;
`;

export const Button = styled.button`
  background-color: #00CED1;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 7px 25px;
  max-width: 125px;
  font-size: 20px;
`;

export const ErrorText = styled.p`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding-left: 30px;
  color: red;
`;
