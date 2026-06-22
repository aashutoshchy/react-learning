import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/aashutoshchy').then((response)=>{
            return response.json()
        }).then((data)=> {
            console.log(data)
            setData(data);
        })
    }, [])

  return (
    <div className='text-center bg-gray-400 text-white p-4 w-3xl m-auto'>
      Github Followers: {data.followers}
    </div>
  )
}

export default Github
