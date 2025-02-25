import Link from "next/link";

import PrimaryButton from "../primaryButton/primaryButton";
import Blob from "../../../public/blob.svg";
import Image from "next/image";
import Symbol from "../../../public/Designer.png";

import "./banner.css";

type Banner = {
    title: string,
    route: string
}

const Banner = (props: Banner) => {
    return ( 
        <section id="hero" className="relative bg-[#eae9ee]">
            <div className="flex justify-between items-center overflow-hidden">
                <div className="bannerContentContainer pt-15 pb-15 sm:pt-20 sm:pb-20 lg:pt-0 lg:pb-0">
                    <h1> Bridging Silence </h1>
                    <h1><span className="text-primary lg:whitespace-nowrap">With </span>Communication  </h1>
                    
                    <p className="max-w-[650px] text-black"> The project ”Hamro Aawaj” addresses the communication challenges faced by individuals with hearing and vocal impairments in Nepal by harnessing the power of hand gesture recognition, text conversion, and speech synthesis technologies. </p>
                    <div className="flex gap-3 mt-10">
                        <Link href="/register"><PrimaryButton text="Our Services" classes="text-white" /></Link>
                        <Link href="/login"><PrimaryButton text="Guest login" customColor="black" classes="text-white" /></Link>
                    </div>
                </div>
                <div className="relative hidden h-full lg:block xl:pb-20 pt-20">
                    <Image src={Blob} alt="blog-logo" height={600} width={600} className="opacity-70" />
                    <Image src={Symbol} alt="symbol-guy" className="absolute right-0 bottom-0" />
                </div>
            </div>
        </section>

    )
}

export default Banner;