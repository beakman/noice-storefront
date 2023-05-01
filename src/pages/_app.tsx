import { MEDUSA_BACKEND_URL, queryClient } from "@lib/config"
import { AccountProvider } from "@lib/context/account-context"
import { CartDropdownProvider } from "@lib/context/cart-dropdown-context"
import { MobileMenuProvider } from "@lib/context/mobile-menu-context"
import { StoreProvider } from "@lib/context/store-context"
import { Hydrate } from "@tanstack/react-query"
import { CartProvider, MedusaProvider } from "medusa-react"
import "styles/globals.css"
import { AppPropsWithLayout } from "types/global"

import { Inter, Sacramento, Newsreader } from "next/font/google"
import { NextUIProvider, createTheme } from "@nextui-org/react"

const sans = Inter({
  subsets: ["latin"],
  variable: "--sans-font",
})
const display = Sacramento({
  weight: "400",
  subsets: ["latin"],
  variable: "--display-font",
})
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--serif-font",
})

const theme = createTheme({
  type: "light", // it could be "light" or "dark"
  theme: {
    colors: {
      //semantic colors (light)
      blue50: "#EDF5FF",
      // ...
      blue900: "#00254D",
      // ...

      // brand colors
      primaryLight: "$gray200",
      primaryLightHover: "$gray300",
      primaryLightActive: "$gray400",
      primaryLightContrast: "$gray600",
      primary: "$gray50",
      primaryBorder: "$gray500",
      primaryBorderHover: "$gray600",
      primarySolidHover: "$gray700",
      primarySolidContrast: "$white",
      primaryShadow: "$gray500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "$gray900",

      // you can also create your own color
      myColor: "#ff4ecd",
    },
    space: {},
    fonts: {},
  },
})

function App({
  Component,
  pageProps,
}: AppPropsWithLayout<{ dehydratedState?: unknown }>) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MedusaProvider
      baseUrl={MEDUSA_BACKEND_URL}
      queryClientProviderProps={{
        client: queryClient,
      }}
    >
      <Hydrate state={pageProps.dehydratedState}>
        <CartDropdownProvider>
          <MobileMenuProvider>
            <CartProvider>
              <StoreProvider>
                <AccountProvider>
                  {getLayout(
                    <NextUIProvider theme={theme}>
                      <main
                        className={`${sans.variable} ${display.variable} ${serif.variable}`}
                      >
                        <Component {...pageProps} />
                      </main>
                    </NextUIProvider>
                  )}
                </AccountProvider>
              </StoreProvider>
            </CartProvider>
          </MobileMenuProvider>
        </CartDropdownProvider>
      </Hydrate>
    </MedusaProvider>
  )
}

export default App
