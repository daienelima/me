import React, { Component } from 'react';
import git from '../api/git';
import '../styles/Projects.css'; 

export default class Projects extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    try {
      git.get("users/daienelima/repos").then((response) => {
        this.setState({ projects: response.data });
      });
    } catch (error) {
      console.error("Erro ao buscar projetos: ", error);
    }
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        <section className="colorlib-work" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projetos</span>
                <h2 className="colorlib-heading">Alguns dos meus trabalhos</h2>
              </div>
            </div>
            <div className="row">
              {projects.slice(0, 6).map((project) => (
                <div className="col-md-4 animate-box" key={project.id} data-animate-effect="fadeInLeft">
                  <div className="project-card minimal">
                    <h3>{project.name}</h3>
                    <p>{project.description || 'Sem descrição disponível.'}</p>
                    <div className="project-meta">
                      {project.language && <span>{project.language}</span>}
                      {project.stargazers_count > 0 && <span>⭐ {project.stargazers_count}</span>}
                    </div>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
