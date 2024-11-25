import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Invoice } from "@/components/Invoices/page";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicInvoicePage: React.FC = () => {
  return (
    <DefaultLayout>
      <Invoice />
    </DefaultLayout>
  );
};

export default BasicInvoicePage;
