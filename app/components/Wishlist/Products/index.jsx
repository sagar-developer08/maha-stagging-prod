import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./styles.scss";
import { useRouter } from "next/navigation";

const Index = () => {
  const cartItems = useSelector((state) => state.cart.products);

  const router = useRouter();

  return (
    <div className="wishlistProducts">
      <div className="ProudctsWrapper">
        <div className="sec-title bdr-btm pb-3 pt-1">Wishlist Summary</div>
        {cartItems?.map((item, i) => (
          <Row className="mt-3 bdr-btm pt-3 pb-3" key={i}>
            <Col lg="4">
              <div className="product-item">
                <div className="btn-remove">
                  <MdCancel size={25} />
                </div>
                <div className="product-img">
                  <img src={item?.thumb} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="4">
              <div className="product-details">
                <div className="cat-name">{item?.category}</div>
                <div className="prod-name">{item?.name}</div>
                <div className="price">{item?.price}</div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="w-100 h-100 d-flex justify-content-start align-items-center">
                <button
                  className="btnNl btnNl-primary"
                  onClick={() => {
                    toast.success("Wow so easy !");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </Col>
          </Row>
        ))}
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btnNl btnNl-secondary"
            onClick={() => {
              router.push(`/${lang}/merchandise`);
            }}
          >
            Continue Shopping
          </button>
          <button className="btnNl btnNl-primary">Clear Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
