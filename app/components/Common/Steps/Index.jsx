import React from "react";
import "./style.scss";
function Index({ Step = 30 }) {
  return (
    <div className="ProgressStep332">
      <div className="progressSteper" style={{ width: `${Step}%` }}></div>
    </div>
  );
}

export default Index;
