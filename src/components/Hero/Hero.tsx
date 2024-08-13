import Image from "next/image";

function Hero() {
    return (
        <section className="flex text-center flex-col items-center justify-center tracking-wide bg-norepeat bg-heropattern bg-hero-overlay bg-cover w-full h-[500px] mt-[-3px] px-5">
            <Image src="./logo.svg" alt="Logo" width={200} height={100} className="shadow-logo"/>
            <h2 className="text-h2 text-accent text-shadow">studioindonesia</h2>
            <h5 className="text-sm md:text-lg bg-primary rounded-2xl sm:rounded-3xl mt-3 text-accent p-2 mx-5 sm:mx-0 sm:p-4">
            Freelancer - Design - Estimation - Building
            </h5>
        </section>
    )
}

export default Hero;