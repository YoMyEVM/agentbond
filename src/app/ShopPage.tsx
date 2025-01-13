import { useState } from 'react';
import styles from './ShopPage.module.css'; // Import the CSS Module

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [items] = useState([
    { id: 1, name: 'Plugin A', category: 'plugin', image: 'plugin-a.jpg' },
    { id: 2, name: 'Skill B', category: 'skill', image: 'skill-b.jpg' },
    { id: 3, name: 'Personality C', category: 'personality', image: 'personality-c.jpg' },
    { id: 4, name: 'Complex Strategy D', category: 'complex', image: 'complex-d.jpg' }
  ]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredItems = activeCategory === 'all' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className={styles.shopPage}>
      <h1>Shop</h1>
      <p>Shop Page</p>
      <div className={styles.categoryButtons}>
        <button 
          onClick={() => handleCategoryChange('all')}
          className={activeCategory === 'all' ? styles.active : ''}>
          All
        </button>
        <button 
          onClick={() => handleCategoryChange('plugin')}
          className={activeCategory === 'plugin' ? styles.active : ''}>
          Plugins
        </button>
        <button 
          onClick={() => handleCategoryChange('skill')}
          className={activeCategory === 'skill' ? styles.active : ''}>
          Skills
        </button>
        <button 
          onClick={() => handleCategoryChange('personality')}
          className={activeCategory === 'personality' ? styles.active : ''}>
          Personalities
        </button>
        <button 
          onClick={() => handleCategoryChange('complex')}
          className={activeCategory === 'complex' ? styles.active : ''}>
          Complex Strategies
        </button>
      </div>

      <div className={styles.imgGalleryContainer}>
        {filteredItems.map(item => (
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
