import React from "react";
import "./Dashboard.css";

import Search from "./Search";
import PaymentDetails from "./PaymentDetails";

function Darshbord() {
  return (
    <>
      <div className="dashboardPage">
        <div className="searchProduct">
          <Search />
          <div className="flex justify-left items-left h-screen">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-green-800 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="text-white px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="text-white px-6 py-3">
                      Amount /kg
                    </th>
                    <th scope="col" className="text-white px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="text-white px-6 py-3">
                      Price /Tsh
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-green-700 dark:border-green-800">
                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                      Maize
                    </th>
                    <td className="text-white px-6 py-4">100</td>
                    <td className="text-white px-6 py-4">Food</td>
                    <td className="text-white px-6 py-4">300,000</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-green-700 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Beans
                    </th>
                    <td className="text-white px-6 py-4">75</td>
                    <td className="text-white px-6 py-4">Food</td>
                    <td className="text-white px-6 py-4">225,000</td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-green-700 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Mangoes
                    </th>
                    <td className="text-white px-6 py-4">50</td>
                    <td className="text-white px-6 py-4">Fruits</td>
                    <td className="text-white px-6 py-4">125,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <PaymentDetails />
      </div>
    </>
  );
}

export default Darshbord;
