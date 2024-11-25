import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Stock } from "@/components/Stocks/page";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicStockPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Stock />
    </DefaultLayout>
  );
};

export default BasicStockPage;
