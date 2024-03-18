import PageLayout from '../../Components/PageLayout/PageLayout'
import './OrderHistory.css'
import Profile from '../../assets/Profile.svg'

function OrderHistory() {

    return (
        <PageLayout parentClass="orderHistoryPageContainer" showNavIcon={true}>
        <section className='personContainer pageContent'>
            <img src={Profile} alt="profile" className='profilePicture'/>
            <h2 className='name-h2'>Sixten Kaffelövér</h2>
            <p className='email-p'>sixten.kaffelover@zocom.se</p>
        </section>
        <section className='orderHistoryContainer'>
            <h2 className='orderHistory-h2'>Orderhistorik</h2>
            <br />
            <h4 className='orderNumber-h4'>#AB1123282323Z</h4>
            <h4 className='date'>20/03/06</h4>
            <p className='orderSum-p'>total ordersumma</p>
            <p className='sumPerDate'>443 kr</p>
           
            <h4 className='totalSpent-h4'>Totalt spenderat
            </h4>
            <h4 className='totalSum'>1000 kr</h4>
        </section>
        

        </PageLayout>
    )
}

export default OrderHistory