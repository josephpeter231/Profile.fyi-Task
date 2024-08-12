export default function CartItem({ item, updateQuantity, removeItem }) {
   
    const imageUrl = item.images && item.images.length > 0 ? item.images[0] : '/placeholder-image.jpg';
  
    return (
      <div className="flex justify-between items-center border-b py-4">
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt={item.title}
            className="w-20 h-20 object-cover mr-4"
            onError={(e) => e.target.src = '/placeholder-image.jpg'} 
          />
          <div>
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-500">${item.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="text-lg font-semibold">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
  