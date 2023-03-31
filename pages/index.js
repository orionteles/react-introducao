import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Cabecalho from "../components/Cabecalho";
import Pagina from '../components/Pagina';
import Rodape from "../components/Rodape";

export default function Home() {
  return (
    <>
      <Pagina />

      <Container>
        <h1>Hello World!</h1>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
        <p>Qualquer texto</p>
      </Container>
    </>
  )
}
