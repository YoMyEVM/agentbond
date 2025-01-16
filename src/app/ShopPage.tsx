import { useState } from "react";
import { items } from "../utils/items"; // Import items
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeView, setActiveView] = useState("approved");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredItems = items.filter(
    (item) =>
      (activeView === "approved" ? item.type === "approved" : item.type === "user") &&
      (activeCategory === "all" || item.category === activeCategory)
  );

  return (
    <div className={styles.shopPage}>
      {/* Toggle Buttons */}
      <div className={styles.toggleButtons}>
        <button
          onClick={() => setActiveView("approved")}
          className={activeView === "approved" ? styles.active : ""}
        >
          Approved Components
        </button>
        <button
          onClick={() => setActiveView("user")}
          className={activeView === "user" ? styles.active : ""}
        >
          User-Made Components
        </button>
      </div>

      {/* Category Filter Buttons */}
      <div className={styles.categoryButtons}>
        <button
          onClick={() => handleCategoryChange("all")}
          className={activeCategory === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("plugin")}
          className={activeCategory === "plugin" ? styles.active : ""}
        >
          Plugins
        </button>
        <button
          onClick={() => handleCategoryChange("skill")}
          className={activeCategory === "skill" ? styles.active : ""}
        >
          Skills
        </button>
        <button
          onClick={() => handleCategoryChange("personality")}
          className={activeCategory === "personality" ? styles.active : ""}
        >
          Personalities
        </button>
        <button
          onClick={() => handleCategoryChange("complex")}
          className={activeCategory === "complex" ? styles.active : ""}
        >
          Complex Strategies
        </button>
        <button
          onClick={() => handleCategoryChange("wisdom")}
          className={activeCategory === "wisdom" ? styles.active : ""}
        >
          Wisdom
        </button>
      </div>

      {/* Items Gallery */}
      <div className={styles.imgGalleryContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.imgGalleryItem}>
            <img src={item.image} alt={item.name} className={styles.img} />
            <p className={styles.itemName}>{item.name}</p>
            <a href="#" className={styles.learnMore}>Learn More</a>
            <div className={styles.contentBtn}>
              <button className={styles.addToCart}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
