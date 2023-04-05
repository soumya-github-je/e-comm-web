import {Component} from "react"
import Header from "../Header"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"

class SellingProduct extends Component{


    render(){
       return <EcommerceContext.Consumer>
            {value => {
                const {titleInput,descriptionInput,priceInput,stockInput,brandInput,categoryInput,ratingInput,discountInput,thumbnailInput,image1Input,image2Input,image3Input,image4Input,
                onChangeBrand, onChangeDesacription, onChangeCategory,onChangeDiscountPercentage,onChangeImage1,onChangeImage2,onChangeImage3,
            onChangeImage4,onChangePrice,onChangeRating, onChangeStock,submittingForm,onChangeThumbnail, onChangeTitle,showAddingProduct,clickingPostButton} = value 
            
                return(
                    <div>
                        <Header/>
                        <div className="become-a-seleer-main-bg-container">
                        <p className="all-products-text">Sell Your Product Here</p>
                        <form onSubmit={submittingForm} className="become-a-seller-from-container">
                            <div className="inputs-container-become-a-seller">
                                <input type="text" placeholder="Title" onChange={onChangeTitle} value={titleInput} className="become-a-seller-input"/>
                                <input type="text" placeholder="Deascription" onChange={onChangeDesacription} value={descriptionInput}  className="become-a-seller-input"/>
                            </div>
                            <div>
                                <input type="number" placeholder="Price" onChange={onChangePrice} value={priceInput} className="become-a-seller-input"/>
                                <input type="number" placeholder="Stock" onChange={onChangeStock} value={stockInput} className="become-a-seller-input"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Brand" onChange={onChangeBrand} value={brandInput} className="become-a-seller-input"/>
                                <input type="text" placeholder="Category" onChange={onChangeCategory} value={categoryInput} className="become-a-seller-input"/> 
                            </div>
                            <div>
                                <input type="text" placeholder="Rating" onChange={onChangeRating} value={ratingInput} className="become-a-seller-input"/>
                                <input type="number" placeholder="DiscountPercentage" onChange={onChangeDiscountPercentage} value={discountInput} className="become-a-seller-input"/>
                            </div>
                            <div>
                                <input type="url" placeholder="Thumbnail" onChange={onChangeThumbnail} value={thumbnailInput} className="become-a-seller-input"/>
                                <input type="url" placeholder="Image1" onChange={onChangeImage1} value={image1Input} className="become-a-seller-input"/>
                            </div>
                            <div>
                                  
                                <input type="url" placeholder="Image2" onChange={onChangeImage2} value={image2Input} className="become-a-seller-input"/>
                                <input type="url" placeholder="Image3" onChange={onChangeImage3} value={image3Input} className="become-a-seller-input"/>
                            </div>  
                            <input type="url" placeholder="Image4" onChange={onChangeImage4} value={image4Input} className="become-a-seller-input"/>
                            <div className="beacome-a-seller-btn-container">
                                <button type="submit" className="become-a-seller-post-button" onClick={clickingPostButton} value={showAddingProduct}>Post</button>
                            </div>
                            
                            {showAddingProduct && <p className="successfull-msg-text">Successfully added your product</p>}
                            
                        </form>
                    </div>

                    </div>
                    
                )
            }}
        </EcommerceContext.Consumer>
        
    }
}

export default SellingProduct