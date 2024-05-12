import React from 'react'
import '../css/cart.css'
import backprint_t from '../Images/backprint_t.png'
import cross from '../Images/cross.png'
import arrow_back from '../Images/Arrow_back.png'

function Cart() {
  return (
    <>

    <div className="cartMain">
            <div className="cartTop">
            <div className="cartLeftMain">
            <div className="cartLeft">
                <h1>Cart</h1>
                <div className="clContent">
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                    <div className="cItem1">
                        <div className="cItem">
                            <div className="cItemImg"> <img src={backprint_t} alt="backprint_t" /> </div>
                            <div className="cItemDetails">
                                <h2>New Galaxy Over - Sized T-shirt</h2>
                                <div className="p"><p>Size - M</p>
                                <p>STYLE - Over Sized T- Shirt</p></div>
                                <div className="price">₹599</div>
                            </div>

                        </div>
                        <div className="cItemRemove">
                            <p>REMOVE <img src={cross} alt="" /> </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="cartRgt">
                <div className="cartTotalHeading">
                    <h1>Cart Total</h1>
                </div>
                <div className="cartTotal">
                    <p>Total</p>
                    <span>₹1896</span>
                </div>
                <div className="cartCheckoutBtn">
                    <button>Proceed to Checkout</button>
                </div>
            </div>
            </div>
            <div className="cartBottom">
            <div className="clContinueShop">
                    <img src={arrow_back} alt="" /><p>Continue Shopping</p>
                </div>
            </div>
    </div>
    
    </>
  )
}

export default Cart