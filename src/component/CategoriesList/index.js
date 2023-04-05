import {withRouter,Link} from "react-router-dom"

import {VscChevronRight} from "react-icons/vsc"
import EcommerceContext from "../../context/EcommerceContext"
import "./index.css"


  const CategoriesList = () => {
    return(
        <EcommerceContext.Consumer>
            {value => {
                const {categoriesList,changingCategory,activeCategoryId} = value
                return(
                    <div>
                <ul className="categories-ul-list-container">
                    {categoriesList.map(eachCategory => {
                        const clickingCategory = () => {
                                changingCategory(eachCategory)
                        }
                        const textClassName = activeCategoryId === eachCategory ? `and-up active-rating` : `and-up`

                       return <Link to="/category" className="nav-link" onClick={clickingCategory}> 
                            <li className="categories-list-container"  value={eachCategory}>
                                <p className={textClassName}>{eachCategory}</p>
                                <VscChevronRight  className={`nav-icon ${textClassName}`}/>
                            </li>
                        </Link>
                        
                    })}
                </ul>
            </div>
                )
            }}
        </EcommerceContext.Consumer>
    )
  } 
        
            
        

export default withRouter(CategoriesList)