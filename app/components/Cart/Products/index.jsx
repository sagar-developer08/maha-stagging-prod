import React from "react";
import { Col, Row } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./styles.scss";
import { useRouter } from "next/navigation";
import useCart from "../../../Hook/useCart";

const Index = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const router = useRouter();
  const { clearItemsCart, removeItemsCart } = useCart();

  return (
    <div className="ProductsPge939d9">
      <div className="ProudctsWrapper">
        <div className="sec-title bdr-btm pb-3 pt-1">Order Summary</div>
        {cartItems?.map((item, i) => (
          <Row className="mt-3 bdr-btm pt-3 pb-3" key={i}>
            <Col lg="4">
              <div className="product-item">
                <div
                  className="btn-remove"
                  accordion
                  onClick={() => {
                    removeItemsCart(item?.id);
                  }}
                >
                  <MdCancel size={25} />
                </div>
                <div className="product-img">
                  <img src={item?.thumb} alt="" />
                </div>
              </div>
            </Col>
            <Col lg="8">
              <div className="product-details">
                <div className="cat-name">{item?.category}</div>
                <div className="prod-name">{item?.name}</div>
                <div className="price">{item?.price}</div>
                <div className="QtyWrapper">
                  <div className="qty-icon">
                    <FaMinus size={16} />
                  </div>
                  1
                  <div className="qty-icon">
                    <FaPlus size={16} />
                  </div>
                </div>
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
          <button
            className="btnNl btnNl-primary"
            onClick={() => {
              clearItemsCart();
            }}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
