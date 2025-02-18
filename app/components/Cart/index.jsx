import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Products from "./Products/index";
import SubTotal from "./SubTotal/index";
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import "./styles.scss";

const Index = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const searchParams = useSearchParams();
  const checkoutStatus = searchParams.get("checkout");
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <div className="cartPage393 py-60">
      <Container>
        {cartItems?.length ? (
          <Row className="gx-lg-5">
            <Col md="8" lg="8">
              <Products />
            </Col>
            <Col className="h-100 position-relative" md="4" lg="4">
              <SubTotal />
            </Col>
          </Row>
        ) : checkoutStatus == "success" ? (
          <>
            <div className="w-100 d-flex justify-content-center align-items-center flex-column">
              <FaCheck className="cartBt" size={220} />
              <div className="sec-title mb-3">Booking Successful</div>
              <button
                className="btnNl btnNl-secondary btnLk"
                onClick={() => {
                  router.push(`/${lang}`);
                }}
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <div className="w-100 d-flex justify-content-center align-items-center flex-column">
            <IoMdCart className="cartBt" size={220} />
            <div className="sec-title mb-3">Your cart is currently empty.!</div>
            <button
              className="btnNl btnNl-secondary btnLk"
              onClick={() => {
                router.push(`/${lang}`);
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Index;
