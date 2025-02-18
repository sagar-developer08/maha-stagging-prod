import React from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
function Index() {
  return (
    <div className="termsPage939 py-60">
      {" "}
      <Container>
        <div className="content_wrap">
          <div className="tag-line mb-3">Terms</div>
          <div className="main-title mb-3">
            Terms and Conditions for Hot Air Balloon Flights
          </div>
          <p>
            <strong>General Information:</strong>
            Balloon flights occur early in the morning, with timings adjusted
            according to sunrise. The reservation team will contact you the day
            before the flight between 12 PM and 9 PM for confirmation and
            pick-up details. Transfers are conducted in four-wheel vehicles
            suitable for desert travel. A Certificate of First Flight will be
            provided upon completion, and all flights adhere to GCAA safety
            standards. It is essential to wear comfortable clothing and follow
            the pilot’s safety instructions during the flight.
          </p>
          <p>
            <strong>Reservation and Age Requirements:</strong>
            Children under 11 must be accompanied by an adult, while adult
            prices apply to those aged 11 and older. Passengers must submit a
            government-issued ID, and certain medical conditions may prevent
            participation. The maximum weight limit is 120 kg per adult.
            Pregnant women beyond three months, children under five, and
            individuals over 80 years old cannot fly.
          </p>
          <p>
            <strong>Cancellation Policy:</strong>
            For non-group bookings, cancellations made 72 hours before the
            flight incur no fee, while cancellations made 24 hours before incur
            a 100% cancellation fee. Group bookings have different timelines for
            cancellation fees. If a flight is canceled due to weather
            conditions, a full refund will be processed within 7–10 days. The
            operator reserves the right to amend these terms, and any changes
            will be communicated accordingly.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Index;
