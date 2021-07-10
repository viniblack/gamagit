import axios from "axios";
import { useState } from "react";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      setErro(false)
      history.push('/repositories');
    })
      .catch(err => {
        setErro(true);
      });
  }
  return (
    <S.HomeContainer>
      <S.Container>
        <S.Input type="text" className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Container>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;
