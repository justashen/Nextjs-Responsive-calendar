import React from 'react'
import { isDate } from 'date-fns';

type Props = {}

const Calender = (props: Props) => {
    const result = isDate('2014-02-20')
  return (
    <div>
        {result && <h1>Heello</h1>}
    </div>
  )
}

export default Calender