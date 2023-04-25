import Image from "next/image"

const store = require("../../../../../store.config.json")

const PaymentIcons = () => {
  return (
    <div className="flex items-center justify-between gap-x-3">
      {Object.keys(store.payment).map((method, index) => {
        return (
          <Image
            key={index}
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
