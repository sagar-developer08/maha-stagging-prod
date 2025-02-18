import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogCard from "../../Blogs/Card/Card";
import BlogListData from "../../../Db/blogs";
import "./styles.scss";
function Index() {
  return (
    <div className="BlogList3939m py-60">
      <Container>
        <div className="main-title">Latest News & Articles</div>

        <div className="BlogsList">
          <Row className="g-5">
            {BlogListData?.map((item, i) => (
              <Col xs={12} md={6} lg={4} key={"blogsList" + i}>
                <BlogCard {...item} />
              </Col>
            ))}
          </Row>
          {/* <div className="w-100 text-center mt-5">
            <button className="btnNl btnNl-primary">Load More</button>
          </div> */}
        </div>
      </Container>
    </div>
  );
}

export default Index;
