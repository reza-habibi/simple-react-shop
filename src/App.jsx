import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Filters from "./Components/Filters/Filters";
import Products from "./Components/Products/Products";
import Basket from "./Components/Basket/Basket";
import productList from "./data/data";
import Modals from "./Components/Modal/Modal";
function App() {

  const [show, setShow] = useState({
    show: false,
  });

  let showModal = () => {
    setShow({
      show: true,
    });
  };

  let hideModal = () => {
    setShow({
      show: false,
    });
  };

  const [dataModal, setDataModal] = useState({
    imgSrc: "",
    id: 0,
    title: "",
    price: 0,
    quantity: 1,
    sizes: [],
  });

  const [filteredProductList, setFilteredProductList] = useState(
    productList.sort((a, b) => a.price - b.price)
  );

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const sidebar = document.getElementById("sidebar");
  const [filter, setFilter] = useState({
    price: "lowest",
    size: "ALL",
  });

  useEffect(() => {
    total();
  }, [cart]);

  useEffect(() => {
    let arr = [];

    label: for (let i = 0; i < productList.length; i++) {
      for (let h = 0; h < productList[i].size.length; h++) {
        if (productList[i].size[h] === filter.size) {
          arr.push(productList[i]);
          continue label;
        }
      }
    }

    if (filter.price === "lowest") {
      setFilteredProductList(arr.sort((a, b) => a.price - b.price));
    } else {
      setFilteredProductList(arr.sort((a, b) => b.price - a.price));
    }
  }, [filter]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price * cart[i].quantity;
    }
    setCartTotal(totalVal);

    console.log(cart)
  };

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      product.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  };
  if (cart.length !== 0) {
    sidebar.style.display = "block";
  }
  const removeFromCart = (product) => {
    let filteredBasket = [...cart];
    filteredBasket = filteredBasket.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCart(filteredBasket);
    if (filteredBasket.length === 0) {
      sidebar.style.display = "none";
    }
  };

  return (
    <div className="grid-container">
      {show.show && (
        <Modals
          show={showModal}
          hide={hideModal}
          dataModal={dataModal}
          cardList={cart}
          setCardList={setCart}
        />
      )}
      <Header />

      <main>
        <div className="content">
          <div className="main">
            <Filters
              filter={filter}
              setFilter={setFilter}
              len={filteredProductList.length}
            />

            <div>
              <ul className="react-reveal products">
                {filteredProductList.map((product) => (
                  <li
                    key={product.id}
                    className=" border h-100 mx-5 shadow p-3 mb-5 bg-white rounded"
                  >
                    <Products
                      id={product.id}
                      imgSrc={product.imgSrc}
                      title={product.title}
                      price={product.price}
                      quantity={product.quantity}
                      onClick={() => addToCart(product)}
                      setShow={() => setShow(true)}
                      show={showModal}
                      hide={hideModal}
                      dataModal={dataModal}
                      setDataModal={setDataModal}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sidebar" id="sidebar">
            <div className="cart cart-header">
              You have {cart.length} in the Cart
            </div>
            <div>
              <div className="cart">
                <ul className="react-reveal cart-items">
                  {cart.map((item) => (
                    <li key={item.id}>
                      <Basket
                        count={cart.length}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        onClick={() => removeFromCart(item)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="cart">
                  <div className="total">
                    <div>Total: {cartTotal}</div>
                    <button className="button primary">Proceed</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
