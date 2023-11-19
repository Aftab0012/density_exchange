import { styled } from 'styled-components';

export const DIV = styled.div`
  background-color: #08130b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 26px 106px 26px 106px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const FLEX = styled.div`
  display: flex;
  width: auto;
  height: auto;
  gap: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
