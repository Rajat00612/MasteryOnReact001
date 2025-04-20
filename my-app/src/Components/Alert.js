import React from 'react'
// s
export default function alert(props) {

  return (
   props.alert && <div class={`alert alert-success alert-dismissible fade show`} role="alert">
  <b> {props.alert.type}   {props.alert.msg} </b>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}
