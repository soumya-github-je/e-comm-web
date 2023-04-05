
import {Link} from "react-router-dom"
import Header from "../Header"
import CategoriesList from "../CategoriesList"
import EcommerceContext from "../../context/EcommerceContext"
import SliderBanner from "../SliderBanner"
import "./index.css"

const SearchProduct = () => (
    <EcommerceContext.Consumer>
        {value => {
            const {searchProductsList} = value
            return(
                <div>
                    <Header/>
                        <CategoriesList/>
                        <SliderBanner/>
                        <ul className="products-list-container">
                            {searchProductsList.map(searchSEachProduct => (
                                <li className="list-container">
                                    <Link to={`/products/${searchSEachProduct.id}`} className="nav-link">
                                        <div className="css-effect-hover">
                                            <img src={searchSEachProduct.thumbnail} alt={searchSEachProduct.title} className="product-img"/>
                                            <p className="brand-text">{searchSEachProduct.brand}</p>
                                            <p className="title-text">{searchSEachProduct.title}</p>
                                            <p className="price-text">Price: {searchSEachProduct.price * 75}</p>
                                            <p className="category-text">{searchSEachProduct.category}</p>
                                        
                                        </div>
                                    </Link>
                                </li>
                            ))} 
                        </ul>
                    </div>
            )
        }}
    </EcommerceContext.Consumer>
)

export default SearchProduct