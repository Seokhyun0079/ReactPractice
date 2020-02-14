import React, { useRef, useState, useCallback } from 'react';
import produce from 'immer';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', usename: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // const onChange = useCallback(
  //   e => {
  //     const { name, value } = e.target;
  //     setForm({
  //       ...form,
  //       [name]: [value]
  //     });
  //   },
  //   [form]
  // );
  // change like this

  const onChange = useCallback(
    e => {
      const { name, value} = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [form]
  )

  // const onSubmit = useCallback(
  //   e => {
  //     e.preventDefault();
  //     const info = {
  //       id: nextId.current,
  //       name: form.name,
  //       username: form.username
  //     };
  //     setData({
  //       ...data,
  //       array: data.array.concat(info)
  //     });

  //     setForm({
  //       name: '',
  //       username: ''
  //     });

  //     nextId.current += 1;
  //   },
  //   [data, form.name, form.username]
  // );

  // change like this


  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id : nextId.current,
        name : form.name,
        username : form.username
      };

      setData(
        produce(data, draft =>{
          draft.array.push(info);
        })
      );

      setForm({
        name : '',
        username : ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // const onRemove = useCallback(
  //   id => {
  //     setData({
  //       ...data,
  //       array: data.array.filter(info => info.id !== id)
  //     });
  //   },
  //   [data]
  // );

  // change like this

  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft=>{
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    [data]
  );

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input name="username"
          placeholder="id"
          value={form.username}
          onChange = {onChange}
        />
        <input name ="name"
        placeholder="name"
        value={form.name}
        onChange={onChange}/>
        <button type = "submit">登録</button>
      </form>
      <div>
        <ul>
          {data.array.map(info =>(
            <li key={info.id}
            onClick={()=> onRemove(info.id)}
            >
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
