import '../styles/CatLookAnimation.scss'

export default function CatLookAnimation() {
    return(
        <div class="cat">
            <div class="ear ear--left"></div>
            <div class="ear ear--right"></div>
            <div class="face">
                <div class="eye eye--left">
                    <div class="eye-pupil"></div>
                </div>
                <div class="eye eye--right">
                    <div class="eye-pupil"></div>
                </div>
                <div class="muzzle"></div>
            </div>
        </div>
    );
}