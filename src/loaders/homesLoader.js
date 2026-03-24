// Home loader for fetching home data
export async function homesLoader() {
    try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");

        if (!response.ok) {
            throw new Error('Failed to fetch homes');
        }

        const homes = await response.json();
        return homes; // Return the array of homes
    }
    catch (error) {
        console.error('Error fetching homes:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}