"use client";
import React, { useState } from "react";
import { Upload, Cloud } from "lucide-react";
import Hero from "@/sections/Hero";

const CustomKhukuri = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    khukuriTitle: "",
    khukuriDescription: "",
    referenceImages: [],
    bladeLength: "",
    bladeFinish: "",
    engravingDetails: "",
    additionalComments: "",
    handleLength: "",
    primaryMaterial: "",
    secondaryMaterial: "",
    handleType: "",
    scabbardMaterial: "",
    scabbardColor: "",
    chappe: "",
    firstName: "",
    lastName: "",
    email: "",
    fullAddress: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    agreedToTerms: false,
  });

  const steps = [
    "Share Your Design",
    "Blade Options",
    "Handle Options",
    "Scabbard Options",
    "Submit Design",
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
const renderProgressBar = () => (
  <div className="mb-8">
    {/* Mobile view - show only current step */}
    <div className="md:hidden">
      <div className="flex flex-col items-center">
        <div className="text-lg font-extrabold text-gray-700 mb-2 text-center">
          {steps[currentStep - 1]} 
        </div>
        <div className="flex items-center space-x-1 mb-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                index + 1 === currentStep
                  ? "bg-green-500"
                  : index + 1 < currentStep
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="text-sm font-extrabold text-gray-500">
          Step {currentStep} of {steps.length}
        </div>
      </div>
    </div>

    {/* Desktop view - show all steps */}
    <div className="hidden md:flex items-center justify-between">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="flex items-center">
            <div className="flex flex-col items-start">
              <div className="text-[15px] font-extrabold text-gray-700 mb-2">{step}</div>
              <div
                className={`h-1 rounded-full ${
                  isActive
                    ? "bg-green-500"
                    : isCompleted
                    ? "bg-green-500"
                    : "bg-gray-300"
                } ${
                  stepNumber === 1 ? "w-48" : stepNumber === 5 ? "w-56" : "w-60"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="border-2 relative shadow-2xl mb-14 border-gray-500 rounded-lg p-6">
        <h3 className="text-lg absolute -top-4 bg-white left-10 font-medium mb-4">Design Info</h3>

        <div className="space-y-6 mt-6 mb-4">
          <div>
            <label className="block  text-sm font-medium text-gray-700 mb-2">
              Khukuri Title
            </label>
            <input
              type="text"
              placeholder="Enter Khukuri Title"
              className="w-full px-3 py-2 border hover:shadow-2xl border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.khukuriTitle}
              onChange={(e) =>
                handleInputChange("khukuriTitle", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Khukuri Description
            </label>
            <textarea
              placeholder="Enter Khukuri Description"
              rows={6}
              className="w-full px-3 py-2 border hover:shadow-2xl border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.khukuriDescription}
              onChange={(e) =>
                handleInputChange("khukuriDescription", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="border-2 shadow-xl relative  border-gray-500 rounded-lg p-6">
        <h3 className="text-lg  absolute -top-4 bg-white left-8 font-medium mb-4">Upload Reference Image</h3>

        <div>
          <h4 className="font-medium mb-2">Reference Image Upload</h4>
          <p className="text-sm text-gray-600 mb-4">
            Add your documents here, and you can upload up to 5 files max
          </p>

          <div className="border-2 border-dashed border-gray-500 rounded-lg p-12 text-center">
            <Cloud className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-600">
              Drag your file(s) or{" "}
              <button className="text-green-600 underline">browse</button>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Max 10 MB files are allowed
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Only support .jpg and .png files
          </p>
        </div>
      </div>

      <div className="flex md:justify-end justify-center">
        <button
          onClick={handleNext}
          className="px-10 py-2 bg-darkGreen text-white rounded-full hover:bg-green-800"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="border relative border-gray-500 shadow-2xl rounded-lg p-6">
        <h3 className="text-lg absolute -top-4 bg-white left-10 font-medium mb-6">Blade Options</h3>

        <div className="space-y-4 mt-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blade Length
            </label>
            <input
              type="text"
              placeholder="Enter Blade Length From (6\' to 50\')"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.bladeLength}
              onChange={(e) => handleInputChange("bladeLength", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blade Finish
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.bladeFinish}
              onChange={(e) => handleInputChange("bladeFinish", e.target.value)}
            >
              <option value="">Select Blade Finish</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Engraving Details
            </label>
            <textarea
              placeholder="Enter Engraving Details"
              rows={4}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.engravingDetails}
              onChange={(e) =>
                handleInputChange("engravingDetails", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              placeholder="Enter Additional Comments"
              rows={8}
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.additionalComments}
              onChange={(e) =>
                handleInputChange("additionalComments", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      <div className="flex md:justify-end justify-center gap-4">
        <button
          onClick={handleBack}
          className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-10 py-2 bg-darkGreen text-white rounded-full hover:bg-green-800"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="border relative shadow-2xl border-gray-500 rounded-lg p-6">
        <h3 className="text-lg absolute -top-4 bg-white left-10 font-medium mb-6">Handle Options</h3>

        <div className="space-y-4 mt-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Handle Length
            </label>
            <input
              type="text"
              placeholder="Enter Handle Length From (4\' to 25\')"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.handleLength}
              onChange={(e) =>
                handleInputChange("handleLength", e.target.value)
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Material
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.primaryMaterial}
              onChange={(e) =>
                handleInputChange("primaryMaterial", e.target.value)
              }
            >
              <option value="">Select Primary Material</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Material
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.secondaryMaterial}
              onChange={(e) =>
                handleInputChange("secondaryMaterial", e.target.value)
              }
            >
              <option value="">Select Secondary Material</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Handle Type
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.handleType}
              onChange={(e) => handleInputChange("handleType", e.target.value)}
            >
              <option value="">Select Handle Type</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex md:justify-end justify-center gap-4">
        <button
          onClick={handleBack}
          className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-10 py-2 bg-darkGreen text-white rounded-full hover:bg-green-800"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="border relative shadow-2xl border-gray-500 rounded-lg p-6">
        <h3 className="text-lg absolute -top-4 bg-white left-10 font-medium mb-6">Scabbard Options</h3>

        <div className="space-y-4 mt-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scabbard Material
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.scabbardMaterial}
              onChange={(e) =>
                handleInputChange("scabbardMaterial", e.target.value)
              }
            >
              <option value="">Select Scabbard Material</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scabbard Color
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.scabbardColor}
              onChange={(e) =>
                handleInputChange("scabbardColor", e.target.value)
              }
            >
              <option value="">Select Scabbard Color</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chappe
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.chappe}
              onChange={(e) => handleInputChange("chappe", e.target.value)}
            >
              <option value="">Select Chappe</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex md:justify-end justify-center gap-4">
        <button
          onClick={handleBack}
          className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-10 py-2 bg-darkGreen text-white rounded-full hover:bg-green-800"
        >
          Next
        </button>
      </div>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="border border-gray-500 shadow-2xl relative rounded-lg p-6">
        <h3 className="text-lg absolute -top-4 bg-white left-10 font-medium mb-6">Contact Form</h3>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter Street Address"
            className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={formData.fullAddress}
            onChange={(e) => handleInputChange("fullAddress", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            >
              <option value="">Select Country</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State <span className="text-red-500">*</span>
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            >
              <option value="">Select State</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter City Name"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Enter Postal Code"
              className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.postalCode}
              onChange={(e) => handleInputChange("postalCode", e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-start space-x-3 mt-6">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-500 rounded"
            checked={formData.agreedToTerms}
            onChange={(e) =>
              handleInputChange("agreedToTerms", e.target.checked)
            }
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I'm over 18 years old and I have agreed to{" "}
            <a href="#" className="text-green-600 underline">
              Terms & Condition
            </a>{" "}
            and{" "}
            <a href="#" className="text-green-600 underline">
              Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>

      <div className="flex mb-4 md:justify-end justify-center gap-4">
        <button
          onClick={handleBack}
          className="px-10 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        >
          Back
        </button>
        <button
          onClick={() => alert("Quote requested!")}
          className="px-6 py-2 bg-darkGreen text-white rounded-full hover:bg-green-800"
        >
          Request A Quote
        </button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      default:
        return renderStep1();
    }
  };

  return (
    <main>
        <Hero/>
      <div className="container mx-auto my-10 p-6 bg-white">
        {renderProgressBar()}
        {renderCurrentStep()}
      </div>
    </main>
  );
};

export default CustomKhukuri;
