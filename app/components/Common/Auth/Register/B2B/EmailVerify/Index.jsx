import React from "react";

function Index(props) {
  const { handleOTPChange } = props;
  return (
    <div className="emailVerity939">
      <div className="form-title mb-3">{props?.title}</div>
      {/* <p className="para mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros.
      </p> */}
      <div className="emailVerify">
        <div className="form_group mt-4">
          <label htmlFor="enteredOtp">Enter Code</label>
          <input
            className="inputField"
            name="enteredOtp"
            type="text"
            placeholder=""
            onChange={handleOTPChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
