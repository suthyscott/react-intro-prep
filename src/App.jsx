import { useState } from "react"
import "./App.css"
import RedButton from "./RedButton.jsx"
import ClickCounter from "./ClickCounter.jsx"

function App() {

    return (
        <>
            <ClickCounter initialCount={0} />
            <RedButton
                message="This is the Red Button Component"
                clickMsg="clicked"
            />
            <RedButton message="click me" clickMsg="Another click" />
        </>
    )
}

export default App
