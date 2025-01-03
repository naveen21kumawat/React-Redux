// import  { Children } from 'react'

// eslint-disable-next-line react/prop-types
function Container({children}) {
  return (
    <div className="card" >
    <div className="card-body">
    {children}
    </div>
  </div>
  )
}

export default Container