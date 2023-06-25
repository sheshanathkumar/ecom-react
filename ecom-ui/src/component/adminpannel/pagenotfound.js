import React from 'react'

export default function PageNotFound(prop) {
  return (
    <div style={{"boxShadow": "5px 5px 10px rgb(31, 29, 29)"}} >
        <h3>{prop.menu.toUpperCase()} Page Not Ready Yet! </h3>
        <img style={{ "width":"100%", "height":"90vh","borderRadius":"10px"  }}  src={require('../../asset/pagenotfound.jpg')} alt='' />
    </div>
  )
}
