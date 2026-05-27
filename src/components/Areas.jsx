import { Icons, StarsRow } from './Icons.jsx';
import { LEAD_URL, LP_INSTAGRAM, LP_MERCADOLIVRE } from '../config.js';

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4.5 5 5" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <polygon points="10 9 15 12 10 15 10 9" fill="currentColor" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

export function Areas() {
  const areas = [
    {
      icon: <IgIcon />,
      title: 'Instagram',
      text: 'Conta suspensa, desativada ou hackeada. Perfis pessoais, comerciais e de criadores de conteúdo.',
      href: LP_INSTAGRAM,
      cta: 'Ver página do Instagram',
      external: true,
    },
    {
      icon: <CartIcon />,
      title: 'Mercado Livre',
      text: 'Conta de vendedor suspensa, reputação afetada ou saldo retido pela plataforma.',
      href: LP_MERCADOLIVRE,
      cta: 'Ver página do Mercado Livre',
      external: true,
    },
    {
      icon: <FbIcon />,
      title: 'Facebook',
      text: 'Perfil ou página comercial bloqueada, desativada ou invadida por terceiros.',
      href: LEAD_URL,
      cta: 'Falar sobre meu caso',
      external: false,
    },
    {
      icon: <TiktokIcon />,
      title: 'TikTok',
      text: 'Conta banida, suspensa ou com restrições indevidas de monetização e alcance.',
      href: LEAD_URL,
      cta: 'Falar sobre meu caso',
      external: false,
    },
    {
      icon: <YtIcon />,
      title: 'YouTube',
      text: 'Canal removido, desmonetizado ou suspenso por strikes e denúncias indevidas.',
      href: LEAD_URL,
      cta: 'Falar sobre meu caso',
      external: false,
    },
    {
      icon: <Icons.Box />,
      title: 'Outros marketplaces',
      text: 'Shopee, Amazon, Magazine Luiza e demais plataformas de vendas online.',
      href: LEAD_URL,
      cta: 'Falar sobre meu caso',
      external: false,
    },
  ];
  return (
    <section className="section areas" id="areas">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow accent-orange">Áreas de atuação</span>
        </div>
        <h2 className="section-title">
          Atuamos na recuperação de contas nas principais<br />
          <span className="accent-orange">plataformas digitais</span>
        </h2>
        <div className="areas-grid">
          {areas.map((a, i) => (
            <a
              key={i}
              className="area-card"
              href={a.href}
              {...(a.external ? { target: '_blank', rel: 'noopener' } : { id: 'lead', target: '_blank', rel: 'noopener' })}
            >
              <div className="area-ic">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
              <span className="area-link">{a.cta} <Icons.Arrow /></span>
            </a>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">Não encontrou sua plataforma? Fale conosco <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
