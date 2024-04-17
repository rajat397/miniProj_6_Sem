import React from 'react'
import { useMutation,useQueryClient } from 'react-query';
import * as apiClient from '../apiClient';




const Alert = ({file, embeddings}) => {

  const queryClient = useQueryClient();

  const imageUrl = `data:image/jpeg;base64,${file}`;
  
  const dismissMutation = useMutation({
    mutationFn: apiClient.dismissAlert,
    onSuccess:()=>{
      queryClient.invalidateQueries('AlertList');
    }
  })

  const addMutation = useMutation({
    mutationFn: apiClient.addToRecognisedList,
    onSuccess:()=>{
      queryClient.invalidateQueries('AlertList');
    }
  });

  const handleSubmitAdd = () => {
    let data = {
      file,
      embeddings
    }
    addMutation.mutate(data);
  };

  const handleSubmitDismiss = () => {
    let data = {
      file,
      embeddings
    }
    dismissMutation.mutate(data);
  };

  return (
    <div className='flex  flex-col gap-8 shadow-xl   items-center justify-evenly px-4 py-8 bg-blue-100'>
      <div>
        <img
          src={imageUrl}
          alt="Base64 Image" 
          height={256}
          width={256}
          className='object-contain'
        />
      </div>
      <div className='flex gap-5'>
        <button
          className='border rounded-xl p-3 bg-green-500 text-white font-bold active:bg-green-400 shadow-md'
          onClick={handleSubmitAdd} // Use onClick event and remove ()
          disabled={dismissMutation.isLoading}
        >
          Add To Recognised List
        </button>
        <button
          className='border rounded-xl p-3 bg-red-500 text-white font-bold active:bg-red-400 shadow-md'
          onClick={handleSubmitDismiss} // Use onClick event and remove ()
          disabled={addMutation.isLoading}
        >
          Dismiss Alert
        </button>
      </div>
    </div>
  )
}

export default Alert
