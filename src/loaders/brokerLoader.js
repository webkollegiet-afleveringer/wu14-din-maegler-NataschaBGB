export async function brokerLoader({ params }) {
    
    try {
        const brokerId = params.brokerId;

        const response = await fetch(`https://dinmaegler.onrender.com/agents/${brokerId}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch broker details');
        }
        
        const broker = await response.json();
        
        return { broker };

    }
    catch (error) {
        console.error('Error fetching broker details:', error);
        throw error; // Rethrow the error to be handled by the caller
    }

}