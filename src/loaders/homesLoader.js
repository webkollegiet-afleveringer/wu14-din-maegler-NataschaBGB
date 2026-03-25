// Home loader for fetching home data
export async function homesLoader() {
    try {
        const response = await fetch("https://dinmaegler.onrender.com/homes");
        // const responseCount = await fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start=2");

        if (!response.ok /* || !responseCount.ok */ ) {
            throw new Error('Failed to fetch homes');
        }

        const homes = await response.json();
        // const count = await responseCount.json();

        return { homes /* , count */ }; // Return both the array of homes and the count
    }
    catch (error) {
        console.error('Error fetching homes:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
}