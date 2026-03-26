// house details page when clicking on a house in the list on Houses.jsx

export default function House() {

    // for loader:
    // export default async function houseDetailsLoader({ params }) {
    
    // const houseId = params.houseId;

    // const response = await fetch(`https://dinmaegler.onrender.com/homes/${houseId}`);
    // if (!response.ok) {
    //         throw new Error('Failed to fetch house details');
    //     }
    //     const house = await response.json();
    //     return house;
    // }

    // const { houseId } = useParams();


    return (
        <section className="house-page">
            <h1>House details page</h1>
        </section>
    )

}