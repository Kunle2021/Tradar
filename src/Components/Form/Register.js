import React from "react";

export default function Register({ setFormData, formData }) {
  return (
    <div>
      <div className="form">
        <input
          type="text"
          placeholder="First Name..."
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Last Name..."
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Company..."
          value={formData.company}
          onChange={(e) => {
            setFormData({ ...formData, company: e.target.value });
          }}
        />

        <input
          type="text"
          placeholder="Contact..."
          value={formData.contact}
          onChange={(e) => {
            setFormData({ ...formData, contact: e.target.value });
          }}
        />
      </div>
    </div>
  );
}
