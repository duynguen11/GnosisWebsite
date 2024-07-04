import React from "react";
import "./Blog.css";
import TradeImg from "./assets/Rectangle 13.png";

function Blog() {
  return (
    <div className="container blog-section">
      <h1 className="title-blog">BLOG</h1>
      <div id="blog" className="row g-5 blog-all mx-5">
        <div className="col-md-4">
          <div className="card mb-4 card-item">
            <img src={TradeImg} width="410" className="card-img-top" alt="Blog Post 1" />
            <div className="card-body">
              <h5 className="card-title">BLOG POST 1</h5>
              <p className="card-text">Content of blog post 1 goes here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 card-item">
            <img src={TradeImg} width="410" className="card-img-top" alt="Blog Post 2" />
            <div className="card-body">
              <h5 className="card-title">BLOG POST 2</h5>
              <p className="card-text">Content of blog post 2 goes here.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 card-item">
            <img src={TradeImg} width="410" className="card-img-top" alt="Blog Post 3" />
            <div className="card-body">
              <h5 className="card-title">BLOG POST 3</h5>
              <p className="card-text">Content of blog post 3 goes here.</p>
            </div>
          </div>
        </div>
      </div>
      <button className="more-button">MORE</button>
    </div>
  );
}

export default Blog;
