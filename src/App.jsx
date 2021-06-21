import "./App.css";
import Header from "./Components/Header/Header";
import Filters from "./Components/Filters/Filters";
import Products from "./Components/Products/Products";

function App() {
  const productList = [
    {
      imgSrc:
        "https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg",
      title: "Midi sundress with shirring detail",
      price: 90,
    },
    {
      imgSrc:
        "https://react-shopping-cart-seven-lovat.vercel.app/images/dress2.jpg",
      title: "Midi sundress with shirring detail",
      price: 80,
    },
  ];

  return (
    <div className="grid-container">
      <Header />

      <main>
        <div className="content">
          <div className="main">
            <Filters />
          </div>

          <div>
            <ul className="react-reveal products">
              {productList.map((product) => (
                <Products
                  imgSrc={product.imgSrc}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
