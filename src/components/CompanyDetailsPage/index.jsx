import { ContainerCompanyDetails, HeaderCompanyDetails } from "./style";
import { RiArrowLeftLine, RiSearchLine } from "react-icons/ri";
import "./style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer";
import ModalPromo from "../ModalPromo";
import { useState } from "react";

const CompanyDetailsPage = () => {
  const [isOn, setIsOn] = useState(false);
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <ContainerCompanyDetails>
      <HeaderCompanyDetails>
        <section className="containerIcon">
          <RiArrowLeftLine
            onClick={() => handleNavigation("/perfil/company")}
            className="iconArrow"
          />
          <RiSearchLine className="iconSearch" />
        </section>
      </HeaderCompanyDetails>
      <div className="contentBox">
        <p>
          O Ifood promove entregas mais sustenáveis, e ações na intenção de
          diminuir o enorme impacto ambiental <a href="#">...Ler mais</a>
        </p>
        <h3>Benefícios oferecidos</h3>
      </div>
      <div className="contentBoxPromo">
        {isOn && <ModalPromo setIsOn={setIsOn} isOn={isOn} onClick={() => setIsOn(!isOn)} />}

        <section>
          <div onClick={() => setIsOn(!isOn)}>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div onClick={() => setIsOn(!isOn)}>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div onClick={() => setIsOn(!isOn)}>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div onClick={() => setIsOn(!isOn)}>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
          <div>
            <p>1 cupom de 15%</p>
            <p>35 pontos</p>
          </div>
        </section>
      </div>
      <Footer />
    </ContainerCompanyDetails>
  );
};
export default CompanyDetailsPage;
