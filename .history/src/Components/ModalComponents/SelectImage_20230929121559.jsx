import React from "react";
import image1 from '../../assets/Images/'
const SelectImage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample data with image URLs and titles
  const items = [
    {
      id: 1,
      imageUrl: "../",
      title: "Title 1",
    },
    {
      id: 2,
      imageUrl: "image2.jpg",
      title: "Title 2",
    },
   
   
  ];

  const toggleSelection = (itemId) => {
    const isSelected = selectedItems.includes(itemId);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <div
          key={item.id}
          className={`w-1/3 p-4 border ${
            selectedItems.includes(item.id)
              ? "border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => toggleSelection(item.id)}
        >
          <div className="mb-2">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto"
            />
          </div>
          <div className="text-center">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SelectImage;
