import { useState } from "react";
import { useEffect } from "react";

function Slider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {

        const sliderImages = document.querySelectorAll(".slider");
        sliderImages.forEach((img) => (img.style.opacity = 0));
        sliderImages[index].style.opacity = 1;


        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % sliderImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="relative flex w-screen h-24 sm:h-28 md:h-35 lg:h-40 xl:h-45 bg-[#0c73ae]">
            <img src="./slider_img/1.png" className="absolute opacity-0 slider" id="img-1" />
            <img src="./slider_img/2.png" className="absolute opacity-0 slider" id="img-2" />
            <img src="./slider_img/3.png" className="absolute opacity-0 slider" id="img-3" />
        </div>
    )
}

export default Slider;