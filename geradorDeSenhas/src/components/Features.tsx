import { ShieldCheck, Fingerprint, Zap, Brain } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-5 m-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 display-6">Por que usar nosso gerador?</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <ShieldCheck size={48} className="text-primary mb-3" />
                <h3 className="h5 mb-3">Segurança Garantida</h3>
                <p className="text-muted">Algoritmos avançados que garantem senhas verdadeiramente aleatórias e seguras.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <Fingerprint size={48} className="text-primary mb-3" />
                <h3 className="h5 mb-3">Proteção de Identidade</h3>
                <p className="text-muted">Proteja suas contas contra invasões e roubo de dados pessoais.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <Zap size={48} className="text-primary mb-3" />
                <h3 className="h5 mb-3">Geração Instantânea</h3>
                <p className="text-muted">Crie senhas fortes em segundos, sem complicações ou demoras.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center">
                <Brain size={48} className="text-primary mb-3" />
                <h3 className="h5 mb-3">Fácil de Lembrar</h3>
                <p className="text-muted">Copie a senhas e salve em locais seguros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;