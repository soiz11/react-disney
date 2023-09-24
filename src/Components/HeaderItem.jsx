import React from 'react'

const HeaderItem = ({name, Icon}) => {
  return (
    
    <div className = 'nav'>
        <Icon/>
        <div className='navlink'>
           {name}
        </div>
        
    </div>
  )
}

export default HeaderItem