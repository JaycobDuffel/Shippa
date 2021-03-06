import React from 'react'

export default function HomePage() {
  return (
    <div style={{marginBottom: '400px', marginTop: '250px'}}>
      <div className="truck">
        <img src="https://images2.imgbox.com/0a/e1/LUtmV1nx_o.png" alt="header-picture" border="0" width="100%"/>
      </div>

      <div className="values">
        <div  >
          <img src="https://images2.imgbox.com/b3/3b/ocjJBxC5_o.png" alt="image host" width="75" height="75" style={{ marginLeft: '80px'}} />
          <h1 style={{ color: "#5c4863", alignItems: 'center', margin: '0px 50px 0px 0px'}}> Transparency </h1>
        </div>
        <div >
          <img src="https://images2.imgbox.com/23/7f/bK6JewNV_o.png" alt="image host" width="75" height="75" style={{ marginLeft: '50px'}} />
          <h1 style={{ color: "#5c4863", alignItems: 'center', margin: '0px 50px 0px 0px'}}> Efficiency </h1>
        </div>
        <div >
          <img src="https://images2.imgbox.com/27/85/D1nP66XU_o.png" alt="image host" width="50" height="75" style={{ marginLeft: '50px'}} />
          <h1 style={{ color: "#5c4863", alignItems: 'center' , margin: '0px 50px 0px 0px'}}> Simplicity </h1>
        </div>
      </div>
    </div>
  )
}
