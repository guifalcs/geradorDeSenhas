import { Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary bg-gradient text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-4">Gerador de Senhas</h4>
            <p className="mb-4 opacity-75">
              Proteja suas contas online com senhas fortes e seguras. Nossa
              ferramenta gratuita ajuda você a criar senhas únicas e confiáveis
              em segundos.
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-4">Criador</h4>
            <p className="mb-4 opacity-75">
              Desenvolvedor Web Full-Stack Guilherme Falcão
            </p>
            <div className="d-flex gap-3">
              <a
                href="github.com/guifalcs"
                className="text-white text-decoration-none"
              >
                <Github
                  size={24}
                  strokeWidth={1.5}
                  className="hover-lift transition-all"
                />
              </a>
              <a
                href="instagram.com/guifalcs"
                className="text-white text-decoration-none"
              >
                <Instagram
                  size={24}
                  strokeWidth={1.5}
                  className="hover-lift transition-all"
                />
              </a>
              <a
                href="linkedin.com/devguilhermefalcao"
                className="text-white text-decoration-none"
              >
                <Linkedin
                  size={24}
                  strokeWidth={1.5}
                  className="hover-lift transition-all"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="fw-bold mb-4">Contribua</h4>
            <p className="mb-4 opacity-75">
              Ajude a sustentar esse e outros projetos, colaborando com a comunidade de desenvolvedores
            </p>
            <p className="mb-4 opacity-75">
              Pix: 281aea1b-1c8b-49fb-ae70-30406e85abb0
            </p>
          </div>
        </div>

        <hr className="my-5 opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 opacity-75">
              © {new Date().getFullYear()} Gerador de Senhas. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <nav className="nav justify-content-center justify-content-md-end">
              <a
                href="#"
                className="nav-link text-white opacity-75 hover-opacity-100 px-2"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="nav-link text-white opacity-75 hover-opacity-100 px-2"
              >
                Termos
              </a>
              <a
                href="#"
                className="nav-link text-white opacity-75 hover-opacity-100 px-2"
              >
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
