import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import moment from "moment";
import BounceLoader from "react-spinners/BounceLoader";
// api
import { fetchSlotData } from "../../../../api/commonApi";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

function Index(props) {
  const packageval = useSelector((state) => state?.booking?.package);
  const [value, setValue] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const [slotsData, setSlotsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredSlotInfo, setHoveredSlotInfo] = useState(null); // For hover
  const [slotInfo, setSlotInfo] = useState({}); // For hover

  const fetchSlotsListData = async () => {
    try {
      setIsLoading(true); // Show the loader
      const { data } = await fetchSlotData();
      setSlotsData(data?.slots);
      {
        data?.slots?.map((x) => {
          setValue(moment(new Date()).format("YYYY-MM-DD"));
        });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };
  const searchParams = useSearchParams();

  const booking_dateQuery = searchParams.get("booking_date");
  useEffect(() => {
    fetchSlotsListData();
  }, [booking_dateQuery]);

  let limited = [
    "09-Sep-2024",
    "11-Sep-2024",
    "18-Sep-2024",
    "21-Sep-2024",
    "24-Sep-2024",
    "26-Sep-2024",
  ];
  let full = [
    "10-Sep-2024",
    "13-Sep-2024",
    "16-Sep-2024",
    "19-Sep-2024",
    "22-Sep-2024",
    "25-Sep-2024",
    "27-Sep-2024",
  ];

  // const handleDateChange = (value) => {
  //   let dateValue = moment(value).format("DD-MMM-YYYY");

  //   // var element = document.getElementsByClassName(
  //   //   "react-calendar__tile--active"
  //   // );
  //   setValue(value);
  //   props?.setCheckOutAmount(1995);

  //   if (full.includes(dateValue)) {
  //     setTimeout(() => {
  //       document
  //         .querySelector(".react-calendar__tile--active")
  //         .classList.add("fullSeats");
  //     }, 100);
  //   }

  //   if (limited.includes(dateValue)) {
  //     setTimeout(() => {
  //       document
  //         .querySelector(".react-calendar__tile--active")
  //         .classList.add("limited");
  //     }, 20);
  //   }
  // };

  const handleDateChange = (value) => {
    const dateValue = moment(value).format("YYYY-MM-DD");
    setValue(value);

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (value.getTime() < yesterday.getTime()) {
      toast.error("Date Passed cant Book this", {
        toastId: "bookingSameDate3",
      });
      return;
    }

    let totalAdults = props?.adultAmount * packageval?.price_adult;
    let totalChild = props?.childAmount * packageval?.price_child;
    props?.setInitialCheckOutAmount({
      adults: {
        guests: props?.adultAmount,
        price_initial: packageval?.price_adult,
      },
      childs: {
        guests: props?.childAmount,
        price_initial: packageval?.price_child,
      },
    });
    props?.setCheckOutAmount(parseFloat(totalAdults + totalChild).toFixed(0));

    const selectedSlot = slotsData?.find((slot) => slot?.date === dateValue);

    if (selectedSlot) {
      // Save the selected slotId
      localStorage.setItem("slotId", selectedSlot.id);
      props?.setslotDetails(selectedSlot.id);

      const availableSlots =
        selectedSlot?.totalSlots - selectedSlot?.bookedSlots;
      if (availableSlots === 0) {
        setTimeout(() => {
          document
            .querySelector(".react-calendar__tile--active")
            .classList.add("fullSeats");
        }, 100);
      } else if (availableSlots <= 20) {
        setTimeout(() => {
          document
            .querySelector(".react-calendar__tile--active")
            .classList.add("limited");
        }, 100);
      }

      // Display selected slot info on click
      setSlotInfo({
        total: selectedSlot?.totalSlots,
        booked: selectedSlot?.bookedSlots,
      });
    } else {
      // Clear slotId if no valid slot is selected
      localStorage.removeItem("slotId");
    }
  };

  useEffect(() => {
    const newDate = new Date(booking_dateQuery);
    if (booking_dateQuery) {
      handleDateChange(newDate);
    }
  }, [booking_dateQuery]);

  const handleHover = (date) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const hoveredSlot = slotsData?.find((slot) => slot?.date === dateValue);

    if (hoveredSlot) {
      setHoveredSlotInfo({
        date: dateValue,
        totalSlots: hoveredSlot?.totalSlots,
        bookedSlots: hoveredSlot?.bookedSlots,
      });
    } else {
      setHoveredSlotInfo(null);
    }
  };

  const tileClassName = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData?.find((slot) => slot?.date === dateValue);

    if (slot) {
      const availableSlots = slot?.totalSlots - slot?.bookedSlots;

      if (availableSlots === 0) {
        return "fullSeats"; // Red background for fully booked dates
      } else if (availableSlots <= 20) {
        return "limitedSeats"; // Yellow background for limited availability
      } else {
        return "availableSeats"; // Green background for available dates
      }
    }
    return ""; // No class for dates without data
  };

  const tileContent = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");
    const slot = slotsData?.find((slot) => slot?.date === dateValue);

    if (slot) {
      return (
        <div
          className="hover-tile"
          onMouseEnter={() => handleHover(date)} // Handle hover event
          onMouseLeave={() => setHoveredSlotInfo(null)} // Clear hover info on leave
        >
          <span className="hover-marker">i</span>
        </div>
      );
    }
    return null; // No content for dates without data
  };

  // Disable dates that are not in the slotsData
  const tileDisabled = ({ date, view }) => {
    const dateValue = moment(date).format("YYYY-MM-DD");

    // Check if the date is in the slotsData
    const isDateInSlots = slotsData.some((slot) => slot.date === dateValue);
    return !isDateInSlots; // Disable if not in slotsData
  };

  return (
    <div className="Calender9393dd mt-4">
      <div className="sec-title">Select Date</div>
      <div className="clr-info mt-2">
        <div className="sb-title">Seats are Available!</div>
        <div className="clr-list mb-2">
          <div className="dot_wrapper">
            <div className="dot clr-available"></div>
            <div className="label ">Available</div>
          </div>
          <div className="dot_wrapper">
            <div className="dot clr-limited"></div>
            <div className="label ">Limited</div>
          </div>
          <div className="dot_wrapper">
            <div className="dot clr-full"></div>
            <div className="label ">Full</div>
          </div>
        </div>
      </div>
      <div className="calender_wrap mt-2">
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center my-5 py-5">
            <BounceLoader color={"#7ab342"} size={60} />
          </div>
        ) : (
          <>
            <Calendar
              onChange={handleDateChange}
              value={value}
              tileClassName={tileClassName}
              tileContent={tileContent} // Handle hover content dynamically
              tileDisabled={tileDisabled} // Disable dates not in slotsData
            />
            {hoveredSlotInfo && (
              <div className="hover-info">
                <p>
                  <strong>Total Slots:</strong> {hoveredSlotInfo.totalSlots}
                </p>
                <p>
                  <strong>Booked Slots:</strong> {hoveredSlotInfo.bookedSlots}
                </p>
              </div>
            )}
            {/* {slotInfo?.total && (
              <div className="slot-details mt-4">
                <p>
                  <strong>Total Slots:</strong> {slotInfo.total}
                </p>
                <p>
                  <strong>Booked Slots:</strong> {slotInfo.booked}
                </p>
              </div>
            )} */}
          </>
        )}
      </div>
    </div>
  );
}

export default Index;
