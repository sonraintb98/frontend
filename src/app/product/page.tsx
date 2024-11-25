import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import { Product } from "@/components/Products/page";

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicProductPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Product />
    </DefaultLayout>
  );
};

export default BasicProductPage;
