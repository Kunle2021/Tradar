import React from "react";

export default function Certify({ setFormData, formData }) {
  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="Experience..."
          value={formData.experience}
          onChange={(e) => {
            setFormData({ ...formData, experience: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Location..."
          value={formData.location}
          onChange={(e) => {
            setFormData({ ...formData, location: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="CertificateId..."
          value={formData.certificateId}
          onChange={(e) => {
            setFormData({ ...formData, certificateId: e.target.value });
          }}
        />
        <div
          className="check"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <label>
            Terms and Condtions
            <input
              type="checkbox"
              id="policy"
              value={formData.policy}
              onChange={(e) => {
                setFormData({ ...formData, policy: e.target.value });
              }}
            />
          </label>
        </div>

        {/* Need to add the policy input */}
      </div>
    </div>
  );
}
