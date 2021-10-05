import React from 'react'

export default function Alert(prop) {
    return (
       prop.alert && <div class="alert alert-success  alert-dismissible fade show" role="alert">
        <strong>{prop.alert.type}</strong>:{prop.alert.msg}
      </div>
    )
}
