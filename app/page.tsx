"use client";

import { useState } from "react";

const whatsapp = "https://wa.me/5516997375936?text=Olá%2C%20vim%20pelo%20site%20da%20UNI%20e%20quero%20analisar%20um%20processo.";
const codeOfConduct = "./documentos/uni-codigo-de-conduta-2026-2027.pdf";

function ProcessIcon({type}:{type:'diagnose'|'measure'|'design'|'implement'|'factory'|'logistics'|'training'|'people'}) {
  const paths = {
    diagnose:<><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6M10 7v6"/></>,
    measure:<><circle cx="12" cy="13" r="8"/><path d="M12 13V8m0 5 4 2M9 2h6"/></>,
    design:<><path d="M4 18 18 4l2 2L6 20H4v-2Z"/><path d="m14 6 4 4M8 16l-2-2"/></>,
    implement:<><path d="M4 13h5l2 3 4-9 2 6h3"/><path d="M5 20h14M5 4h14"/></>,
    factory:<><path d="M3 21V9l6 4V9l6 4V5h6v16H3Z"/><path d="M7 17h2m4 0h2m4 0h2"/></>,
    logistics:<><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
    training:<><path d="m3 8 9-4 9 4-9 4-9-4Z"/><path d="M7 11v5c3 2 7 2 10 0v-5M21 8v7"/></>,
    people:<><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-7 6-7s6 3 6 7M15 14c4 0 6 2 6 6"/></>
  };
  return <svg className="process-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export default function Home() {
  const [speed, setSpeed] = useState(2);
  const [mode, setMode] = useState<"atual" | "otimizado">("otimizado");
  const optimized = mode === "otimizado";
  const currentOutput = 72 + speed * 5;
  const optimizedOutput = 118 + speed * 7;
  const currentEfficiency = 55 + speed * 2;
  const optimizedEfficiency = 79 + speed * 3;
  const output = optimized ? optimizedOutput : currentOutput;
  const efficiency = optimized ? optimizedEfficiency : currentEfficiency;
  const capacityGain = Math.round((optimizedOutput / currentOutput - 1) * 100);
  const cycle = (3600 / output).toFixed(1).replace('.', ',');
  const shift = Math.round(output * 7.5);
  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato pelo site UNI — ${data.get('empresa') || 'Novo projeto'}`);
    const body = encodeURIComponent(`Nome: ${data.get('nome')}\nEmpresa: ${data.get('empresa')}\nE-mail: ${data.get('email')}\n\nMensagem:\n${data.get('mensagem')}`);
    window.location.href = `mailto:ivan.antoneli@unismartsolution.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <header className="topbar">
        <a href="#inicio" className="brand brand-image" aria-label="UNI início"><img src="./assets/uni-logo-3d.jpg" alt="UNI Smart Outsourcing Solutions" /></a>
        <nav aria-label="Navegação principal"><a href="#solucoes">Soluções</a><a href="#ferramentas-ia">Ferramentas com IA</a><a href="#metodologias">MTM & BPMN</a><a href="#metodo">Método</a><a href="#conteudos">Conteúdos</a><a href="#sobre">Sobre</a></nav>
        <a className="button compact" href={whatsapp} target="_blank" rel="noreferrer">Falar com especialista <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span/> Engenharia de processos aplicada</p>
          <h1>Engenharia que transforma processos em <em>resultados.</em></h1>
          <p className="lead">Conectamos pessoas, métodos e dados para reduzir desperdícios e desenvolver operações mais produtivas. Do estudo de tempos ao redesenho de processos, com acompanhamento da implementação.</p>
          <div className="actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Solicitar diagnóstico <span>→</span></a><a className="text-link" href="#expedicao">Ver simulador de expedição <i>↓</i></a></div>
          <div className="trust"><b>AS-IS → TO-BE</b><span>MTM</span><span>LEAN SIX SIGMA</span><span>VSM + BPMN</span></div>
        </div>
        <div className="engineering-panel" aria-label="Abordagem de engenharia da UNI">
          <div className="panel-top"><span>UNI / ENGENHARIA APLICADA</span><span className="panel-status">Método + execução</span></div>
          <div className="process-blueprint" aria-hidden="true"><div className="blueprint-line"/><span className="blueprint-node node-one">01<small>ENTENDER</small></span><span className="blueprint-node node-two">02<small>MEDIR</small></span><span className="blueprint-node node-three">03<small>EVOLUIR</small></span></div>
          <h2>Clareza para decidir.<br/><em>Método para evoluir.</em></h2>
          <div className="panel-bottom"><div><b>MTM</b><span>Métodos e tempos</span></div><div><b>BPMN</b><span>Fluxos e decisões</span></div><div><b>LEAN</b><span>Valor e melhoria</span></div></div>
        </div>
      </section>

      <section className="solutions section" id="solucoes"><div className="section-head"><div><p className="eyebrow"><span/> SOLUÇÕES MODULARES</p><h2>Onde há desperdício,<br/><em>encontramos oportunidade.</em></h2></div></div><div className="solution-grid">
        {[['Manufatura','Padronização, tempos MTM, automação e indicadores para uma operação previsível.','01','factory'],['Logística interna','Fluxos, estoques e movimentação de materiais com menor custo e maior controle.','02','logistics'],['Treinamentos','Capacitação personalizada com Quick Analysis para medir a eficácia do aprendizado.','03','training'],['Gestão de pessoas','Papéis claros, análise de desempenho e desenvolvimento contínuo das equipes.','04','people']].map(x=><article key={x[0]}><b>{x[2]}</b><div className="cube"><ProcessIcon type={x[3] as 'factory'|'logistics'|'training'|'people'}/></div><h3>{x[0]}</h3><p>{x[1]}</p><a href={whatsapp} target="_blank" rel="noreferrer">Explorar solução →</a></article>)}
      </div></section>


      <section className="custom-tools section" id="ferramentas-ia" aria-labelledby="ferramentas-titulo">
        <div className="section-head">
          <div><p className="eyebrow"><span/> INTELIGÊNCIA ARTIFICIAL APLICADA</p><h2 id="ferramentas-titulo">Sua necessidade.<br/>Uma solução <em>sob medida.</em></h2></div>
          <p className="tools-promise">Menos tarefas manuais.<br/>Mais produtividade e confiança nos dados.</p>
        </div>
        <div className="tools-intro">
          <p>Transformamos os desafios da sua operação em <strong>ferramentas digitais customizadas, desenvolvidas com o apoio da inteligência artificial.</strong> Partimos das necessidades do seu negócio para automatizar processos, simplificar rotinas e conectar informações — com foco em reduzir retrabalho, ganhar produtividade e aumentar a acuracidade dos dados que orientam suas decisões.</p>
          <p>De controles operacionais a painéis de indicadores e gestão de competências, cada solução é desenhada para a realidade da sua equipe. <strong>Tecnologia que faz sentido no processo e entrega valor no dia a dia.</strong></p>
        </div>
        <div className="tools-benefits"><span>Automação de rotinas</span><span>Informações mais confiáveis</span><span>Visibilidade da operação</span><span>Gestão sob medida</span></div>
        <div className="tools-gallery">
          <article className="tool-card" id="expedicao" aria-labelledby="expedicao-titulo" style={{scrollMarginTop: "6rem", gridColumn: "1 / -1"}}>
        <div className="section-head tool-caption" style={{marginBottom: 0}}>
          <div>
            <p className="eyebrow"><span/> Simulador 3D</p>
            <h3 id="expedicao-titulo" style={{fontSize: "clamp(1.5rem, 3vw, 2.6rem)"}}>Expedição de <em>embalagens vazias.</em></h3>
          </div>
          <a className="button" href="https://antoneli1982.github.io/exp.embalagens.vazias/" target="_blank" rel="noopener noreferrer">Abrir em nova aba <span aria-hidden="true">↗</span></a>
        </div>
        <iframe
          title="Simulador 3D de expedição de embalagens vazias"
          src="https://antoneli1982.github.io/exp.embalagens.vazias/"
          loading="lazy"
          allowFullScreen
          style={{display: "block", width: "100%", height: "clamp(360px, 72vh, 840px)", border: 0, borderRadius: "1rem", background: "#17191c"}}
        />
      </article>
          {[
            ['ferramenta-mtm','Métodos e tempos','Organização de projetos, análises e folhas de processo em um único ambiente.','Tela de ferramenta MTM com projetos e folhas de processo'],
            ['ferramenta-indicadores','Indicadores operacionais','Painéis que transformam registros da operação em uma visão clara para a gestão.','Painel com indicadores por turno, paradas e embalagens lavadas'],
            ['ferramenta-competencias','Gestão de competências','Estruturação de setores, treinamentos e matrizes para apoiar o desenvolvimento das equipes.','Ferramenta de gestão de competências com setores e matrizes'],
            ['ferramenta-transbordo','Controle de transbordo','Orientações visuais, tempos e informações do processo disponíveis para a execução.','Tela de controle de transbordo com peças, embalagens e tempos operacionais']
          ].map(([file,title,description,alt],i)=><article className="tool-card" key={file}><a className="tool-image" href={`./assets/${file}.png`} target="_blank" rel="noreferrer" aria-label={`Ampliar imagem: ${title}`}><img src={`./assets/${file}.png`} alt={alt} loading="lazy" decoding="async"/><span>Ampliar imagem ↗</span></a><div className="tool-caption"><small>0{i+1} / APLICAÇÃO</small><h3>{title}</h3><p>{description}</p></div></article>)}
          {[
            ['Simulador de embalagens vazias', './simuladores/embalagens/', 'simulador-embalagens.jpg', 'Rebocador com carretinhas e operadores na área de descarga de embalagens vazias'],
            ['Simulador de estoque', './simuladores/estoque/', 'simulador-estoque.jpg', 'Vista do armazém em 3D durante o tour guiado pelos corredores de estoque']
          ].map(([title, url, image, description]) => (
            <article className="tool-card" key={url} id={image.split(".")[0]} style={{scrollMarginTop: "7rem"}}>
              <a className="tool-image" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title.toLowerCase()} em nova aba`}>
                <img src={`./assets/${image}`} alt={description} width={1536} height={695} style={{aspectRatio: "1536 / 695"}} loading="lazy" decoding="async" />
              </a>
              <div className="tool-caption">
                <h3>{title}</h3>
                <a className="button" href={url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${title.toLowerCase()} em nova aba`}>
                  Abrir simulador <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="tools-bottom"><p><strong>Qual rotina está tomando o tempo da sua equipe?</strong><br/>Vamos transformá-la na próxima oportunidade de melhoria.</p><a className="button" href="https://wa.me/5516997375936?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20uma%20ferramenta%20customizada%20para%20minha%20opera%C3%A7%C3%A3o." target="_blank" rel="noreferrer">Quero uma solução sob medida <span>↗</span></a></div>
      </section>

      <section className="clients section" id="clientes" aria-labelledby="clientes-title">
        <div className="clients-copy"><p className="eyebrow"><span/> EXPERIÊNCIA APLICADA</p><h2 id="clientes-title">Projetos conduzidos em operações de <em>diferentes setores.</em></h2><p>A UNI já atuou em contextos industriais, logísticos e corporativos de empresas reconhecidas. Cada projeto parte do diagnóstico técnico do processo, estrutura o cenário AS-IS, define o TO-BE e direciona ações para produtividade, padronização e controle operacional.</p><div className="client-tags"><span>Manufatura</span><span>Logística</span><span>Engenharia</span><span>Bens de consumo</span></div></div>
        <div className="client-logos">{[
          ['client-coca-cola.png','Coca-Cola','light'],['client-5b.png','5B Empilhadeiras','light'],['client-ds.png','DS Solutions','light'],['client-oba.png','Oba Hortifruti','light'],['client-vma.png','VMA Engenharia','light'],['client-vw-new.png','Volkswagen','light'],['client-privalia.png','Privalia','light'],['client-lacoste.png','Lacoste','light'],['client-lion-new.png','Lion Fitness','dark'],['client-taec.png','TAEC Módulos','dark'],['client-control-v.png','Control V Indústria de Móveis','dark'],['client-bluelight.png','Bluelight','dark']
        ].map(([file,name,tone])=><article key={name} className={tone==='dark'?'dark-logo':''}><img src={`./assets/${file}`} alt={name} loading="lazy" decoding="async"/></article>)}</div>
      </section>

      <section className="methodologies section" id="metodologias" aria-labelledby="metodologias-titulo">
        <div className="section-head"><div><p className="eyebrow"><span/> MÉTODOS QUE DÃO CLAREZA</p><h2 id="metodologias-titulo">Entender o fluxo.<br/><em>Aperfeiçoar o trabalho.</em></h2></div><p>MTM e BPMN atuam em níveis complementares: o método de execução de uma atividade e a conexão entre as etapas do processo.</p></div>
        <div className="methodology-grid">
          <article className="methodology-card"><div className="methodology-heading"><span>01 / MÉTODOS E TEMPOS</span><ProcessIcon type="measure"/></div><h3>MTM</h3><p className="methodology-name">Methods-Time Measurement</p><h4>O tempo depende do método.</h4><p>O MTM analisa o trabalho manual com sistemas de tempos predeterminados. Ao descrever os movimentos e suas condições de execução, oferece uma base técnica para comparar métodos e planejar operações.</p><ul><li>Identificar movimentos desnecessários e oportunidades no posto de trabalho.</li><li>Apoiar a padronização, o balanceamento e o planejamento de capacidade.</li><li>Projetar métodos de trabalho considerando as pessoas e as condições da operação.</li></ul><div className="methodology-example"><b>NA PRÁTICA</b><p>Revisar a posição de peças e ferramentas em uma montagem para reduzir alcances e organizar a sequência de execução.</p></div><a className="source-link" href="https://mtm.org/en/about-mtm/mtm" target="_blank" rel="noreferrer">Conheça o MTM na associação internacional ↗</a></article>
          <article className="methodology-card"><div className="methodology-heading"><span>02 / PROCESSOS E DECISÕES</span><ProcessIcon type="design"/></div><h3>BPMN</h3><p className="methodology-name">Business Process Model and Notation</p><h4>Um processo claro para todos.</h4><p>BPMN é uma notação gráfica padronizada para representar processos de negócio. Eventos, atividades, decisões e responsabilidades tornam visível como o trabalho acontece e como as áreas se conectam.</p><ul><li>Mapear o cenário atual (AS-IS) e desenhar o cenário futuro (TO-BE).</li><li>Evidenciar passagens entre áreas, esperas e pontos de retrabalho.</li><li>Alinhar equipes e preparar processos para melhoria e automação.</li></ul><div className="methodology-example"><b>NA PRÁTICA</b><p>Mapear um pedido desde a entrada até a entrega, esclarecendo aprovações, responsáveis e caminhos de exceção.</p></div><a className="source-link" href="https://www.omg.org/bpmn/" target="_blank" rel="noreferrer">Conheça o padrão BPMN na OMG ↗</a></article>
        </div><div className="methodology-bridge"><p><b>Do processo ao posto de trabalho.</b> O BPMN ajuda a enxergar o fluxo. O MTM aprofunda a análise do método nas atividades manuais.</p><a href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre meu processo <span>↗</span></a></div>
      </section>

      <section className="method section" id="metodo">
        <div className="section-head"><div><p className="eyebrow"><span/> NOSSO MÉTODO</p><h2>Melhoria que sai do papel<br/>e chega ao <em>operacional.</em></h2></div><p>Um caminho estruturado para transformar observações em prioridades, padrões de trabalho e indicadores de acompanhamento.</p></div>
        <div className="steps">
          {[['01','DIAGNOSTICAR','Mapeamos o cenário atual com BPMN, VSM e observação direta.','diagnose'],['02','MEDIR','Analisamos tempos, micromovimentos e indicadores com precisão.','measure'],['03','REDESENHAR','Construímos o cenário futuro, eliminando gargalos e desperdícios.','design'],['04','IMPLEMENTAR','Padronizamos, capacitamos a equipe e acompanhamos os ganhos.','implement']].map((s,i)=><article key={s[0]} className={i===1?'active':''}><small>{s[0]}</small><div className="step-icon"><ProcessIcon type={s[3] as 'diagnose'|'measure'|'design'|'implement'}/></div><h3>{s[1]}</h3><p>{s[2]}</p><b>0{i+1}</b></article>)}
        </div>
      </section>

      <section className="sim section" id="simulador">
        <div className="sim-copy"><p className="eyebrow light"><span/> SIMULAÇÃO ILUSTRATIVA</p><h2>Decisões melhores começam por <em>números claros.</em></h2><p>Explore um exemplo didático de comparação entre cenários. Os números são hipotéticos, não representam resultados de clientes nem uma previsão para sua empresa. Cada oportunidade exige um diagnóstico do processo real.</p><div className="scenario-toggle"><button type="button" onClick={()=>setMode('atual')} className={!optimized?'selected':''} aria-pressed={!optimized}>Cenário atual</button><button type="button" onClick={()=>setMode('otimizado')} className={optimized?'selected':''} aria-pressed={optimized}>Cenário otimizado</button></div><label>Nível de intervenção <b>{['','Essencial','Balanceado','Avançado','Máximo'][speed]}</b><input aria-label="Nível de intervenção" type="range" min="1" max="4" value={speed} onChange={e=>setSpeed(+e.target.value)}/></label></div>
        <div className="numbers-panel">
          <div className="numbers-head"><div><span>PROJEÇÃO OPERACIONAL</span><strong>{optimized?'TO-BE · PROCESSO OTIMIZADO':'AS-IS · CENÁRIO ATUAL'}</strong></div><small>BASE: TURNO DE 7H30</small></div>
          <div className="kpi-grid"><article><small>CAPACIDADE</small><strong>{output}</strong><span>peças por hora</span><i>{optimized?`↑ +${capacityGain}% potencial`:'linha de base'}</i></article><article><small>EFICIÊNCIA</small><strong>{efficiency}%</strong><span>aproveitamento</span><i>{optimized?`↑ +${optimizedEfficiency - currentEfficiency} p.p.`:'referência atual'}</i></article><article><small>TEMPO DE CICLO</small><strong>{cycle}s</strong><span>por unidade</span><i>{optimized?'↓ menor ciclo':'ciclo estimado'}</i></article><article><small>CAPACIDADE / TURNO</small><strong>{shift.toLocaleString('pt-BR')}</strong><span>unidades projetadas</span><i>{optimized?'↑ cenário ilustrativo':'produção estimada'}</i></article></div>
          <div className="comparison"><div><span>Atual</span><b style={{width:`${(currentOutput / optimizedOutput) * 100}%`}}/></div><div className="optimized-bar"><span>Otimizado</span><b style={{width:'100%'}}/></div><small>Capacidade estimada · {currentOutput} a {optimizedOutput} peças por hora</small></div>
          <div className="result-note"><b>Leitura do cenário</b><p>{optimized?'O balanceamento reduz o tempo de ciclo e amplia a capacidade sem pressupor aumento proporcional de recursos.':'O cenário atual indica espaço para balanceamento, padronização e eliminação de perdas antes de novos investimentos.'}</p></div>
        </div>
      </section>

      <section className="insights section" id="conteudos" aria-labelledby="conteudos-titulo">
        <div className="insights-intro"><p className="eyebrow"><span/> CONTEÚDOS & PERSPECTIVAS</p><h2 id="conteudos-titulo">Produtividade é uma<br/><em>construção contínua.</em></h2><p>Uma leitura para ampliar a conversa sobre a evolução das operações.</p><div className="editorial-mark" aria-hidden="true"><span>PESSOAS</span><i>+</i><span>PROCESSOS</span><i>+</i><span>TECNOLOGIA</span></div></div>
        <article className="featured-article"><div className="article-meta"><span>LEITURA RECOMENDADA</span><span>ARTIGO DE OPINIÃO</span></div><p className="publication">Gazeta do Povo</p><h3>Produtividade: uma jornada que integra pessoas, processos e tecnologia</h3><p>Jackson Bisi discute como o diagnóstico de gargalos, a participação das equipes e a integração da gestão aos investimentos tecnológicos contribuem para uma evolução consistente da produtividade.</p><div className="article-byline">Por Jackson Bisi <span>•</span> <time dateTime="2026-10-13">13 de outubro de 2026</time></div><a className="button" href="https://www.gazetadopovo.com.br/opiniao/artigos/produtividade-uma-jornada-que-integra-pessoas-processos-e-tecnologia/" target="_blank" rel="noreferrer">Ler artigo na Gazeta do Povo <span>↗</span></a><small>Resumo editorial da UNI. Conteúdo original publicado pela Gazeta do Povo.</small></article>
      </section>

      <section className="about section" id="sobre"><div><p className="eyebrow light"><span/> SOBRE A UNI</p><h2>Engenharia, estratégia<br/>e <em>respeito às pessoas.</em></h2><p>A UNI Smart Outsourcing Solutions é liderada pelo Eng.º Ivan Carlos Antoneli, especialista em Engenharia de Produção, Lean Six Sigma, Logística, Supply Chain, Economia e Finanças.</p><p>Melhoramos processos preservando o que sustenta qualquer resultado: segurança, ética, transparência e valorização das equipes.</p></div><div className="values"><article><strong>01</strong><h3>Comprometimento</h3><p>Acompanhamento do diagnóstico à consolidação dos resultados.</p></article><article><strong>02</strong><h3>Ética e integridade</h3><p>Confidencialidade, respeito às normas e relações transparentes.</p></article><article><strong>03</strong><h3>Resultado sustentável</h3><p>Ganhos reais sem transferir riscos para pessoas ou processos.</p></article></div></section>

      <section className="city section" id="sao-carlos">
        <div className="city-intro"><p className="eyebrow light"><span/> SEDE DA UNI</p><h2>São Carlos: engenharia, ciência e indústria no mesmo <em>ecossistema.</em></h2><p>A UNI está sediada em São Carlos, ambiente estratégico para projetos que exigem conexão entre conhecimento acadêmico, tecnologia aplicada e execução industrial.</p><a href="https://saocarlos.usp.br/a-cidade-de-sao-carlos/" target="_blank" rel="noreferrer">Conheça o ecossistema tecnológico ↗</a></div>
        <div className="city-grid"><article><strong>UFSCar</strong><h3>Formação e pesquisa</h3><p>O primeiro campus da Universidade Federal de São Carlos reúne ensino, pesquisa e extensão em engenharia, ciências, saúde e humanidades.</p><a href="https://www.ufscar.br/a-ufscar/campus-sao-carlos" target="_blank" rel="noreferrer">Conheça o campus da UFSCar</a></article><article><strong>Embrapa</strong><h3>Tecnologia agropecuária</h3><p>São Carlos abriga a Embrapa Instrumentação, com pesquisas em sensores e automação, e a Embrapa Pecuária Sudeste, voltada à produção animal sustentável.</p><a href="https://www.embrapa.br/pt/embrapa-no-brasil" target="_blank" rel="noreferrer">Conheça as unidades da Embrapa</a></article><article><strong>1:100</strong><h3>Densidade científica</h3><p>A USP São Carlos registra que ao menos um em cada 100 habitantes possui doutorado, reforçando a densidade intelectual local.</p><a href="https://saocarlos.usp.br/a-cada-100-habitantes-de-sao-carlos-pelo-menos-um-tem-doutorado/" target="_blank" rel="noreferrer">Fonte: USP</a></article><article><strong>5</strong><h3>Unidades USP</h3><p>O campus reúne cinco unidades de ensino e pesquisa com excelência em ciências exatas, tecnológicas e sociais aplicadas.</p><a href="https://saocarlos.usp.br/escola-institutos-e-orgaos/" target="_blank" rel="noreferrer">Fonte: USP</a></article><article><strong>95 mil m²</strong><h3>Referência aeronáutica</h3><p>O LATAM MRO local possui sete hangares e 22 oficinas e é apresentado pela companhia como o maior centro de manutenção aeronáutica da América do Sul.</p><a href="https://www.latamairlines.com/br/pt/imprensa/noticias/vagas-abertas--escola-latam-de-mecanicos-em-sao-carlos-abre-sua-" target="_blank" rel="noreferrer">Fonte: LATAM</a></article><article><strong>ONOVOLAB</strong><h3>Inovação conectada</h3><p>Um hub que conecta startups, empresas e universidades, aproximando pesquisa, talentos e desafios reais de mercado.</p><a href="https://onovolab.com/" target="_blank" rel="noreferrer">Fonte: ONOVOLAB</a></article></div>
      </section>

      <section className="integrity section" id="integridade" aria-labelledby="integridade-titulo">
        <div className="integrity-copy">
          <p className="eyebrow"><span/> INTEGRIDADE</p>
          <h2 id="integridade-titulo">Código de Conduta</h2>
          <p>Conheça os princípios que orientam as decisões da UNI e suas relações com colaboradores, clientes e parceiros.</p>
        </div>
        <div className="integrity-document">
          <svg className="document-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
            <path d="M14 2v6h6M8 13h8m-8 4h8"/>
          </svg>
          <div className="document-meta">
            <strong>Código de Conduta da UNI</strong>
            <small>Edição 2026–2027 · PDF</small>
          </div>
          <a className="button" href={codeOfConduct}>Abrir PDF <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact section" id="contato"><div className="contact-copy"><p className="eyebrow"><span/> FALE COM A UNI</p><h2>Descreva o seu <em>desafio operacional.</em></h2><p>Compartilhe o processo, o gargalo ou o indicador que precisa evoluir. A mensagem será preparada para envio direto a <b>ivan.antoneli@unismartsolution.com.br</b>.</p></div><form onSubmit={sendEmail}><div><label>Nome<input name="nome" required placeholder="Seu nome"/></label><label>Empresa<input name="empresa" required placeholder="Nome da empresa"/></label></div><label>E-mail<input name="email" type="email" required placeholder="voce@empresa.com.br"/></label><label>Mensagem<textarea name="mensagem" required rows={5} placeholder="Conte brevemente o cenário, o processo e o resultado esperado."/></label><button className="button" type="submit">Preparar mensagem <span>→</span></button></form></section>

      <section className="cta cta-image"><div className="cta-content"><p className="eyebrow light"><span/> PRÓXIMO PASSO</p><h2>Seu processo pode produzir mais.<br/><em>Vamos descobrir quanto?</em></h2><p>Converse diretamente com a UNI e solicite uma análise inicial.</p><a className="button white" href={whatsapp} target="_blank" rel="noreferrer">Chamar no WhatsApp <span>↗</span></a></div></section>
      <footer><a href="#inicio" className="brand brand-image footer-logo"><img src="./assets/uni-logo-3d.jpg" alt="UNI Smart Outsourcing Solutions" /></a><p>Melhoria contínua com inteligência, método e respeito.</p><div><a href="mailto:ivan.antoneli@unismartsolution.com.br">ivan.antoneli@unismartsolution.com.br</a><a href={whatsapp} target="_blank" rel="noreferrer">(16) 99737-5936</a><a href={codeOfConduct}>Código de Conduta (PDF)</a><span>© 2026 UNI Smart Outsourcing Solutions</span></div></footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a UNI no WhatsApp">✆</a>
    </main>
  );
}
