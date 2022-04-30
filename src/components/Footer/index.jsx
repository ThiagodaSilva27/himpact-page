import React from "react";
import styled from "styled-components";
import { FiHome, FiPackage, FiUser} from "react-icons/fi";
import folhaDesativada from '../../assets/iconeFolhaDesativada.png';
import folhaAtivada from '../../assets/iconeFolhaAtivada.png';
import "./index.css";

const Footer = () => {
    let [ativado, setAtivado] = React.useState(false);
    function ativaFolha() {
        setAtivado(!ativado);
      }
    

  const Navbar = {
    Wrapper: styled.nav`
    fixed: bottom;
      width: 100%;
      flex: 1;
      align-self: flex-start;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 -5px 5px 0.03rem #EAE4E3;
      background-color: white;
      margin-top: 1rem;
    `,
    Logo: styled.h1`
      border-top: 1px strech gray;
      width: 100px;
      padding: 0.5rem 2rem;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
    `,
  };

  return (
    <div className="footerFixo">
      <Navbar.Wrapper>
        <Navbar.Items>
        <Navbar.Logo> <FiHome className="tamanhoIcone"/></Navbar.Logo>
          <Navbar.Logo onClick={ativaFolha}><img class="iconeFolha" src={ativado ? folhaDesativada: folhaAtivada} alt="folha"/></Navbar.Logo>
          <Navbar.Logo><FiPackage className="tamanhoIcone"/></Navbar.Logo>
          <Navbar.Logo><FiUser className="tamanhoIcone"/></Navbar.Logo>
        </Navbar.Items>
      </Navbar.Wrapper>
    </div>
  );
};

export default Footer;