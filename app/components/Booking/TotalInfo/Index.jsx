import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.scss";
function Index(props) {
  const { totalResp, checkOutAmont, pickUpData } = props;
  return (
    <div className="finalInfo00dk3">
      <div className="sec-title mt-3">Booking Details</div>
      <Row className="totalInfo">
        <Col md={12}>
          <Row className="gy-3">
            <Col xs={12} md={4}>
              <div className="infoD">
                <div className="title">Total Passengers:</div>
                <p className="para">{totalResp?.passengers?.length}</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="infoD">
                <div className="title">Total Amount:</div>
                <p className="para">AED {checkOutAmont} </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="infoD mt-5">
                <div className="title">Pickup Details</div>
              </div>
            </Col>
          </Row>
          <Row className="g-3 mt-2">
            <Col md={4}>
              <div className="infoD">
                <div className="title">House No:</div>
                <p className="para">{totalResp?.pickup?.house_no}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="infoD">
                <div className="title">Area :</div>
                <p className="para">{totalResp?.pickup?.area}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="infoD">
                <div className="title">City :</div>
                <p className="para">{totalResp?.pickup?.city}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="infoD">
                <div className="title">Address :</div>
                <p className="para">{totalResp?.pickup?.address}</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="infoD">
                <div className="title">Country :</div>
                <p className="para">{totalResp?.pickup?.country}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
