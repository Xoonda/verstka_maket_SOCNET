import React from "react"

const Mainwin = () => {
    return (
        <div className="Mainwin">
            <div className="title">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBJU7zLQb4pCzjhYY7jtxPXRoI_bQty80VAw&usqp=CAU"></img>

            </div>
            <div className="profile">
                <div className="photo">Photo HERE</div>
                <div className="text_profile1">
                    <h1>Name & SurName</h1>
                    <p>Birthday:</p>
                    <p>City:</p>
                    <p>Education:</p>
                    <p>Web Site:</p>
                </div>
            </div>
            <div className="posts"></div>
        </div>
    )
}

export default Mainwin;