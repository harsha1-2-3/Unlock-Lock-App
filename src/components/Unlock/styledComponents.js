import styled from 'styled-components'

export const Bg = styled.div`
    background-image: linear-gradient(to bottom, #0b0c1e, #161617, #3c2940);
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
        `

export const BgCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
    width: 70%;
    text-align: center;
    
    @media (min-width:768px) {
        min-height:40vh;
    }
        `

export const MainImg = styled.img`
    height: 80px;
    width: 80px;
    margin: 0px;
    margin-bottom: 20px;
    @media (min-width:768px) {
        height: 180px;
        width: 180px;
        margin-bottom: 35px;

    }

        `

export const Para = styled.p`
    color: #e2e8f0;
    font-size: 15px;
    font-family: Roboto;
    margin: 0px;
    @media (min-width:768px) {
        font-size:25px;
    }
    
        `

export const Btn = styled.button`

    color: white;
    background-color: #06b6d4;
    border: 0px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    margin: 0px;
    height: 40px;
    width: 90px;
    @media (min-width:768px) {
        height: 55px;
        width: 120px;
        font-size: 20px; 

    }
    
`
