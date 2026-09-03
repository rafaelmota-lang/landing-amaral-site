import { Icons, StarsRow } from './Icons.jsx';
import { LEAD_URL } from '../config.js';

export function WhyUs() {
  const cards = [
    {
      stat: '+',
      label: 'Especialização',
      title: 'Foco em direito digital',
      text: 'Não somos generalistas. Conhecemos a fundo os mecanismos de moderação das plataformas e os caminhos jurídicos para questionar bloqueios, suspensões e invasões.',
    },
    {
      stat: '10k+',
      label: 'Clientes atendidos',
      title: 'Experiência consolidada',
      text: 'Mais de 10 mil clientes atendidos — criadores, influenciadores, empresas e usuários comuns que contaram com o nosso escritório para defender seus direitos.',
    },
    {
      stat: '100%',
      label: 'Remoto',
      title: 'Atendimento em todo o Brasil',
      text: 'Você não precisa sair de casa. Todo o atendimento é digital — da primeira conversa ao acompanhamento do processo, onde quer que você esteja no país.',
    },
  ];
  return (
    <section className="section why-us">
      <div className="wrap">
        <h2 className="section-title">
          Por que escolher a Amaral e Bohrer<br />
          <span className="accent-orange">para cuidar do seu caso</span>
        </h2>
        <div className="why-grid">
          {cards.map((c, i) => (
            <div className="why-card" key={i}>
              <div className="corner"></div>
              <div className="stat">{c.stat}</div>
              <div className="stat-label">{c.label}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">Comece agora <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
