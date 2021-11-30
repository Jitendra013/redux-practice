import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        {/* <span className="cart-count">{props.data.length}</span> */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg"
          alt=""
        />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://www.reliancedigital.in/medias/Oppo-A53s-128GB-8GB-RAM-Ink-Black-Smart-Phone-4919967010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjM0MXxpbWFnZS9qcGVnfGltYWdlcy9oYjgvaDFjLzk1NDE1MzIzMTk3NzQuanBnfDU5MGQxZjMwODc5NDA0YTM0YzU2YWJhYzg3MTNjY2JiNjEzOGM1MWE4OWRkOTcyMmU5NzViZTMzOTY3M2U3YzA"
            alt=""
          />
          <div className="text-wrapper item">
            <span>OPPO-Phone</span>
            <span>Price: $15000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
