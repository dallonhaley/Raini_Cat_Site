import AngelDevilScale from "./AngelDevilScale";
import CatLookAnimation from "./CatLookAnimation";
import HomeTopGallery from "./HomeTopGallery";


export default function Home() {
    return(
        <div> 
            <HomeTopGallery></HomeTopGallery>
            <br></br>
            <br></br>
            <AngelDevilScale style={{position: 'absolute', top: '50%'}}></AngelDevilScale>
        </div>
    );
}


