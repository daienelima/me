import React, { Component } from 'react'
import mediumApi from '../api/blog';

export default class Blog extends Component {

	state = {
		artigosMedium: [],
	}

	componentDidMount() {
		this.getArtigosMedium();
	}
	getArtigosMedium() {
		try {
			mediumApi.get("").then((response) => {
				this.setState({ artigosMedium: response.data.items });
			})
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const blogs = this.state.artigosMedium;
		return (
			<div>
				<section className="colorlib-blog" data-section="blog">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Read</span>
								<h2 className="colorlib-heading">Ultimas Publicações</h2>
							</div>
						</div>
						<div className="row">
							<div>
								{blogs.map(blog => (
									<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft" key={blog.guid}>
										<div className="blog-entry">
											<a href={blog.link} target="_blank" className="blog-img" rel="noopener noreferrer">
												<img
													src={blog.thumbnail || extractImageFromDescription(blog.description)}
													alt={blog.title}
													style={{ width: '100%', height: '200px', objectFit: 'cover' }}
												/>
											</a>
											<div className="desc">
												<span><small>{new Date(blog.pubDate).toLocaleDateString()}</small></span>
												<h3><a href={blog.link} target="_blank" rel="noopener noreferrer">{blog.title}</a></h3>
											</div>
										</div>
									</div>
								))}


							</div>

						</div>

					</div>
				</section>
			</div>
		)
	}

}

function extractImageFromDescription(description) {
  const match = description.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : ''; // retorna a URL da imagem ou vazio
}
