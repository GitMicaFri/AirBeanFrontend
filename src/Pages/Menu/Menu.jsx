
import './Menu.css'
import addIcon from'../../assets/add-icon.png'
import PageLayout from '../../Components/PageLayout/PageLayout'

import { useProductStore, productList } from '../../store/store'

function Menu() {
    const addProduct = useProductStore((state => state.addProduct))

    return (
        <PageLayout parentClass='menuPageContainer' showNavIcon={true} showCartIcon={true}>  
                <section className="menuContainer pageContent">
                    <h1 className='menuPage-h1'>Meny</h1> 

                    {productList.map((product, index) => (
                        <article key={index} className="addChoice">
                            <button
                                onClick={() => addProduct(product.name) /** När knappen klickas för denna produkt, körs funktionen "addProduct", som kommer från hooken "useProducts", som skapas      i store.jsx */}
                                className='addProduct'
                            >
                                <img src={addIcon} className="add-icon" alt="Add icon" />
                            </button>
                            <div className="menu-description">
                                <h3 className='menuPage-h3'>{product.name}......{product.price} kr</h3>
                                <p className='menuPage-p'>{product.description}</p>
                            </div>
                        </article>
                    ))}
                </section>
        </PageLayout>
    )
}

export default Menu