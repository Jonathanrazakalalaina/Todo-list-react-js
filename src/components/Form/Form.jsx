import React from 'react'
import './form.css'

const Form = ({ createCardFunc, title, details, setTitleFunc, setDetailsFunc }) => {

  return (
    <form onSubmit={createCardFunc}>
        <input type="text" id="title" value={title} placeholder='Raharaha atao' onChange={setTitleFunc}/>

        <textarea id="details" value={details} placeholder='Fanazavana misimisy ...' onChange={setDetailsFunc}></textarea>

        <input type="submit" value="Hanampy" className='btn__submit'/>
    </form>
  )
}

export default Form
