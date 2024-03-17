import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";

export default function DesktopOnePage() {
  return (
    <>
      <Helmet>
        <title>Oshodi's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="flex self-stretch p-[39px] sm:p-5 bg-blue_gray-100">
            <Text size="7xl" as="p" className="ml-[571px] md:ml-0 !font-inter">
              header
            </Text>
          </div>
          <div className="flex flex-col self-stretch items-center justify-center p-[27px] sm:p-5 bg-green-A100">
            <Heading size="md" as="h1" className="mt-[3px] !text-indigo-900 !font-inter">
              Buy Ticket
            </Heading>
            <Text size="lg" as="p" className="!font-inter">
              <span className="text-black-900">Home / </span>
              <span className="text-cyan_400">Ticket</span>
            </Text>
          </div>
          <Heading size="md" as="h2" className="mt-[72px] !text-indigo-900 !font-inter">
            Get Your Ramadan Ticket
          </Heading>
          <div className="flex md:flex-col w-full mt-[71px] pr-[108px] gap-px mx-auto md:pr-5 md:p-5 max-w-[1101px]">
            <div className="flex w-[47%] md:w-full p-[17px] border-green-700 border border-solid bg-white-A700">
              <div className="flex flex-col items-end w-full mt-[124px] mb-[15px] gap-6">
                <div className="flex self-stretch justify-between items-center mr-[9px] gap-5 md:mr-0">
                  <Img src="images/img_image_4.png" alt="price300_one" className="w-[45%] object-cover" />
                  <Text size="2xl" as="p" className="!font-inter">
                    Price: #300
                  </Text>
                </div>
                <Button
                  size="xs"
                  variant="gradient"
                  color="green_300_green_800"
                  className="sm:px-5 font-inter font-bold min-w-[178px] rounded-[10px]"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
            <Button
              size="xl"
              className="mb-[258px] md:mb-0 sm:px-5 rounded-bl-[20px] rounded-br-[20px] font-inter font-bold min-w-[229px]"
            >
              IFTAR
            </Button>
            <div className="flex flex-col items-end w-[47%] md:w-full gap-[49px] p-8 sm:p-5 border-green-700 border border-solid bg-white-A700">
              <Text size="2xl" as="p" className="mt-[139px] mr-3 md:mr-0 !font-inter">
                Price: #300
              </Text>
              <Button
                size="xs"
                variant="gradient"
                color="green_300_green_800"
                className="mr-[3px] md:mr-0 sm:px-5 font-inter font-bold min-w-[178px] rounded-[10px]"
              >
                BUY NOW
              </Button>
            </div>
            <Button
              size="xl"
              className="mb-[258px] md:mb-0 sm:px-5 rounded-bl-[20px] rounded-br-[20px] font-inter font-bold min-w-[255px]"
            >
              SAHOOR
            </Button>
          </div>
        </div>
        <div className="flex sm:flex-col items-start mt-[55px] ml-[158px] gap-1.5 md:ml-0">
          <Text size="4xl" as="p" className="!text-indigo-900 text-center underline">
            View All Transactions{" "}
          </Text>
          <Img src="images/img_line_md_arrow_right.svg" alt="linemdarrow_one" className="h-[24px] w-[24px] mt-2.5" />
        </div>
        <div>
          <div className="flex mt-[-1px] p-[15px] bg-blue_gray-100">
            <Text size="7xl" as="p" className="mb-6 ml-[595px] md:ml-0 !font-inter">
              footer
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
