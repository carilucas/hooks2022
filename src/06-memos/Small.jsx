import { memo } from 'react';

export const Small = memo(
    ({value}) => {
      console.log('Regeneración :(')
      return (
         <small>{ value }</small>
      )
   }
)
   
