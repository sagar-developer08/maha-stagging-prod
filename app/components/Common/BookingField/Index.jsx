import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setBooking, setPackage, setPackageId } from "../../../store/booking";
import useSize from "../../../utils/useSize";
import { IoCloseCircleSharp } from "react-icons/io5";
import DatePicker from "react-date-picker";
import CalenderCom from "./Calender/index";
import { fetchPackagesData } from "../../../api/commonApi";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import "./styles.scss";

const calender =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/calender.png";
const clock = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/clock.png";
const ticket = "https://d3gelo9cifr8ed.cloudfront.net/assets/icons/ticket.png";

function Index() {
  const [packagesSelectModal, setPackagesSelectModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { width } = useSize();
  const dispatch = useDispatch();

  const [openDatePicker, setOpenDatePicker] = useState(false);
  const wrapperRef = useRef(null);

  const [value, setValue] = useState(new Date());

  const [guestsAmont, setGuestsAmont] = useState({ adult: "1", child: "0" });

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
  let today = new Date();
  let Range1 = today;
  let Range2 = new Date(today);
  Range2.setDate(today.getDate() + 1);

  const searchParams = useSearchParams();

  const handleBookingUpdate = async () => {
    const selectedPackageData = await packagesData?.filter(
      (item) => item?.id == selectedPackage
    )[0];

    const dateValue = moment(value).format("YYYY-MM-DD");

    if (!dateValue) {
      toast.info("Please Select a Booking Date");
      return;
    }
    if (!selectedPackageData) {
      toast.info("Please Select a Valid Package");
      return;
    }
    if (!guestsAmont?.adult) {
      toast.info("Please Enter Guests");
      return;
    }
    // let today = new Date().getTime();
    // if (new Date(value)?.getTime() < today) {
    //   toast.error("Date Passed cant be Booked",{
    //     toastId: "bookingSameDate3",
    //   });
    //   return;
    // }

    dispatch(setPackageId(selectedPackageData?.id));
    dispatch(setPackage(selectedPackageData));
    // Use router to update URL parameters
    const queryParams = new URLSearchParams({
      booking_date: dateValue,
      adults: guestsAmont?.adult,
      child: guestsAmont?.child,
    }).toString();

    router.push(`?${queryParams}`, { scroll: false });
    // setSearchParams({
    //   booking_date: dateValue,
    //   adults: guestsAmont?.adult,
    //   child: guestsAmont?.child,
    // });
  };

  useEffect(() => {
    if (width > 580) {
      setIsSearch(true);
    } else {
      setIsSearch(false);
    }
  }, [width]);

  return (
    <>
      {isSearch ? null : (
        <button
          className="serachBtn32d"
          onClick={() => {
            setIsSearch(true);
          }}
        >
          {" "}
          <FiSearch size={16} />
          Search
        </button>
      )}
      {isSearch ? (
        <>
          <div className="bookingFieldk321">
            <div
              className="CloseIon"
              onClick={() => {
                setIsSearch(false);
              }}
            >
              <IoCloseCircleSharp className="CloseIocnd" size={30} />
            </div>
            <div className="itemBox">
              <div className="Icons">
                <img src={calender} alt="dates" />
              </div>
              <div className="details" ref={wrapperRef}>
                <div className="field">Date</div>
                {openDatePicker ? (
                  <div className="dateNoewdk">
                    <CalenderCom
                      setOpenDatePicker={setOpenDatePicker}
                      wrapperRef={wrapperRef}
                      value={value}
                      setValue={setValue}
                    />
                  </div>
                ) : null}
                <div
                  className="value"
                  onClick={() => setOpenDatePicker(!openDatePicker)}
                >
                  {moment(Range1).format("MMMM DD")}
                </div>
              </div>
            </div>
            <div className="itemBox">
              <div className="Icons">
                <img src={clock} alt="packages" />
              </div>
              <div className="details">
                <div className="field">Package Type</div>
                <div className="value">
                  <select
                    className="PackagesSelect"
                    name="Package"
                    id=""
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    defaultValue={selectedPackage}
                  >
                    <option value="" disabled selected>
                      Select a Package
                    </option>
                    {packagesData?.map((item, i) => (
                      <option value={item?.id} key={i}>
                        {item?.title}
                      </option>
                    ))}
                  </select>
                  {/* {selectedPackage ? selectedPackage : "Premium ~ Romantic"} */}
                </div>
              </div>
            </div>
            <div className="itemBox">
              <div className="Icons">
                <img src={ticket} alt="dates" />
              </div>
              <div className="details">
                <div className="field">Guests</div>
                <div className="value">
                  Adult{" "}
                  <input
                    tooltip={"Adult"}
                    className="guest_amt"
                    type="number"
                    name="adult"
                    value={guestsAmont?.adult}
                    onChange={(e) => {
                      if (e.target.value < 0) {
                        return;
                      }
                      if (e.target.value > 7) {
                        return;
                      }
                      setGuestsAmont((prev) => ({
                        ...prev,
                        adult: e.target.value,
                      }));
                    }}
                  />{" "}
                  ~ Child{" "}
                  <input
                    className="guest_amt"
                    type="number"
                    name="child"
                    value={guestsAmont?.child}
                    onChange={(e) => {
                      if (e.target.value < 0) {
                        return;
                      }
                      if (e.target.value > 7) {
                        return;
                      }
                      setGuestsAmont((prev) => ({
                        ...prev,
                        child: e.target.value,
                      }));
                    }}
                  />
                  {/* <input
                    tooltip={"Adult"}
                    className="guest_amt"
                    type="number"
                    name="adult"
                    value={guestsAmont?.adult}
                    onChange={(e) =>
                      setGuestsAmont((prev) => ({
                        ...prev,
                        [e.target.value]: e.target.value,
                      }))
                    }
                  />{" "}
                  ~{" "}
                  <input
                    className="guest_amt"
                    type="number"
                    name="child"
                    value={guestsAmont?.child}
                    onChange={(e) =>
                      setGuestsAmont((prev) => ({
                        ...prev,
                        [e.target.value]: e.target.value,
                      }))
                    }
                  /> */}
                </div>
              </div>
            </div>
            <div
              className="searchIcon"
              onClick={() => {
                handleBookingUpdate();
                // if (!selectedPackage) {
                //   toast.info("Please Select a Package to Start Booking");
                //   return;
                // }
                // if (selectedPackage) {
                //   dispatch(setBooking(true));
                //   return;
                // }
                // dispatch(setBooking(true));
              }}
            >
              <FiSearch size={24} />
            </div>
            <button
              className="serachBtn"
              onClick={() => {
                handleBookingUpdate();
              }}
            >
              {" "}
              <FiSearch size={16} />
              Search
            </button>
            {/* Modal */}

            {/* Packages Update */}
            <Modal
              show={packagesSelectModal}
              onHide={() => setPackagesSelectModal(false)}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Body>
                <Row className="gy-3">
                  <Col xs={12}>
                    <div className="sec-title">Select a Package</div>
                  </Col>
                  <Col xs={12}>
                    <div className="form_group">
                      {/* <label htmlFor="name">Country</label> */}
                      <select
                        className="selectOption"
                        name="Package"
                        id=""
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        defaultValue={selectedPackage}
                      >
                        <option value="" disabled selected>
                          Select a Packages
                        </option>
                        <option value="MAHA CLASSIC PACKAGE">
                          MAHA CLASSIC PACKAGE
                        </option>
                        <option value="MAHA MAJESTIC PACKAGE">
                          MAHA MAJESTIC PACKAGE
                        </option>
                        <option value="MAHA ROYAL PACKAGE">
                          MAHA ROYAL PACKAGE
                        </option>
                        <option value="MAHA TWILIGHT OVERNIGHT">
                          MAHA TWILIGHT OVERNIGHT
                        </option>
                        <option value="CELESTIAL PRIVATE ROMANCE">
                          CELESTIAL PRIVATE ROMANCE
                        </option>
                        <option value="GROUP BOOKING">GROUP BOOKING</option>
                        <option value="CORPORATE EVENT">CORPORATE EVENT</option>
                        <option value="CELEBRATORY OCCASIONS">
                          CELEBRATORY OCCASIONS
                        </option>
                      </select>
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button
                      className="btnNl btnNl-primary"
                      onClick={() => {
                        if (!selectedPackage) {
                          toast.info(
                            "Please Select a Package to Start Booking"
                          );
                          return;
                        }
                        if (selectedPackage) {
                          dispatch(setBooking(true));
                          setPackagesSelectModal(false);
                          return;
                        }
                      }}
                    >
                      Book Now
                    </button>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Index;
