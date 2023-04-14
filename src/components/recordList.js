import PhoneCard from './phoneCard';
import useDeleteRecords from '../hooks/useDeleteRecords';
import { useState } from 'react';

const RecordList = (props) => {
  /*  const id = props.match.params.id;
    console.log(id) */

  const [editText, setEditText] = useState(false);
  const [items, setItems] = useState();
  const { changeRecord, delRecord, data } = useDeleteRecords();

  const deleteHandler = (index) => {
    delRecord(index);
    console.log(index, data);
  };
  const changeHandle = (index) => {
    setEditText(!editText);
  
    console.log(index, data);
  };
 
  const change = (e) => {
    const changeItems = items;
    changeItems[e.currentTarget.id] = e.currentTarget.value;
    setItems({ ...changeItems  });
    console.log(changeItems[e.currentTarget.id]);
    /* setData({name: e.target.value, phone: e.target.value})
    console.log({name: e.target.value}) */
  };
 const changeHandleSave = (index, items) => {
    changeRecord(items);
    console.log(index, items);
  };
  return (
    <div>
      {props.recordList?.data &&
        props.recordList.data.map((record, index, data) =>
          !editText ? (
            <PhoneCard key={`phone-card-${index}`}>
              {record.name} {record.phone}
              <button onClick={() => deleteHandler(index)}>Delete</button>
              <button onClick={() => changeHandle(index)}>Edit</button>
            </PhoneCard>
          ) : (
            <PhoneCard key={`phone-card-${index}`}>
              <input
                value={data.name}
                key={`${index}`}
                onChange={change}
              ></input>
              <input
                value={data.phone}
                key={`${index}`}
                onChange={change}
              ></input>
              <button onClick={changeHandleSave}>Save</button>
            </PhoneCard>
          )
        )}
    </div>
  );
};
export default RecordList;
