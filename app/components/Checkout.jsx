import React from 'react'
import store from '../store'

const Checkout = props => {
  return (
    <div className="container wrapper">
            <div className="row cart-head">
                <div className="container">
                <div className="row">
                    <p></p>
                </div>
                <div className="row">
                    <div style={{display: 'table', margin: 'auto'}}>
                        <h4 className="step_thankyou check-bc step_complete">Checkout</h4>
                    </div>
                </div>
                <div className="row">
                    <p></p>
                </div>
                </div>
            </div>
            <div className="row cart-body">
                <form className="form-horizontal" onSubmit={props.sendOrder}>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6">
                    <div className="panel panel-info">
                        <div className="panel-heading" >
                            Review Order <div className="pull-right"><small><a className="afix-1" href="#"></a></small></div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <strong>Subtotal</strong>
                                    <div className="pull-right"><span>$</span><span>200.00</span></div>
                                </div>
                                <div className="col-xs-12">
                                    <small>Shipping</small>
                                    <div className="pull-right"><span>-</span></div>
                                </div>
                            </div>
                            <div className="form-group"><hr /></div>
                            <div className="form-group">
                                <div className="col-xs-12">
                                    <strong>Order Total</strong>
                                    <div className="pull-right"><span>$</span><span>150.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                    <div className="panel panel-info">
                        <div className="panel-heading">Address</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12">
                                    <h4>Shipping Address</h4>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Country:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="country" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-6 col-xs-12">
                                    <strong>First Name:</strong>
                                    <input type="text" name="first_name" className="form-control" required />
                                </div>
                                <div className="span1"></div>
                                <div className="col-md-6 col-xs-12">
                                    <strong>Last Name:</strong>
                                    <input type="text" name="last_name" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Address:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="address" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>City:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="city" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>State:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="state" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="zip" className="form-control" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Phone Number:</strong></div>
                                <div className="col-md-12"><input type="text" name="phone_number" className="form-control" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Email Address:</strong></div>
                                <div className="col-md-12"><input type="text" name="email" className="form-control" required /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Shipping Method:</strong></div>
                                <div className="col-md-12">
                                    <select id="shipping" name="shipping" className="form-control" required>
                                        <option value="Standard">Standard</option>
                                        <option value="Express">Express</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="panel panel-info">
                        <div className="panel-heading"><span><i className="glyphicon glyphicon-lock"></i></span> Secure Payment</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card Type:</strong></div>
                                <div className="col-md-12">
                                    <select id="CreditCardType" name="CreditCardType" className="form-control">
                                        <option value="5">Visa</option>
                                        <option value="6">MasterCard</option>
                                        <option value="7">American Express</option>
                                        <option value="8">Discover</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Credit Card Number:</strong></div>
                                <div className="col-md-12"><input type="text" className="form-control" name="car_number" value="" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Card CVV:</strong></div>
                                <div className="col-md-12"><input type="text" className="form-control" name="car_code" value="" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <strong>Expiration Date</strong>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <select className="form-control" name="">
                                        <option value="">Month</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                </select>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                    <select className="form-control" name="">
                                        <option value="">Year</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12">
                                    <span>Pay secure using your credit card.</span>
                                </div>
                                <div className="col-md-12">
                                    <ul className="cards">
                                        <li className="visa hand">Visa</li>
                                        <li className="mastercard hand">MasterCard</li>
                                        <li className="amex hand">Amex</li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <button type="submit" className="btn btn-primary btn-submit-fix">Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </form>
            </div>
            <div className="row cart-footer">

            </div>
    </div>
  )
}

export default Checkout
