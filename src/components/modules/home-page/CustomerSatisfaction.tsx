import customerSatisfactionData from "../../../json/customer-satisfaction.json";

const CustomerSatisfaction = () => {
  return (
    <section className="bg-customColor-lightGrey">
      <div className="container flex flex-row flex-wrap items-center justify-between py-8 max-lg:gap-x-4 max-lg:gap-y-6 max-sm:gap-y-9 max-sm:justify-center">
        {customerSatisfactionData.map((item, index) => {
          return (
            <div
              key={index}
              className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center"
            >
              <h2 className="text-h2 font-extrabold text-customColor-secondary">
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
