import React from "react"

const CardCharacters = () => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" style={{color: "black"}}>Star Wars</h5>
                    <p className="card-text" style={{color: "black"}}>In a galaxy far far far away</p>
                    <a href="#" className="btn btn-primary">Learn More!</a>
                    <a href="#" class="card-link"><i class="fa fa-heart"></i>

</a>
                </div>
        </div>
    )
}
export default CardCharacters