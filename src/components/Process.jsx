import { Icons, StarsRow } from './Icons.jsx';
import { LEAD_URL } from '../config.js';

export function Process() {
  const steps = [
    {
      title: 'Análise do seu caso',
      paras: [
        'Você entra em contato e nos conta o que aconteceu — suspensão, bloqueio ou invasão. Avaliamos a viabilidade jurídica e explicamos os próximos passos com transparência.',
      ],
    },
    {
      title: 'Reunião de documentos e provas',
      paras: [
        'Orientamos você sobre quais documentos reunir: prints, protocolos, e-mails do suporte e comprovantes. Quanto melhor a documentação, mais forte fica a ação.',
      ],
    },
    {
      title: 'Medida judicial com pedido liminar',
      paras: [
        'Ingressamos com a ação na justiça com um pedido de liminar (urgente), solicitando à plataforma o restabelecimento do acesso à sua conta.',
      ],
    },
    {
      title: 'Acompanhamento da decisão',
      paras: [
        'Caso a decisão seja favorável, a plataforma é notificada para restabelecer o acesso. Quando cabível, também é possível pleitear indenização pelos prejuízos causados.',
      ],
    },
  ];
  return (
    <section className="section recover" id="processo">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow accent-orange">Como funciona</span>
        </div>
        <h2 className="section-title">Como conduzimos o seu caso, passo a passo</h2>
        <div className="steps-grid" style={{ marginTop: 48 }}>
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              {s.paras.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          ))}
        </div>
        <div className="cta-block">
          <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">Começar agora <Icons.Arrow /></a>
          <StarsRow />
        </div>
      </div>
    </section>
  );
}
