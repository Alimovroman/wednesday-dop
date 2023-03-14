import React, {ChangeEvent, Fragment, useState} from 'react';
import {Task_3} from "./task_3/Task_3";
import {SlowComponent} from "./task_3/slowComponent/SlowComponent";

export type UserType = {
    [key: string]: { name: string, id: string }
};

const DATA_7: UserType[] = [
    {u1: {name: 'Gleb', id: '1'}},
    {u2: {name: 'Dima', id: '2'}},
    {u3: {name: 'Svetlana', id: '3'}},
    {u4: {name: 'Artur', id: '4'}},
    {u5: {name: 'Vera', id: '5'}},
    {u6: {name: 'Vlad', id: '6'}},
];


export const App = () => {
    const [value, setValue] = useState('');
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);


    return (
        <Fragment>
            <Task_3>
                {/*<div>Lags when change value</div>*/}
                {/*<input type="text" value={value} onChange={onChange}/>*/}
                {/*  <Input />*/}
                <SlowComponent/>
            </Task_3>

            <hr/>
        </Fragment>
    );
};
