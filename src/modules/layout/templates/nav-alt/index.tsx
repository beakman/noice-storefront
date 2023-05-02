import { useMobileMenu } from "@lib/context/mobile-menu-context"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import SiteLogo from "@modules/layout/components/site-logo"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import { Dropdown, Link, Navbar } from "@nextui-org/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { HiOutlineUser } from "react-icons/hi"

const store = require("../../../../../store.config.json")

import { useProductCategories } from "medusa-react"
import { ProductCategory } from "@medusajs/medusa"

type MenuItemProps = {
  name: string
  items: ProductCategory[]
}

const MenuItems = ({ name, items }: MenuItemProps) => {
  return (
    <Dropdown disableAnimation>
      <Dropdown.Button light>{name}</Dropdown.Button>
      <Dropdown.Menu aria-label="Product categories">
        {items.map((item: ProductCategory) => (
          <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

function Categories() {
  const { product_categories, isLoading } = useProductCategories()
  const parent_categories = product_categories?.filter(
    (category) => !category.parent_category
  )
  return (
    <Navbar.Content>
      {isLoading && <span>Loading...</span>}
      {product_categories && !product_categories.length && (
        <span>No Categories</span>
      )}
      {product_categories &&
        product_categories.length &&
        product_categories.map(
          (category: ProductCategory) =>
            !category.parent_category &&
            category.category_children &&
            category.category_children.length > 0 && (
              <MenuItems
                name={category.name}
                items={category.category_children}
              />
            )
        )}
    </Navbar.Content>
  )
}

const NavAlt = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  const collapseItems = ["Home", "Store", "Help & Feedback", "Log Out"]

  return (
    <Navbar isCompact variant="sticky">
      <Navbar.Toggle showIn={"xs"} aria-label="toggle navigation" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <SiteLogo />
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link isActive href="/store">
          Store
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
        </Navbar.Item>
        <Navbar.Link isActive href="/account">
          <HiOutlineUser size={20} />
        </Navbar.Link>
        <Navbar.Link>
          <CartDropdown />
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
              key={index}
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavAlt
