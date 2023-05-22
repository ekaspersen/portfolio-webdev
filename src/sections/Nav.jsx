import sign from "../assets/signatur-white.svg";
export default function Nav() {
    return (
        <nav className="flex z-50 flex-col gap-4 py-4 items-center w-full small-screen:flex-row small-screen:justify-between small-screen:gap-16 inner bg-e-primary bg-opacity-80 fixed right-0 left-0 top-0">
            <a href="#top">
                <img src={sign} alt="" />
            </a>

            <div className="flex font-black text-[10px] xs:text-xs gap-4 xs:gap-8 text-e-secondary">
                <a href="#aboutme">ABOUT ME</a>
                <a href="#education">EDUCATION</a>
                <a href="#contact">CONTACT</a>
                <a href="#projects">PROJECTS</a>
            </div>
        </nav>
    );
}
