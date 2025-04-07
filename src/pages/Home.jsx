import React from "react";

function Home() {
  return (
    <div className="min-w-60 w-[744px] max-md:max-w-full">
      <div className="max-md:max-w-full">
        <div className="flex flex-wrap items-end whitespace-nowrap max-md:max-w-full">
          <div className="text-2xl text-zinc-800">Rooms</div>
          <div className="text-base rounded-none min-w-60 text-zinc-900 w-[438px] max-md:max-w-full">
            <div className="flex gap-4 px-4 py-3.5 bg-white rounded-xl shadow-[0px_2px_5px_rgba(0,0,0,0.25)]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fe4875f75c3dcb8fb2b4cc279b5d7239f5121a6?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="Search icon"
              />
              <div className="flex-auto my-auto w-[361px]">Search...</div>
            </div>
          </div>
        </div>
        <div className="flex relative gap-6 items-start mt-7 text-xl text-stone-900 max-md:max-w-full">
          <div className="flex z-0 shrink-0 rounded-3xl h-[171px] shadow-[0px_2px_6px_rgba(0,0,0,0.25)] w-[168px]" />
          <div className="flex z-0 shrink-0 bg-white rounded-3xl h-[170px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] w-[168px]" />
          <div className="flex z-0 shrink-0 bg-white rounded-3xl h-[170px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] w-[168px]" />
          <div className="flex z-0 shrink-0 bg-white rounded-3xl h-[170px] shadow-[0px_2px_4px_rgba(0,0,0,0.25)] w-[168px]" />
          <div className="absolute z-0 h-6 bottom-[39px] left-[212px] w-[114px]">
            Living Room
          </div>
          <div className="absolute bottom-4 z-0 text-base h-[19px] left-[212px] w-[82px]">
            12 Devices
          </div>
          <div className="absolute z-0 h-6 bottom-[39px] right-[254px] w-[86px]">
            Bedroom
          </div>
          <div className="absolute bottom-4 z-0 text-base h-[19px] right-[268px] w-[72px]">
            4 Devices
          </div>
          <div className="absolute z-0 h-6 bottom-[39px] right-[54px] w-[94px]">
            Bathroom
          </div>
          <div className="absolute bottom-4 z-0 text-base h-[19px] right-[76px] w-[72px]">
            3 Devices
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ec7b3aca72d39e59a6f1f695a4606759a24b119?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain absolute left-5 top-7 z-0 shrink-0 w-12 h-12 rounded-xl aspect-square"
            alt="Kitchen icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a50663f694ec78d4839b34f6dde798e2e1e4887?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain absolute top-7 z-0 shrink-0 w-12 h-12 rounded-xl aspect-square left-[212px]"
            alt="Living Room icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a0bbcdb6f1337594017dfd34bd534fc3e86b976?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain absolute top-7 z-0 shrink-0 w-12 h-12 rounded-xl aspect-square right-[292px]"
            alt="Bedroom icon"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/31c207eef3581e919e7d62bb5567729ceb51896d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain absolute top-7 z-0 shrink-0 w-12 h-12 rounded-xl aspect-square right-[100px]"
            alt="Bathroom icon"
          />
          <div className="absolute left-5 z-0 h-6 text-white bottom-[39px] w-[71px]">
            Kitchen
          </div>
          <div className="absolute bottom-4 left-5 z-0 text-base text-white h-[19px] w-[72px]">
            8 Devices
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-[744px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full text-2xl whitespace-nowrap text-zinc-800">
          <div>Levels</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain shrink-0 my-auto w-6 aspect-square"
            alt="More options"
          />
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
          <div className="rounded-none min-w-60 w-[360px]">
            <div className="flex flex-col items-start px-5 py-5 w-full bg-white rounded-2xl shadow-[0px_2px_6px_rgba(0,0,0,0.25)]">
              <div className="flex gap-4 items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d604fb4340ae5de13c2bd780f8a7a3ff16b6f9d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                  className="object-contain shrink-0 self-stretch w-12 rounded-xl aspect-square"
                  alt="Kitchen energy icon"
                />
                <div className="self-stretch my-auto text-xl basis-auto text-neutral-600">
                  Kitchen Energy
                </div>
                <div className="flex gap-1 self-stretch my-auto text-base whitespace-nowrap text-stone-900">
                  <div className="grow">Today</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                    className="object-contain shrink-0 self-start w-5 aspect-square"
                    alt="Calendar icon"
                  />
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ebfc25ce2b4a71007b5bcb2b076ba9d68c17065?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain z-10 mt-8 rounded-3xl aspect-[7.04] w-[309px]"
                alt="Energy graph"
              />
              <div className="flex gap-5 justify-between self-center mt-0 max-w-full w-[281px]">
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
                <div className="shrink-0 w-px border border-sky-500 border-solid h-[60px]" />
              </div>
              <div className="flex gap-6 mt-16 ml-4 text-sm text-neutral-700 max-md:mt-10 max-md:ml-2.5">
                <div className="grow">12 PM</div>
                <div>1 PM</div>
                <div>2 PM</div>
                <div>3 PM</div>
                <div>4 PM</div>
                <div>5 PM</div>
              </div>
            </div>
          </div>
          <div className="rounded-none min-w-60 w-[360px]">
            <div className="px-5 pt-6 pb-4 w-full bg-white rounded-2xl shadow-[0px_2px_6px_rgba(0,0,0,0.25)] max-md:pr-5">
              <div className="flex gap-5 justify-between max-md:mr-2.5">
                <div className="flex gap-4 text-xl text-neutral-600">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0336d6d1d4ff356318aac83b58336b4e981b9ba8?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                    className="object-contain shrink-0 w-12 rounded-xl aspect-square"
                    alt="Total energy icon"
                  />
                  <div className="my-auto basis-auto">Total Energy</div>
                </div>
                <div className="flex gap-1 my-auto text-base whitespace-nowrap text-stone-900">
                  <div className="grow">Week</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46e662a296fbcb872755f5090f0c9c193565385d?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                    className="object-contain shrink-0 self-start w-5 aspect-square"
                    alt="Calendar icon"
                  />
                </div>
              </div>
              <div className="flex mt-6">
                <div className="z-10 grow shrink-0 self-end mt-1.5 -mr-6 basis-0 w-fit">
                  <div className="shrink-0 h-px border border-dashed border-stone-300" />
                  <div className="flex max-md:pr-5">
                    <div className="flex flex-auto self-end mt-2 mr-0">
                      <div className="self-end mt-3 mr-0 w-full">
                        <div className="shrink-0 h-px border border-dashed border-stone-300" />
                        <div className="flex mt-2.5 max-md:pr-5">
                          <div className="self-end mt-2.5 mr-0">
                            <div className="shrink-0 h-px border border-dashed border-stone-300" />
                            <div className="shrink-0 mt-5 h-px border border-dashed border-stone-300" />
                          </div>
                          <div className="flex shrink-0 w-6 bg-indigo-50 rounded h-[30px]" />
                        </div>
                      </div>
                      <div className="flex shrink-0 w-6 bg-indigo-50 rounded h-[52px]" />
                    </div>
                    <div className="flex gap-3.5 text-xs text-sky-500">
                      <div className="flex shrink-0 self-end mt-7 w-6 bg-indigo-50 rounded h-[34px]" />
                      <div className="flex shrink-0 w-6 bg-indigo-50 rounded h-[60px]" />
                      <div className="flex shrink-0 self-start mt-3 w-6 h-12 bg-indigo-50 rounded" />
                      <div className="flex flex-col self-end mt-5">
                        <div>20.6 kWh</div>
                        <div className="flex shrink-0 self-center mt-1 w-6 h-6 bg-sky-500 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 w-6 bg-indigo-50 rounded h-[67px]" />
              </div>
              <div className="flex gap-5 mt-3.5 text-sm whitespace-nowrap text-neutral-700">
                <div className="grow">Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full max-w-[744px] max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full text-2xl whitespace-nowrap text-zinc-800">
          <div>Devices</div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/532a561b369244aabf15e221fc4411e7013c96ce?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
            className="object-contain shrink-0 my-auto w-6 aspect-square"
            alt="More options"
          />
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
          <div className="rounded-none w-[168px]">
            <div className="flex flex-col items-start px-4 py-5 bg-white rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              <div className="text-xl text-zinc-600">Off</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc88d480dfb45978b14388b80d7b24537221e539?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain mt-7 rounded-none aspect-square w-[50px]"
                alt="Air Conditioner"
              />
              <div className="self-stretch mt-4 text-base text-blue-900">
                Air Conditioner
              </div>
            </div>
          </div>
          <div className="rounded-none w-[168px]">
            <div className="flex flex-col items-start px-4 py-5 bg-blue-200 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              <div className="text-xl text-zinc-600">On</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f5fd09ec9fdf861300da0d8fa3fec4ef5dff0c3?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain mt-7 rounded-none aspect-square w-[50px]"
                alt="Smart TV"
              />
              <div className="mt-4 text-base text-blue-900">Smart TV</div>
            </div>
          </div>
          <div className="rounded-none w-[168px]">
            <div className="flex flex-col items-start px-4 py-5 bg-white rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              <div className="text-xl text-zinc-600">Off</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e144b926df3561d6ff16f507a36a1d990793cf15?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain mt-7 rounded-none aspect-square w-[50px]"
                alt="Coffee Machine"
              />
              <div className="self-stretch mt-4 text-base text-blue-900">
                Coffee Machine
              </div>
            </div>
          </div>
          <div className="whitespace-nowrap rounded-none w-[168px]">
            <div className="flex flex-col items-start px-4 py-5 bg-blue-200 rounded-3xl shadow-[0px_2px_4px_rgba(0,0,0,0.25)] max-md:px-5">
              <div className="text-xl text-zinc-600">On</div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/14939071a24ac744aee88d761bf52adb2c0bf782?placeholderIfAbsent=true&apiKey=4450958e453149c3ba146ee9b9586ae1"
                className="object-contain mt-7 rounded-none aspect-square w-[50px]"
                alt="Refrigerator"
              />
              <div className="mt-4 text-base text-blue-900">Refrigerator</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
