import React from 'react'
import { AlertProps } from '../containers/VisibleAlert'

const Alert: React.FC<AlertProps> = (props) => {
  const handleClick = () => {
    props.hideAlert()
  }

  let type = ''
  let className = ''
  switch (props.type) {
    case 'ERROR':
      type = 'Ошибка!'
      className = "alert alert-danger alert-dismissible fade show"
      break
    case 'SUCCESS':
      type = 'Успех!'
      className = "alert alert-success alert-dismissible fade show"
      break
    case 'WARNING': 
      type = 'Внимание!'
      className = "alert alert-warning alert-dismissible fade show"
      break
  }
  return (
    <React.Fragment>
      {props.visible && (
        <div className={className} role="alert">
          <strong> {type} </strong> {props.text}
          <button type="button" className="close" onClick={() => handleClick()} aria-label="Close">
            <span>&times;</span>
          </button>
        </div>
      )}
    </React.Fragment>
  )
}

export default Alert