import React from "react";
import Image from "next/image";

// Frontend
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import NextJS from "../public/assets/skills/nextjs.png";

// Backend
import NodeImg from "../public/assets/skills/node.png";
// Add Express, MongoDB, PostgreSQL, etc.

// Tools
import Github from "../public/assets/skills/github1.png";
import Git from "../public/assets/skills/git.png";
import Docker from "../public/assets/skills/docker.png";
import Postman from "../public/assets/skills/postman.png";
// Add Docker, Postman, etc.

const SkillCard = ({ src, title }) => (
	<div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
		<div className="grid grid-cols-2 gap-4 justify-center items-center">
			<div className="m-auto">
				<Image src={src} width="64px" height="64px" alt={title} />
			</div>
			<div className="flex flex-col justify-center items-center">
				<h3>{title}</h3>
			</div>
		</div>
	</div>
);

const Skills = () => {
	return (
		<div id="skills" className="w-full lg:h-full p-2">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#1E90FF]">Skills</p>
				<h2 className="py-4">What I Can Do</h2>

				{/* Front-End */}
				<h3 className="text-lg text-[#1E90FF] mt-8 mb-2">Front-End</h3>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<SkillCard src={Html} title="HTML" />
					<SkillCard src={Css} title="CSS" />
					<SkillCard src={Javascript} title="JavaScript" />
					<SkillCard src={ReactImg} title="React" />
					<SkillCard src={Tailwind} title="Tailwind CSS" />
					<SkillCard src={NextJS} title="Next.js" />
				</div>

				{/* Back-End */}
				<h3 className="text-lg text-[#1E90FF] mt-8 mb-2">Back-End</h3>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<SkillCard src={NodeImg} title="Node.js" />
					{/* Add more: Express, MongoDB, PostgreSQL, etc. */}
				</div>

				{/* DevOps / Tools */}
				<h3 className="text-lg text-[#1E90FF] mt-8 mb-2">Tools & DevOps</h3>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					<SkillCard src={Github} title="GitHub" />
					<SkillCard src={Git} title="Git" />
					<SkillCard src={Docker} title="Docker" />
					<SkillCard src={Postman} title="Postman" />
					{/* Add more: Docker, Postman, etc. */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
