import React from 'react';


export type GlobalContextType = {
    monthIndex: number;
    setMonthIndex: React.Dispatch<React.SetStateAction<number>>;    
}; 
const GlobalContext = React.createContext<GlobalContextType>({
    monthIndex: 0,
    setMonthIndex: () => {}
});

export default GlobalContext;