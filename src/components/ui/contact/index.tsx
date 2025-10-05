import { Routes } from "@/constants/enums";
import MainHeading from "../main-heading";

async function Contact() {
  return (
    <section className="section-gap" id={Routes.CONTACT}>
      <div className="container text-center">
        <MainHeading title="Contact Us" subtitle="Don't Hesitate" />
        <div className="mt-8">
          <a className="text-4xl underline opacity-25" href="tel:+2010286485">
            +2010286482
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
