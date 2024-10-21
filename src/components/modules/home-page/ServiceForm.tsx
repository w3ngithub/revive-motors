"use client";

import { Input } from "@/components/ui/Input";
import Image from "next/image";
import serviceFormData from "../../../json/service-form.json";
import { Button } from "../../ui/Button";
import { MoveRight } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface FormValues {
  locationFirst: string;
  locationSecond: string;
  locationThird: string;
  phoneNumber: string;
}
interface FormErrors {
  locationFirst?: string;
  locationSecond?: string;
  locationThird?: string;
  phoneNumber?: string;
}

const ServiceForm = () => {
  const { heading, services, knowMore } = serviceFormData;

  const initialFormValues: FormValues = {
    locationFirst: "",
    locationSecond: "",
    locationThird: "",
    phoneNumber: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (): FormErrors => {
    let errors: FormErrors = {};
    const phoneNumberPattern = /^\+?[\d\s()-]{10,15}$/;

    if (!formValues.locationFirst.trim()) {
      errors.locationFirst = "First location is required";
    }
    if (!formValues.locationSecond.trim()) {
      errors.locationSecond = "Second location is required";
    }
    if (!formValues.locationThird.trim()) {
      errors.locationThird = "Third location is required";
    }
    if (!formValues.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!phoneNumberPattern.test(formValues.phoneNumber)) {
      errors.phoneNumber =
        "Phone Number is invalid. Please use a valid format.";
    } else if (/[^0-9\s\+\-\(\)]/.test(formValues.phoneNumber)) {
      errors.phoneNumber =
        "Phone Number can only contain digits, spaces, +, -, (, and ).";
    }

    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      toast.success("Successfully submitted");
      // Reset the form fields
      setFormValues(initialFormValues);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <section className="my-10 flex min-h-[100vh] w-full flex-row items-center justify-center overflow-hidden bg-customColor-steelGrey">
        <div className="container my-10 flex flex-row items-start justify-center gap-6 pt-3 max-lg:flex-col">
          <div className="flex flex-col items-start gap-[53px]">
            <h2 className="max-w-[624px] text-h2 font-extrabold leading-tight">
              {heading}
            </h2>
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="align-center flex flex-row justify-center gap-4 hover:cursor-pointer"
                >
                  <div className="">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH + service.iconSrc}`}
                      width={47}
                      height={47}
                      alt={service.altText}
                      className="max-sm:w-[90px]"
                    />
                  </div>
                  <div className="max-w-[360px]">
                    <p className="text-t2 font-semibold">{service.title}</p>
                    <p className="text-b2 text-customColor-grey">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="ml-11 flex flex-row items-center gap-6 pl-2 hover:cursor-pointer max-sm:ml-0">
              <p className="text-b1 font-semibold">{knowMore.text} </p>
              <span className="w-[52px]">
                <MoveRight
                  className="arrow-icon w-full"
                  size={48}
                  strokeWidth={1}
                />
              </span>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col gap-6">
              <h3 className="text-h3 font-bold leading-tight max-lg:mt-7 max-sm:font-extrabold">
                Get a quote for the car service
              </h3>
              <form
                className="flex flex-col flex-wrap gap-1"
                onSubmit={handleSubmit}
              >
                <Input
                  className="h-[72px] w-full rounded-sm sm:w-[480px] md:w-[540px] lg:w-[624px]"
                  placeholder="Enter your first location"
                  id="locationFirst"
                  name="locationFirst"
                  value={formValues.locationFirst}
                  onChange={handleChange}
                />
                {formErrors.locationFirst && (
                  <p className="text-sm text-red-500">
                    {formErrors.locationFirst}
                  </p>
                )}
                <Input
                  className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                  placeholder="Enter your second location"
                  id="locationSecond"
                  name="locationSecond"
                  value={formValues.locationSecond}
                  onChange={handleChange}
                />
                {formErrors.locationSecond && (
                  <p className="text-sm text-red-500">
                    {formErrors.locationSecond}
                  </p>
                )}

                <Input
                  className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                  placeholder="Enter your third location"
                  id="locationThird"
                  name="locationThird"
                  value={formValues.locationThird}
                  onChange={handleChange}
                />
                {formErrors.locationThird && (
                  <p className="text-sm text-red-500">
                    {formErrors.locationThird}
                  </p>
                )}

                <Input
                  className="h-[72px] w-full sm:w-[480px] md:w-[540px] lg:w-[624px]"
                  type="tel"
                  placeholder="+977-9840123456"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  pattern="^\+?[\d\s()-]{10,15}$"
                />
                {formErrors.phoneNumber && (
                  <p className="text-sm text-red-500">
                    {formErrors.phoneNumber}
                  </p>
                )}

                <Button className="mt-5 max-h-[64px] max-w-[203px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
                  Get your quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceForm;
