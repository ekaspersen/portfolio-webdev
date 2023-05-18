import React from "react";

export default function EducationSection() {
    return (
        <div
            id="education"
            className="selection:bg-transparent min-h-screen inner py-20 flex flex-col gap-16 background-education"
        >
            <h2 className="text-6xl font-black text-center">Education</h2>
            <p className="text-center font-black text-e-secondary">
                Click on modals to open:
            </p>
            <div className="grid grid-flow-col gap-8">
                <div className="flex flex-col gap-8">
                    <details className="flex flex-col">
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            Noroff ~ 21/23
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>
                                Noroff has taught me the full process of how to
                                build and design a website. From talking to
                                clients, getting the brief, doing the design,
                                building the code and publishing/hosting the
                                site.
                            </p>
                            <p>
                                I have a more complete understanding of how
                                everything works now and have really gotten to
                                focus on becoming a better developer.
                            </p>
                            <p>
                                I also met the people that turned into *Tetrad
                                Marketing* at Noroff and I am sure i will
                                collaborate with more students from Noroff in
                                the future.
                            </p>
                            <p>
                                Tetrad Marketing is my student company. We are a
                                digital marketing company, this is from our
                                LinkedIn:
                                <li className="pl-6 list-none">
                                    Our team offers everything from SEO to get
                                    you to the top of the search engine results,
                                    to advertising to increase your visibility
                                    online. We are also experts in HubSpot,
                                    email marketing, lead generation, website
                                    development, and social media, so no matter
                                    what your needs are, we have you covered.
                                    And we can even help you produce creative
                                    and engaging content that will get your
                                    customers to click, like, and share.
                                </li>
                            </p>
                            <p>
                                I am currently working on our homepage as my
                                exam project. It will be a Vite/ReactJs,
                                tailwindCSS project utilising Firebase for
                                administrating blogposts and authenticating what
                                users can log into the adminpanel where i am
                                creating everything from brief to hosting.
                            </p>
                        </div>
                    </details>
                    <details open className="flex  flex-col ">
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
                                to get sturdy with CSS/responsive design and
                                HTML. We also made some simple CRUD database
                                projects with PHP/MySql
                            </p>
                            <p>Ja, jeg var russ 3 år på rad hehe.</p>
                        </div>
                    </details>
                </div>
                <div className="flex flex-col gap-8">
                    <details>
                        <summary className="text-4xl border-b-4 pb-2 flex justify-between cursor-pointer font-semibold">
                            Bodin vgs. ~ 19/20
                        </summary>
                        <div className="text-lg flex flex-col py-4 gap-3 border-b-4 opacity-80">
                            <p>
                                The start to my developer/it career. Raymmond
                                was or teacher, an ex military officer and in
                                the later years he was ICT for some military
                                ops. in Bodø. He was amongst the first people
                                that could call themselves data-nerds, and us
                                students got a lot in return because of that.
                            </p>
                            <p>
                                He taught us how the w3 is put together, what
                                are LAN/WAN’s, we set up switch/router stations
                                for LAN servers and we got a pretty good general
                                understanding of how everything actually is put
                                together from bit-sized activity to Megabites.
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
                                I got pretty decent at HTML, emmet and CSS and
                                got a good grip on flexbox/grid and the box
                                model before the year was over. We mostly
                                learned about using the terminal and coding with
                                PHP/MySql, but i did not take the time we used
                                on php into consideration in the paragraph over.
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
                        </div>
                    </details>
                </div>
            </div>
        </div>
    );
}
