export async function houseLoader({ params }) {
    
    try {
        const houseId = params.houseId;

        const response = await fetch(`https://dinmaegler.onrender.com/homes/${houseId}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch house details');
        }
        
        const house = await response.json();
        
        return { house };

    }
    catch (error) {
        console.error('Error fetching house details:', error);
        throw error; // Rethrow the error to be handled by the caller
    }

}