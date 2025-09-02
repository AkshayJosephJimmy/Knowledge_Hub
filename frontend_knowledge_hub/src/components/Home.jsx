import React from 'react'

function Home() {
  return (
    <div>
        <div className='flex flex-col items-start justify-center gap-4 h-80 bg-blue-100'>

        <button className='bg-blue-500 text-white p-2 rounded-lg ml-100'>Create Team</button>
        <p className='ml-100'>Create your Team to create ,manage and share documents.when you create a Team you will be automaticaly be an admin</p>
        <button className='bg-blue-500 text-white p-2 rounded-lg ml-100'>Join Team</button>
        <p className='ml-100'>Join an existing Team to collaborate and share documents with your team members.You can Join a Team via Team link</p>

        </div>
        <div >


        <h1>Teams</h1>
        <div>
            {/* List of teams */}
        </div>

        </div>
      
    </div>
  )
}

export default Home
