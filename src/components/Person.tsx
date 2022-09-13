import React, {FC, useState, ChangeEvent} from 'react';

export enum HairColor {
    Pink = " nega pink rangda",
    Green = "nima uchun Green rangda",
    Red = "men Red rangni yoqtiraman"
}
export interface Props {
    name: string;
    age: number;
    email: string;
    hair : HairColor
}


export const Person : FC<Props> =  ({name, email, age, hair}) => {

    const [country, setCountry] = useState<string | null >('')
    console.log(country);
    
    type colorType = "red" | 'green' | 'blue' | 'yellow'
    const [color , setColor] = useState<colorType>('blue')
    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        
        setCountry(event.target.value)

    }
  return (
    <div style={ {background: color, transition: 'all 1s'}}>
      <h1>{name }</h1>
      <h1>{age }</h1>
      <h1>{email }</h1>

      <input placeholder='davlat' 
        onChange={(e)=>{
           handleChange(e)
        }}
      />

      <h2>{country}</h2>
        <button onClick={()=>setColor('green') }>Green</button>
        <button onClick={()=>setColor('yellow') }>yellow</button>
        <button onClick={()=>setColor('red') }>red</button>
        <button onClick={()=>setColor('blue') }>blue</button>
      {hair}
    </div>
  );
}
