import React from "react";

import customerSatisfactionData from "../../../json/customer-satisfaction.json";

const CustomerSatisfaction = () => {
  return (
    <section className="bg-customColor-lightGrey ">
      <div className="container flex flex-row justify-between items-center py-8 flex-wrap max-lg:gap-x-4 max-lg:gap-y-6 max-sm:gap-y-9 ">
        {customerSatisfactionData.map((item, index) => {
          return (
            <div className="">
              <h2 className="text-h2 text-customColor-secondary font-extrabold">
                {item.value}
              </h2>
              <p className="text-t2 font-semibold">{item.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerSatisfaction;
