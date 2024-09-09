"use client";
import Button from "../ui/Button";
import BankInformationModal from "./BankInfoModal";
import { useState } from "react";
import Image from "next/image";
import siteSettings from "../../data/site-settings.json";
import Link from "next/link";

const Divider = () => <hr className="w-[110%] h-1 bg-rosemary-300 px-8" />;

export const WaysToDonate = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center justify-center md:flex-row bg-rosemary-50">
      {/* PayPal
      ------------------------------------------------------------ */}
      <Link
        className="flex flex-col gap-2 items-center hover:drop-shadow-md"
        href={siteSettings.donate.byPaypal}
      >
        <Image
          className="h-9"
          src="/images/paypal-color.svg"
          alt="PayPal Logo"
          width={200}
          height={200}
        />
        <Divider />
        <Button variant="rosemary">Donate with PayPal</Button>
      </Link>

      {/* Open Collective
      ------------------------------------------------------------ */}
      <Link
        className="flex flex-col gap-2 items-center hover:drop-shadow-md"
        href={siteSettings.donate.byOpenCollective}
      >
        <Image
          className="h-9"
          src="/images/opencollective-wordmark.svg"
          width={200}
          height={200}
          alt="Open Collective Logo"
        />
        <Divider />
        <Button variant="rosemary">Use a Debit / Credit Card</Button>
      </Link>

      {/* Bank Transfer
      ------------------------------------------------------------ */}
      <div
        className="h-full flex flex-col gap-2 items-center cursor-pointer hover:drop-shadow-md"
        onClick={() => setModalIsOpen(true)}
      >
        <Image
          src="/images/direct_transfer.svg"
          className="h-9 w-9"
          alt="Dollar sign"
          width={200}
          height={200}
        />
        <Divider />
        <Button variant="rosemary">Make a Bank Transfer</Button>
      </div>
      {/* NOTE: absolutely positioned, so not in flex flow */}
      <BankInformationModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};
