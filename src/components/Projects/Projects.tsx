import PrivateBuilding from "./slideshow/PrivateBuilding"
import SemiBuilding from "./slideshow/SemiBuilding"
import PublicBuilding from "./slideshow/PublicBuilding"
import PublicLearning from "./slideshow/PublicLearning"
import Interior from "./slideshow/Interior"

export default function Projects() {
    return (
        <section className="flex flex-col justify-start w-full px-10 lg:px-[80px]">
            <h3 className="text-2xl sm:text-h3 font-normal text-primary text-left font-semibold">Our Project</h3>
            <p className="text-base text-left sm:text-xl sm:mt-2">some of the scope of work we carry out</p>
            <PrivateBuilding />
            <SemiBuilding />
            <PublicBuilding />
            <PublicLearning />
            <Interior />
        </section>            
    )
}