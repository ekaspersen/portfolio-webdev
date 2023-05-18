import smileyglasses from "../assets/smileyglasses.png";
export default function AboutMeSection() {
    return (
        <div
            id="aboutme"
            className="min-h-screen py-32 md:py-16 background-aboutme bg-e-black bg-opacity-90 inner grid place-items-center"
        >
            <div className="w-full flex flex-col-reverse inner-screen:flex-row gap-8 items-center">
                <img
                    className="max-w-[150px] mdbig:max-w-[250px] inner-screen:max-w-full"
                    src={smileyglasses}
                    alt="me with cool sunglasses emoji in front of me"
                />
                <div className="flex flex-col gap-8">
                    <h2 className="text-6xl font-black text-e-secondary">
                        About Me
                    </h2>
                    <div className="md:text-base text-sm xs:text-base flex flex-col gap-4 max-w-[584px]">
                        <p>
                            Hello there! i am a
                            <span className="text-2xl">🦄</span>
                            Unicorn developer. This means that i can not only;
                            develop/build web-applications, but also i have some
                            experience with and a strong passion for
                            ux/web-design.
                        </p>
                        <p>
                            I tell more about my coding experience in the
                            education section. When it comes to design i am
                            mostly self-taught/YouTube, but I hope my designs
                            can speak for themselves.
                        </p>
                        <p>
                            Collaborating with team members is one of the
                            aspects I enjoy most. I've found that I can often
                            help to keep the team spirit high with my outgoing
                            personality, and I believe that a motivated team is
                            key to successful projects. I am very excited to get
                            to collaborate on projects with more people
                        </p>
                        <p className="flex flex-col">
                            I think menthal and physichal health is really
                            important to keep in order, therefore when i am not
                            working on or learning code/design i am usually
                            going to the gym🏋🏼 or doing some social
                            activity🍹☎️🏓 with friends.. or making/eating some
                            delicious ass food. <span>(mostly burgers)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
