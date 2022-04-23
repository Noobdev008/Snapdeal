import "./catagory.css"

const Category = () => {


    return (
     
            <div className="category">
                <div>
                    <img src="https://snapdeal.vercel.app/static/media/locimg.44348c7959cd217a9987.png" alt="" />
                </div>
                <div >
                    <p>Your Delivery Pincode</p>
                    <p>_</p>
                </div>
                <div >Enter your Pin code to check Evelability and Faster delivery Option<input type="number" placeholder="Enter your PIN code"  />
                </div>
            </div>
       
    )
}

export default Category