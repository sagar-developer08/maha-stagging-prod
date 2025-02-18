import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PhoneInput } from "react-international-phone";
import "./styles.scss";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { CreateEntryBooking, ReferenceBooking } from "../../api/commonApi";
import { BounceLoader } from "react-spinners";

function Index() {
  const { id } = useParams();
  const [BookingFatch, setBookingFatch] = useState(false);
  const [BookingData, setBookingData] = useState({});
  const router = useRouter();

  const FatchRefDetails = async () => {
    try {
      setBookingFatch(true);
      const resp = await ReferenceBooking(id);
      setBookingData(resp?.data);
      setAdultAmount(parseInt(resp?.data?.booking?.slot_adult || 0));
      setChildAmount(parseInt(resp?.data?.booking?.slot_child || 0));
    } catch (err) {
      toast.error("Booking Not Found");
      console.log("🚀 ~ FatchRefDetails ~ err:", err);
    } finally {
      setBookingFatch(false);
    }
  };
  useEffect(() => {
    FatchRefDetails();
  }, [id]);
  const packageval = useSelector((state) => state?.booking?.package);
  const [adultAmount, setAdultAmount] = useState(1);
  const [childAmount, setChildAmount] = useState(0);
  //
  const [passengersAdult, setPassengersAdult] = useState([{}]);
  const [passengersChild, setPassengersChild] = useState([{}]);
  const [fieldsAdults, setFieldsAdults] = useState([{}]);
  const [fieldsChilds, setFieldsChilds] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdultChange = async (e, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][e.target.name] = e.target.value;
    await setPassengersAdult(structuredClone(CurrData));
  };

  const handleAdultPhoneChange = async (value, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][`phone`] = value;
    await setPassengersAdult(structuredClone(CurrData));
  };
  const handleChildChange = async (e, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][e.target.name] = e.target.value;
    await setPassengersChild(structuredClone(CurrData));
  };

  const handleChildPhoneChange = async (value, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][`adult_phone`] = value;
    await setPassengersChild(structuredClone(CurrData));
  };

  useEffect(() => {
    let Adult = new Array(adultAmount).fill({ id: "" });
    let AdultUpdated = Adult?.map((item, i) => ({
      id: `adultDX_${i + 1}`,
      name: "",
      last_name: "",
      email: "",
      phone: "",
      weight: "",
    }));

    setPassengersAdult(AdultUpdated);
    setFieldsAdults(AdultUpdated);
  }, [adultAmount]);

  useEffect(() => {
    let CurrData = structuredClone(fieldsAdults);
    CurrData[0][`id`] = "adultDX_1";
    CurrData[0][`name`] = BookingData?.UserData?.first_name;
    CurrData[0][`last_name`] = BookingData?.UserData?.last_name;
    CurrData[0][`email`] = BookingData?.UserData?.email;
    CurrData[0][`phone`] = BookingData?.UserData?.phone;
    CurrData[0][`weight`] = "";
    setPassengersAdult(structuredClone(CurrData));
    // setPassengersAdult(fieldsAdults);
  }, [BookingData]);

  useEffect(() => {
    if (childAmount == 0) {
      return;
    }
    let child = new Array(childAmount).fill({ id: "" });
    let childUpdated = child?.map((item, i) => ({
      id: `childOX_${i + 1}`,
      name: "",
      last_name: "",
      email: "",
      adult_phone: "",
      weight: "",
    }));

    setFieldsChilds(childUpdated);
    setPassengersChild(childUpdated);
  }, [childAmount]);

  const isPassengerValidated = () => {
    // Validate adult passengers
    for (const passenger of passengersAdult) {
      if (
        !passenger?.name ||
        !passenger?.last_name ||
        !passenger?.email ||
        !passenger?.phone ||
        !passenger?.weight
      ) {
        toast.error("Please fill in all fields for adult passenger!");
        return false; // Exit the function if validation fails
      }
    }

    if (childAmount > 0) {
      // Validate child passengers
      for (const passenger of passengersChild) {
        if (
          !passenger?.name ||
          !passenger?.last_name ||
          !passenger?.email ||
          !passenger?.adult_phone ||
          !passenger?.weight
        ) {
          toast.error("Please fill in all fields for child passenger!");
          return false; // Exit the function if validation fails
        }
      }
    }
    return true;
  };
  const handleDataSubmit = async () => {
    if (!isPassengerValidated()) {
      return;
    }
    let AdultsPayload = await passengersAdult?.map((item) => {
      return {
        name: item?.name,
        last_name: item?.last_name,
        email: item?.email,
        phone: item?.phone,
        weight: item?.weight,
        type: "adult",
        refernce_id: id,
        slotId: BookingData?.booking?.slotId,
        bookingId: BookingData?.booking?.id,
      };
    });
    let ChildsPayload = await passengersChild?.map((item) => {
      return {
        name: item?.name,
        last_name: item?.last_name,
        email: item?.email,
        phone: item?.adult_phone,
        weight: item?.weight,
        type: "child",
        refernce_id: id,
        slotId: BookingData?.booking?.slotId,
        bookingId: BookingData?.booking?.id,
      };
    });
    let payload = await { passengers: [...AdultsPayload, ...ChildsPayload] };

    try {
      setIsLoading(true);
      const resp = await CreateEntryBooking(payload);
      toast.success("Passengers Added");
    } catch (err) {
      toast.error("Oops, Something went wrong");
      console.log("🚀 ~ FatchRefDetails ~ err:", err);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  };
  return (
    <div className="Passenger393dk py-60">
      {BookingFatch ? (
        <div className="d-flex align-items-center justify-content-center my-5 py-5">
          <BounceLoader color={"#7ab342"} size={60} />
        </div>
      ) : !BookingData?.UserData ? (
        <Container>
          <div className="sec-title mb-3">No Booking Details Found!</div>
        </Container>
      ) : (
        <Container>
          <Row className="step2Size">
            <Col className="colHalf" md={8}>
              <div className="sec-title mt-5">Enter Passengers Details</div>
              {fieldsAdults?.map((item, i) => (
                <div className="wrapper mt-40" key={i}>
                  <div className="tag-line mt-5">Passenger Adult {i + 1}</div>
                  <Row>
                    <Col xs="12" md="6">
                      <div className="form_group mt-3">
                        <label htmlFor="name">
                          Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="name"
                            type="text"
                            class="form-control inputField"
                            onChange={async (e) => {
                              await handleAdultChange(e, i);
                            }}
                            value={passengersAdult[i]?.name}
                            disabled={i == 0}
                          />
                        </div>
                      </div>
                    </Col>
                    <Col xs="12" md="6">
                      <div className="form_group mt-3">
                        <label htmlFor="last_name">
                          Last Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="last_name"
                            type="text"
                            class="form-control inputField"
                            onChange={async (e) => {
                              await handleAdultChange(e, i);
                            }}
                            value={passengersAdult[i]?.last_name}
                            disabled={i == 0}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="form_group mt-3">
                    <label htmlFor="email">
                      Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="email"
                        type="text"
                        class="form-control inputField"
                        onChange={async (e) => {
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.email}
                        disabled={i == 0}
                      />
                    </div>
                  </div>

                  <div className="form_group form_groupPhone mt-4">
                    <label htmlFor="phone">
                      Mobile Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <PhoneInput
                      defaultCountry="ae"
                      onChange={(value) => handleAdultPhoneChange(value, i)}
                      value={passengersAdult[i]?.phone}
                      disabled={i == 0}
                    />
                  </div>

                  <div className="form_group mt-3">
                    <label htmlFor="weight">
                      Weight (KG) <span style={{ color: "red" }}>*</span>
                    </label>
                    <div class="input-group">
                      <input
                        name="weight"
                        type="number"
                        min="1"
                        max="120"
                        class="form-control inputField"
                        onChange={async (e) => {
                          if (e.target.value > 220) {
                            toast.error("weight is not acceptable");
                            return;
                          }
                          if (e.target.value >= 120) {
                            toast.info(
                              "If weight is more then 120kg Price is doubled"
                            );
                          }
                          if (e.target.value < 0) {
                            return;
                          }
                          if (e.target.value > 150) {
                            return;
                          }
                          await handleAdultChange(e, i);
                        }}
                        value={passengersAdult[i]?.weight}
                      />
                    </div>
                    {/* <div className="weightOptionsWrapper">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-60kg" ? "active" : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-60kg", i);
                    }}
                  >
                    Below 60kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-60-80kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-60-80kg", i);
                    }}
                  >
                    Between 60 - 80kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-80-100kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-80-100kg", i);
                    }}
                  >
                    Between 80 - 100kg
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className={`WeightOption ${
                      passengersAdult[i]?.weight == "below-100-120kg"
                        ? `active`
                        : ""
                    }`}
                    onClick={async () => {
                      await handleAdultWeight("below-100-120kg", i);
                    }}
                  >
                    Between 100 - 120kg
                  </motion.button>
                </div> */}
                    {/* <div className="termsGroup mt-2">
                <input type="checkbox" />

                <label className="mx-2" htmlFor="terms">
                  I am under 120kg
                </label>
              </div> */}
                  </div>
                </div>
              ))}
              {childAmount == 0 ? null : (
                <>
                  {fieldsChilds?.map((item, i) => (
                    <div className="wrapper mt-40" key={i}>
                      <div className="tag-line mt-5">
                        Passenger Child {i + 1}
                      </div>
                      <Row>
                        <Col xs={12} md={6}>
                          <div className="form_group mt-3">
                            <label htmlFor="name">
                              Name <span style={{ color: "red" }}>*</span>
                            </label>
                            <div class="input-group">
                              <input
                                name="name"
                                type="text"
                                class="form-control inputField"
                                onChange={async (e) => {
                                  await handleChildChange(e, i);
                                }}
                                value={passengersChild[i]?.name}
                              />
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} md={6}>
                          <div className="form_group mt-3">
                            <label htmlFor="last_name">
                              Last Name <span style={{ color: "red" }}>*</span>
                            </label>
                            <div class="input-group">
                              <input
                                name="last_name"
                                type="text"
                                class="form-control inputField"
                                onChange={async (e) => {
                                  await handleChildChange(e, i);
                                }}
                                value={passengersChild[i]?.last_name}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>

                      <div className="form_group mt-3">
                        <label htmlFor="email">
                          Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="email"
                            type="text"
                            class="form-control inputField"
                            onChange={async (e) => {
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.email}
                          />
                        </div>
                      </div>

                      <div className="form_group form_groupPhone mt-4">
                        <label htmlFor="phone">
                          Mobile Number <span style={{ color: "red" }}>*</span>
                        </label>
                        <PhoneInput
                          defaultCountry="ae"
                          onChange={(value) => handleChildPhoneChange(value, i)}
                          value={passengersChild[i]?.["adult_phone"]}
                        />
                      </div>

                      <div className="form_group mt-3">
                        <label htmlFor="weight">
                          Weight (KG) <span style={{ color: "red" }}>*</span>
                        </label>
                        <div class="input-group">
                          <input
                            name="weight"
                            type="number"
                            max={120}
                            class="form-control inputField"
                            onChange={async (e) => {
                              if (e.target.value > 119) {
                                toast.error(
                                  "weight under 120 kg is Allowed for Children"
                                );
                                return;
                              }
                              if (e.target.value < 0) {
                                return;
                              }
                              await handleChildChange(e, i);
                            }}
                            value={passengersChild[i]?.weight}
                          />
                        </div>
                        {/* <div className="weightOptionsWrapper">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-60kg"
                            ? "active"
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-60kg", i);
                        }}
                      >
                        Below 60kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-60-80kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-60-80kg", i);
                        }}
                      >
                        Between 60 - 80kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-80-100kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-80-100kg", i);
                        }}
                      >
                        Between 80 - 100kg
                      </motion.button>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className={`WeightOption ${
                          passengersChild[i]?.weight == "below-100-120kg"
                            ? `active`
                            : ""
                        }`}
                        onClick={async () => {
                          await handleChildWeight("below-100-120kg", i);
                        }}
                      >
                        Between 100 - 120kg
                      </motion.button>
                    </div> */}
                        {/* <div className="termsGroup mt-2">
                <input type="checkbox" />

                <label className="mx-2" htmlFor="terms">
                  I am under 120kg
                </label>
              </div> */}
                      </div>
                    </div>
                  ))}
                </>
              )}

              <button
                className="btnNl btnNl-primary mt-4"
                onClick={handleDataSubmit}
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </Col>
            <Col md={4}>
              <div className="CardWrapper mt-40 mb-3">
                <div className="flightCard">
                  <div className="sec-title">{packageval?.title}</div>
                  <div className="details mt-3">
                    <div className="title">Time</div>
                    <p className="para mt-1">45 - 60 Minutes</p>
                    <div className="title">Location</div>
                    <p className="para mt-1">
                      Margham Dubai, United Arab Emirates
                    </p>
                    <p className="para mt-1">
                      Adults: {BookingData?.booking?.slot_adult}
                    </p>
                    <p className="para mt-1">
                      Childs: {BookingData?.booking?.slot_child}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Index;
