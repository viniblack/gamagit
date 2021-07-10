import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState('');
  function handlePesquisa() {
  }
  return (
    <>
      <input type="text" className="usuarioInput" value={usuario} placeholder="Usuário" onChange={e => setUsuario(e.target.value)} />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;
