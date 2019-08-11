import React from 'react'

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center><h1>Stock List</h1></center>
      {contacts.map((contact)=>(<h1>contact.01.symbol</h1>))}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contacts}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contacts}</h6>
            <p class="card-text">{contacts}</p>
          </div>
        </div>
      )}
    </div>
  )
};

export default Contacts