import React from "react";

export default function EducationSection() {
    return (
        <div
            id="education"
            className="selection:bg-transparent min-h-screen inner py-20 flex flex-col gap-16 background-education"
        >
            <h2 className="text-6xl font-black text-center">Education</h2>
            <p className="text-center font-black text-e-secondary">
                Click on School titles to interact:
            </p>
            <div className="grid mdbig:grid-flow-col grid-flow-row gap-8">
                <div className="flex flex-col gap-8">
                    <details open className="flex flex-col">
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            Noroff ~ 21/23
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>At Campus, Oslo</p>
                            <p>
                                Noroff has taught me the full process of how to
                                build and design a website. From talking to
                                clients, getting the brief, doing the design,
                                building the code and publishing/hosting the
                                site.
                            </p>
                            <p>
                                I am currently working on our homepage as my
                                exam project. It will be a Vite/ReactJs,
                                tailwindCSS project utilising Firebase for
                                administrating blogposts and authentication for
                                adminpanel
                            </p>
                            <p>
                                Our skillset expanded to include planning,
                                designing, developing, and testing interactive
                                web solutions. We were taught to reflect on our
                                practice, adjust under supervision, and
                                understand our methods of deploying web
                                applications in a production environment. User
                                testing was a vital part of our education,
                                helping us identify and correct deficiencies in
                                interactive products.
                            </p>
                            <p>
                                The school emphasized developing our overall
                                competence. We learned to execute tasks in web
                                design and develop interactive web solutions. We
                                engaged with professionals from other fields,
                                contributing to interdisciplinary practices. We
                                also focused on ethical requirements and
                                universal design principles, creating web
                                solutions from concept to deployment.
                            </p>
                            <p>
                                Contributing to web solution architecture, we
                                adopted industry best practices. I feel this
                                education has equipped me with a solid
                                foundation in the industry.
                            </p>
                        </div>
                    </details>
                    <details className="flex  flex-col ">
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            Bodø vgs. ~ 20/21
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>
                                My last year at Bodø vgs. (high-school) i went
                                to common studies(påbygg) to apply for
                                university to learn more about code the next
                                year.
                            </p>
                            <p>
                                I had IT as extra-curriculum that year and got
                                to get even better at with CSS/responsive design
                                and HTML. We also made some simple CRUD database
                                projects with PHP/MySql
                            </p>
                        </div>
                    </details>
                </div>
                <div className="flex flex-col gap-8">
                    <details open>
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            Bodin vgs. ~ 19/20
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>
                                The start to my developer/it career. My teacher
                                was a really important part of this class for me
                                and he taught me a lot and was a great mentor.
                                before he was a teacher he was ICT for some
                                military ops. in Bodø. He was amongst the first
                                people that could call themselves data-nerds,
                                and us students got a lot in return because of
                                that.
                            </p>
                            <p>
                                He taught us how the w3(/www.) is put together,
                                how LAN/WAN’s work and what they are, we set up
                                switch/router stations for LAN servers and we
                                got a pretty good general understanding of how
                                everything actually is put together from
                                bit-sized activity to Megabites.
                            </p>
                            <p>
                                We really really wanted to learn development, so
                                we kind of forced him to put of time so that we
                                got around 16 or at least 12 hours of
                                development focused schooling every week, but
                                also me and Adel coded a lot in our freetime
                                together, both of and on school.
                            </p>
                            <p>
                                I got pretty decent at HTML, emmet, CSS and got
                                good at flexbox/grid and the box model before
                                the year was over. We mostly learned about using
                                the terminal and coding with PHP/MySql. I can't
                                say i enjoyed coding in php and sql, but i am
                                happy i learned about it. I't made learning
                                about APIs/API-handling and JSON-data and
                                probably much more a lot easier for me!
                            </p>
                        </div>
                    </details>
                    <details open>
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            YouTube
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>
                                I also have to give some youtubers a thank you
                                somewhere for their content! Without them i am
                                sure coding wouldnt be close to as interesting
                                to learn for me as it has been.
                                <ul className="flex flex-col gap-2 pl-6 py-4">
                                    <h4 className="">
                                        My top 3 youtube coders are:
                                    </h4>
                                    <li>
                                        Kevin Powel - CSS only, but such a
                                        wholesome creator. I think he is the
                                        reason i love CSS as much as i do.
                                    </li>
                                    <li>
                                        DevEd - Such a happy fellow, teaching
                                        everything from simple html to css, js,
                                        API handling and JSframeworks. Kevin and
                                        Ed is responsible for me knowing good
                                        responsive code and design.
                                    </li>
                                    <li>
                                        WebDevSimplified / The guy with the hair
                                        and eyes! What? you need help learning
                                        javascript or React? he got you. He
                                        talks so effieciently and
                                        understandable!
                                    </li>
                                </ul>
                                I feel like theese guys have been my teachers
                                and mentors threw my development as a developer.
                                both life/career advice and of course teaching
                                me code in a fun way have been beyond helpful
                                for me.
                            </p>
                            <p>
                                I probably/maybe watch a bit to much youtube on
                                my spare time, but i also stay in touch with the
                                development world by viewing linked in and
                                catching up with new different types of tech
                                advances in my industry threw many sources and
                                extra research.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
