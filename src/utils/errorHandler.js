const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { status, data } = error.response;
    console.log(error.response);
    console.error(`API Error: ${status} - ${data.error}`);
    return data.error;    
  } else if (error.request) {
    // The request was made but no response was received
    console.error("API Error: No response received from the server");
    return "No response received from the server. Please try again later.";
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error(`API Error: ${error.message}`);
    return "An unexpected error occurred. Please try again later.";
  }
};

export default handleApiError;
