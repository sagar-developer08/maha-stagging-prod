import React, { useEffect, useState } from "react";
import useOutsideAlerter from "../../../../Hook/useOutsideAlerter";
import { fetchSlotData } from "../../../../api/commonApi";
import moment from "moment";
import BounceLoader from "react-spinners/BounceLoader";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./styles.scss";
import { toast } from "react-toastify";
const Index = (props) => {
  const { Range1, setOpenDatePicker, wrapperRef, setValue, value } = props;

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
          setValue(moment(x?.date).format("YYYY-MM-DD"));
        });
      }
    } catch (error) {
      console.error("Error fetching Data:", error);
    } finally {
      setIsLoading(false); // Hide the loader
    }
  };

  useEffect(() => {
    fetchSlotsListData();
  }, []);

  const handleDateChange = (value) => {
    const dateValue = moment(value).format("YYYY-MM-DD");
    setValue(value);
    // let totalAdults = props?.adultAmount * 1995;
    // let totalChild = props?.childAmount * 1500;
    // props?.setCheckOutAmount(parseFloat(totalAdults + totalChild).toFixed(0));
    // let today = new Date().getTime();
    // if (value.getTime() < today) {
    //   toast.error("Date Passed cant Book this", {
    //     toastId: "bookingSameDate3",
    //   });
    //   return;
    // }

    const selectedSlot = slotsData?.find((slot) => slot?.date === dateValue);

    if (selectedSlot) {
      // Save the selected slotId
      localStorage.setItem("slotId", selectedSlot.id);

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

  // useEffect(() => {
  //   useOutsideAlerter(wrapperRef, setOpenDatePicker);
  // }, [wrapperRef]);

  useOutsideAlerter(wrapperRef, setOpenDatePicker);

  return (
    <div className="calender9dk3">
      <>
        {isLoading ? (
          <div className="d-flex align-items-center justify-content-center my-5 py-5">
            <BounceLoader color={"#7ab342"} size={60} />
          </div>
        ) : (
          <>
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
            <Calendar
              value={value}
              onChange={handleDateChange}
              tileClassName={tileClassName}
              tileContent={tileContent} // Handle hover content dynamically
              tileDisabled={tileDisabled} // Disable dates not in slotsData
            />
            {/* {hoveredSlotInfo && (
              <div className="hover-info">
                <p>
                  <strong>Total Slots:</strong> {hoveredSlotInfo.totalSlots}
                </p>
                <p>
                  <strong>Booked Slots:</strong> {hoveredSlotInfo.bookedSlots}
                </p>
              </div>
            )}
            {slotInfo?.total && (
              <div className="slot-details mt-2">
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
      </>
    </div>
  );
};

export default Index;
