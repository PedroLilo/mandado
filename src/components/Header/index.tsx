import { Link } from "react-router-dom"
import { SHeader, NavBar } from "./styles"
import Icone from "../../assets/icone.png"
export function Header() {

  return (
    <SHeader>
      <figure>
        <img src={Icone} alt="Logo do site" />
      </figure>
      <NavBar>
        <div>
          <Link to="/">Início</Link>
          <Link to="/comentario">Biblioteca</Link>
        </div>
      </NavBar>
    </SHeader>
  )
}