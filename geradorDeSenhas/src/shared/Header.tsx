import { Shield, Lock, Key } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary bg-gradient text-white py-5 shadow p-3 mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold mb-3">
              Gerador de Senhas
            </h1>
            <hr className="my-2 opacity-25" />
            <p className="lead mb-4">
              Crie senhas fortes e seguras com nosso gerador avançado.
              Proteja suas contas online com senhas únicas e complexas.
            </p>
            <div className="d-flex gap-4 mb-4">
              <div className="d-flex align-items-center">
                <Shield className="text-warning me-2" size={24} />
                <span>Segurança Máxima</span>
              </div>
              <div className="d-flex align-items-center">
                <Lock className="text-warning me-2" size={24} />
                <span>Proteção Total</span>
              </div>
              <div className="d-flex align-items-center">
                <Key className="text-warning me-2" size={24} />
                <span>Senhas Únicas</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80" 
              alt="Segurança Digital"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: '15em', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;