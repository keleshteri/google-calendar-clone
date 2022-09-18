import dayjs from 'dayjs';
import React, { useState } from 'react'
import GlobalContext from './GlobalContext' 
type Props = {
    children?: React.ReactNode;
}

export default function ContextWrapper({children}: Props) {
    const [monthIndex,setMonthIndex] = useState<number>(dayjs().month());
  return (
    <GlobalContext.Provider value={{monthIndex, setMonthIndex}}>
        {children}
    </GlobalContext.Provider>
  )
}