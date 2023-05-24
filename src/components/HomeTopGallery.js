import CatLookAnimation from "./CatLookAnimation";
import '../styles/HomeTopGallery.css'

export default function HomeTopGallery() {
    return(

        <div id="HomeGalleryList">
            <div className="HomeGallerySection">
                <div className="HomeGalleryLeft"><img src={ require('../images/Raini_Selfie.png') } /></div>
                <div className="HomeGalleryLeft"><img src={ require('../images/Raini_Pretty.png') } /></div>
            </div>
            <div className="HomeGallerySection"><CatLookAnimation ></CatLookAnimation></div>
            <div className="HomeGallerySection">
                <div className="HomeGalleryRight"><img src={ require('../images/Raini_Zoom_2.png') } /></div>
                <div className="HomeGalleryRight"><img src={ require('../images/Raini_Pensive.png') } /></div>
            </div>
        </div>
    );
}