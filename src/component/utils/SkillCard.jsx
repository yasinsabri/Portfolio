import React from 'react'

const SkillCard = ({imgUrl , Title , name}) => {
  return (
    <React.Fragment>
        <div className="skill-card text-center ">
            <img src={imgUrl} alt=""  className={name} />
            <h4 className='pt-2'>{Title}</h4>
        </div>
    </React.Fragment>
  )
}

export default SkillCard
