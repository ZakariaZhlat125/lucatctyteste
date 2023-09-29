import React, { useState } from "react";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
const SelectImage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Sample data with image URLs and titles
  const items = [
    {
      id: 1,
      imageUrl: image1,
      title: "Title 1",
    },
    {
      id: 2,
      imageUrl: image2,
      title: "Title 2",
    },
    {
      id: 3,
      imageUrl: image1,
      title: "Title 3",
    },
    {
      id: 4,
      imageUrl: image2,
      title: "Title 4",
    },
    {
      id: 5,
      imageUrl: image1,
      title: "Title 5",
    },
    {
      id: 6,
      imageUrl: image2,
      title: "Title 6",
    },
    {
      id: 7,
      imageUrl: image1,
      title: "Title 7",
    },
    {
      id: 8,
      imageUrl: image2,
      title: "Title 8",
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
          className={`w-1/4 m-2 rounded-lg p-1 border ${
            selectedItems.includes(item.id)
              ? "border-blue-500"
              : "border-transparent"
          }`}
          onClick={() => toggleSelection(item.id)}
        >
          <div className="relative mb-2 ">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-auto rounded-lg"
            />
               <p className="absolute bottom-0 left-0 ml-2 mb-2 text-white ">{item.title}</p>
          </div>
       
        </div>
      ))}
    </div>
  );
};

export default SelectImage;
