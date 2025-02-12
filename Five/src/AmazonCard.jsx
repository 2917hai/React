import img1 from "./images/back2.jpg"
import img2 from "./images/back3.jpg"
import img3 from "./images/back4.jpg"
import img4 from "./images/back6.jpg"
const AmazoneCard=()=>
{
    return(
        <>
        <div className="mainbox">
            <div className="box1">
                <div className="image">
                    <img src={img1}/>
                </div>
                <h1>This is First Item</h1>
                <h1>Rs=4530/-</h1>
            </div>
            <div className="box2">
            <div className="image">
                    <img src={img2}/>
                </div>
                <h1>This is Second Item</h1>
                <h1>Rs=4750/-</h1>
            </div>
            <div className="box3">
            <div className="image">
                    <img src={img3}/>
                </div>
                <h1>This is Third Item</h1>
                <h1>Rs=4580/-</h1>
            </div>
            <div className="box4">
            <div className="image">
                    <img src={img4}/>
                </div>
                <h1>This is Fourth Item</h1>
                <h1>Rs=4250/-</h1>
            </div>
        </div>
        </>
    )
}
export default AmazoneCard;