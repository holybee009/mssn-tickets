import React from "react";
import { Button, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function DesktopFour({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")!} isOpen={isOpen} className="min-w-[621px]">
      <div className="flex flex-col items-center justify-end w-full gap-[66px] p-[46px] md:p-5 sm:gap-[33px] bg-white-A700 rounded-[20px]">
        <Text size="8xl" as="p" className="mt-[42px] !font-inter">
          Success
        </Text>
        <Text size="5xl" as="p" className="text-center">
          <>
            Proceed to get your food with <br />
            your QR code
          </>
        </Text>
        <Button
          size="md"
          variant="gradient"
          color="cyan_500_green_700"
          className="mb-[5px] sm:px-5 font-inter font-bold min-w-[461px] rounded-[10px]"
        >
          OK
        </Button>
      </div>
    </ModalProvider>
  );
}
