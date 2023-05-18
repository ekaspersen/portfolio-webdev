import React from "react";

export default function ContactSection() {
    return (
        <div
            id="contact"
            className="min-h-screen inner background-contact flex flex-col justify-center py-32 gap-16"
        >
            <div className="flex flex-col text-center">
                <h2 className="text-5xl italic">Contact me</h2>
                <p>...Or just check out my socials</p>
            </div>
            <span className="text-6xl font-black text-e-secondary md:text-center">
                There are 3 ways
            </span>
            <div className="flex flex-col gap-4 text-center">
                <div className="flex flex-col gap-0">
                    <span>Send an email to:</span>
                    <span>ekhatwork@gmail.com</span>
                </div>
                <span>or</span>
                <span>Instagram</span>
                <a
                    className="opacity-60 hover:opacity-100"
                    href="www.instagram.com/eskilkaspersen/"
                >
                    instagram.com/eskilkaspersen/
                </a>
                <span>Linked in</span>
                <a
                    className="opacity-60 hover:opacity-100 max-w-[290px] mx-auto"
                    href="https://www.linkedin.com/in/eskil-k-hagen-43b7011a0"
                    target="_blank"
                >
                    linkedin.com/in/eskil-k-hagen-43b7011a0
                </a>
            </div>
            <p className="text-2xl text-e-secondary  md:text-center">
                The links will open my profiles in a new tab
            </p>
            <span className=" md:text-center text-5xl">
                Looking forward to hear from you
            </span>
            <p className="opacity-60 ml-auto text-right max-w-xs">
                As I look to the future, my goal is to continue to develop my
                skills, contribute to meaningful projects, and collaborate with
                others who share a passion for front-end development. Thank you
                for taking the time to learn a bit about me.
            </p>
        </div>
    );
}
