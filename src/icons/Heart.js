import React from 'react';

const Heart = () => {
  let paths = Array(15).fill('');
  console.log(paths);
  return(
    <div className="hearts">
      {paths.map(x => {
        let y = Math.random() * 100;
        let z = Math.random() * 100;
        let styles ={
          top: `${y}%`,
          left: `${z}%`
        }
        return(
          <svg className='heart' style={styles} viewBox="0 0 54.5 50" >
            <path class="st0" d="M40.3,0c-5,0-10.1,2.4-13,7.4c-2.9-5-8-7.4-13-7.4C7,0,0,5,0,14.1C0,24.7,12.7,35.5,27.3,50
            	c14.6-14.5,27.3-25.3,27.3-35.9C54.5,5,47.5,0,40.3,0"/>
          </svg>
        )
      })}

    </div>

  )
}


export default Heart;
