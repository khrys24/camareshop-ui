import React from "react";

const FAQs = () => {
  return (
    <div className="container">
      <div
        className="accordion accordion-flush container"
        id="FAQs"
        style={{ margin: "150px 0" }}
      >
        <h3 style={{ margin: "100px 0 50px 0" }}>Frequently Asked Questions</h3>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Do you sell WHOLESALE for clients?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>
                Yes, we sell to many fine hotels, restaurants, clubs, coffee
                companies, and stores at either wholesale or discounted pricing.
                If you hold a Resale License for food and would like more
                information or pricing, Please submit an online inquiry.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What are the sizes of your cakes?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>
                Our cakes ranges from 6 inches diameter cakes to 8 inches
                diameter cakes.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What type of payment do you accept
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>We currently accept CASH ON DELIVERY ONLY.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Can we OPT FOR PICK-UP?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>
                Yes. While we highly recommend having a professional baker
                handle your delivery, some orders may be suitable for pickup (by
                family, friends, or wedding coordinators) at our bakery during
                specific times. NOTE: If we do not handle the delivery, you are
                responsible for the order once it leaves the bakery. Pick up at
                our shop is typically available most weekdays 8am-5pm and
                Saturdays 11am-1pm; please confirm ahead of time to ensure
                someone is here.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What's the difference between layered and tiered cakes?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>
                A classic (think: Duncan Hines) birthday cake is a “Single Tier
                Round” with 3 “Layers” hidden under the frosting. <br /> A
                classic Wedding Cake has multiple “Tiers” for height. Our cake
                tiers are 3-layers each unless otherwise designed with you.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
             What are your most ordered cakes?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#FAQs"
          >
            <div className="accordion-body text-start">
              <p>
                Our best sellers include:
                <ul>
                  <li>Mocha Cake</li>
                  <li>Black Forest Cake</li>
                  <li>Orange-strawberry fondant cake</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
