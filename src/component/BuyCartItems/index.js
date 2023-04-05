import { Component } from "react";
import Header from "../Header"
import CartSummary  from "../CartSummary";
import "./index.css"

class BuyCartItems extends Component{
    state = {
        nameInput: '',
        phoneNoInput:'',
        localityInput: '',
        pincodeInput: '',
        addressInput: '',
        cityDistrictTownInput:'',
        showErrorMsgInBuyNow: false,
        errorMsgBuyNow: '',
        showFinalVectorImag: '',
        textColor: '',

    }
    
    onChangeName = event => {
        this.setState({
            nameInput: event.target.value
        })
    }

    onChangePhoneNo = event => {
        this.setState({
            phoneNoInput: event.target.value
        })
    }

    onChangePinCode = event => {
        this.setState({
            pincodeInput: event.target.value
        })
    }

    onChangeLocality = event => {
        this.setState({
            localityInput: event.target.value
        })
    }

    onChangeAddress = event => {
        this.setState({
            addressInput: event.target.value
        })
    }

    onChangeCityDistrictTown = event => {
        this.setState({
            cityDistrictTownInput: event.target.value
        })
    }

    


    onSumitForm = event => {
        event.preventDefault()
        const {nameInput,phoneNoInput,pincodeInput,cityDistrictTownInput,localityInput,addressInput}  = this.state 
        const nameAndPhoneEmpty = (nameInput && phoneNoInput !== " ")
        const pinAndLoaclity = (localityInput && pincodeInput !== " ")
        const addressAndCity = (cityDistrictTownInput && addressInput !== " ")
        if (nameAndPhoneEmpty){
            this.setState({
                showErrorMsgInBuyNow: true,
                showFinalVectorImag: "https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",
                errorMsgBuyNow: "Successfully Ordered Your Products",
                textColor: "green-color"
            })
        }else if (pinAndLoaclity){
            this.setState({
                showErrorMsgInBuyNow: true,
                showFinalVectorImag: "https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",
                errorMsgBuyNow: "Successfully Ordered Your Products",
                textColor: "green-color"
            })
        }else if (addressAndCity){
            this.setState({
                showErrorMsgInBuyNow: true,
                showFinalVectorImag: "https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png",
                errorMsgBuyNow: "Successfully Ordered Your Products",
                textColor: "green-color"
            })
        }
         else{
            this.setState({
                showErrorMsgInBuyNow: true,
                showFinalVectorImag: "https://cdn.pixabay.com/photo/2014/04/02/10/26/attention-303861_960_720.png",
                errorMsgBuyNow: "Pleace enter appropriate data in the given columns",
                textColor: "black-color"
            })
        }
        
        
    }
    

    renderSummaryPrices = () => {
        const {showErrorMsgInBuyNow,errorMsgBuyNow,showFinalVectorImag,textColor} = this.state
        return(
            <div className="buy-now-main-bg-container">
            <CartSummary/>
            {showErrorMsgInBuyNow && (<div className="success-or-warning-container">

                        <img className="success-image" src={showFinalVectorImag} alt="success message"/>
                        <p className={textColor}>{errorMsgBuyNow}</p>
                    </div>)}
        </div>
        
            
        )
    }
        
 

    render(){
        const {nameInput,phoneNoInput,pincodeInput,localityInput,addressInput,cityDistrictTownInput} = this.state

        return(
            <>
                <Header/>
                <div className="buynow-main-contanier">

                    <div className="form-main-container">
                        <form className="form-container"onSubmit={this.onSumitForm}>
                            <h1 className="form-description">Buy Your products Here</h1>
                            <div className="form-inputs-contianer">
                                <input type="text" 
                                className="input-element1" 
                                placeholder="Name" value={nameInput}
                                onChange={this.onChangeName}
                                />
                                <input type="text" 
                                className="input-element1" 
                                placeholder="10-digit mobile number" 
                                value={phoneNoInput}
                                onChange={this.onChangePhoneNo}
                                />
                            </div>
                            <div className="form-inputs-contianer">
                                <input type="text" 
                                className="input-element1" 
                                placeholder="Pincode" 
                                value={pincodeInput}
                                onChange={this.onChangePinCode}
                                />
                                <input type="text" 
                                className="input-element1" 
                                placeholder="Locality" 
                                value={localityInput}
                                onChange={this.onChangeLocality}
                                />
                            </div>
                                <div className="form-inputs-contianer">
                                    <textarea type="text" 
                                    className="input-large-element" 
                                    placeholder="Address (Area and Street)"
                                    value={addressInput}
                                    onChange={this.onChangeAddress}
                                    />
                                </div>
                                <div className="form-inputs-contianer">
                                    <input type="text" 
                                    className="input-element1"
                                     placeholder="City/District/Town" 
                                     value={cityDistrictTownInput}
                                     onChange={this.onChangeCityDistrictTown}
                                     />
                                    <select className="input-element3">
                                        <option>--Select state--</option>
                                        <option>Andhra Pradesh</option>
                                        <option>Telangana</option>
                                        <option>Tamil Nadu</option>
                                        <option>Bengalore</option>
                                        <option>Kerala</option>
                                        <option>Delhi</option>
                                        <option>Gujarat</option>
                                        <option>Goa</option>
                                        <option>Madhya Pardesh</option>
                                    </select>
                                </div>
                                <div>
                                    <p className="address-type-text">Address Type</p>
                                    <div>
                                        <input type="radio" name="HOME" id="home" value="Home" className="radio-input1"/>
                                        <label htmlFor="home" className="radio-label-text">Home (all day delivery)</label>

                                        <input type="radio" name="HOME" id="work" value="Work" className="radio-input1"/>
                                        <label htmlFor="work" className="radio-label-text">Work (Delivery between 10 AM - 5 PM)</label>
                                    </div>
                                </div>
                                <div className="submit-button-container">
                                <div>
                                    <p className="address-type-text">Payment Options</p>
                                    <div>
                                        <input type="radio" name="RADIO" id="upi" value="upi"  className="radio-input1"/>
                                        <label htmlFor="upi"  className="radio-label-text">UPI</label>
                                        <div>
                                            <input type="radio" name="RADIO" id="wallet" value="wallet" className="radio-input1"/>
                                            <label htmlFor="wallet"  className="radio-label-text">Wallet / Postpaid</label>
                                        </div>

                                        <input type="radio" name="RADIO" id="credit" value="credit" className="radio-input1"/>
                                        <label htmlFor="credit"  className="radio-label-text">Credit / Debit ? ATM Card</label>
                                        <div>
                                            <input type="radio" name="RADIO" id="net" value="net" className="radio-input1"/>
                                            <label htmlFor="net"  className="radio-label-text">Net Banking</label>
                                        </div>

                                        <input type="radio" name="RADIO" id="cash" value="cash" className="radio-input1"/>
                                        <label htmlFor="cash" className="radio-label-text">Cash on Delivery</label>
                                        <div>
                                            <input type="radio" name="RADIO" id="emi" value="emi" className="radio-input1"/>
                                            <label htmlFor="emi" className="radio-label-text">EMI (Easy Installments)</label>
                                        </div>
                                        
                                    </div>
                                </div>
                                <button className="submit-button" type="sumbit">
                                    Submit
                                </button>
                                </div>
                                

                        </form>
                    </div>
                    <div>
                        {this.renderSummaryPrices()}
                        
                    </div>
                    
                </div>
            </>
            
        )
    }
}

export default BuyCartItems