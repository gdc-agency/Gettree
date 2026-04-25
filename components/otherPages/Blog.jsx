import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogSidebar from "./BlogSidebar";
import { blogArticles } from "@/data/blogs";
export default function Blog() {
  return (
    <section className="flat-blog-standard">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={47}
              data-mobile={0}
              data-smobile={0}
            />
          </div>
          <div className="col-md-8">
            <div className="post-wrap">
              {blogArticles.map((article) => (
                <article key={article.id} className={`article-${article.id}`}>
                  <div className="image-box">
                    <div className="image">
                      <Image
                        alt="image"
                        src={article.imageSrc}
                        width={770}
                        height={450}
                      />
                    </div>
                    <div className="date-image">
                      <p>{article.date}</p>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="post-content-inner">
                      <ul>
                        <li>
                          <a href="#" className="text-decs">
                            {article.author}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="line text-decs">
                            {article.category}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-decs">
                            {article.comments}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="content-art">
                      {/* Hardcoded link */}
                      <Link
                        href="/blog-detail"
                        className="section-heading-jost-size28"
                      >
                        {article.title}
                      </Link>
                      <p className="desc-content-box text-decs">
                        {article.description}
                      </p>
                      <div className="link-style2">
                        {/* Hardcoded link */}
                        <Link href="/blog-detail" className="read-more">
                          Read More
                          <i className="fas fa-long-arrow-alt-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              {/* end art1*/}
              <div className="themesflat-pagination clearfix">
                <ul>
                  <li>
                    <a href="#" className="page-numbers prev">
                      <span className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-numbers current">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-numbers">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-numbers">
                      3
                    </a>
                  </li>
                  <li>
                    <a className="page-numbers">...</a>
                  </li>
                  <li>
                    <a href="#" className="page-numbers">
                      10
                    </a>
                  </li>
                  <li>
                    <a href="#" className="page-numbers next">
                      <span className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* end pagination*/}
            </div>
            {/* /.post-wrap */}
          </div>
          {/* /.col-md-8 */}
          <div className="col-md-4">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={60}
              data-smobile={60}
            />
            <BlogSidebar />
            {/* /.col-md-4 */}
          </div>
          {/* /.row */}
        </div>
      </div>
      {/* /.container */}
    </section>
  );
}
