import { LP_INSTAGRAM, LP_MERCADOLIVRE, LEAD_URL } from '../config.js';

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-brand">
              <span className="mark" aria-hidden="true">A</span>
              <span>Amaral &amp; Bohrer Advogados</span>
            </div>
            <p>Escritório especializado em direito digital e na recuperação de contas em redes sociais e marketplaces. Atuamos em todo o Brasil de forma remota.</p>
          </div>
          <div className="foot-col">
            <h3>Contato</h3>
            <ul>
              <li>contato@amaraladvogados.app</li>
              <li>(11) 99682-4517</li>
              <li><a href={LEAD_URL} target="_blank" rel="noopener">Fale conosco</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h3>Áreas de atuação</h3>
            <ul>
              <li><a href={LP_INSTAGRAM} target="_blank" rel="noopener">Instagram</a></li>
              <li><a href={LP_MERCADOLIVRE} target="_blank" rel="noopener">Mercado Livre</a></li>
              <li>Facebook</li>
              <li>TikTok</li>
              <li>YouTube</li>
              <li>Outros marketplaces</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Amaral &amp; Bohrer Advogados · CNPJ 29.494.748/0001-70</span>
          <span>OAB/RS 7.789</span>
        </div>
        <p className="foot-disclaimer">
          Este site não faz parte do Google, Meta Platforms (Instagram, Facebook), ByteDance (TikTok), YouTube ou Mercado Livre, nem é afiliado a essas empresas. Não oferecemos serviços oficiais dessas plataformas e não praticamos qualquer tipo de fraude.
        </p>
      </div>
    </footer>
  );
}
