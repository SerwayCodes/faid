"use client";

import React from "react";
import Image from "next/image";
import faid1 from "@/../public/images/faid1.jpg";
import faid2 from "@/../public/images/faid2.jpg";
import faid3 from "@/../public/images/faid3.jpg";
import faid4 from "@/../public/images/faid4.jpg";
import Card from "../components/Card";
import Corousel from "../components/CarouselWithContent";

export default function Home() {
  return (
    <div className="w-full bg-gray-100">
      <div className="text-yellow-500">
      <div className="container mx-auto">
        
          <header className="bg-gray-600 ">
            <h1 className="text-4xl font-bold text-center">
              Future For All In Development (FAID)
            </h1>
            <p className="mt-2 text-lg text-center">
              Working towards food security, self-reliance, and improved livelihoods
            </p>
          </header>

          <main>
            {/* Cards Section */}
            <section className="bg-yellow-500 mb-10 py-6">
              <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
                Organizational Profile
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Card
                  imageSrc={faid1}
                  title="Our Work in Food Security"
                  description="FAID is working towards promoting food security and improved livelihood at the household level and beyond."
                />
                <Card
                  imageSrc={faid2}
                  title="Education and Livelihood"
                  description="We collaborate with partners in the areas of education, climate change, gender equality, and livelihood improvement."
                />
                <Card
                  imageSrc={faid3}
                  title="Environmental Conservation"
                  description="FAID has implemented the 'Mtengo Wanga' project, focusing on environmental conservation through tree planting."
                />
              </div>
            </section>

            {/* Mission Image */}
            <section className="mb-10">
              <Image
                src={faid4}
                alt="FAID Mission Image"
                className="w-full h-auto rounded-lg object-cover mb-4"
              />
            </section>

            {/* Mission Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Mission</h2>
              <p>
                Our mission is to act as a bridge that fills the gap in society&apos;s socio-economic development by providing assistance to ensure equal access to water and sanitation, quality education, effective governance, food security, environmental sustainability, and gender equality.
              </p>
            </section>

            {/* Objectives Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">FAID Objectives</h2>
              <ol className="list-decimal list-inside p-2">
                <li>
                  To ensure effective governance and management practices are implemented in the conservation and protection of the environment, including natural resources and biodiversity, in order to achieve long-term sustainability and resilience.
                </li>
                <li>
                  Promoting disaster risk management by enhancing access to quality education for all countywide.
                </li>
                <li>
                  Increasing the empowerment of women, youth, and vulnerable groups by promoting access to vocational skills like tailoring, metal fabrication, and construction.
                </li>
                <li>
                  Promoting environmental sustainability through afforestation, forest conservation, and management, as well as mental health awareness.
                </li>
                <li>
                  Promoting access to improved sanitation and water by drilling, maintaining, and rehabilitating boreholes.
                </li>
                <li>
                  Increasing agricultural production, productivity, and nutrition, as well as improving the diet and health of children under five to combat malnutrition.
                </li>
                <li>
                  Creating a positive environment for the collective spread of the Gospel, mindset change, and productivity by empowering disadvantaged communities.
                </li>
              </ol>
            </section>

            {/* Carousel Section */}
            <section className="mb-10">
              <Corousel />
            </section>

            {/* Core Values Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Core Values</h2>
              <ul className="list-disc ml-6">
                <li>Solidarity</li>
                <li>Favour</li>
                <li>Patience</li>
                <li>Integrity</li>
              </ul>
            </section>

            {/* Experiences Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">FAID Experiences</h2>
              <p>
                Over the past five years, FAID has implemented projects that have positively impacted the community. One of our key initiatives is the Environmental Conservation and Management (Mtengo Wanga) project, which has been running in the Chikwawa district for the past three years. This project involves planting and taking care of trees in the community.
              </p>
              <p>
                We have also conducted workshops on environmental conservation with youths in the Chikwawa district community and formed a youth farm club. The club operates an irrigation scheme, where the youth grow vegetables and other viable crops to promote sustainability.
              </p>
            </section>
          </main>

          <footer className="bg-green-600 p-4 text-center text-white">
            <p>&copy; 2024 FAID. All Rights Reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
