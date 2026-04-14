import { Hero } from "@/components/Hero";
import { Faq } from "@/components/Faq";
import { BigInfo } from "@/components/BigInfo";
import { Address } from "@/components/Address";

export default function Home() {
  return (
    <>
      <Hero />
      <Faq />
      <BigInfo />
      <Address />
    </>
  );
}
