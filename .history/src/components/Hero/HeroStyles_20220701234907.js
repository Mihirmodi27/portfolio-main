import styled from 'styled-components';

export const LeftSection = styled.div`
width: 50vw;
height: 50vh;
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
  padding-top: 5px;
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
export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const RightSection = styled.div`
  width: 40vw;
  height: 50vh;
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
`;

export const ImgSection = styled.div`
  width: 80%;
  height: auto;
`

export const MainText = styled.p`
  max-width: 1000px;
  font-size: 24px;
  line-height: 35px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`