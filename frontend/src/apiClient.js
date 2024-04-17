const API_BASE_URL = "http://localhost:5000";


export const getAlerts = async (req) => {
    const response = await fetch(`${API_BASE_URL}/api/getUnMatched`);
    if (!response.ok) {
      throw new Error("Error Fetching alerts");
    }
    return response.json(); // Return the response data
}


export const dismissAlert = async (data) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/dismissAlert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error("Error dismissing alert");
      }
    } catch (error) {
      console.error("Error dismissing alert: ", error);
      
    }
  }




  export const addToRecognisedList =async(data)=>{

     try{

        const response = await fetch(`${API_BASE_URL}/api/addToRecognisedList`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error("Error Adding to Recognised List ");
          }

        
     }catch(error){

         console.error("Error Adding to Recognised List: ", error)

     }


  }
  