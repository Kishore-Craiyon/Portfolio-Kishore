"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState({});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validate = () => {
		let tempErrors = {};
		if (!formData.name.trim()) tempErrors.name = "Name is required.";
		if (!formData.phone.trim()) tempErrors.phone = "Phone number is required.";
		else if (!/^\d{10}$/.test(formData.phone))
			tempErrors.phone = "Enter a valid 10-digit number.";
		if (!formData.email.trim()) tempErrors.email = "Email is required.";
		else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		)
			tempErrors.email = "Email is invalid.";
		if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
		if (!formData.message.trim()) tempErrors.message = "Message is required.";
		return tempErrors;
	};

	const handleSubmit = (e) => {
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			e.preventDefault();
			setErrors(validationErrors);
			setSubmitted(false);
		} else {
			setErrors({});
			setSubmitted(true);
		}
	};

	return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl uppercase tracking-widest text-[#1E90FF]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Side */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Kishore G</h2>
                <p>Full Stack Developer</p>
                <p className="py-4">
                  Feel free to reach out if you&apos;re looking for a developer,
                  have a question, or just want to connect.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/kishore-g-0072b027a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/kishore-craiyon/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/ft.kishore_offl/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsInstagram />
                    </div>
                  </a>
                  <a target="_blank" href="/resume.pdf">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {submitted && (
                <p className="text-green-600 pb-2 font-semibold">
                  Thanks! Your message has been sent.
                </p>
              )}
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="0e6ab02f-001a-4241-af08-8837e3481d13"
                />

                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2 rounded-lg  p-3 flex border-gray-300"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full p-4 text-white bg-[#1E90FF] hover:bg-[#1c86ee] mt-4 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll to Top */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#1E90FF]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
