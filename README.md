# 🏷️ Assignment - Din Maegler
- Name: Natascha Bjerning
- Class number: WU14

# 🌐 URL's
- GitHub repository: https://github.com/webkollegiet-afleveringer/wu14-din-maegler-NataschaBGB
- GitHub Pages: https://webkollegiet-afleveringer.github.io/wu14-din-maegler-NataschaBGB/

# 🔐 Username and password
- No API endpoint for creating a user was provided, so I was not able to do that part of the assignment.

---

## ⚙️ Technologies
- React
- React Router
- React Icons
- Zod
- JavaScript
- HTML
- CSS

---

## 📄 Disclosure of third-party code

### Login form:
- Youtube: https://www.youtube.com/watch?v=VJ1OWCQJhLk

### Form validation + schemas:
- Zod validation: https://mintlify.wiki/colinhacks/zod/guides/error-handling

---

## 🗣️ Arguments for my choices

### General:
I focused on the styling of all pages and making the different functions work - the search functions, filtering and signing up for the newsletter - but I was not able to complete the assignment due to missing API endpoints.
I made some adjustments to the assignment in order to be able to complete as much as possible.

### Header:
- The header should only display the favourites link if the user is logged in, but since I couldn't log in, I decided to always display the favourites link in the header.

### Brokers page:
- Changed linkedin link in BrokerCard to phone link, because the API does not provide a link for a linkedin profile

### API
- I did not have access to all endpoints of the API. On pages where I needed to POST to the API but couldn't, I commented out the code for the POST request and just logged the data.
- On the favourites page, where the added favourites should be POSTED to the API, I stored the favourites in local storage instead, so that the user can still see their added favourites on the page, even though they are not saved to the API.

---

## 📊 Evaluation of my work
- I regret not being able to complete the assignment, not only because of the missing endpoints, but also due to poor time management.
- In spite of me not being able to manage my time effectively, I ended up with a better result than I expected. 
- I am satisfied with the parts that I did complete.

### What went well:
- Houses Page. I am pretty satisfied with making the property type filter and the price range filter work.
- Bookmarks. In the HouseCard component, I implemented the bookmark functionality, which allows users to save their favorite houses.
- Subhero. I created a Subhero component that displays the title and subtitle of the page. It is also possible to choose the title size and the height of the component, which makes it reusable for different pages.
- Search functionality. I implemented a search functionality in the Hero component and SearchProperty component, which allows users to perform free-text searches across all properties. When the form is submitted, the page with a list view of properties is displayed, and information about the search criteria used is passed as query parameters in the URL, so that the list view page can use those query parameters to filter the properties displayed based on the search criteria entered by the user.

### What could have been better:
- Time management. I had trouble focusing on the assignment and managing my time effectively, which led to a not complete assignment.
- Form validation. I wanted to implement more validation fields, but spent too much time trying to think about what fields to add, so I ended up leaving it, to not waste more time.

---

## 📌 Highlighting special points for assessment

### Search function:
- The Hero component and the SearchProperty component both have a search functionality, that allows the user to perform free-text searches across all properties.
- When the search is submitted, the user gets navigated to the Houses page, where the search query is passed as a parameter in the URL, and the Houses page uses that parameter to filter the properties displayed based on the search criteria entered by the user.

### Filtering properties:
- The Houses page has two filters, one for property type and one for price range. The user can select a property type from a dropdown menu, and select a price range using a range input.
- The properties displayed on the page are filtered based on the selected property type and price range.


```jsx
// ---------- Search Function | Hero.jsx and SearchProperty.jsx ----------
export default function Hero() {
    
    // useNavigate is a hook from react-router that allows us to navigate to a different page when the user clicks on the search icon or presses enter in the search input field
    const navigate = useNavigate();

    const handleSearch = (event) => {
        // prevent the default form submission behavior, which would cause the page to reload
        event.preventDefault();
        // get the value of the search input field using FormData API, which provides a convenient way to extract data from form elements, and store it in a variable called "searchQuery"
        const searchQuery = new FormData(event.target).get('search');
        // new URLSearchParams object to create a query string for the search query
        const searchParams = new URLSearchParams();
        // set the search query as a parameter in the searchParams object
        searchParams.set('search', searchQuery);
        // navigate to the houses page with the search query as a parameter in the URL
        navigate(`/houses?${searchParams.toString()}`);
    }
}

// ---------- HousesHomes.jsx ----------
export default function HousesHomes({ homes, selectedType, price }) {

    // homes.homes is the array of homes from the loader, we need to filter it based on selectedType and price
    let filteredHomes = homes.homes;
    
    // ---------- Filtering Properties ----------
    // if selectedType is not 'default', filter homes by type
    if (selectedType !== 'default') {
        // set filteredHomes to a new array that only includes homes with the selected type
        filteredHomes = filteredHomes.filter(home => home.type === selectedType);
    }

    // if price is greater than 0, filter homes by price
    if (price > 0) {
        // set filteredHomes to a new array that only includes homes with a price less than or equal to the selected price
        filteredHomes = filteredHomes.filter(home => home.price <= price);
    }

    // if there are no homes that match the selected type and price, display a message
    if (filteredHomes.length === 0) {
        return (
            <section className='homes'>
                <div className="container">
                    <p className='homes__no-results'>Ingen boliger matcher dine kriterier. Prøv at justere dine filtre.</p>
                </div>
            </section>
        );
    }

    // ---------- Search Function ----------
    // get search query from URL parameters and store it in a variable called "searchQuery"
    const searchParams = new URLSearchParams(window.location.search);
    const searchQuery = searchParams.get('search');

    // if there is a search query
    if (searchQuery) {
        // filter homes by the search query
        const filtered = filteredHomes.filter(home => {
            // convert search query to lowercase and check if it is included in any of the home properties that are strings
            const searchTerm = searchQuery?.toLowerCase() ?? "";
            // return all values of the home object as an array (Object.values(home))
            // .some() checks if at least one of the values in the array matches the search query, and returns true if it does
            return Object.values(home).some(value =>
                // check if the value is a string && if it includes the search term (case insensitive)
                typeof value === 'string' && value.toLowerCase().includes(searchTerm)
            );
        });
        // set filteredHomes to the new array of homes that match the search query
        filteredHomes = filtered;
    }

    // if there are no homes that match the search query, display a message
    if (filteredHomes.length === 0) {
        return (
            <section className='homes'>
                <div className="container">
                    <p className='homes__no-results'>Ingen boliger matcher din søgning. Prøv at justere dine filtre eller søgeord.</p>
                </div>
            </section>
        );
    }
}
```