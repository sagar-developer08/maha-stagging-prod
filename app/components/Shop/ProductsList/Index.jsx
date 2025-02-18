import React, { useRef, useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoFilterSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoMdCloseCircle } from "react-icons/io";
import ProductListingCard from "../../Common/ProductListingCard/Index";
import { usePathname } from "next/navigation";
import useOutsideAlerter from "../Hook/useOutsideAlerter";
import "./styles.scss";

const prod1 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod1.jpg";
const prod2 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod2.jpg";
const prod3 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod3.jpg";
const prod4 = "https://d3gelo9cifr8ed.cloudfront.net/assets/Products/prod4.jpg";

/**
 */

const Index = () => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  const [showFilter, setShowFilter] = useState(false);
  let cardData = [
    {
      id: 1,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black",
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black",
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White",
    },
    {
      id: 4,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White",
    },

    {
      id: 5,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White",
    },

    {
      id: 6,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black",
    },

    {
      id: 7,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black",
    },
    {
      id: 8,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White",
    },
    {
      id: 1,
      thumb: prod1,
      name: "T-shirt",
      price: "100Aed",
      category: "White | Black",
    },
    {
      id: 2,
      thumb: prod2,
      name: "Water Bottle",
      price: "100Aed",
      category: "Black",
    },
    {
      id: 3,
      thumb: prod3,
      name: "Keychain",
      price: "100Aed",
      category: "White",
    },
    {
      id: 4,
      thumb: prod4,
      name: "Cup",
      price: "100Aed",
      category: "White",
    },
  ];

  const wrapperRef = useRef(null);
  // useEffect(() => {
  //   useOutsideAlerter(wrapperRef, setShowFilter);
  // }, [wrapperRef]);
  useOutsideAlerter(wrapperRef, setShowFilter);

  return (
    <div className="ProductList3939Kdk3 py-60">
      <Container>
        <div className="tag-line mb-3">Products</div>
        <div className="main-title mb-3">
          Hot Air Balloon Merchandise in Dubai
        </div>
        <div className="sortFilter">
          {/* filter */}
          <div className="filters" ref={wrapperRef}>
            <button
              className="btnNl btnNl-secondary"
              onClick={() => {
                setShowFilter(!showFilter);
              }}
            >
              <IoFilterSharp className="iconsSI" size={20} />
              Filter
            </button>
            {/* filter options */}
            <div
              className={
                lang == "ar"
                  ? `${
                      showFilter
                        ? "filtersListAr filterListActiveAr"
                        : "filtersListAr"
                    }`
                  : ` ${
                      showFilter
                        ? "filtersList filterListActive"
                        : "filtersList"
                    }  `
              }
            >
              <div className="CloseGBar mb-3">
                <div className="filterTitle">Filters</div>
                <div
                  onClick={() => {
                    setShowFilter(false);
                  }}
                >
                  <IoMdCloseCircle className="Closefilter" size={25} />
                </div>
              </div>

              <div className="filtersItems">
                <Row>
                  <Col xs={12}>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Search"
                        aria-describedby="basic-addon2"
                        className="borddr"
                      />
                      <Button
                        variant="outline-secondary"
                        className={`borddr`}
                        id="button-addon2"
                      >
                        <IoSearch size={20} />
                      </Button>
                    </InputGroup>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          {/* sort */}
          <div className="sortings">
            <select name="sort" id="">
              <option value="" defaultChecked selected disabled>
                Sort by
              </option>
              <option value="">Default</option>
              <option value="">Price Low - High</option>
              <option value="">Price High - Low</option>
              <option value="">Latest</option>
            </select>
          </div>
        </div>
        <div className="listWrapper mt-5">
          <Row className="guCustom">
            {cardData?.map((item, i) => (
              <Col md={6} lg={3} key={"product" + item?.id}>
                <ProductListingCard product={item} key={"listPd" + i} />
              </Col>
            ))}
          </Row>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button className="btnNl btnNl-primary">Load More</button>
        </div>
      </Container>
    </div>
  );
};

export default Index;
