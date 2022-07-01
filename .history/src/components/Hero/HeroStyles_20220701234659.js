import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`
export const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: ${(props) => props.main ? '28px' : '24px'};
  letter-spacing: 6px;
  width: max-content;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-top: 10px;
  padding-bottom: 20px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '24px' : '20px'};
    line-height: ${(props) => props.main ? '28px' : '24px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 4px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '16px' : '14px'};
    line-height: ${(props) => props.main ? '18px' : '16px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`
