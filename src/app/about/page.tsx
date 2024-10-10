"use client";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import faid1 from "@/../public/images/CEO.jpg";
import faid2 from "@/../public/images/Milanga.jpg";
import faid3 from "@/../public/images/Taona.jpg";
import faid4 from "@/../public/images/Kelvin.jpg";
import faid5 from "@/../public/images/innocent.jpg";
import faid6 from "@/../public/images/Greens.jpg";
import faid7 from "@/../public/images/Chitani.jpg";
import faid8 from "@/../public/images/Stephen.jpg";
import faid9 from "@/../public/images/synet.jpg";
import faid10 from "@/../public/images/pumbwa.jpg";
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Rosario Kalavina",
      role: "Executive Director",
      bio: "Rosario Kalavina is the Director of FAID, leading initiatives in food security, environmental conservation, and education. He has over 10 years of experience in community development.",
      imageSrc: faid1, // Path to the image
    },
    {
      name: "Milanga Mzeza",
      role: "ASSISTANT FINANCIAL MANAGER",
      bio: "Milanga Mzeza is an accountant by profession who has been serving with various banks within And outside Malawi like First Capital Bank For several years And now as an entrepreneur.Milanga currently with FAID as the Assistant Financial manager.She is the expert In banking And financial services manifested through her tenure Of office with banks And FAID. Milanga Mzeza holds Bachelors Of Accounting And commerce",
      imageSrc: faid2, // Path to the image
    },
    {
      name: "Taona Steven Mkandawire",
      role: "public relation office",
      bio: "I am one of the experienced journalists currently based in Zomba with over 13 years of experience in journalism.  I have so far worked with The Nation Publications Limited (NPL) for over 10 years as a correspondent. I have also worked with Montfort Media; the publishers of Mkwaso Newspaper, Together and  The Lamp magazines for about 7 years. I am currently contributing stories to Transworld Radio on voluntary basis.",
      imageSrc: faid3, // Path to the image
    },
    {
      name: "Kelvin Samson Petro",
      role: "Human Resources Manager",
      bio: "Kelvin Samson Petro is the Human Resources Manager at FAID. He holds a Graduate Diploma in Public Health Services and Human Resources Management. Hailing from Msanama in Machinga, Kelvin is one of the founding members of FAID",
      imageSrc: faid4, // Path to the image
    },
    {
      name: "Innocent Kaphaso ",
      role: "Financial Manager",
      bio: "Innocent Kaphaso holds a Bachelor of Business Administration and a Bachelor of Computer Applications. He is currently serving as the Financial Manager at FAID",
      imageSrc: faid5,
    },
    {
      name: "Greens Chapweteka",
      role: "Deputy Programs Manager",
      bio: "Greens Chapweteka currently serving as FAID Deputy Program manager.Born In Zimbabwe And now Malawi.Greens holds Diploma In Human Resources Management And In political philosophy",
      imageSrc: faid6,
    },
    {
      name: "Chitani Tobias",
      role: "Legal And Partnership affairs manager",
      bio: "Chitani Tobias is a second-year PhD student in Geoinformatics (GIS) at Mzuzu University. He holds a Master's in Geography and Environmental Management, along with a Bachelor's in Education in Humanities (Geography and Social Studies). Chitani is a lecturer at the University of Livingstonia and serves as a football referee in the Elite TNM Super League",
      imageSrc: faid7,
    },
    {
      name: "Stephen Mathews",
      role: "FAID Executive Secretary",
      bio: "Stephen Matthews is currently serving as the Administrative Secretary and Deputy Human Resources Manager at FAID. He holds an Advanced Diploma in Business Administration and is one of the founding members of FAID.",
      imageSrc: faid8,
    },

    {
      name: "Charles Pumbwa",
      role: "Faid Project Manager",
      bio: "Bachelor's in Social Work, Project Management, Monitoring & Evaluation (DMI Mangochi) Diploma in Biomedical Engineering (Polytechnic/MUBAS) Diploma in Community Development (Soche Technical College) 10+ years in project management, community development, and biomedical engineering Worked with renowned organizations (Banja LA Mtsogolo, CADECOM, FHI, MSH, Airtel, Baylor College, PCI, Save the Children) Held key roles: Community Outreach Assistant, Project Monitoring Officer Project Management Monitoring & Evaluation Biomedical Engineering Community Development Communication Problem-Solving Dedicated professional committed to advancing community health and well-being through impactful projects. Proven track record of successful project management and passion for creating positive change. Available for collaboration opportunities and inquiries about community development work.",
      imageSrc: faid10,
    },
    {
      name: "Synet W Maonekedwe",
      role: "ICT Manager",
      bio: "Synet Maonekadwe is currently serving as the ICT Manager. He holds an Honours Bachelor's degree in Electronics and Computer Engineering",
      imageSrc: faid9,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-4 p-2">
        Future For All In Development (FAID) is a non-profit organization
        committed to promoting food security, self-reliance, and improved
        livelihoods in local communities. We work closely with our partners to
        implement sustainable projects that empower individuals and families
        through education, climate action, and livelihood improvements.
      </p>

      <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            bio={member.bio}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
