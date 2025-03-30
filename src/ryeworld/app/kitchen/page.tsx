import React from 'react';
import styles from './kitchen.module.css';
import Image from 'next/image';

const KitchenPage: React.FC = () => {
  const kitchenItems = [
    { id: 1, name: 'deBuyer Mineral B 10.5 in. Carbon Steel Fry Pan ', image: '/kitchen/mineralB.png' },
    { id: 2, name: 'Lodge 6 Quart Oyster Enamel Cast Iron Dutch Oven', image: '/kitchen/lodge10q.png' },
    { id: 3, name: '4.5 in. Wusthof Utility Knife', image: '/kitchen/4.5wustoff.png' },
    { id: 4, name: '8 in. Wusthof Chef Knife', image: '/kitchen/chefwustoff.png' },
    { id: 5, name: 'Hasegawa Wood Core Soft Rubber Cutting Board 19.7 " x 13.8 " x 0.8" ht', image: '/kitchen/hasegawa.png' },
    { id: 6, name: 'Iwatani Portable Gas Grill ABURIYA 2', image: '/kitchen/itawanigrill.png' },
  ];

  return (
    <div className={styles.kitchenPage}>
      <header className={styles.kitchenHeader}>
        <h1 className={styles.kitchenTitle}>The Kitchen</h1>
        <p className={styles.kitchenDescription}>
          These are my kitchen essentials. Simple and practical—the workhorses that earn their spot in my limited space and budget. Each one gets regular use or sparks serious joy.
        </p>
      </header>

      <hr className={styles.kitchenDivider} />

      <div className={styles.kitchenGrid}>
        {kitchenItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className={styles.gridItem}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.itemImage}
                  width={300}  // You must specify width
                  height={200} // You must specify height
                />              </div>
              <p className={styles.itemName}>{item.name}</p>
            </div>
            {(index + 1) % 3 === 0 && index < kitchenItems.length - 1 && (
              <div className={styles.rowDivider}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default KitchenPage;