import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchPackagesData } from "../../api/commonApi";
import PackagCard from "./Card/Card";
import "./styles.scss";
import { useSearchParams } from "next/navigation";
function Index() {
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState({});

  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };

    fetchPackageListData();
  }, []);
  const searchParams = useSearchParams();
  const compare1Query = searchParams.get("compare1");
  const compare2Query = searchParams.get("compare2");

  useEffect(() => {
    if (!compare1Query) {
      return;
    }
    setSelectedPackage((prev) => ({
      ...prev,
      campare1: parseInt(compare1Query),
    }));
  }, [compare1Query]);

  useEffect(() => {
    if (!compare2Query) {
      return;
    }
    if (compare1Query == compare2Query) {
      return;
    }

    setSelectedPackage((prev) => ({
      ...prev,
      campare2: parseInt(compare2Query),
    }));
  }, [compare2Query]);

  return (
    <div className="comparePackage993 py-60">
      <Container>
        <Row>
          <Col xs={6}>
            <div>
              <label htmlFor="">Campare to:</label>
              <select
                className="selectOption"
                name="campare1"
                id=""
                onChange={(e) =>
                  setSelectedPackage((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={selectedPackage?.campare1}
              >
                <option value="" disabled selected>
                  Package to Compare
                </option>
                {packagesData?.map((item, i) => (
                  <option
                    value={item?.id}
                    disabled={
                      selectedPackage?.campare2 == item?.id ? true : false
                    }
                    key={i}
                  >
                    {item?.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3">
              {packagesData
                ?.filter((item) => item?.id == selectedPackage?.campare1)
                ?.map((item) => (
                  <PackagCard {...item} key={item?.id} packageVal={item} />
                ))}
            </div>
          </Col>
          <Col xs={6}>
            <div>
              <label htmlFor="">Campare with:</label>

              <select
                className="selectOption"
                name="campare2"
                id=""
                onChange={(e) =>
                  setSelectedPackage((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                value={selectedPackage?.campare2}
              >
                <option value="" disabled selected>
                  Package to Compare with
                </option>
                {packagesData?.map((item, i) => (
                  <option
                    value={item?.id}
                    disabled={
                      selectedPackage?.campare1 == item?.id ? true : false
                    }
                    key={i}
                  >
                    {item?.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-3">
              {packagesData
                ?.filter((item) => item?.id == selectedPackage?.campare2)
                ?.map((item) => (
                  <PackagCard {...item} key={item?.id} packageVal={item} />
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Index;
