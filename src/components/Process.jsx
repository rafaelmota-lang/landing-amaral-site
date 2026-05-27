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
        'Ingressamos com a ação na justiça pedindo uma decisão liminar (urgente) para que a plataforma seja obrigada a restabelecer o acesso à sua conta o mais rápido possível.',
      ],
    },
    {
      title: 'Recuperação do acesso',
      paras: [
        'Com a decisão favorável, a plataforma é notificada e deve devolver o acesso. Quando cabível, também buscamos indenização pelos prejuízos causados.',
      ],
    },
  ];
  return (
    <section className="section recover" id="processo">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow accent-orange">Como funciona</span>
        </div>
        <h2 className="section-title">Um processo simples, do contato à recuperação</h2>
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
