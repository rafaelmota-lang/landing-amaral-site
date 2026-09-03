// Roteamento de WhatsApp do site institucional.
//
// ANTES (ate 2026-09-02): os 7 CTAs iam para uma pagina de captura do Leadster
// (d7TGpeHYhhrspZ7i), com um TODO pendente de criar um fluxo institucional.
//
// AGORA, por decisao do dono: CTA direto para o WhatsApp, no MESMO pool da LP
// do Instagram. O rodizio e o monitor de 6h ja cobrem esses dois numeros.
//
// Cada dominio tem o seu proprio localStorage, entao o sticky daqui e
// independente do da LP do Instagram, mesmo com o pool sendo igual.

export const WHATSAPP_POOL = [
  // Conferidos em 2026-09-01/02: conectados e nao arquivados.
  { numero: '5511918271120', peso: 1 }, // Digisac, API OFICIAL
  { numero: '5511926878173', peso: 1 }, // Fluxo Juridico, canal Redes Sociais
];

import { ORIGENS, detectarOrigem } from './origem.js';

// O site e institucional (varias areas), entao a mensagem nao cita tese.
export const ASSUNTO = 'Quero falar com um advogado sobre o meu caso';

export const MENSAGEM_INICIAL = `${ORIGENS.site.tag} - ${ASSUNTO}`;

const CHAVE_STICKY = 'ab_site_wpp_v1';

export function escolherNumero() {
  try {
    const salvo = localStorage.getItem(CHAVE_STICKY);
    const jaEscolhido = WHATSAPP_POOL.find((p) => p.numero === salvo);
    if (jaEscolhido) return jaEscolhido;
  } catch (e) {}

  const total = WHATSAPP_POOL.reduce((s, p) => s + p.peso, 0);
  let r = Math.random() * total;
  const escolhido = WHATSAPP_POOL.find((p) => (r -= p.peso) < 0) || WHATSAPP_POOL[0];

  try { localStorage.setItem(CHAVE_STICKY, escolhido.numero); } catch (e) {}
  return escolhido;
}

export function montarMensagem(extra) {
  const origem = detectarOrigem();
  const tag = (ORIGENS[origem] || ORIGENS.site).tag;
  return `${tag} - ${extra || ASSUNTO}`;
}

export function montarLink(numero, extra) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(montarMensagem(extra))}`;
}

// E FUNCAO, nao const: a origem so e conhecida na hora do render. Como const,
// as tres paginas sairiam com a mesma tag. Era o defeito do antigo LEAD_URL.
export function linkPadrao(assunto) {
  return montarLink(WHATSAPP_POOL[0].numero, assunto);
}

// Landing pages especializadas por plataforma.
export const LP_INSTAGRAM = 'https://instagram.amaralebohrer.com.br/';
export const LP_MERCADOLIVRE = 'https://ml.amaralebohrer.com.br/';
