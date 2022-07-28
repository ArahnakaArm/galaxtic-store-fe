import React from 'react'
import { useSelector, useDispatch } from "react-redux";
export default function topbar() {
    const  users = useSelector((state) => state.users);
  return (
    <div>{users.name}</div>
  )
}
