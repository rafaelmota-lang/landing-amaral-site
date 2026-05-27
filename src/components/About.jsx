import { Icons, StarsRow } from './Icons.jsx';
import { LEAD_URL } from '../config.js';

export function About() {
  const points = [
    {
      icon: <Icons.Lock />,
      text: <><strong>Sua conta é um patrimônio.</strong> Seguidores, histórico, contatos comerciais e renda dependem do acesso. Quando uma plataforma bloqueia ou um hacker invade, o prejuízo é imediato.</>,
    },
    {
      icon: <Icons.Robot />,
      text: <><strong>As plataformas erram — e quase nunca explicam.</strong> Suspensões automáticas, denúncias indevidas e invasões deixam milhares de pessoas sem acesso e sem resposta do suporte oficial.</>,
    },
    {
      icon: <Icons.Handshake />,
      text: <><strong>A via judicial pode ser acionada para questionar o bloqueio.</strong> Com a estratégia jurídica adequada, é possível pleitear uma decisão liminar que solicite o restabelecimento do acesso à conta.</>,
    },
  ];
  return (
    <section className="orange-band" id="sobre">
      <div className="wrap">
        <h2>Somos um escritório especializado em ações de recuperação de acesso a contas digitais bloqueadas, suspensas ou invadidas</h2>
        <div className="orange-list">
          {points.map((p, i) => (
            <div className="orange-item" key={i}>
              <div className="ic">{p.icon}</div>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">Falar com um especialista <Icons.Arrow /></a>
          <StarsRow light />
        </div>
      </div>
    </section>
  );
}
