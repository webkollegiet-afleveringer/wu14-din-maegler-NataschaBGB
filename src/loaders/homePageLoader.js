// Loader for the home page, which fetches both homes and brokers data

export async function homePageLoader() {

    try {
        const homesResponse = await fetch("https://dinmaegler.onrender.com/homes?_limit=4&_start=2");
        const brokersResponse = await fetch("https://dinmaegler.onrender.com/agents?_limit=3");

        if (!homesResponse.ok || !brokersResponse.ok ) {
            throw new Error('Failed to fetch homes or brokers');
        }

        const homes = await homesResponse.json();
        const brokers = await brokersResponse.json();

        return { homes, brokers };
    }
    catch (error) {
        console.error('Error fetching homes or brokers:', error);
        throw error; // Rethrow the error to be handled by the caller
    }

}