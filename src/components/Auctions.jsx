import React, { useState, useEffect } from "react";

const Auctions = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // JSON থেকে ডেটা লোড
  useEffect(() => {
    fetch("/auctions.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const toggleFavorite = (item) => {
    if (favorites.find((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const totalBids = favorites.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Active Auctions Table */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Active Auctions</h2>
        <p className="text-gray-500 mb-4">
          Discover and bid on extraordinary items
        </p>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2">Items</th>
              <th className="py-2">Current Bid</th>
              <th className="py-2">Time Left</th>
              <th className="py-2">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="py-2 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-sm">{item.title}</span>
                </td>
                <td className="py-2">${item.price.toLocaleString()}</td>
                <td className="py-2">{item.timeLeft}</td>
                <td className="py-2">
                  <button onClick={() => toggleFavorite(item)}>
                    {favorites.find((fav) => fav.id === item.id) ? "❤️" : "🤍"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Favorites Card */}
      <div className="w-full lg:w-80 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          ❤️ Favorite Items
        </h3>
        {favorites.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No favorites yet
            <br />
            Click the heart icon on any item to add it to your favorites
          </p>
        ) : (
          <ul className="mb-2">
            {favorites.map((item) => (
              <li key={item.id} className="text-sm">
                {item.title}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4 border-t pt-2 text-right font-semibold">
          Total bids Amount <span>${totalBids.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Auctions;
