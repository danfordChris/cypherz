import React, { useState } from 'react';

const PaymentDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true); // Assuming the checkbox is initially checked

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreedToTerms(!agreedToTerms);
  };

  const handleSubscribe = () => {
    // Implement your subscribe logic here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div className="container my-24 mx-auto md:px-6 ">
      <section className="mb-32 text-center">
        <div className="flex flex-wrap ">
          <div className="w-full shrink-0 grow-0 basis-auto md:w-8/12 lg:w-7/12 xl:w-6/12 bg-green-200">
            <div className="mb-12 ">
              <h2 className="mb-6 text-3xl font-bold text-black">Payment Details</h2>
            </div>

            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-none focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput90"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <label
                  className="pointer-events-none absolute top-[-1.5rem] left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-none dark:text-black dark:peer-focus:text-primary"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-none focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleInput91"
                  placeholder="Email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label
                  className="pointer-events-none absolute top-[-1.5rem] left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-none dark:text-black dark:peer-focus:text-primary"
                  htmlFor="exampleInput91"
                >
                  Email address
                </label>
              </div>

              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition-none hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700 dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] bg-green-800 dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={handleSubscribe}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentDetails;
