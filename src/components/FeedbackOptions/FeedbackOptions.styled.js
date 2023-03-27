import styled from '@emotion/styled';

export const Ul = styled.ul`
   display: flex;
   box-sizing: border-box;
   justify-content: center;
   width: 100%;

   padding: 25px;
   gap: 45px;

   background-color: transparent;
`;


export const Button = styled.button`
    border-radius: 25px;
    box-shadow: 1px 2px 5px black;
    height: 50px;
    width: 90px;

    color: #303030;
    font-weight: 550;
    border-color: transparent;
    font-size: 18px;

    background-color: ${props => {
        switch(props.name){
            case 'good' :
                return 'rgb(100, 255, 100)';
            case 'neutral' :
                return 'rgb(255, 255, 100)';
            case 'bad' :
                return 'rgb(255, 100, 100)';
            default:
                return 'blue'
        }
    }}
`;

