import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img } from "../../components";

export default function DesktopThreePage() {
  return (
    <>
      <Helmet>
        <title>Oshodi's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full p-10 sm:p-5 bg-white-A700">
        <div className="flex flex-col w-[91%] md:w-full mb-[84px] ml-1.5 md:ml-0">
          <div className="flex justify-between items-center w-full gap-5 mx-auto md:p-5 max-w-[827px]">
            <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="self-end h-[36px] w-[36px]" />
            <Text size="4xl" as="p" className="text-center">
              Transaction History
            </Text>
          </div>
          <Text size="3xl" as="p" className="mt-[125px] ml-[102px] md:ml-0 uppercase text-center">
            today
          </Text>
          <div className="flex flex-col mt-6 ml-[109px] gap-[21px] md:ml-0">
            <div className="flex flex-col ml-[3px] gap-6 md:ml-0">
              <div className="flex p-[3px] md:p-5 bg-green-800 flex-1 rounded-[30px]">
                <div className="flex md:flex-col items-center w-full mb-[18px] gap-[22px] mx-auto max-w-[1014px]">
                  <Img
                    src="images/img_images_removebg_preview.png"
                    alt="sahoor_ticket"
                    className="self-end w-[8%] md:w-full md:h-auto object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-5 z-[1]">
                      <Heading as="h1" className="self-start !text-white-A700 uppercase text-center">
                        sahoor TICKET
                      </Heading>
                      <Heading as="h2" className="!text-white-A700 uppercase text-center">
                        #300
                      </Heading>
                    </div>
                    <div className="flex justify-between items-start mt-[-2px] gap-5">
                      <div className="flex flex-col items-start">
                        <Heading size="xs" as="h3" className="!text-white-A700 uppercase text-center">
                          id:873849235837
                        </Heading>
                        <Text size="s" as="p" className="mt-[-1px] !text-white-A700 uppercase text-center">
                          10:14am
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="mt-0.5 !text-white-A700 capitalize text-center">
                        sent
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-[3px] md:p-5 bg-green-200 flex-1 rounded-[30px]">
                <div className="flex md:flex-col items-center w-full mb-[18px] gap-6 mx-auto max-w-[1014px]">
                  <Img
                    src="images/img_images_removebg_preview_76x77.png"
                    alt="imagesremovebg"
                    className="self-end w-[77px] md:w-full md:h-auto object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-5 z-[1]">
                      <Heading as="h4" className="self-start uppercase text-center">
                        iftar TICKET
                      </Heading>
                      <Heading as="h5" className="uppercase text-center">
                        #300
                      </Heading>
                    </div>
                    <div className="flex justify-between items-start mt-[-2px] gap-5">
                      <div className="flex flex-col items-start">
                        <Heading size="xs" as="h6" className="uppercase text-center">
                          id:873849235837
                        </Heading>
                        <Text size="s" as="p" className="mt-[-1px] uppercase text-center">
                          10:14am
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="mt-0.5 capitalize text-center">
                        sent
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text size="3xl" as="p" className="uppercase text-center">
              yesterday
            </Text>
            <div className="flex flex-col ml-[3px] gap-6 md:ml-0">
              <div className="flex p-[3px] md:p-5 bg-green-800 flex-1 rounded-[30px]">
                <div className="flex md:flex-col items-center w-full mb-[18px] gap-[22px] mx-auto max-w-[1014px]">
                  <Img
                    src="images/img_images_removebg_preview.png"
                    alt="sahoor_ticket"
                    className="self-end w-[8%] md:w-full md:h-auto object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-5 z-[1]">
                      <Heading as="h2" className="self-start !text-white-A700 uppercase text-center">
                        sahoor TICKET
                      </Heading>
                      <Heading as="h2" className="!text-white-A700 uppercase text-center">
                        #300
                      </Heading>
                    </div>
                    <div className="flex justify-between items-start mt-[-2px] gap-5">
                      <div className="flex flex-col items-start">
                        <Heading size="xs" as="h6" className="!text-white-A700 uppercase text-center">
                          id:873849235837
                        </Heading>
                        <Text size="s" as="p" className="mt-[-1px] !text-white-A700 uppercase text-center">
                          10:14am
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="mt-0.5 !text-white-A700 capitalize text-center">
                        sent
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-[3px] md:p-5 bg-green-200 flex-1 rounded-[30px]">
                <div className="flex md:flex-col items-center w-full mb-[18px] gap-6 mx-auto max-w-[1014px]">
                  <Img
                    src="images/img_images_removebg_preview_76x77.png"
                    alt="imagesremovebg"
                    className="self-end w-[77px] md:w-full md:h-auto object-cover"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center gap-5 z-[1]">
                      <Heading as="h2" className="self-start uppercase text-center">
                        iftar TICKET
                      </Heading>
                      <Heading as="h2" className="uppercase text-center">
                        #300
                      </Heading>
                    </div>
                    <div className="flex justify-between items-start mt-[-2px] gap-5">
                      <div className="flex flex-col items-start">
                        <Heading size="xs" as="h6" className="uppercase text-center">
                          id:873849235837
                        </Heading>
                        <Text size="s" as="p" className="mt-[-1px] uppercase text-center">
                          10:14am
                        </Text>
                      </div>
                      <Text size="xl" as="p" className="mt-0.5 capitalize text-center">
                        sent
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
