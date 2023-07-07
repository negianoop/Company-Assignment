import React, { useState } from 'react';

const ListDifferences = () => {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [differences, setDifferences] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: [],
  });

  const computeDifferences = () => {
    const arrA = listA.split(' ').map(item => item.trim());
    const arrB = listB.split(' ').map(item => item.trim());

    const onlyInA = arrA.filter(item => !arrB.includes(item));
    const onlyInB = arrB.filter(item => !arrA.includes(item));
    const inBoth = arrA.filter(item => arrB.includes(item));
    const combined = [...onlyInA, ...onlyInB];

    setDifferences({ onlyInA, onlyInB, inBoth, combined });
  };

  return (
    <div>
      <h2>List Differences</h2>
      <div>
        <label>List A:</label>
        <textarea value={listA} onChange={e => setListA(e.target.value)} rows={1}cols={30}/>
      </div>

      <div>
        <label>List B:</label>
        <textarea value={listB} onChange={e => setListB(e.target.value)} rows={1} cols={30}/>
      </div>
      <button onClick={computeDifferences}>Compute</button>
      <div>
        <h3>Items present only in A:</h3>

          {differences.onlyInA.map(item => (
            <span>{item + " "}</span>
          ))}

      </div>
      <div>
        <h3>Items present only in B:</h3>

          {differences.onlyInB.map(item => (
            <span>{item + " "}</span>
          ))}

      </div>
      <div>
        <h3>Items present in both A and B:</h3>

          {differences.inBoth.map(item => (
            <span>{item +  " "}</span>
          ))}

      </div>
      <div>
        <h3>Items combining both A and B (unique):</h3>

          {differences.combined.map(item => (
            <span>{item + " "}</span>
          ))}

      </div>
    </div>
  );
};

export default ListDifferences;
