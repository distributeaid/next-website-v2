"use client";
import Button from "../ui/Button";
import BankInformationModal from "./BankInfoModal";
import { useState } from "react";
import Image from "next/image";
import siteSettings from "../../data/site-settings.json";
import Link from "next/link";

export const WaysToDonate = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center justify-center md:flex-row bg-rosemary-50">
      <DonateWithPayPalLink />
      <DonateWithDebitCreditCardLink />
      <DonateWithBankTransferLink />
    </div>
  );
};

export const DonateWithPayPalLink = () => {
  return (
    <Link
      className="flex flex-col gap-2 items-center hover:drop-shadow-md"
      href={siteSettings.donate.byPaypal}
    >
      <Image
        className="mt-7 h-9"
        src="/images/paypal-color.svg"
        alt="PayPal Logo"
        width={200}
        height={36}
      />
      <Button variant="default" className="rounded-none">Donate with PayPal</Button>
    </Link>
  );
};

export const DonateWithDebitCreditCardLink = () => {
  return (
    <Link
      className="flex flex-col gap-2 items-center hover:drop-shadow-md"
      href={siteSettings.donate.byOmprakash}
    >
      <Image
        className="h-16"
        src="/images/omprakash.png"
        width={130}
        height={86}
        alt="Omprakash Logo"
      />
      <Button variant="primary" className="rounded-none">Use a Debit/Credit card</Button>
    </Link>
  );
};

export const DonateWithBankTransferLink = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src="/images/direct_transfer.svg"
        className="md:mt-7 h-9"
        alt="Dollar sign"
        width={200}
        height={200}
      />
      <Button
        variant="primary"
        className="rounded-none"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Make a Bank Transfer
      </Button>
      <BankInformationModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </div>
  );
};
