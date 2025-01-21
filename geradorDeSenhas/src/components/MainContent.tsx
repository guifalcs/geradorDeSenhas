import { useState } from "react";
import { Copy, RefreshCw } from "lucide-react";

const MainContent = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const generatePassword = () => {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = lowercase;
    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setPassword('')
      alert("Senha copiada para a área de transferência!");
    }
  };

  return (
    <div className="container">
      <div className="text-center py-5 mt-4">
        <h1 className="display-4 fw-bold mb-3">Gere senhas seguras</h1>
        <p className="lead text-muted">
          Escolha os critérios desejados e clique no botão para gerar uma senha
          forte e personalizada, garantindo mais segurança para suas contas.
        </p>
      </div>

      <div
        className="bg-primary bg-opacity-25 p-4 rounded-4 shadow-lg mx-auto"
        style={{ maxWidth: "800px" }}
      >
        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control form-control-lg"
            value={password}
            placeholder="Sua senha aparecerá aqui"
            readOnly
          />
          <button
            className="btn btn-outline-secondary"
            onClick={copyToClipboard}
            disabled={!password}
          >
            <Copy size={20} />
          </button>
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">
            Comprimento da senha: {length}
          </label>
          <input
            type="range"
            className="form-range"
            min="6"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="uppercase"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="uppercase">
              Incluir letras maiúsculas
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="numbers"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="numbers">
              Incluir números
            </label>
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="symbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="symbols">
              Incluir símbolos
            </label>
          </div>
        </div>

        <button
          onClick={generatePassword}
          className="btn btn-primary w-100 py-3 d-flex align-items-center justify-content-center gap-2"
        >
          <RefreshCw size={20} className="rotate-hover" />
          Gerar Senha
        </button>
      </div>
    </div>
  );
};

export default MainContent;
