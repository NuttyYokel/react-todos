import React from 'react';

function MainContent() {
  return (
    <section className='main-content'>
      <ul className='todo-list'>
        <li>
          <input type='checkbox' />
          <span>First element</span>
        </li>
        <li>
          <input type='checkbox' />
          <span>Second element</span>
        </li>
        <li>
          <input type='checkbox' />
          <span>Third element</span>
        </li>
      </ul>
    </section>
  );
}

export default MainContent;
