import Link from "next/link"
import {
  SiTwitter,
  SiPinterest,
  SiTiktok,
  SiFacebook,
  SiInstagram,
} from "react-icons/si"

const store = require("../../../../../store.config.json")

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <Link href={store.social.twitter} className="hover:opacity-50">
        <SiTwitter />
      </Link>
      <Link href={store.social.facebook} className="hover:opacity-50">
        <SiFacebook />
      </Link>
      <Link href={store.social.pinterest} className="hover:opacity-50">
        <SiPinterest />
      </Link>
      <Link href={store.social.tiktok} className="hover:opacity-50">
        <SiTiktok />
      </Link>
      <Link href={store.social.instagram} className="hover:opacity-50">
        <SiInstagram />
      </Link>
    </div>
  )
}

export default SocialIcons
