"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface FormValues {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

const ContactForm = () => {
  const serviceItems = [
    { title: "Auto Diagnostics" },
    { title: "Body Work" },
    { title: "Car wash" },
  ];

  const initialFormValues: FormValues = {
    name: "",
    email: "",
    service: "",
    message: "",
  };

  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSelectChange = (value: string) => {
    setFormValues({ ...formValues, service: value });
  };

  const validate = (): FormErrors => {
    let errors: FormErrors = {};

    if (!formValues.name.trim()) {
      errors.name = "Full Name is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formValues.service) {
      errors.service = "Please select a service";
    }

    if (!formValues.message.trim()) {
      errors.message = "Message is required";
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
      <section className="flex min-h-[100vh] w-full flex-row items-center justify-center bg-customColor-white 2xl:min-h-[550px] 2xl:mt-8">
        <div className="container grid h-auto w-[1244px] grid-cols-1 gap-11 lg:h-[628px] lg:grid-cols-2 2xl:w-full 2xl:gap-[7rem]">
          <div className="">
            <div className="">
              <div className="flex flex-col gap-6 max-2xl:my-10 overflow-auto">
                <h1 className="max-w-[507px] text-h1 font-extrabold leading-tight max-lg:mt-7 max-sm:font-extrabold 2xl:max-w-[520px]">
                  Get in touch with our experts
                </h1>
                <form
                  className="flex flex-col flex-wrap gap-1"
                  onSubmit={handleSubmit}
                >
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black focus:!outline-none"
                    placeholder="Your Full Name"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <p className="text-sm text-red-500">{formErrors.name}</p>
                  )}
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Your Email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{formErrors.email}</p>
                  )}
                  <div>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formValues.service}
                    >
                      <SelectTrigger className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceItems.map((service, index) => (
                          <SelectItem key={index} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {formErrors.service && (
                      <p className="text-sm text-red-500">
                        {formErrors.service}
                      </p>
                    )}
                  </div>
                  <Input
                    className="h-[72px] w-full rounded-sm bg-customColor-lightGrey text-b2 font-semibold text-customColor-black"
                    placeholder="Message"
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  {formErrors.message && (
                    <p className="text-sm text-red-500">{formErrors.message}</p>
                  )}

                  <Button className="mt-5 max-h-[64px] max-w-[203px] rounded-xl bg-customColor-primary p-7 px-9 text-b1 text-customColor-white">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="items-between flex flex-col justify-center gap-6 max-sm:mb-5 2xl:mt-5">
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Address
                </p>
                <p className="text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  NH 234 Public Square San Francisco 65368
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Contact Details
                </p>
                <p className="max-w-[231px] text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  1800 265 24 52 Finsweet@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p className="mb-1 text-b2 font-semibold text-customColor-grey">
                  Opening Hours
                </p>
                <p className="text-t2 font-semibold text-customColor-black max-sm:text-b1">
                  Monday to Friday 9:00 AM to 10:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
