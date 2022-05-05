import styled from 'styled-components'

export const Card = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-self: flex-start;
      width: 300px;
      height: 500px;
      background-color: #FFFFFD;
      padding: 30px;
      border-radius: 30px;

      :hover{
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
      }

      img{
            width: 100px;
            height: 200px;
            align-self: center;
      }
`