import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text } from "../../components";

export default function DesktopSixPage() {
  return (
    <>
      <Helmet>
        <title>Oshodi's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="h-[1024px] w-full pb-[15px] bg-white-A700 relative">
        <div className="flex w-[60%] bottom-[7%] right-0 left-0 p-[21px] m-auto sm:p-5 bg-white-A700 shadow-lg absolute">
          <div className="flex flex-col items-end w-full mt-2.5 ml-[34px] md:ml-0 max-w-[635px]">
            <div className="flex self-stretch justify-between items-center mr-[209px] gap-5 md:mr-0">
              <Img src="images/img_iconoir_cancel.svg" alt="iconoircancel" className="self-end h-[45px] w-[45px]" />
              <Button color="green_800" size="lg" shape="circle" className="w-[72px]">
                <Img src="images/img_subway_tick.svg" />
              </Button>
            </div>
            <Text size="5xl" as="p" className="mt-[7px] mr-[45px] md:mr-0 text-center">
              Transaction successful
            </Text>
            <Text size="6xl" as="p" className="mr-[184px] md:mr-0 text-center line-through">
              <span className="text-black-900">N</span>
              <span className="text-black-900">300</span>
            </Text>
            <div className="w-[82%] md:w-full mt-[21px]">
              <div className="p-2.5 bg-green-A100 rounded-[15px]">
                <div className="flex flex-col mb-[15px]">
                  <div className="flex justify-center p-[5px] bg-green-300 rounded-[15px]">
                    <Text size="4xl" as="p" className="self-end mt-1 text-center">
                      Payment details
                    </Text>
                  </div>
                  <div className="flex justify-between w-[91%] md:w-full mt-[22px] ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="mt-2 text-center">
                      AMOUNT:
                    </Text>
                    <Text as="p" className="text-center">
                      #300
                    </Text>
                  </div>
                  <Text as="p" className="mt-0.5 ml-[18px] md:ml-0 text-center">
                    PAYMENT STATUS:
                  </Text>
                  <div className="h-px mt-1.5 ml-1 md:ml-0 bg-black-900" />
                  <div className="flex justify-between w-[91%] md:w-full mt-2 ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="text-center">
                      MERCHANT NAME:
                    </Text>
                    <Text as="p" className="text-center">
                      LOREM IPSIUM
                    </Text>
                  </div>
                  <div className="flex justify-between w-[91%] md:w-full mt-[3px] ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="text-center">
                      BANK NAME:
                    </Text>
                    <Text as="p" className="text-center">
                      PALMPAY
                    </Text>
                  </div>
                  <div className="flex justify-between w-[91%] md:w-full mt-0.5 ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="text-center">
                      TRANSACTION ID:
                    </Text>
                    <Text as="p" className="text-center">
                      938948094835678459
                    </Text>
                  </div>
                  <div className="flex justify-between w-[91%] md:w-full mt-0.5 ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="text-center">
                      PAYMENT TIME:
                    </Text>
                    <Text as="p" className="text-center">
                      025349583437
                    </Text>
                  </div>
                  <div className="flex justify-between w-[91%] md:w-full mt-0.5 ml-[18px] gap-5 md:ml-0">
                    <Text as="p" className="text-center">
                      SENDER:
                    </Text>
                    <Text as="p" className="text-center">
                      MSSN LASU EPE
                    </Text>
                  </div>
                </div>
              </div>
              <Button
                shape="round"
                leftIcon={<Img src="images/img_antdesignqrcodeoutlined.svg" alt="ant-design:qrcode-outlined" />}
                className="w-full mt-14 gap-1 sm:px-5 !text-black-900"
              >
                Get QRcode
              </Button>
              <Button color="green_800" shape="round" className="w-full mt-2 sm:px-5 text-white-A700">
                Back To Home
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-max pl-[88px] pr-14 gap-[98px] left-0 bottom-0 right-0 top-0 py-[88px] m-auto md:gap-[73px] md:p-5 sm:gap-[49px] bg-black-900_cc absolute">
          <Img src="images/img_iconoir_cancel.svg" alt="iconoircancel" className="h-[45px] w-[45px] mt-4" />
          <Img
            src="images/img_image_6.png"
            alt="imagesix_one"
            className="w-[530px] mb-36 ml-[367px] md:ml-0 object-cover"
          />
        </div>
      </div>
    </>
  );
}
