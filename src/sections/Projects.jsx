import React from "react";

export default function Projects() {
    return (
        <div
            id="projects"
            className="inner bg-e-primary bg-opacity-40 grid place-items-center gap-16 py-32"
        >
            <h2 className="text-6xl font-black text-e-secondary md:text-center">
                Projects
            </h2>
            <div className="text-center">
                <p className="text-lg font-semibold opacity-60 max-w-xl mx-auto flex flex-col gap-4">
                    If you are a recruiter or possible client please contact me
                    if you wonder about anything or if you want to see some of
                    my previous projects!
                    <span className="text-lg font-semibold opacity-60 max-w-xl mx-auto">
                        I very recently put this portfolio together, projects
                        will be online soon...
                    </span>
                </p>
                <a
                    href="https://github.com/ekaspersen"
                    className="text-e-secondary border-b-2 pb-1 pt-4 border-b-e-secondary font-bold"
                >
                    Link to my github
                </a>
            </div>
            <p className="text-3xl flex mx-auto text-center">
                <span className="text-5xl">🤧</span>
                Under construction
                <span className="text-5xl">🤧</span>
            </p>
        </div>
    );
}
