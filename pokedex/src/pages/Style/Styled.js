import styled from 'styled-components'

export const Pagina = styled.div `
    display:grid;
    grid-template-columns: auto auto 1fr;
    grid-template-rows: 60px 1fr 1fr 1fr ;
    

    justify-content: center;
    grid-gap:1%;
    font-family: -apple-system, 'Roboto', sans-serif;
`


export const Header = styled.div`
   width: 99.99vw;
    grid-row:1;
    display:flex;
    grid-gap:5%;
    
    border-bottom: 1px solid #000000;
    justify-content: space-evenly;
    text-align:center;
    
    button {
        background-color: #ffffff;
        font-size:1rem;
        font-weight:600;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        border:none;
    }

    img{
        margin: 4px 0 0 0;
        margin:2px 0;
        width: auto;
    }
` 

export const Lista = styled.div`
    grid-row:2;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    grid-gap:5%;   
    
` 


export const Card = styled.div`
    margin:25% auto;
    display: block;
    width: 225px;
    height: 225px;
    border-radius: 100px 100px 0px 0; 
    background-color: #F0F0F0;
    border-top: 35px solid #DC0A2D;

    text-align:center;
    justify-content: center;

    button{
        cursor: pointer;
        width:155px;
        height: 45px;
        border-radius: 50px;
        border:none;

        transition: all 0.6s;
        background-color: #52AE5F;
        color:#ffffff;
        
        font-size:14px;
        font-style:normal;
        font-weight: 500;
        text-transform: uppercase;
       
        :hover{
            background-color: #DC0A2D;
        }
    }

    img {
        margin:-160px 0 0 0;
        padding:0;
        width:200px;
    }

    h1{
        margin:-20px 0 20px 0;
    }

    a{  
        display:block;
        position:relative;
        width:auto;
        height: 1rem;
        color:#000000;
        cursor: pointer;
        
        font-size:14px;
        font-style:normal;
        font-weight: 500;
        text-transform: uppercase;
        transition: all 0.4s cubic-bezier(.17,1,.92,.93) 0s;
       
        :hover{ 
            width:auto;
            transition: all 0.4s cubic-bezier(.17, 2,.76,.66) 0.1s;
            font-weight: 600; 
            color:#000000 !important;
            border-radius: 50px;
            border:none;
        }
    }
`

///

export const Details = styled.div`
    grid-column: 1/3;

    margin:20% auto;
    display: block;

    width:100vw;
    flex-direction: column;

    border-top: 2rem solid #DC0A2D;
    border-radius: 100% 100% 0px 0; 
    text-align:center;
    justify-content: center;


    img {
        margin:-200px 0 0 0;
        padding:0;
        width:300px;
    }

    p{
        margin:0 auto;
        text-align: justify;
        padding: 0 5%;
    }


`
export default Pagina;