
import ServicesHeader from "./ServicesHeader";
import ServicesMain from "./ServicesMain";
import ServicesContent from "./ServicesContent";
import ServicesSection from "./ServicesSection";
import ServicesFooterEnd from "./ServicesFooterEnd";

function Services() {
  return (
    <div className="servisecRoot">
      <div className="servicesRootChild">
        <button className="servicebtn">SERVICES</button>
        <h2>What are the different types of insurance?</h2>
        <h3>
          There are many different types of insurance, each designed to protect
          you from a different type of risk. Some of the most common types of
          insurance include:
        </h3>
      </div>
      <div className="servicesRootStart">
        <div className="servicesRootStartLeft">
          <img src="/resim38.png" alt="resim38" />
        </div>
        <div className="servicesRootStartRight">
          <h4>Car insurance</h4>
          <h6>
            This type of insurance protects you financially if you are involved
            in a car accident. It can cover the cost of repairs to your car,
            medical expenses, and lost wages.
          </h6>
          <button>Get Started</button>
        </div>
      </div>
      <ServicesHeader />
      <ServicesMain />
      <ServicesContent />
      <ServicesSection />
      <ServicesFooterEnd />
    </div>
  );
}

export default Services;
