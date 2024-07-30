import React from "react";
import "../index.css";

function NewModule({ onClose }) {
  return (
    <div className="new-module-overlay">
      <div className="new-module-content">
        <button className="new-module-close" onClick={onClose}>
          X
        </button>
        <h1>New Module Content</h1>
        <p>Here you can place the content you want to show in the new module.</p>
        {/* Əlavə məzmunu bura əlavə edə bilərsiniz */}
      </div>
    </div>
  );
}

export default NewModule;
