import React from 'react';

function Timeline() {
  return (
    <div className="flex">
      <div className="w-1/2 border-r border-green-500 p-8">
        <div className="flex flex-col items-center">
          <div className="p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              alt="Profile"
              className="h-28 w-28"
            />
          </div>
          <h2 className="text-3xl text-green-500 mb-4">Michelle Knowles</h2>
          <div className="flex flex-col text-left gap-2">
            <div className="flex items-center">
              <span>Email:</span>
              <span>michelleknowles@gmail.com</span>
            </div>
            <div className="flex items-center">
              <span>ID No:</span>
              <span>19711009-00001-1623-01</span>
            </div>
            <div className="flex items-center">
              <span>Phone:</span>
              <span>+255678645794</span>
            </div>
            <div className="flex items-center">
              <span>Account:</span>
              <span>0986e776564538</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 p-8">
        <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <ol class="border-l border-neutral-300 dark:border-neutral-500">

<li>
  <div class="flex-start flex items-center pt-3">
    <div
      class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
    <p class="text-sm text-neutral-500 dark:text-neutral-300">
      01.07.2021
    </p>
  </div>
  <div class="mb-6 ml-4 mt-2">
    <h4 class="mb-1.5 text-xl font-semibold">bought 2 tons of maize</h4>

  </div>
</li>


<li>
  <div class="flex-start flex items-center pt-2">
    <div
      class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
    <p class="text-sm text-neutral-500 dark:text-neutral-300">
      13.09.2021
    </p>
  </div>
  <div class="mb-6 ml-4 mt-2">
    <h4 class="mb-1.5 text-xl font-semibold">purchase pending.....</h4>

  </div>
</li>


<li>
  <div class="flex-start flex items-center pt-2">
    <div
      class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
    <p class="text-sm text-neutral-500 dark:text-neutral-300">
      25.11.2021
    </p>
  </div>
  <div class="ml-4 mt-2 pb-5">
    <h4 class="mb-1.5 text-xl font-semibold">Received 3% offer per 2ton</h4>
 
  </div>
</li>
</ol>
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
