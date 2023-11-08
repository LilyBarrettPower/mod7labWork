// import { Outlet } from "react-router-dom";

import SimpleDialogDemo from "../components/SimpleDialog"

export function HomePage() {


    return (
        <div className="homePage">
            <h1>This is my home page!</h1>
            {/* <Outlet /> */}
            {/* outlet element not required as there are no child route elements  */}
            <SimpleDialogDemo></SimpleDialogDemo>
        </div>

    )
}

