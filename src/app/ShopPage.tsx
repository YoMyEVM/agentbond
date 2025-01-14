import { useState } from "react";
import styles from "./ShopPage.module.css";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeView, setActiveView] = useState("approved");
  const [items] = useState([
    { id: 1, name: "Plugin A", category: "plugin", image: "plugin-a.jpg", type: "approved" },
    { id: 2, name: "Skill B", category: "skill", image: "skill-b.jpg", type: "approved" },
    { id: 3, name: "Personality C", category: "personality", image: "personality-c.jpg", type: "user" },
    { id: 4, name: "Complex Strategy D", category: "complex", image: "complex-d.jpg", type: "user" },
    { id: 5, name: "Plugin E", category: "plugin", image: "plugin-e.jpg", type: "approved" },
    { id: 6, name: "Skill F", category: "skill", image: "skill-f.jpg", type: "user" },
    { id: 7, name: "Personality G", category: "personality", image: "personality-g.jpg", type: "approved" },
    { id: 8, name: "Complex Strategy H", category: "complex", image: "complex-h.jpg", type: "approved" },
    { id: 9, name: "Plugin I", category: "plugin", image: "plugin-i.jpg", type: "user" },
    { id: 10, name: "Skill J", category: "skill", image: "skill-j.jpg", type: "user" },
    { id: 11, name: "Personality K", category: "personality", image: "personality-k.jpg", type: "approved" },
    { id: 12, name: "Complex Strategy L", category: "complex", image: "complex-l.jpg", type: "user" },
    { id: 13, name: "Plugin M", category: "plugin", image: "plugin-m.jpg", type: "approved" },
    { id: 14, name: "Skill N", category: "skill", image: "skill-n.jpg", type: "approved" },
    { id: 15, name: "Personality O", category: "personality", image: "personality-o.jpg", type: "user" },
    { id: 16, name: "Complex Strategy P", category: "complex", image: "complex-p.jpg", type: "user" },
    { id: 17, name: "Plugin Q", category: "plugin", image: "plugin-q.jpg", type: "user" },
    { id: 18, name: "Skill R", category: "skill", image: "skill-r.jpg", type: "approved" },
    { id: 19, name: "Personality S", category: "personality", image: "personality-s.jpg", type: "approved" },
    { id: 20, name: "Complex Strategy T", category: "complex", image: "complex-t.jpg", type: "user" },
  ]);
  

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
      </div>

      {/* Items Gallery */}
      <div className={styles.imgGalleryContainer}>
        {filteredItems.map((item) => (
          <div key={item.id} className={styles.imgGalleryItem}>
            <img src={item.image} alt={item.name} />
            <div className={styles.floatGalleryContent}>
              <div className={styles.content}>
                <p>{item.name}</p>
                <a href="#">Learn More</a>
              </div>
              <div className={styles.contentBtn}>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
