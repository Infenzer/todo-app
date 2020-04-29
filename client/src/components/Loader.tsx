import React from 'react'

const Loader: React.FC = () => {
  const style = {
    width: '3rem',
    height: '3rem'
  }
  return (
    <div className="spinner-border d-flex" style={style} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Loader