import { lazy, Suspense, useState } from 'react';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Areas } from './components/Areas.jsx';
import { Results } from './components/Results.jsx';
import { Process } from './components/Process.jsx';
import { Partners } from './components/Partners.jsx';
import { WhyUs } from './components/WhyUs.jsx';
import { Testimonials } from './components/Testimonials.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Footer } from './components/Footer.jsx';

const TWEAKS_ENABLED = typeof __TWEAKS__ !== 'undefined' && __TWEAKS__;

const TweaksRuntime = TWEAKS_ENABLED
  ? lazy(() => import('./components/tweaks/TweaksRuntime.jsx'))
  : null;

const HEADLINES = {
  original: 'Perdeu o acesso à sua conta digital? <span class="accent">Conte com advogados especializados em direito digital.</span>',
  direct: 'Conta suspensa, bloqueada ou hackeada? <span class="accent">Entenda seus direitos com quem é especialista.</span>',
};
const SUBHEADS = {
  original: 'A Amaral e Bohrer Advogados é especializada na recuperação de contas em redes sociais e marketplaces — Instagram, Facebook, TikTok, YouTube, Mercado Livre e outras plataformas. Atuamos em todo o Brasil, de forma 100% remota.',
};
const CTAS = {
  original: 'Falar com um especialista',
};

const DEFAULTS = (typeof window !== 'undefined' && window.TWEAK_DEFAULTS) || {
  headlineVariant: 'original',
  ctaVariant: 'original',
  subheadVariant: 'original',
};

export function App() {
  const [tweaks, setTweaks] = useState(DEFAULTS);
  const setTweak = (key, value) => setTweaks((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <Hero
        headline={HEADLINES[tweaks.headlineVariant] || HEADLINES.original}
        subhead={SUBHEADS[tweaks.subheadVariant] || SUBHEADS.original}
        ctaLabel={CTAS[tweaks.ctaVariant] || CTAS.original}
      />
      <main id="content">
        <About />
        <Areas />
        <Results />
        <Process />
        <Partners />
        <WhyUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      {TWEAKS_ENABLED && TweaksRuntime && (
        <Suspense fallback={null}>
          <TweaksRuntime tweaks={tweaks} setTweak={setTweak} />
        </Suspense>
      )}
    </>
  );
}
