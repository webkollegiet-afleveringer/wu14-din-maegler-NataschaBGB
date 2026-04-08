// Broker loader for fetching broker data
export async function brokersLoader() {

    try {
        const response = await fetch("https://dinmaegler.onrender.com/agents");

        if (!response.ok) {
            throw new Error('Failed to fetch brokers');
        }

        const brokers = await response.json();

        return { brokers }; // Return the array of brokers
    }
    catch (error) {
        console.error('Error fetching brokers:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}