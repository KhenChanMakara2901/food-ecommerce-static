import Image from "next/image";
import Hero from "@/src/components/Hero/Index";
import ContactUs from "@/src/components/ContactUs/Index";
import Category from "@/src/components/Category/Index";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <ContactUs />
    </>
  );
}
