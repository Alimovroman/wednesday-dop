import React, {ChangeEvent, FC, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children


type PropsType = {
    children: React.ReactNode
}
export const Task_3: FC<PropsType> = ({children}) => {
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return (
    <div>

      <div>Lags when change value</div>
      <input type="text" value={value} onChange={onChange} />
      {/*/!*  <Input />*!/*/}
        {children}
      {/*<SlowComponent />*/}
    </div>
  );
};

const Input: FC = () => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return <input type="text" value={value} onChange={onChange} />
}