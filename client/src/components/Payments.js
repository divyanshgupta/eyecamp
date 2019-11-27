import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions'

class StripeCheckoutComponent extends Component
{
    render()
    {
        return (
            // <StripeCheckout 
            // name="SurveyMailer"
            // description="$5 for 5 survey"
            // amount={500}
            // token={token=> this.props.handleStripeToken(token)}
            // stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            //     <button className="btn">Add credits</button>
            //     </StripeCheckout>
            <StripeCheckout 
            name="SurveyMailer"
            description="$5 for 5 survey"
            amount={500}
            token={token=> this.props.handleToken(token)}
            stripeKey="pk_test_J7SZHbQ0mVH2NviyU6Gs2Gct00ZRYVvGxe">
                <button className="btn">Add credits</button>
                </StripeCheckout>
            
            
        )
    }
}

export default connect(null,actions)(StripeCheckoutComponent);