import React from "react";
import Fade from 'react-reveal/Fade';
export default function Body(prop) {


    // const[old,update]=React.useState(0)
    // const[detail,alterDetail]=React.useState(
    //     {
    //         id: 1,
    //         name: "Model 3",
    //         url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto",
    //         detail: "Leasing starting at $349/mo",
    //     }
    // )
    // const[allDetail,alterAllDetail]=React.useState(Data)
    // function getDetails() {
    //     const productArray = allDetail.details
    //     alterDetail(prev => ({
    //         name: productArray[1].name,
    //         url: productArray[1].url,
    //         detail: productArray[1].detail
    //     }))
    // }

    // function updates(){
    //  update(old+1)
    // }

    //     window.addEventListener('scroll',updates);
    const [val, changeVal] = React.useState(true);
    window.addEventListener('scroll', getDetails);
    function getDetails() {
        return (window.scrollY > 4350 ? changeVal(false) : changeVal(true))
    }


    return (

        <div style={{ backgroundImage: `url(${prop.url})` }} className="main-img">
            <div className="main-productDetails">
                <Fade bottom>
                    <p className="main-productName">{prop.name}</p>
                </Fade>
                <Fade bottom>
                    <p className="main-productInfo">{prop.detail}</p>
                </Fade>
            </div>
            {val ? <div>
                <div className="btn">
                    <Fade bottom>
                        <button type="submit" className="btn-black">{prop.button1}</button>
                        <button type="submit" className="btn-white">{prop.button2}</button>
                    </Fade>
                </div>
                <img src="https://drive.google.com/uc?export=view&id=1kEJXM1kILcMIQTruE9VCalaEYb6i4Ssk" alt="no img" className="main-arrow" />
            </div> : null}
            <button type="submit" className="btn-shopNow">Shop Now</button>
        </div>
    )
}