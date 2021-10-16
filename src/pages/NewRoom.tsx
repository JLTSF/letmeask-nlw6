import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleImg from "../assets/images/google-icon.svg";
import { Button } from "../components/Button";
import "../styles/newroom.scss";

export function NewRoom() {
  return (
    <div id="page-new-room">
      <aside>
        <img src={illustrationImg} alt="Ilustração Letmeask" />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content-new-room">
          <img src={logoImg} alt="Logo Letmeask" />
          <h2>Crie uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala jé existente? <a>Clique aqui</a>
          </p>
        </div>
      </main>
    </div>
  );
}
