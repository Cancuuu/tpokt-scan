import React from "react";

export const Navbar = () => {
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask connected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="griddie items-center px-16">
      <div className="col-start-1 col-end-3">
        <h2>tPOKT scan</h2>
      </div>
      <li className="flex justify-between col-start-4 col-end-9">
        <ul>Chart #1</ul>
        <ul>Chart #2</ul>
        <ul>Chart #3</ul>
      </li>

      <button
        onClick={connectWallet}
        className="px-2 py-4 bg-orange-600 rounded-xl col-start-12 col-end-13"
      >
        Connect Wallet
      </button>
    </nav>
  );
};
