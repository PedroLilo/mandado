import { Section } from "./styles";
export interface ICard {
  autor: string
  titulo: string
  tipo: string
  lancamento: string
  imagem: HTMLImageElement
}
export const Card = ({ autor, titulo, tipo, lancamento, imagem }: ICard) => {
  return (
    <Section>
      <aside>
        <h5>autor:</h5>
        <p>{autor}</p>
      </aside>
      <aside>
        <h5>Título:</h5>
        <p>{titulo}</p>
      </aside>
      <aside>
        <h5>Tipo:</h5>
        <p>{tipo}</p>
      </aside>
      <aside>
        <h5>Lançamento:</h5>
        <p>{lancamento}</p>
      </aside>
      <aside>
        <img>{imagem}</img>
      </aside>
    </Section>
  );
};
