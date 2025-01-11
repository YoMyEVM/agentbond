import React from "react";

const BuyGenCreditsPage: React.FC = () => {
  return (
    <section className="max-w-screen-lg mx-auto py-8">
      <h1 className="text-4xl font-bold text-[#fd01f5] text-center">
        Purchase Gen Credits
      </h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Buy Button */}
        <div className="flex justify-center items-center">
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1Qg7NjANbA5DNh8yiChz3Pts"
            publishable-key="pk_live_51PtNmAANbA5DNh8ySgAQSlxd3nlcbYGOhbfkZLaSO6xhRUO8m8HUNFwBh5O06bDwsJijMTGiiTr66cZnA4arfg0T00qW8fxFny"
          ></stripe-buy-button>
        </div>

        {/* Right Buy Button */}
        <div className="flex justify-center items-center">
          <script async src="https://js.stripe.com/v3/buy-button.js"></script>
          <stripe-buy-button
            buy-button-id="buy_btn_1Qg7ECANbA5DNh8yPgoVVblP"
            publishable-key="pk_live_51PtNmAANbA5DNh8ySgAQSlxd3nlcbYGOhbfkZLaSO6xhRUO8m8HUNFwBh5O06bDwsJijMTGiiTr66cZnA4arfg0T00qW8fxFny"
          ></stripe-buy-button>
        </div>
      </div>
    </section>
  );
};

export default BuyGenCreditsPage;
