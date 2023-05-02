import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import PaymentIcons from "../payment-icons"
import SocialIcons from "../social-icons"

const store = require("../../../../../store.config.json")

type QuickLink = {
  href: string
  target: string
  name: string
}

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div className="text-small-regular grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-16">
          <div>
            <Link href="/" className="text-xl-semi uppercase">
              {store.site.name}
            </Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Quick links</span>
            <ul className="grid grid-cols-1 gap-y-2">
              {store.site.quick_links &&
                store.site.quick_links.map((link: QuickLink, index: number) => (
                  <li className="mb-0" key={index}>
                    <a href={link.href} target={link.target} rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Our mission</span>
            <p>{store.site.mission}</p>
          </div>
        </div>
      </div>
      <div className="flex my-5 justify-center items-center">
        <SocialIcons />
      </div>
      <div className="flex flex-col gap-y-4 justify-center xsmall:items-start xsmall:flex-row xsmall:justify-between">
        <div className="min-w-[316px] flex justify-center md:justify-start">
          <CountrySelect />
        </div>
        <div className="flex flex-col items-center md:items-end gap-y-4">
          <PaymentIcons />
          <div className="text-xsmall-regular text-gray-500">
            © Copyright 2023 ACME
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
