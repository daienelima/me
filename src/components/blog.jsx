import React, { Component } from 'react'
import mediumApi from '../api/blog';

export default class Blog extends Component {
	
	state = {
    artigosMedium: [],
  }

  componentDidMount(){
    this.getArtigosMedium();
  }
	getArtigosMedium(){
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
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div>
						{blogs.map(blog =>(
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
							<div className="blog-entry">
								<a href={blog.link} target="_blank" className="blog-img">
									<img src={blog.thumbnail}/>
								</a>
								<div className="desc">
									<span><small> {blog.pubDate}</small> </span>
									<h3><a href={blog.link} target="_blank" >{blog.title}</a></h3>
									{/* conteudo */}
									<p></p>
								</div>
							</div>
							</div>
						))}
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					{/* <div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
							<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
						</div>
					</div> */}
					</div>
				</div>
				{/* <div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div> */}
			</div>
			</section>
      </div>
    )
  }
}
