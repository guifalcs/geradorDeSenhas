import { AlertCircle } from 'lucide-react';

const Tips = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
              alt="Dicas de Segurança"
              className="img-fluid rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-6 p-5">
            <h2 className="display-6 mb-4">Dicas para senhas seguras</h2>
            <div className="d-flex gap-3 mb-3">
              <AlertCircle className="text-primary flex-shrink-0" size={24} />
              <p className="mb-0">Use senhas diferentes para cada conta online</p>
            </div>
            <div className="d-flex gap-3 mb-3">
              <AlertCircle className="text-primary flex-shrink-0" size={24} />
              <p className="mb-0">Evite informações pessoais como datas ou nomes</p>
            </div>
            <div className="d-flex gap-3 mb-3">
              <AlertCircle className="text-primary flex-shrink-0" size={24} />
              <p className="mb-0">Quanto maior a senha, mais segura ela será</p>
            </div>
            <div className="d-flex gap-3 mb-3">
              <AlertCircle className="text-primary flex-shrink-0" size={24} />
              <p className="mb-0">Utilize um gerenciador de senhas confiável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;