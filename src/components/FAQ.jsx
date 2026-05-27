import { useState } from 'react';

const faqs = [
  {
    q: 'Quais tipos de conta vocês recuperam?',
    a: 'Atuamos na recuperação de contas em redes sociais (Instagram, Facebook, TikTok, YouTube) e marketplaces (Mercado Livre, Shopee, Amazon, Magazine Luiza, entre outros). Atendemos perfis pessoais, comerciais, de criadores de conteúdo e empresas.',
  },
  {
    q: 'Em quais situações é possível recorrer judicialmente?',
    a: 'Tanto em casos de invasão (conta hackeada) quanto de suspensão ou bloqueio indevido pela própria plataforma. Mesmo quando a empresa alega "violação dos termos de uso", é possível questionar judicialmente a proporcionalidade e a fundamentação da punição.',
  },
  {
    q: 'Quanto tempo demora para recuperar o acesso?',
    a: 'Em casos com pedido liminar, é possível obter a reativação em 7 a 30 dias. O prazo varia conforme a complexidade do caso, o juízo e a documentação disponível. Casos mais simples podem ser resolvidos extrajudicialmente em menos tempo.',
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
    a: 'Clique em qualquer botão de contato e fale com a nossa equipe. Faremos uma análise inicial do seu caso e explicaremos os próximos passos para recuperar o acesso à sua conta.',
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
