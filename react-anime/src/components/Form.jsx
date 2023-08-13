import React from 'react'

const Form = ({onSubmit, onClick}, ref) => {
  return (
    <form className='form' onSubmit={onSubmit}>
      <label className='label' htmlFor="anime">Add a Anime To Your Personal List</label>
      <input ref={ref} type="text" id="anime" className='search-bar' placeholder='Naruto...'/>
      <div className="btn-container">
        <button className='btn'>Search</button>
        <button className='btn' onClick={onClick}>Clear</button>
      </div>
    </form>
  )
}

export default React.forwardRef(Form);