import PrivateBuilding from "./slideshow/private-building"
import SemiBuilding from "./slideshow/semi-building"
import PublicBuilding from "./slideshow/public-building"
import PublicLearning from "./slideshow/public-learning"
import Interior from "./slideshow/interior"

export default function Projects() {
    return (
        <section className="flex flex-col justify-start w-full px-10 lg:px-[80px]">
            <h3 className="text-h3 font-normal text-primary text-left">Our Project</h3>
            <p className="text-left text-xl mt-2">some of the scope of work we carry out</p>
            <PrivateBuilding />
            <SemiBuilding />
            <PublicBuilding />
            <PublicLearning />
            <Interior />
        </section>            
    )
}