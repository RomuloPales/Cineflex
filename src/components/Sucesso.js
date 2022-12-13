import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export default function Sucesso( {arrayDados, setArrayDados } ) {
    const navigate = useNavigate();
    console.log(arrayDados)
    function home(){
        setArrayDados({})
        navigate("/")
    }
    
    return  (
        <SucessoStyled>
            <div>
                <h1></h1>
                <h1>Pedido feito <br/> com sucesso!</h1> 
            </div>
            <div data-test="movie-info">
                <h2>Filme e sessão: </h2>
                <p>{arrayDados.filme} <br/> 
                {arrayDados.sessao} {arrayDados.horaSessao}
                </p>
                
            </div>
            <div data-test="seats-info">
                <h2>Ingressos: </h2>
                  <p>Assento {arrayDados.ingressos}
                  </p>

                   </div>
            <div  data-test="client-info">
                <h2>Comprador: </h2>
                <p>Nome: {arrayDados.nome}
                <br/>
                CPF: {arrayDados.cpf}
                </p>
                
            </div>
            <button data-test="go-home-btn" onClick={home}>Voltar pra Home</button>
           
        </SucessoStyled>      
    )
}

const SucessoStyled = styled.div`
  h1 {
    width: 374px;
    height: 110px;
    left: 0px;
    top: 67px;
    justify-content: center;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    
    color: #247a6b;
  }
  h2 {
    left: 29px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  p {
    left: 28px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  button {
    width: 225px;
    height: 43px;
    margin: 22px 9px;
    background: #e8833a;
    border-radius: 3px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  }
  button > h3 {
        margin: 40px 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        
    }
`;
