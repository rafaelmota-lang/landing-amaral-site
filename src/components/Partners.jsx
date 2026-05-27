import { Icons } from './Icons.jsx';
import { LEAD_URL } from '../config.js';
import rafaelAvif from '../assets/rafael-mota-536.avif';
import rafaelWebp from '../assets/rafael-mota-536.webp';
import rafaelJpg from '../assets/rafael-mota-536.jpg';
import pedroWebp from '../assets/pedro-amaral-300.webp';
import pedroJpg from '../assets/pedro-amaral-300.jpg';

export function Partners() {
  return (
    <section className="section partners" id="equipe">
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <span className="eyebrow accent-orange">O escritório</span>
        </div>
        <h2 className="section-title">Quem está à frente da Amaral &amp; Bohrer</h2>
        <p className="partners-intro">
          Fundado em 2017 com uma ideia simples — permitir que qualquer pessoa entrasse
          na justiça pelo celular, em poucos minutos. Hoje somos um escritório digital,
          com uma equipe dedicada e atuação em todo o Brasil.
        </p>

        <div className="partners-grid">
          <div className="partner-card">
            <div className="partner-photo">
              <picture>
                <source srcSet={pedroWebp} type="image/webp" />
                <img
                  src={pedroJpg}
                  alt="Pedro Amaral - sócio"
                  width="110"
                  height="110"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="partner-info">
              <div className="role">Sócio · OAB/RS 7.896</div>
              <h3>Pedro Amaral</h3>
              <p className="bio">Formado em Direito pela Universidade Federal do Rio Grande do Sul, titulado Mestre (LL.M.) pela Northwestern University School of Law. Um verdadeiro entusiasta do avanço da tecnologia na prática jurídica.</p>
            </div>
          </div>

          <div className="partner-card">
            <div className="partner-photo">
              <picture>
                <source srcSet={rafaelAvif} type="image/avif" />
                <source srcSet={rafaelWebp} type="image/webp" />
                <img
                  src={rafaelJpg}
                  alt="Rafael Mota - sócio"
                  width="268"
                  height="268"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <div className="partner-info">
              <div className="role">Sócio · OAB/CE 36.237</div>
              <h3>Rafael Mota</h3>
              <p className="bio">Formado em Direito pelo Centro Universitário Estácio do Ceará, é um estrategista digital apaixonado pelo direito e novas tecnologias. Atua como professor e advogado especialista na defesa do trabalhador e do consumidor frente às tecnologias modernas.</p>
            </div>
          </div>
        </div>

        <div className="cta-block">
          <a id="lead" href={LEAD_URL} target="_blank" rel="noopener" className="cta">Fale com o nosso time <Icons.Arrow /></a>
        </div>
      </div>
    </section>
  );
}
