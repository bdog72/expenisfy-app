console.log('hoc.js')

import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is : {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info.</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
        
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)


// ReactDOM.render(<AdminInfo isAdmin={false} info='This is the detail' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthentication={false} info='This is the detail' />, document.getElementById('app'))