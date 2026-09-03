import { LP_INSTAGRAM, LP_MERCADOLIVRE } from '../config.js';
import { useWhatsAppLink } from '../useWhatsAppLink.js';

export function Footer() {
  const whatsappLink = useWhatsAppLink();
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
              <li><a href={whatsappLink} target="_blank" rel="noopener">Fale conosco</a></li>
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
          <strong>Este site pertence a um escritório de advocacia independente e não possui qualquer vínculo, afiliação, patrocínio ou autorização de Meta Platforms (Instagram, Facebook), ByteDance (TikTok), YouTube, Google, Mercado Livre ou Shopee.</strong> As marcas citadas pertencem aos seus respectivos titulares e são mencionadas apenas para descrever, de forma factual, o serviço jurídico oferecido. Não somos canal oficial de atendimento dessas plataformas e não intermediamos contato com elas. <strong>Este site não pratica phishing:</strong> não solicitamos senhas, códigos de verificação, dados de login ou quaisquer credenciais de acesso a plataformas, e não reproduzimos telas de login de terceiros. Os dados fornecidos destinam-se exclusivamente ao contato para prestação de serviços advocatícios. Não oferecemos serviço oficial do governo, não praticamos fraude e não comercializamos criptoativos.
        </p>
      </div>
    </footer>
  );
}
