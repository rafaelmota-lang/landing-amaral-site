import { Icons, StarsRow } from './Icons.jsx';
import { LEAD_URL } from '../config.js';
import logoAmaralWebp from '../assets/logo-amaral.webp';
import logoAmaralPng from '../assets/logo-amaral.png';

export function Hero({ headline, subhead, ctaLabel }) {
  return (
    <section className="hero">
      <div className="wrap">
        <nav className="hero-nav" aria-label="Principal">
          <div className="brand">
            <picture>
              <source srcSet={logoAmaralWebp} type="image/webp" />
              <img
                src={logoAmaralPng}
                alt="Amaral e Bohrer Advogados"
                className="brand-logo"
                width="155"
                height="38"
                fetchpriority="high"
              />
            </picture>
          </div>
          <div className="nav-links" aria-label="Seções">
            <a href="#areas">Áreas de atuação</a>
            <a href="#processo">Como funciona</a>
            <a href="#sobre">O escritório</a>
          </div>
          <div className="nav-tag">Especialistas em Direito Digital</div>
        </nav>

        <div className="hero-grid">
          <div className="hero-text">
            <div className="pill">
              <span className="dot" aria-hidden="true">!</span>
              Recuperação de contas em redes sociais e marketplaces
            </div>
            <h1 dangerouslySetInnerHTML={{ __html: headline }} />
            <p className="lead">{subhead}</p>
            <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">
              {ctaLabel}
              <Icons.Arrow />
            </a>
            <div style={{ marginTop: 18 }}>
              <StarsRow light />
            </div>
          </div>

          <div className="phone-wrap">
            <div className="badge b1">
              <div className="ic"><Icons.Users /></div>
              <div>
                <div className="v">+13.000</div>
                <div className="l">Clientes atendidos</div>
              </div>
            </div>
            <div className="phone" aria-hidden="true">
              <div className="phone-screen">
                <div className="phone-status">
                  <span>9:41</span>
                  <div className="icons"><span></span><span></span><span></span></div>
                </div>
                <div className="phone-content">
                  <div className="phone-logo">
                    <span className="mark">A</span>
                    <span>Amaral &amp; Bohrer</span>
                  </div>
                  <div className="phone-card">
                    <div className="head">Conta bloqueada</div>
                    <p className="phone-card-title">Instagram, Facebook, Mercado Livre...</p>
                    <div className="phone-bars">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                  <div className="phone-card" style={{ background: '#fff5e8' }}>
                    <div className="head" style={{ color: 'var(--teal-dark)' }}>
                      <span style={{ background: 'var(--teal)' }}></span>
                      Solução jurídica
                    </div>
                    <p className="phone-card-title">Recupere o acesso com um especialista</p>
                    <div className="phone-bars">
                      <span></span><span></span>
                    </div>
                  </div>
                  <div className="phone-cta">Falar com especialista</div>
                  <div className="phone-quote">★★★★★ Nota 5,0 · 594 avaliações</div>
                </div>
              </div>
            </div>
            <div className="badge b2">
              <div className="ic"><Icons.Star /></div>
              <div>
                <div className="v">5.0</div>
                <div className="l">Nota Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
