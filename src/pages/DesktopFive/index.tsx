import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";

export default function DesktopFivePage() {
  return (
    <>
      <Helmet>
        <title>Oshodi's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex justify-end w-full pl-14 pr-[68px] py-[68px] md:p-5 bg-white-A700">
        <div className="w-[78%] md:w-full mb-6 mr-[214px] p-[33px] md:mr-0 sm:p-5 bg-white-A700 shadow-sm">
          <div className="flex flex-col items-end w-full mb-[5px] gap-14 mx-auto sm:gap-7 max-w-[648px]">
            <div className="flex flex-col self-stretch items-end">
              <div className="flex self-stretch justify-between items-start mr-[225px] gap-5 md:mr-0">
                <Img src="images/img_iconoir_cancel.svg" alt="iconoircancel" className="h-[45px] w-[45px] mt-[7px]" />
                <Button color="green_800" size="lg" shape="circle" className="w-[72px]">
                  <Img src="images/img_subway_tick.svg" />
                </Button>
              </div>
              <Text size="5xl" as="p" className="mt-[7px] mr-[61px] md:mr-0 text-center">
                Transaction successful
              </Text>
              <Text size="6xl" as="p" className="mr-[200px] md:mr-0 text-center line-through">
                <span className="text-black-900">N</span>
                <span className="text-black-900">300</span>
              </Text>
              <div className="flex justify-center w-[81%] md:w-full mt-[21px] p-[11px] bg-green-A100 rounded-[15px]">
                <div className="flex flex-col items-center w-full mb-5">
                  <Button color="green_300" shape="round" className="w-full sm:px-5">
                    Payment details
                  </Button>
                  <div className="flex justify-between w-[86%] md:w-full mt-2 gap-5">
                    <Text as="p" className="text-center">
                      AMOUNT:
                    </Text>
                    <Text as="p" className="text-center">
                      #300
                    </Text>
                  </div>
                  <div className="flex justify-between items-start w-[89%] md:w-full mt-2 gap-5">
                    <Text as="p" className="text-center">
                      PAYMENT STATUS:
                    </Text>
                    <Text
                      size="xs"
                      as="p"
                      className="px-[9px] py-px !text-green-800 text-center border-green-800 border border-solid rounded-[9px]"
                    >
                      success
                    </Text>
                  </div>
                  <div className="self-stretch h-px mt-[22px] bg-black-900" />
                  <div className="flex justify-between w-[89%] md:w-full mt-[11px] gap-5">
                    <Text as="p" className="text-center">
                      MERCHANT NAME:
                    </Text>
                    <Text as="p" className="text-center">
                      LOREM IPSIUM
                    </Text>
                  </div>
                  <div className="flex justify-between items-center w-[89%] md:w-full gap-5 z-[1]">
                    <Text as="p" className="text-center">
                      BANK NAME:
                    </Text>
                    <Text as="p" className="text-center">
                      PALMPAY
                    </Text>
                  </div>
                  <div className="flex justify-between items-center w-[89%] md:w-full gap-5">
                    <Text as="p" className="text-center">
                      TRANSACTION ID:
                    </Text>
                    <Text as="p" className="text-center">
                      938948094835678459
                    </Text>
                  </div>
                  <div className="flex justify-between w-[89%] md:w-full gap-5 z-[2]">
                    <Text as="p" className="text-center">
                      PAYMENT TIME:
                    </Text>
                    <Text as="p" className="text-center">
                      025349583437
                    </Text>
                  </div>
                  <div className="flex justify-between w-[89%] md:w-full gap-5">
                    <Text as="p" className="self-end text-center">
                      SENDER:
                    </Text>
                    <Text as="p" className="self-start text-center">
                      MSSN LASU EPE
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[81%] md:w-full gap-2">
              <Button
                shape="round"
                leftIcon={<Img src="images/img_antdesignqrcodeoutlined.svg" alt="ant-design:qrcode-outlined" />}
                className="w-full gap-1 sm:px-5 !text-black-900"
              >
                Get QRcode
              </Button>
              <Button color="green_800" shape="round" className="w-full sm:px-5 text-white-A700">
                Back To Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
