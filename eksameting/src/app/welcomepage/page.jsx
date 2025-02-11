import OverAllButton from "@/components/Button/index.jsx";
import Image from "next/image";
import splash from "@/assets/images/splash-image.jpg";

export default function WelcomePage() {
  return (
    <>
      <Image
        src={splash}
        alt="welcome screen"
        quality={100}
        fill
        sizes="100em"
        // im styling this :3
        style={{
          objectFit: "cover",
          objectPosition: "center",
          layout: "fill",
          //   vvv makes the image go back a step.
          zIndex: "-1",
        }}
      />
    </>
  );
}
