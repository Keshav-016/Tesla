import React from "react"
import Data from "./Data"
import Body from "./Body"
export default function Body2() {
    const data = Data.details.map((item) => {
        return (
            <Body
                id= {item.id}
                name= {item.name}
                url={item.url}
                detail={item.detail}
                button1={item.button1}
                button2={item.button2}
            />
        )
})
return(
    <div >
        {data}
    </div>
)
}