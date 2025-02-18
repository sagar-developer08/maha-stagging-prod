import React from "react";
import "./styles.scss";
import { Container } from "react-bootstrap";
function Index() {
  return (
    <div className="PrimaryDei39Page py-60">
      {" "}
      <Container>
        <div className="content_wrap">
          <div className="tag-line mb-3">Policy</div>
          <div className="main-title mb-3">Privacy Policy</div>
          <p>
            At Maha Balloon Adventures, we prioritize your privacy and are
            committed to safeguarding the information collected throughout the
            balloon flight process. We understand that your details are
            sensitive, and we implement robust measures to protect your data
            from unauthorized access, disclosure, or misuse. Your information
            will only be utilized for communication purposes directly related to
            your flight, ensuring a seamless and personalized experience.
          </p>
          <h3>Information We Collect</h3>
          <p>
            To provide you with the best possible service, we collect specific
            personal details during the booking process. This includes your
            name, contact information (such as phone number and email address),
            and a form of identification (ID) to confirm your identity and
            ensure compliance with safety protocols. All collected information
            is securely stored in our database, which is protected by advanced
            security measures to prevent unauthorized access. We want to assure
            you that your information is not shared with third parties under any
            circumstances unless required by law or with your explicit consent.
          </p>
          <h3>Data Usage</h3>
          <p>
            Your information is vital for the smooth operation of our services.
            We use your personal details for several key purposes:
          </p>

          <ul>
            <li>
              <strong>Reservation Confirmation:</strong> Your data allows us to
              accurately confirm your flight reservation, ensuring that all
              details are correct and up to date.
            </li>
            <li>
              <strong>Coordination of Pick-Ups:</strong> We use your contact
              information to arrange pick-up times and locations, making the
              process convenient and tailored to your needs.
            </li>
            <li>
              <strong>Compliance with Flight Safety Standards:</strong> We are
              committed to maintaining the highest safety standards. Your
              personal information is essential for verifying identities,
              conducting safety briefings, and complying with aviation
              regulations.
            </li>
          </ul>
          <p>
            Overall, we utilize your information solely for these purposes,
            ensuring a safe, efficient, and enjoyable balloon flight experience
            while respecting your privacy.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Index;
