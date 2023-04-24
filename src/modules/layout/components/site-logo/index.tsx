const store = require("../../../../../store.config.json")

const SiteLogo = () => {
  return <div className="logo">{store.site.name}</div>
}

export default SiteLogo
