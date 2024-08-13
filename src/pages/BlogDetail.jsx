import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailFoter from "./BlogDetailFoter";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <div className="blogDetail">
      <div className="image-card">
        <img className="image" src="/bd639fd2775e.jpeg" alt="Image" />
      </div>
      <div className="card-blogDeatil-card">
        <h3>22/06/2023</h3>
        <h2>How do I choose the right insurance for me?</h2>
        <h4>
          Insurance is a way to protect yourself financially from unforeseen
          events. It can help you pay for medical expenses, repair your car
          after an accident, or replace your home if it's destroyed by a fire.
          But with so many different types of insurance available, it can be
          tough to know where to start. Here are some tips on how to choose the
          right insurance for you:
        </h4>
        <div className="card-row-3">
          <h1>
            1. Consider your needs. What are your biggest financial risks? What
            would happen if you lost your job, got sick, or had a car accident?
            Once you know your biggest risks, you can start to think about what
            kind of insurance you need.
          </h1>

          <h1>
            2. Do your research. There are many different types of insurance
            available, and each one has its own pros and cons. It's important to
            do your research and understand the different options before you
            make a decision.
          </h1>

          <h1>
            3. Get quotes from multiple companies. Once you know what kind of
            insurance you need, get quotes from multiple companies. This will
            help you compare prices and coverage.
          </h1>

          <h1>
            4. Read the fine print. Before you sign any insurance policy, be
            sure to read the fine print. This is where you'll find information
            about things like deductibles, copays, and exclusions.
          </h1>

          <h1>
            5. Ask questions. If you have any questions about insurance, don't
            be afraid to ask your insurance agent. They should be able to answer
            all of your questions and help you choose the right policy for you.
          </h1>
        </div>

        <div className="card-row-b">
          <h1>
            Here are some additional tips for choosing the right insurance:
          </h1>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Consider your budget: Insurance can be expensive, so it's important
            to factor in your budget when you're making a decision.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Think about your lifestyle: If you have a high-risk lifestyle, you
            may need to purchase more insurance. For example, if you drive a
            lot, you may need to purchase more auto insurance.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Talk to your family: If you have a family, you'll need to consider
            their needs when you're choosing insurance. For example, you may
            want to purchase life insurance to protect your family if you die.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Review your insurance regularly: Your needs may change over time, so
            it's important to review your insurance regularly. This will help
            you make sure that you have the right coverage in place.
          </h3>
        </div>

        <div className="card-row-b">
          <h1>Here are some of the most common types of insurance:</h1>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Consider your budget: Insurance can be expensive, so it's important
            to factor in your budget when you're making a decision.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Homeowners insurance: This type of insurance protects your home and
            belongings from damage caused by fire, theft, and other disasters.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Talk to your family: If you have a family, you'll need to consider
            their needs when you're choosing insurance. For example, you may
            want to purchase life insurance to protect your family if you die.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Review your insurance regularly: Your needs may change over time, so
            it's important to review your insurance regularly. This will help
            you make sure that you have the right coverage in place.
          </h3>

          <h3>
            {" "}
            <img id="imgCard" src="/degree.png" alt="degree" />
            Business insurance: This type of insurance protects your business
            from financial losses due to things like fire, theft, and lawsuits.
          </h3>
        </div>

        <div className="row-blog">
          These are just a few of the many different types of insurance
          available. The right type of insurance for you will depend on your
          individual needs and circumstances. By following the tips above, you
          can choose the right insurance for you and your family.
        </div>
      </div>
      {/* <div className="foter"></div> */}
      <BlogDetailFoter />
    </div>
  );
}
