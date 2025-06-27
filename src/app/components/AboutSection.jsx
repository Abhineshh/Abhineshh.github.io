"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Computer Vision</li>
        <li>Natural Lanaguage Processing</li>
        <li>Exploratory Data Analysis</li>
        <li>Python</li>
        <li>Scikit-Learn, TensorFlow, Pytorch</li>
        <li>Numpy, Pandas, Matplotlib</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <p className="text-xl">Bachelor of Computer Application </p>
          <p>East Point College of Higher Education, Bengaluru</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Machine Learning Specialization - From{" "}
          <a
            className="text-blue-700 font-bold"
            target="_blank"
            href="https://coursera.org/share/0660797e07518b1cd76d7b38e30e7c69"
          >
            Coursera
          </a>
        </li>
        <li>
          Deep Learning Specialization - From{" "}
          <a
            className="text-blue-700 font-bold"
            target="_blank"
            href="https://coursera.org/share/fe654dbbbb13f53f78d3658962b5cc15"
          >
            Coursera
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image
          src="/images/hero-image-abhinesh.jpg"
          width={500}
          height={500}
          alt="computerImage"
          className=" rounded-xl"
        /> */}

        <div className="bg-gradient-to-r  p-1 rounded-full inline-block">
          <Image
            src="/images/hero-image-abhinesh.jpg"
            width={500}
            height={500}
            alt="Abhinesh V"
            className="w-full h-auto object-cover [clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]"
          />
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Machine Learning Engineer with hands-on experience in Python,
            Machine Learning, Deep Learning, Artificial Intelligence, and Data
            Science. Skilled in building and deploying ML models using libraries
            like scikit-learn, TensorFlow, and Keras. Proficient in data
            preprocessing, feature engineering, model training, evaluation, and
            visualization using tools like NumPy, Pandas, and Matplotlib.
          </p>
          <br />
          <p>
            {" "}
            Strong understanding of supervised and unsupervised learning, neural
            networks, and deep learning architectures (CNNs, RNNs).
          </p>
          <br />
          <p>
            {" "}
            Looking for full-time roles in ML/AI/Data Science. Eager to apply
            and grow my skills in real-world projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
