import './OverlayViewer.sass';
import { PiImageThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";


export default function OverlayViewer({ activeView, home, onClose, onChangeView }) {
    if (!activeView) return null;

    return (

        <section className="overlay visible">

            {/* if activeView is "gallery" */}
            {activeView === "gallery" && (
                // display the gallery of images in a slider (scrollable div)
                <div className="overlay__gallery">

                    <div className='overlay__images-slider'>
                        {/* loop through images array and display img for each image */}
                        {home.images.map(image => {
                            return (
                                <img key={image.url ? image.url : "Intet billede tilgængeligt"} src={image.url} alt={image.url} className="overlay__gallery-image" />
                            )
                        } )}
                    </div>

                    {/* Close button */}
                    <button className="overlay__close" onClick={onClose}>
                        X
                    </button>
                </div>
            )}

            {/* if activeView is "floorplans" */}
            {activeView === "floorplans" && (
                // display the floor plan image
                <div className="overlay__floorplans">
                    <img
                        src={home.floorplan.url ? home.floorplan.url : "https://via.placeholder.com/600x400?text=No+Floor+Plan+Available"}
                        alt="Floor Plan"
                        alt={home.floorplan.url ? "Floor Plan" : "No Floor Plan Available"}
                        className="overlay__floorplans-image"
                    />
                    {/* Close button */}
                    <button className="overlay__close" onClick={onClose}>
                        X
                    </button>
                </div>
            )}

            {/* div for displaying the location of the property */}
            {/* use static image or set lat and long from api */}
            {/* if activeView is "map" */}
            {/* {activeView === "map" && ( */}
                {/* display the map image */}
                {/* <div className="overlay__map">
                    <img
                        src={home.map.url}
                        alt="Map"
                        className="overlay__map-image"
                    />
                    {/* Close button */}
                    {/* <button className="overlay__close" onClick={onClose}>
                        X
                    </button> */}
                {/* </div> */}
            {/* )} */}

            {/* NAVIGATION (switch without closing) */}
            <div className="overlay__nav">
                <PiImageThin
                    className="icon"
                    onClick={() => onChangeView("gallery")}
                />
                <IoLayersOutline
                    className="icon"
                    onClick={() => onChangeView("floorplans")}
                />
                <IoLocationOutline
                    className="icon"
                    /* onClick={() => onChangeView("map")} */
                />
                {/* heart icon */}
                {/* if this is a favorite property, display filled heart; otherwise, display outlined heart */}
                <IoHeartOutline className="icon" />
            </div>

        </section>

    );

}