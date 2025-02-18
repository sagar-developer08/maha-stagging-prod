import React, { useState } from "react";
import ProductSlider from "../ProductSlider/Index";
import { Col, Container, Row } from "react-bootstrap";

import { IoIosArrowForward } from "react-icons/io";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import ReactStars from "react-rating-stars-component";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa6";
import useCart from "../Hook/useCart";

import "./styles.scss";

const prod1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod1.jpg";
const prod2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod2.jpg";
const prod3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod3.jpg";
const prod4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod4.jpg";

function Index() {
  const [selected, setSelected] = useState(false);
  const [qty, setQty] = useState(1);

  const { addItemstoCart } = useCart();

  return (
    <div className="productDetailsk39dsk py-60">
      <Container>
        <div className="breadCrumb32 w-100">
          <div className="breadItem">
            Merchandise <IoIosArrowForward className="BreakIcon" size={16} />
          </div>
          <div className="breadItem active">T-shirt</div>
        </div>
        <Row>
          <Col lg={6}>
            <ProductSlider sliderData={[prod1, prod2, prod3, prod4]} />
          </Col>
          <Col lg={6}>
            <div className="detailsProduct">
              <div className="name mb-2">T-Shirt</div>
              <div className="price">100 Aed</div>

              <div className="reviews">
                <p className="rating">
                  <ReactStars
                    count={5}
                    edit={false}
                    size={24}
                    isHalf={true}
                    value={4.5}
                    emptyIcon={<AiFillStar />}
                    halfIcon={<AiOutlineStar />}
                    fullIcon={<AiFillStar />}
                    activeColor="#000"
                    color="#e4e2e2"
                  />
                </p>
                <p className="reviewInfo">(4.5 stars) </p>
                <p className="reviewInfo">• 10 reviews</p>
              </div>

              <div className="details">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </div>

              <div className="category">
                <div className="category-name">Color</div>
                <div className="category-type">
                  <button
                    onClick={() => setSelected(true)}
                    className={`btnNl  ${
                      selected ? "btnNl-cate-pri" : "btnNl-cate-sec"
                    } pdkd`}
                  >
                    White
                  </button>
                  <button
                    onClick={() => setSelected(false)}
                    className={`btnNl ${
                      selected ? "btnNl-cate-sec" : "btnNl-cate-pri"
                    } pdkd`}
                  >
                    Black
                  </button>
                </div>
              </div>

              <div className="quantatity">
                <div className="qty">Quantatity</div>
                <div className="QtyWrapper">
                  <div
                    onClick={() => {
                      if (qty == 1) {
                        return;
                      }
                      setQty(qty - 1);
                    }}
                  >
                    <FaMinus size={16} />
                  </div>
                  {qty}
                  <div
                    onClick={() => {
                      setQty(qty + 1);
                    }}
                  >
                    <FaPlus size={16} />
                  </div>
                </div>
              </div>

              <div className="addtocarts w-100">
                <button
                  className="btnNl btnNl-primary w-100 mb-3 pdDdsd"
                  // onClick={() => addItemstoCart()}
                >
                  Add To Cart
                </button>
                <button className="btnNl btnNl-secondary w-100 pdDdsd">
                  Buy Now
                </button>
              </div>
              <p className="tagShipText mt-3 text-center">
                Free shipping over 500 Aed
              </p>
            </div>
          </Col>
        </Row>
        <div className="MoreDetails">
          <Tabs
            defaultActiveKey="description"
            id="fill-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere.
            </Tab>
            <Tab eventKey="reviews" title="Reviews">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros elementum tristique. Duis cursus, mi quis
              viverra ornare, eros dolor interdum nulla, ut commodo diam libero
              vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
              imperdiet. Nunc ut sem vitae risus tristique posuere.
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  );
}

export default Index;
