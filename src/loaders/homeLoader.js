export async function homeLoader({ params }) {
    
    try {
        const homeId = params.homeId;

        const response = await fetch(`https://dinmaegler.onrender.com/homes/${homeId}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch home details');
        }
        
        const home = await response.json();
        
        return { home };

    }
    catch (error) {
        console.error('Error fetching home details:', error);
        throw error; // Rethrow the error to be handled by the caller
    }

}