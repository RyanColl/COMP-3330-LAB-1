import React, { useEffect, useState } from "react";

const MainPage = (props: any) => {
    const { width } = props;
    const [offset, setOffset] = useState(0)
    const spanArray = []
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    })
    return (
        <div>
            <nav style={{height: 120, opacity: (100-(offset*2)), display: 'flex'}}>
                    
            </nav>
        </div>
    )
}
export default MainPage;