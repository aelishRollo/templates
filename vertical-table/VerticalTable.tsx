
import React from 'react';

let a = ["JOhn","Jacob","Jingleheimer","Schmidty"]

const HorizontalTable = ({ items }) => {
  return (
    <table className="table-style">
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};



export function App(props) {
  return (
    <div className='App'>
      <HorizontalTable items={a} />
    </div>
  );
}
