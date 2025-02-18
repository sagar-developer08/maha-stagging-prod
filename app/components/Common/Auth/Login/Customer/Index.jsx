import React, { useState } from "react";
import Steps from "../../../../Common/Steps/Index";
import "./styles.scss";

function Index(props) {
  const [steps, setSetps] = useState(30);
  return (
    <div className="LoginCustomerp949d">
      <Steps Step={steps} />
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
      <button onClick={() => setSetps(30)}>1</button>
      <button onClick={() => setSetps(50)}>2</button>
      <button onClick={() => setSetps(95)}>4</button>
    </div>
  );
}

export default Index;
