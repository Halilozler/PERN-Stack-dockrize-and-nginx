import React, { useEffect } from "react";
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import { increment } from "./store/ornek"

function App() {
  //useSelector ile stateleri alabiliriz.
  const { num } = useSelector(state => state.ornek)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(increment());
  }, [])

  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default App;
