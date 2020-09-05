import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

export const MonthlySaving = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  background: #ffffff;

  h1 {
    color: #0079ff;
    font-weight: 500;
    font-size: 40px;
    line-height: 32px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }

  @media (max-width: 600px) {
    padding: 20px 24px;

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }
`;

export const PlanDetails = styled.div`
  background: #f4f8fa;
  font-size: 12px;
  line-height: 16px;
  margin-top: auto;
  padding: 20px 30px;
  font-weight: 400;
`;
