import React from 'react'
import { useParams } from 'react-router-dom';
import Button from './Button';
import './TaskDetails.css'
import { useHistory } from 'react-router-dom'

const TaskDetails = () => {
  const params = useParams()

  const history = useHistory()

  const handleBackButtonClick = () => {
    history.goBack()
  }

  return ( 
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className='task-details-container'>
        <h2>{params.taskTitle}</h2>
        <p>Aliquam erat volutpat. Proin sed lorem et risus tempor sollicitudin in at tellus. In quis nisi nec lorem malesuada mollis quis eu lacus. Mauris commodo elementum mi ac ultricies. Fusce at risus pharetra, tincidunt dui sit amet, sodales nibh. Suspendisse ultricies iaculis orci, at tempus dui. Morbi vitae fermentum risus, ac semper lacus.</p>
      </div>
    </>
   )
}
 
export default TaskDetails;
