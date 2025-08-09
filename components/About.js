import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
	return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#1E90FF]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi there!, I&#39;m Kishore, a curious software developer who&#39;s
            trying to get a bit better every day.
          </p>
          <p className="py-2 text-gray-600">
            My journey into tech started with a fascination for computers, which
            quickly turned into a love for coding, especially with JavaScript. I
            enjoy building clean, responsive user interfaces using React and
            bringing them to life with backend logic using Node.js and Express.
          </p>
          <p className="py-2 text-gray-600">
            Over time, I've grown to enjoy both front-end and back-end
            development — whether it's designing a smooth UI or working with
            APIs and databases. I'm dedicated to improving my skills every day
            and love the process of turning ideas into real, usable digital
            experiences.
          </p>
          <p className="py-2 text-gray-600">
            I&#39;m always looking for new opportunities to expand my
            understanding of web design and development, so you&#39;ll generally
            find me sipping a delicious cup of coffee with my nose in a good
            “technical” book or plugged into my laptop drooling over all of the
            beauty the web has to offer. I hope to join a team of talented
            individuals I can learn from and build engaging digital experiences
            with.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
