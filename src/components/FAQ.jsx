import { useState } from 'react';

const faqs = [
  {
    q: 'Com quais plataformas vocês atuam?',
    a: 'Atuamos em casos envolvendo redes sociais (Instagram, Facebook, TikTok, YouTube) e marketplaces (Mercado Livre, Shopee, Amazon, Magazine Luiza, entre outros). Atendemos perfis pessoais, comerciais, de criadores de conteúdo e empresas.',
  },
  {
    q: 'Em quais situações é possível recorrer judicialmente?',
    a: 'Tanto em casos de invasão (conta hackeada) quanto de suspensão ou bloqueio indevido pela própria plataforma. Mesmo quando a empresa alega "violação dos termos de uso", é possível questionar judicialmente a proporcionalidade e a fundamentação da punição.',
  },
  {
    q: 'Quanto tempo costuma levar um caso desses?',
    a: 'Cada caso é único e o prazo depende da complexidade, do juízo competente e da documentação apresentada. Em pedidos liminares, busca-se uma análise mais célere em razão da urgência, mas não existe prazo garantido — a decisão é sempre do Poder Judiciário.',
  },
  {
    q: 'Vocês atendem em todo o Brasil?',
    a: 'Sim. Atuamos em todo o território nacional de forma 100% remota. Toda a documentação é enviada digitalmente e as audiências, quando necessárias, são realizadas online.',
  },
  {
    q: 'Como funciona o pagamento dos honorários?',
    a: 'Trabalhamos com modelos transparentes, ajustados ao perfil do seu caso. Na primeira conversa, apresentamos o orçamento de forma clara e sem surpresas.',
  },
  {
    q: 'Como começo?',
    a: 'Clique em qualquer botão de contato e fale com a nossa equipe. Faremos uma análise inicial do seu caso e explicaremos os próximos passos.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow">Perguntas frequentes</span>
        </div>
        <h2 className="section-title">Tire suas dúvidas antes de começar</h2>
        <div className="faq-list" style={{ marginTop: 48 }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div className="faq-item" key={i} data-open={isOpen}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{f.q}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </button>
                <div className="faq-a" id={id} role="region">
                  <p style={{ paddingTop: 4 }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
