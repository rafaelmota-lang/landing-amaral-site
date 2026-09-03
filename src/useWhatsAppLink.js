import { useEffect, useState } from 'react';
import { linkPadrao, escolherNumero, montarLink, WHATSAPP_POOL } from './config.js';

// `assunto` opcional: quando informado, a primeira mensagem ja diz do que se
// trata (ex. "Quero recuperar minha conta do Facebook"). O atendente sabe a
// plataforma sem perguntar, e o relatorio separa por tese sem tag extra.
//
// O sorteio roda no useEffect, NUNCA no render: no prerender ele aconteceria
// uma vez no build e o mesmo numero ficaria congelado para todo mundo.
export function useWhatsAppLink(assunto) {
  const [href, setHref] = useState(() => linkPadrao(assunto));
  useEffect(() => {
    setHref(montarLink(escolherNumero().numero, assunto));
  }, [assunto]);
  return href;
}

// Para quem precisa montar varios links com assuntos diferentes na mesma tela
// (ex. os cards de areas), sorteando UMA vez so: se cada card chamasse o
// sorteio, dois cards da mesma pagina poderiam apontar para atendentes
// diferentes.
export function useNumeroWhatsApp() {
  const [numero, setNumero] = useState(WHATSAPP_POOL[0].numero);
  useEffect(() => { setNumero(escolherNumero().numero); }, []);
  return numero;
}
