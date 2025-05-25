import React, { Component } from 'react';
import git from '../api/git';
import '../styles/Projects.css';
import { FaGithub, FaStar } from 'react-icons/fa';

export default class Projects extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    this.getProjects();
  }

  getProjects() {
    git.get("users/daienelima/repos")
      .then((response) => {
        const sorted = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
        this.setState({ projects: sorted });
      })
      .catch((error) => {
        console.error("Erro ao buscar projetos: ", error);
      });
  }

  getThumbnail(project) {
    const customThumbnails = {
      'Apirest': 'https://via.placeholder.com/400x200?text=API+REST',
      'Produtos-front': 'https://via.placeholder.com/400x200?text=Frontend',
    };

    const languageThumbnails = {
      Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    };

    if (customThumbnails[project.name]) return customThumbnails[project.name];
    if (languageThumbnails[project.language]) return languageThumbnails[project.language];
    if (project.owner && project.owner.avatar_url) return project.owner.avatar_url;

    return 'https://via.placeholder.com/400x200?text=Projeto';
  }

  render() {
    const { projects } = this.state;

    return (
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
                  <img
                    src={this.getThumbnail(project)}
                    alt={`Imagem de capa do projeto ${project.name}`}
                    className="project-thumb"
                    style={{
                      maxHeight: '160px',
                      width: '100%',
                      objectFit: 'contain',
                      padding: '8px',
                      borderBottom: '1px solid #eee',
                      backgroundColor: '#fff'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x200?text=Projeto';
                    }}
                  />

                  <div className="project-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                    <h3 style={{ fontSize: '18px', margin: 0 }}>{project.name}</h3>
                    {project.language && (
                      <span className="tag" title="Linguagem principal">{project.language}</span>
                    )}
                  </div>

                  <p style={{ fontSize: '14px', marginTop: '8px' }}>
                    {project.description
                      ? project.description.length > 100
                        ? `${project.description.slice(0, 100)}...`
                        : project.description
                      : 'Sem descrição disponível.'}
                  </p>

                  <div className="project-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                    {project.stargazers_count > 0 && (
                      <span title="Número de estrelas" style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}>
                        <FaStar style={{ marginRight: '4px', color: '#fbc02d' }} /> {project.stargazers_count}
                      </span>
                    )}
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Abrir no GitHub"
                      style={{ fontSize: '14px', display: 'flex', alignItems: 'center' }}
                    >
                      <FaGithub style={{ marginRight: '5px' }} />
                      Ver no GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
