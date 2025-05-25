import React, { Component } from 'react'
import pc from '../images/trabalho.png';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Bradesco <span>2025-present</span></h2>
                        <p>
                          Atuação no desenvolvimento de novas soluções para o setor financeiro, utilizando Java 17 com Spring Boot como principais tecnologias de backend. 
                          Trabalho voltado para arquitetura moderna de microsserviços, com ênfase em desempenho, escalabilidade e segurança. 
                          Utilização da plataforma Microsoft Azure como principal provedor de nuvem, aproveitando serviços como Azure App Services, Azure SQL, 
                          Azure DevOps e Azure Kubernetes Service (AKS) para entrega contínua e implantação em ambientes de produção. Participação em equipes ágeis,
                          com foco em entrega de valor e alta qualidade de software.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                       <h2>Banco Inter | Senior Software Development Engineer <span>2021-2025</span></h2>
                        <p>
                          <strong>Projetos:</strong><br /><br />

                          🔹 <strong>PIX – Sistema Brasileiro de Pagamentos Instantâneos (24/7)</strong><br />
                          Atuação no desenvolvimento e sustentação de um dos principais sistemas de pagamento do país, com alta disponibilidade e performance.<br /><br />

                          <strong>Responsabilidades:</strong><br />
                          • Desenvolvimento de novas funcionalidades<br />
                          • Criação e revisão de especificações técnicas<br />
                          • Manutenção corretiva e evolutiva das aplicações<br />
                          • Monitoramento e observabilidade em produção<br />
                          • Realização de deploys em ambientes produtivos<br />
                          • Revisão de código (code review) em equipe<br /><br />

                          🔹 <strong>Investimentos & Tesouraria – Aplicações de Backoffice</strong><br />
                          Atuação no desenvolvimento de sistemas internos voltados para o suporte das operações da área de investimentos e tesouraria.<br /><br />

                          <strong>Responsabilidades:</strong><br />
                          • Implementação de novas funcionalidades<br />
                          • Criação e análise de especificações técnicas<br />
                          • Manutenção de sistemas legados e novos desenvolvimentos
                        </p>

                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                        <h2>NTT DATA | Mid-level Software Development Engineer <span>2020-2021</span></h2>
                        <p>
                          Atuação como consultor no cliente Itaú Unibanco, contribuindo com a implantação da cultura DevOps e promovendo
                          a automação de processos de desenvolvimento e entrega contínua. 
                          Experiência prática com metodologias ágeis e desenvolvimento ágil de aplicações, 
                          tanto monolíticas quanto baseadas em microsserviços, utilizando Java (Spring Boot, Micronaut),
                          Angular 7+, PostgreSQL e Cassandra. Utilização de ferramentas DevOps como GitLab, Jenkins, Puppet, Docker, 
                          Kubernetes, OpenShift, Artifactory, SonarQube e Jira, garantindo integração contínua, entrega automatizada e alta qualidade de software.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Pitang | Software Development Engineer <span>2019-2020</span></h2>
                        <p>
                          Atuação em projeto de consultoria na Secretaria da Fazenda de Pernambuco (SEFAZ-PE), 
                          com foco no desenvolvimento e adequação de soluções relacionadas a serviços financeiros e fiscais. 
                          Utilização de tecnologias Java para construção e manutenção de sistemas críticos, garantindo conformidade com normas legais 
                          e requisitos técnicos do órgão.
                        </p>
                      </div>
                    </div>

                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Accenture | Software Development Associate <span>2016-2019</span></h2>
                        <p> 
                          Participação ativa no desenvolvimento de soluções utilizando metodologias ágeis (Scrum e Kanban), 
                          com foco em qualidade e entrega contínua. Atuação no backend com Spring Boot e no frontend com Angular e Bootstrap. 
                          Implementação consistente de testes automatizados 
                          — incluindo testes de unidade, integração e sistema — utilizando ferramentas como JUnit, DBUnit e HSQLDB.
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduação <span>2017-2019</span></h2>
                        <p>Me formei em Analise e Desenvolvimento de Sistemas</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
