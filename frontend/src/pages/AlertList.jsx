import React from 'react'
import { useQuery } from 'react-query'
import Alert from './Alert'
import * as apiClient from "../apiClient";

const AlertList = () => {
  const { data,isLoading} = useQuery("AlertList", {
    queryFn: apiClient.getAlerts,
  });

  // Check if data is undefined or null
  if (isLoading) {
    return <div>Loading...</div>; // or any other loading indicator
  }


  return (
    <div className='flex flex-col gap-10 mt-5 '>
      {data.length > 0 
      ? (
        data.map((alert, index) => (
          <Alert key={alert.embeddings} file={alert.file} embeddings={alert.embeddings} />
        ))
      ) 
      : (
        <div className='text-3xl font-bold flex-1'>No Alerts</div>
      )}
    </div>
  );
}

export default AlertList;
