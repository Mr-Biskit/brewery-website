import React from "react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Contact() {
  const googleMapsAddress =
    "https://www.google.com/maps?q=Van+Woustraat+36,+1073+LM+Amsterdam,+Netherlands";
  return (
    <div className="w-screen bg-primary justify-center items-center flex flex-col pt-20 pb-16 lg:px-16 px-4">
      <h1 className="text-6xl text-light text-center my-2 mx-2 mt-16 font-heading md:text-7xl lg:text-8xl">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-32 mt-10 mb-10">
        <div className="flex flex-col items-center space-y-4 lg:w-1/3 hover:scale-110 hover:opacity-90">
          <MapPinIcon className="h-8 w-8 text-yellow animate-pulse" />
          <Link
            href={googleMapsAddress}
            className="text-light text-sm font-std md:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Van Woustraat 36, 1073 LM Amsterdam
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4 lg:w-1/3 hover:scale-110 hover:opacity-90">
          <PhoneIcon className="h-8 w-8 text-yellow animate-pulse" />
          <Link
            href={"tel:+31648450378"}
            className="text-light text-sm font-std md:text-base lg:text-lg"
          >
            +31 (0) 64845 0378
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4 lg:w-1/3 hover:scale-110 hover:opacity-90">
          <EnvelopeIcon className="h-8 w-8 text-yellow animate-pulse" />
          <Link
            href={"mailto:shaun@lionsheadbrewing.com"}
            className="text-light text-sm font-std md:text-base lg:text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            shaun@lionsheadbrewing.com
          </Link>
        </div>
      </div>

      <div className="w-full h-[300px] lg:h-[600px]">
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.051874775998!2d4.894698215710592!3d52.35281577978115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6099c9b7e6a01%3A0x3ee068d3bdfd92a0!2sVan%20Woustraat%2036%2C%201073%20LM%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1648263056306!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
