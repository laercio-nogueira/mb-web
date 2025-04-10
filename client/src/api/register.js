export const registerUser = async(data) => {
  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (!response.ok) {
      throw result.message || JSON.stringify(result)
    }

    return result;

  } catch (error) {
    throw new Error(error);
  }

}

