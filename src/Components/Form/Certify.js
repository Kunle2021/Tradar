import React from "react";

export default function Certify({ setFormData, formData }) {
  return (
    <div>
      <div className="personal-info-container">
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

        {/* Need to add the policy input */}
      </div>
    </div>
  );
}
