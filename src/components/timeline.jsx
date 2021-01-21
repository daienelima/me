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
                      <div className="timeline-icon color-1">
                        <i> <img src={pc} /></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Banco Inter <span>2021-present</span></h2>
                        <p>
                          
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
                        <h2>everis | Software Development Engineer <span>2020-2021</span></h2>
                        <p>
                          Consultoria no cliente Itaú Unibanco com a implantação da cultura DevOps
                          Com vivencia na aplicação de metodologias ágeis,
                          Desenvolvimento ágil de aplicações monolíticas e microsserviços com Java(Spring Boot, Micronaut),
                          Angular 7+, PostgreSQL e Cassandra. Utilização de ferramentas de DevOps como Gitlab, Jenkins, Puppet, Docker, Kubernets, Openshift, Artifactory, SonarQube e Jira.
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
                          Consultoria no Secretaria da Fazenda de Pernambuco (SEFAZ-PE)
                          Desenvolvimento de soluções e adequação de soluções existentes relacionadas a serviços financeiros e fiscais,
                          utilizando tecnologia java.
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
                        <p> Utilizando metodologias ágeis, analisando e desenvolvendo soluções,
                            usando Spring Boot, Angular e bootstrap. Sempre implementando testes de unidade, integração e sistema. Usando jUnit, DBunit e HSQLdb.
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
