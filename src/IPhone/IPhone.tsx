
import React from "react";
interface iphone {
    src: string;
    title: string;
    description: string;
    price: number;
}
const IPhone = (props: any) => {
    const iphoneDetails = [
    {
        src: 'https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg',
        title: 'Iphone-X',
        description: 'Older Iphone from 2017',
        price: 450
    },
    {
        src: 'https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg',
        title: 'Iphone-11',
        description: 'Modern Iphone from 2019',
        price: 600
    },
    {
        src: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-gold-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021659000',
        title: 'Iphone-12',
        description: 'Superb Iphone from 2021',
        price: 800
    }
    ]
    return(
        <div>
            {iphoneDetails.map(iphone => {
                return(<div style={{display: 'flex', flexDirection: 'column-reverse'}}> 
                    <img src={iphone.src}></img>
                    <div style={{backgroundColor: '#2e2e2e', display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop: 20, marginBottom: 20}}>
                    <span>{iphone.title}</span>
                    <span>{iphone.description}</span>
                    <span>{iphone.price}</span>
                    </div>
                </div>)
            })}
        </div>
    )
}

export default IPhone;