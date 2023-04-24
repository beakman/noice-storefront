import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import styles from "./styles.module.css"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4">Summer styles are finally here</h1>
        <p className="text-base-regular max-w-[32rem] mb-6">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @lianamikah https://unsplash.com/es/@lianamikah"
        className={styles.clipped}
        draggable="false"
      />
      <svg height="0" width="0">
        <defs>
          <clipPath
            id="waves-angle-bottom-down"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.044,0.924 c0.018,0.007,0.037,0.009,0.055,0.006 c0.024,-0.004,0.067,-0.018,0.112,-0.006 c0.042,0.01,0.065,0.022,0.111,0.027 h0 c0.028,0.003,0.058,-0.003,0.114,-0.007 c0,0,0.018,-0.003,0.041,0.001 c0.018,0.003,0.039,0.011,0.061,0.022 c0,0,0.033,0.015,0.071,0.019 c0.028,0.002,0.053,-0.004,0.098,-0.015 c0,0,0.103,-0.03,0.172,0.013 c0.026,0.016,0.058,0.018,0.085,0.016 h0 c0.002,0,0.026,-0.003,0.035,-0.009 V0 H0 V0.892 c0,0.003,0,0.001,0.005,0.007 c0.008,0.009,0.025,0.019,0.038,0.024"></path>
          </clipPath>
          <clipPath
            id="waves-angle-bottom-up"
            clipPathUnits="objectBoundingBox"
          >
            <path d="M0.956,0.924 c-0.018,0.007,-0.037,0.009,-0.055,0.006 c-0.024,-0.004,-0.067,-0.018,-0.112,-0.006 c-0.042,0.01,-0.065,0.022,-0.111,0.027 h0 c-0.028,0.003,-0.058,-0.003,-0.114,-0.007 c0,0,-0.018,-0.003,-0.041,0.001 c-0.018,0.003,-0.039,0.011,-0.061,0.022 c0,0,-0.033,0.015,-0.071,0.019 c-0.028,0.002,-0.053,-0.004,-0.098,-0.015 c0,0,-0.103,-0.03,-0.172,0.013 c-0.026,0.016,-0.058,0.018,-0.085,0.016 h0 c-0.002,0,-0.026,-0.003,-0.035,-0.009 V0 H1 V0.892 c0,0.003,0,0.001,-0.005,0.007 c-0.008,0.009,-0.025,0.019,-0.038,0.024"></path>
          </clipPath>
          <clipPath id="waves-angle-top-up" clipPathUnits="objectBoundingBox">
            <path d="M0.044,0.076 c0.018,-0.007,0.037,-0.009,0.055,-0.006 c0.024,0.004,0.067,0.018,0.112,0.007 c0.042,-0.01,0.065,-0.022,0.111,-0.027 h0 c0.028,-0.003,0.059,0.003,0.114,0.007 c0,0,0.018,0.003,0.041,-0.001 c0.018,-0.003,0.039,-0.011,0.061,-0.022 c0,0,0.033,-0.015,0.071,-0.019 c0.028,-0.003,0.054,0.004,0.098,0.015 c0,0,0.103,0.03,0.172,-0.013 C0.905,0.001,0.938,-0.001,0.964,0.001 h0 c0.002,0,0.026,0.003,0.035,0.009 V1 H0 V0.108 c0,-0.003,0,-0.001,0.006,-0.007 c0.008,-0.009,0.025,-0.019,0.038,-0.025"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Hero
