export default function ProductCard({ product, addToCart }) {
    const imageUrl = product.images[0];
  
    return (
      <div className="border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src={imageUrl}
          alt={product.title}
          className="w-full h-64 object-cover transition-opacity duration-300 ease-in-out hover:opacity-80"
        />
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
          {/* <p className="text-gray-700 mb-4">{product.description}</p> */}
          <p className="text-blue-600 text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  