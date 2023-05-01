import Image from "next/image"

const store = require("../../../../../store.config.json")

const PaymentIcons = () => {
  return (
    <div className="flex items-center justify-between gap-x-3 rounded-md">
      {Object.keys(store.payment).map((method) => {
        return (
          <Image
            key={method}
            alt={method}
            src={store.payment[method]}
            width="36"
            height="22"
          />
        )
      })}
    </div>
  )
}

export default PaymentIcons
