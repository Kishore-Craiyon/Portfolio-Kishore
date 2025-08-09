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
            Hi there!, I’m Kishore, a curious software developer who’s trying to
            get a bit better every day.
          </p>
          <p className="py-2 text-gray-600">
            I've always had a natural curiosity for technology — what started as
            poking around with computers quickly turned into a deeper
            fascination with programming. Once I discovered JavaScript, I was
            hooked. The ability to bring websites to life with interactivity and
            functionality lit a creative spark I haven’t looked back from.
             I’m very dedicated to learn new things and to truly believe that you
            should never stop learning. I enjoy creating different things,
            whether that be websites, application or anything in between.
          </p>
          <p className="py-2 text-gray-600">
            Over time, that passion evolved into full-stack development. I enjoy
            working across both front-end and back-end — from building clean,
            responsive user interfaces to wiring up APIs and databases. Whether
            it's crafting a slick UI with React or diving into server-side logic
            with Node.js and Express, I’m always up for the challenge.
          </p>
          <p className="py-2 text-gray-600">
            I’m always looking for new opportunities to expand my understanding
            of web design and development, so you’ll generally find me sipping a
            delicious cup of coffee with my nose in a good “technical” book or
            plugged into my laptop drooling over all of the beauty the web has
            to offer. I hope to join a team of talented individuals I can learn
            from and build engaging digital experiences with.
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
