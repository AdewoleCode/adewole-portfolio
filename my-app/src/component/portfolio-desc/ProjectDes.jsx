import React from 'react'
import  Projects    from '../../helper/Projects'
import { useParams } from 'react-router-dom'

const ProjectDes = () => {

  const {id} = useParams()
  const projectList = Projects[id]

  return (
    <div>
      {projectList.projectName}
    </div>
  )
}

export default ProjectDes