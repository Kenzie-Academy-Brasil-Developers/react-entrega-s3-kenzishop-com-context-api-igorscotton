import styled from 'styled-components'

export const MainS = styled.main`
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-top: 50px;

      section{
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            background-color: #FFFFFD;
            padding: 20px;
            margin: 0 50px 0 50px;
      }
      
      div{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid lightgray;
            font-weight: bold;
      }

      @media screen and (max-width:600px){
            flex-direction: column-reverse;
            align-items: center;
            gap: 50px;

            .hidden{
                  display: none;
            }
      }
`

export const Card = styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      img{
            width: 100px;
      }

      p{
            font-weight: 400;
      }
`

export const AsideS = styled.aside`
      background-color: #FFFFFD;
      display: flex;
      flex-direction: column;
      height: 250px;
      width: 200px;
      padding: 20px;
      justify-content: space-between;
      margin-right: 50px;
`