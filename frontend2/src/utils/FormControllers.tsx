// FormController.tsx
import React, { useState } from "react";

type Field = {
  name: string;
  label: string;
  type: string;
};

type FormProps = {
  fields: Field[];
  onSubmit: (data: { [key: string]: string }) => void;
  buttonLabel: string;
};

const FormController: React.FC<FormProps> = ({ fields, onSubmit, buttonLabel }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label htmlFor={field.name} className="block mb-2">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {buttonLabel}
      </button>
    </form>
  );
};

export default FormController;
