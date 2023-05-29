import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <div className="flex flex-col items-center mt-24">
                <Image src="/google_logo.png" alt="Google Logo" width={300} height={100} className="mt-10"/>
                <HomeSearch/>
            </div>
        </div>
    )
}

export default Home