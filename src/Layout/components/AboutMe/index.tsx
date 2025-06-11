export default function AboutMe() {
  return (
    <section
      id="sobre"
      className="py-12 bg-[rgba(10,10,20,0.9)] border-t border-b border-[rgba(138,43,226,0.2)]"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-light mb-4">
            <span className="text-primary">{"// "}</span>Missão Ninja
          </h2>
          <p className="text-light-gray max-w-[700px] mx-auto">
            <span className="text-primary">"Dattebayo!"</span> Minha jornada
            como desenvolvedora
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[rgba(20,20,30,0.8)] w-full h-full border border-[rgba(138,43,226,0.2)] rounded-lg p-6">
            <h3 className="text-xl font-fira-code text-light mb-4">
              <span className="text-code-keyword">function</span>{" "}
              <span className="text-code-function">minhaJornada</span>() {"{"}
            </h3>
            <p className="text-light-gray mb-4">
              Como desenvolvedora front-end júnior, combino minha formação
              acadêmica em Ciência da Computação com experiência prática em
              projetos reais. Minha paixão por criar interfaces funcionais e
              acessíveis me levou a dominar várias tecnologias
            </p>
            <p className="text-code-punctuation">{"}"}</p>
          </div>

          <div className="bg-[rgba(20,20,30,0.8)] w-full h-fullw-full h-full border border-[rgba(138,43,226,0.2)] rounded-lg p-6">
            <h3 className="text-xl font-fira-code text-light mb-4">
              <span className="text-code-keyword">export default</span>{" "}
              <span className="text-code-function">objetivo</span>() {"{"}
            </h3>
            <p className="text-light-gray">
              Busco oportunidades para crescer como desenvolvedora front-end,
              aplicando meus conhecimentos em projetos desafiadores que exigem
              criatividade e solução de problemas. Comprometida com aprendizado
              contínuo e desenvolvimento de interfaces que combinem beleza e
              funcionalidade.
            </p>
            <p className="text-code-punctuation mt-4">{"}"}</p>
          </div>
        </div>

        <p className="text-light-gray text-center m-2">
          "<span className="text-primary">'I never go back on my word!'</span> -
          Assim como Naruto, busco me tornar uma{" "}
          <span className="text-primary">desenvolvedora Hokage</span>, criando
          experiências web que impressionem tanto quanto um <span className="text-primary">Rasengan</span>!"
        </p>
      </div>
    </section>
  );
}
