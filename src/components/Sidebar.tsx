import { useRouter } from 'next/router';
import { useState } from 'react';

const Sidebar = () => {
  const router = useRouter();
  const [category, setCategory] = useState('all');
  const [price, setPrice] = useState(1000);

  const applyFilters = () => {
    router.push(`/?category=${category}&price=0-${price}`);
  };

  return (
    <div className="w-full md:w-64 p-4 border rounded bg-black">
      <h2 className="font-semibold mb-2">Filters</h2>
      <div className="mb-4">
        <h3 className="font-medium">Category</h3>
        <div className="space-y-1 mt-1">
          {['All', 'Electronics', 'Clothing', 'Home Appliances', 'Sports & Outdoors'].map(c => (
            <div key={c}>
              <input
                type="radio"
                name="category"
                value={c}
                checked={category === c}
                onChange={() => setCategory(c)}
              />
              <label className="ml-2">{c}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium">Price</h3>
        <input
          type="range"
          min="0"
          max="1300"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <p>${price}</p>
      </div>

      <button
        onClick={applyFilters}
        className="bg-blue-700 text-white px-4 py-2 rounded mt-2 w-full hover:bg-blue-800"
      >
        Apply
      </button>
    </div>
  );
};

export default Sidebar;