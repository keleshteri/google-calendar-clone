import React from 'react'
import Day from './Day';

type Props = {
    month:any;
}

export default function Month({month}: Props) {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row: any[], i: React.Key | null | undefined) => (
        <React.Fragment key={i}>
          {row.map((day: any, idx: React.Key | null | undefined) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}