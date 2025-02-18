import React, { useEffect, useState } from "react";
import TopBar from "./TopBar/Index";
import Step1 from "./Step1/Index"; //also Step 2
import Step3 from "./Step3/Index";
import Step4 from "./Step4/Index";
import TotalInfo from "./TotalInfo/Index";
import FooterB from "./Footer/Index";
// import DetailsForm from "./DetailsForm";
import AddressForm from "./AddressForm/Index";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setBooking, setPackage, setPackageId } from "../../store/booking";
import { toast } from "react-toastify";
// api
import {
  addPassengerData,
  fetchPackagesData,
  makeBooking,
} from "../../api/commonApi";
import "./styles.scss";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isBookingModal = useSelector((state) => state.booking.isBookingModal);
  console.log("isBookingModal", isBookingModal);
  const packageId = useSelector((state) => state?.booking?.packageId);
  const packageval = useSelector((state) => state?.booking?.package);
  const userData = useSelector((state) => state?.auth?.userData);

  const [asGift, setAsGift] = useState(false);
  const [asGiftStep, setAsGiftStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(2);

  const [asGiftComplete, setAsGiftComplete] = useState(1);
  const [stepsComplete, setStepsComplete] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
    step5: false,
  });

  //

  const [adultAmount, setAdultAmount] = useState(1);
  const [childAmount, setChildAmount] = useState(0);
  const [slotDetails, setslotDetails] = useState(null);

  //
  const [weightOption, setWeightOption] = useState("below-60kg");
  const [checkOutAmont, setCheckOutAmount] = useState(null);
  const [initialcheckOutAmont, setInitialCheckOutAmount] = useState(null);
  const [isDoubledWeight, setIsDoubleWeight] = useState(false);

  const [passengersAdult, setPassengersAdult] = useState([{}]);
  const [passengersChild, setPassengersChild] = useState([{}]);
  const [pickUpData, setPickUpData] = useState({
    house_no: "",
    address: "",
    area: "",
    landmark: "",
    country: "",
    city: "",
  });

  // details FormData
  const [detailsFormData, setDetailsFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const handleDetailsFormData = (e, isPhone = false) => {
    if (isPhone) {
      setDetailsFormData((prev) => ({ ...prev, phone: e }));
      return;
    }
    setDetailsFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Address FormData
  const [addressFormData, setAddressFormData] = useState({
    country: "UAE",
    city: "Dubai",
    address: "",
  });

  const handleAddressFormData = (e) => {
    setAddressFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  //
  const [loading, setLoading] = useState(false);

  //mp
  const [fieldsAdults, setFieldsAdults] = useState([{}]);
  const [fieldsChilds, setFieldsChilds] = useState([{}]);

  // Total Last Response
  const [totalResp, settotalResp] = useState();

  const [lastSubmit, setLastSubmit] = useState(false);

  const [packagesData, setPackagesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const userIdb2b = searchParams.get("booked_by");
  let authBooking = searchParams.get("book");
  let packageID = searchParams.get("package");

  useEffect(() => {
    const fetchPackageListData = async () => {
      try {
        setIsLoading(true); // Show the loader
        const { data } = await fetchPackagesData();
        if (Array.isArray(data)) {
          setPackagesData(data);

          if (authBooking == "true") {
            const packageSelected = data?.filter(
              (item) => item?.id == packageID
            )[0];
            console.log("packagesData: ", packagesData);
            console.log("packageSelected: ", packageSelected);

            dispatch(setPackageId(packageSelected?.id));
            dispatch(setPackage(packageSelected));
            dispatch(setBooking(true));
          }
        }
      } catch (error) {
        console.error("Error fetching Data:", error);
      } finally {
        setIsLoading(false); // Hide the loader
      }
    };
    if (packageID) {
      fetchPackageListData();
    }
  }, [packageID]);

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
    setFieldsAdults(AdultUpdated);
    setPassengersAdult(AdultUpdated);
  }, [adultAmount]);

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

  const handleAdultWeight = async (value, i) => {
    let CurrData = structuredClone(passengersAdult);
    CurrData[i][`weight`] = value;
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
  const handleChildWeight = async (value, i) => {
    let CurrData = structuredClone(passengersChild);
    CurrData[i][`weight`] = value;
    await setPassengersChild(structuredClone(CurrData));
  };
  useEffect(() => {
    if (currentStep == 1) {
      setCheckOutAmount(null);
    }
  }, [currentStep]);

  const handleClose = () => {
    dispatch(setBooking(false));
    router.push("/");
  };

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
        toast.error("Please fill in all fields for adult passengers!");
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
          toast.error("Please fill in all fields for child passengers!");
          return false; // Exit the function if validation fails
        }
      }
    }
    return true;
  };
  const handlePassengerSubmit = async (e) => {
    e.preventDefault();
    const slotId = localStorage.getItem("slotId");
    try {
      const payload = [];

      // Validate adult passengers
      for (const passenger of passengersAdult) {
        if (
          !passenger?.name ||
          !passenger?.last_name ||
          !passenger?.email ||
          !passenger?.phone ||
          !passenger?.weight
        ) {
          toast.error("Please fill in all fields for adult passengers!");
          return; // Exit the function if validation fails
        }

        payload.push({
          name: passenger.name,
          last_name: passenger.last_name,
          email: passenger.email,
          phone: passenger.phone,
          weight: passenger.weight,
          slotId: slotId,
          type: "adult",
        });
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
            toast.error("Please fill in all fields for child passengers!");
            return; // Exit the function if validation fails
          }

          payload.push({
            name: passenger.name,
            last_name: passenger.last_name,
            email: passenger.email,
            phone: passenger.adult_phone,
            weight: passenger.weight,
            slotId: slotId,
            type: "child",
          });
        }
      }

      // Validate pickup data
      if (pickUpData?.pickupType == 1) {
        if (
          !pickUpData?.house_no ||
          !pickUpData?.address ||
          !pickUpData?.area ||
          !pickUpData?.landmark ||
          !pickUpData?.country ||
          !pickUpData?.city
        ) {
          toast.error("Please fill in all pickup address fields!");
          return; // Exit the function if validation fails
        }
      }
      if (pickUpData?.pickupType == 3) {
        if (!pickUpData?.address) {
          toast.error("Please fill in Your Hotel Address");
          return; // Exit the function if validation fails
        }
      }
      const UpdatedData = {
        passengers: payload,
        pickup: {
          house_no: pickUpData?.house_no,
          address: pickUpData?.address,
          area: pickUpData?.area,
          landmark: pickUpData?.landmark,
          country: pickUpData?.country,
          city: pickUpData?.city,
        },
      };

      setLoading(true);
      const response = await addPassengerData(UpdatedData);
      console.log("🚀 ~ handlePassengerSubmit ~ response:", response);
      setLoading(false);
      if (response.status === 200 || response.status === 201) {
        settotalResp(response?.data);
        setLastSubmit(true);
        setCurrentStep(5);
        toast.success("Data has been Submitted Successfully!");
        setPassengersAdult([]);
        setPassengersChild([]);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    }
  };

  const isContactValidated = (ContactData) => {
    // Validate Contact Details

    for (const passenger of ContactData) {
      if (
        !passenger?.name ||
        !passenger?.last_name ||
        !passenger?.email ||
        !passenger?.phone
      ) {
        toast.error("Please fill in all fields for Contact Details");
        return false; // Exit the function if validation fails
      }
    }
    return true;
  };
  const isContactAddressValidated = (addressFormData) => {
    // Validate Contact Details

    if (
      !addressFormData?.country ||
      !addressFormData?.city ||
      !addressFormData?.address
    ) {
      toast.error("Please fill in all fields for Address");
      return false; // Exit the function if validation fails
    }
    return true;
  };
  const handleDatav2Submit = async (e) => {
    e.preventDefault();
    const slotId = localStorage.getItem("slotId");

    try {
      setLoading(true);
      const payload = [];

      // Validate adult passengers
      for (const passenger of passengersAdult) {
        if (
          !passenger?.name ||
          !passenger?.last_name ||
          !passenger?.email ||
          !passenger?.phone ||
          !passenger?.weight
        ) {
          toast.error("Please fill in all fields for adult passengers!");
          return; // Exit the function if validation fails
        }

        if (parseInt(passenger?.weight) > parseInt("120")) {
          setCheckOutAmount(
            (prev) =>
              parseInt(prev) +
              parseInt(initialcheckOutAmont?.adults?.price_initial)
          );
          setIsDoubleWeight(true);
        }

        payload.push({
          name: passenger.name,
          last_name: passenger.last_name,
          email: passenger.email,
          phone: passenger.phone,
          weight: passenger.weight,
          slotId: slotId,
          type: "adult",
        });
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
            toast.error("Please fill in all fields for child passengers!");
            return; // Exit the function if validation fails
          }

          payload.push({
            name: passenger.name,
            last_name: passenger.last_name,
            email: passenger.email,
            phone: passenger.adult_phone,
            weight: passenger.weight,
            slotId: slotId,
            type: "child",
          });
        }
      }

      const UpdatedData = {
        // passengers: [{ ...detailsFormData }],
        passengers: payload,
        pickup: addressFormData,
      };

      // const isConact = isContactValidated(UpdatedData?.passengers);
      // if (!isConact) {
      //   return;
      // }
      const isAddress = isContactAddressValidated(addressFormData);
      if (!isAddress) {
        return;
      }
      const response = await addPassengerData(UpdatedData);
      setLoading(false);
      if (response.status === 200 || response.status === 201) {
        settotalResp(response?.data);
        setLastSubmit(true);
        // setCurrentStep(5);
        toast.success("Data has been Submitted Successfully!");
        setPassengersAdult([]);
        setPassengersChild([]);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      setLoading(false);
      toast.error("Something Went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const [isCheckout, setIsCheckout] = useState(false);

  function popitup(url, windowName) {
    let newwindow = window.open(url, windowName);
    if (newwindow && newwindow.focus) {
      // newwindow.focus();
    }
    return false;
  }
  const [referalCode, setreferalCode] = useState("");

  const handleCheckout = async (e) => {
    setIsCheckout(true);
    const payload = {
      slotId: localStorage.getItem("slotId"),
      refernce_id: totalResp?.refernce_id,
      bookingId: 1,
      booked_by: userData?.id ? Number(userData?.id) : Number(userIdb2b),
      status: "pending",
      subTotal: checkOutAmont,
      tourId: packageId,
      slot_count: parseInt(adultAmount) + parseInt(childAmount),
      slot_adult: parseInt(adultAmount),
      slot_child: parseInt(childAmount),
      // referral_code: localStorage.getItem("referral_code"),
      referral_code: referalCode,
    };
    if (!payload?.refernce_id) {
      toast.error("Not Enough Data, Please Fill Form again");
      setIsCheckout(false);
      return;
    }
    if (!payload?.slotId) {
      toast.error("Select Confirm the Booking Date");
      setIsCheckout(false);

      return;
    }
    try {
      const response = await makeBooking(payload);
      setIsCheckout(false);

      if (response.status === 200 || response.status === 201) {
        // toast.success("Please Wait Redirecting to Payment");
        setCurrentStep(1);
        setAdultAmount(1);
        setChildAmount(0);
        setCheckOutAmount(null);
        setPassengersChild([{}]);
        setPassengersAdult([{}]);
        setPickUpData({
          house_no: "",
          address: "",
          area: "",
          landmark: "",
          country: "",
          city: "",
        });
        localStorage.removeItem("referral_code");
        setFieldsAdults([{}]);
        setFieldsChilds([{}]);
        settotalResp({});
        dispatch(setBooking(false));
        window.location.assign(
          `${process.env.NEXT_PUBLIC_PAYMENTBASEURL}/?token=${response?.data?.cart?.data?.cartId}`
        );
        // dispatch(setBooking(false));

        // location.reload();
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.error("Error posting Data:", error);
      toast.error("Something Went wrong!");
      setIsCheckout(false);
    }
  };
  const booking_dateQuery = searchParams.get("booking_date");
  const adultsQuery = searchParams.get("adults");
  const childQuery = searchParams.get("child");

  useEffect(() => {
    if (adultsQuery) {
      setCurrentStep(2);
      setAdultAmount(parseInt(adultsQuery));
      setChildAmount(parseInt(childQuery));
      if (!packageval?.id) {
        router.push("/");
        return;
      }
      dispatch(setBooking(true));
    }
  }, [booking_dateQuery, adultsQuery, childQuery]);

  return (
    <div className="BookingMain31">
      <Modal
        show={isBookingModal}
        onHide={handleClose}
        size="lg"
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Container>
            <TopBar
              asGiftStep={asGiftStep}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              handleClose={handleClose}
              lastSubmit={lastSubmit}
            />
            <div>
              {currentStep <= 2 ? (
                <Step1
                  asGift={asGift}
                  asGiftStep={asGiftStep}
                  setCheckOutAmount={setCheckOutAmount}
                  setInitialCheckOutAmount={setInitialCheckOutAmount}
                  checkOutAmont={checkOutAmont}
                  currentStep={currentStep}
                  adultAmount={adultAmount}
                  setAdultAmount={setAdultAmount}
                  childAmount={childAmount}
                  setChildAmount={setChildAmount}
                  setslotDetails={setslotDetails}
                />
              ) : currentStep == 3 ? (
                <Step4
                  adultAmount={adultAmount}
                  childAmount={childAmount}
                  weightOption={weightOption}
                  setWeightOption={setWeightOption}
                  passengersAdult={passengersAdult}
                  handleAdultChange={handleAdultChange}
                  passengersChild={passengersChild}
                  fieldsAdults={fieldsAdults}
                  fieldsChilds={fieldsChilds}
                  handleChildChange={handleChildChange}
                  handleAdultWeight={handleAdultWeight}
                  handleChildWeight={handleChildWeight}
                  handleAdultPhoneChange={handleAdultPhoneChange}
                  handleChildPhoneChange={handleChildPhoneChange}
                />
              ) : // <DetailsForm
              //   formData={detailsFormData}
              //   handleDetailsFormData={handleDetailsFormData}
              // />
              // <Step4
              //   adultAmount={adultAmount}
              //   childAmount={childAmount}
              //   weightOption={weightOption}
              //   setWeightOption={setWeightOption}
              //   passengersAdult={passengersAdult}
              //   handleAdultChange={handleAdultChange}
              //   passengersChild={passengersChild}
              //   fieldsAdults={fieldsAdults}
              //   fieldsChilds={fieldsChilds}
              //   handleChildChange={handleChildChange}
              //   handleAdultWeight={handleAdultWeight}
              //   handleChildWeight={handleChildWeight}
              //   handleAdultPhoneChange={handleAdultPhoneChange}
              //   handleChildPhoneChange={handleChildPhoneChange}
              // />
              currentStep == 4 ? (
                // <Step3
                //   handlePassengerSubmit={handlePassengerSubmit}
                //   loading={loading}
                //   setPickUpData={setPickUpData}
                //   pickUpData={pickUpData}
                // />
                <AddressForm
                  checkOutAmont={checkOutAmont}
                  loading={loading}
                  formData={addressFormData}
                  handleAddressFormData={handleAddressFormData}
                  hanldeSubmitData={handleDatav2Submit}
                  adultAmount={adultAmount}
                  childAmount={childAmount}
                  lastSubmit={lastSubmit}
                  referalCode={referalCode}
                  setreferalCode={setreferalCode}
                  isDoubledWeight={isDoubledWeight}
                />
              ) : (
                <TotalInfo
                  totalResp={totalResp}
                  checkOutAmont={checkOutAmont}
                  pickUpData={pickUpData}
                />
              )}
            </div>
            <FooterB
              currentStep={currentStep}
              asGift={asGift}
              setAsGift={setAsGift}
              setAsGiftStep={setAsGiftStep}
              setCurrentStep={setCurrentStep}
              checkOutAmont={checkOutAmont}
              lastSubmit={lastSubmit}
              handleCheckout={handleCheckout}
              isCheckout={isCheckout}
              isPassengerValidated={isPassengerValidated}
              slotDetails={slotDetails}
            />
          </Container>
        </Modal.Body>

        {/* <Modal.Footer>
  <Button onClick={props.onHide}>Close</Button>
</Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Index;
