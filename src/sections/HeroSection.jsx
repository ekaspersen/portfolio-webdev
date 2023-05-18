import hello from "../assets/hellocorn.png";

export default function HeroSection() {
    return (
        <div className="flex flex-col min-h-screen  justify-between">
            <div className="h-[70px]"></div>
            <div className="inner flex flex-col items-center text-center md:text-left md:flex-row-reverse justify-between">
                <img
                    className="max-w max-w-[240px] md:max-w-full"
                    src={hello}
                    alt="picture of my silouette with blown back hair"
                />
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col">
                        <h1 className="flex flex-col">
                            <span className="font-bold text-lg  md:text-2xl mdbig:text-4xl text-e-secondary">
                                Eskil K. Hagen
                            </span>
                            <span className="font-black text-3xl  md:text-4xl mdbig:text-6xl">
                                Unicorn Developer
                            </span>
                        </h1>
                        <h2>Frontend | Developer | ReactJs | UX | Figma</h2>
                    </div>
                    <p className="text-xs text-left font-semibold w-max flex flex-col">
                        <span>This is my online developer resume.</span>
                        <span>I hope you find me riveting.</span>
                    </p>
                </div>
            </div>
            <div className="inner flex mdbig:text-lg gap-x-4 gap-y-2 py-2 opacity-60 flex-wrap font-black text-xs ">
                <span>HTML/SEO</span>
                <span>CSS/SCSS/TAILWINDCSS</span>
                <span>ReactJs</span>
                <span>JS / API-handling</span>
                <span>UX & FIGMA</span>
                <span>GIT-BRANCHING</span>
            </div>
        </div>
    );
}
