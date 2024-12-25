import React, { useEffect, useState } from 'react'
import { Container } from '../../../common/Container'
import { GetStarted } from './GetStarted'


export const Instep2 = () => {
  const [progress, setProgress] = useState(1)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(()=>{
    if(title.trim() && description.trim()){
      setProgress(2);
    }else{
      setProgress(1);
    };
  },[title, description])

  const handleDelete =()=>{
    setProgress(1)
    setTitle('')
    setDescription('')
  }
  
  return ( 
    <div className=''>
      <Container >
        <GetStarted 
        itemTitle="Home - Incidents - New Incident" 
        itemName="New Incident"
        progress={progress}
        onDelete={handleDelete}
        />

        <div className='md:pt-[230px] sm:pt-[255px] pt-[265px] '>
          <div className='max-w-[752px] max-h-[366px] mx-auto flex flex-col gap-6'>
            <div className='space-y-6'>
              <div>
                <h1 className='sm:text-2xl text-xl font-bold'>Let's give the incident a title?</h1>
                <p className='text-t14 text-accent'>Make a title that will easily identify the incidents</p>
              </div>
              <input className='bg-color1 focus:outline-none w-full rounded-lg p-3 focus:ring-2 focus:ring-primary' type="text" placeholder='Add title here'
              value={title}
              onChange={(e)=>{setTitle(e.target.value);}}
              />
            </div>
            <div className='space-y-6'>
              <div>
                <h1 className='sm:text-2xl text-xl font-bold'>Describe what happened during the incident?</h1>
                <p className='text-t14 text-accent'>Share some information about the incident. The when, where, how.</p>
              </div>
              <textarea className='bg-color1 focus:outline-none w-full h-32 rounded-lg p-3 resize-none focus:ring-2 focus:ring-primary' type="text" placeholder='Type here'
              value={description}
              onChange={(e)=>{setDescription(e.target.value);}}
              />
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  )
}
