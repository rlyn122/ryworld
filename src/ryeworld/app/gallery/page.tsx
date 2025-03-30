import styles from "./gallery.module.css"; // Import CSS module for styling
import Image from "next/image";
const galleryPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <section className="center mb-12">
                <div className={styles.Grid}>

                    <img src="home.JPEG" alt="home!" className={styles.itemImage} />
                    <img src="stove.JPEG" alt="stove" className={styles.itemImage} />
                    <img src="/blogs/yakink/flame.JPEG" alt="yakinikikik!" className={styles.itemImage} />
                    <img src="/blogs/beefbarley/sizzle.JPG" alt="bonemarrow" className={styles.itemImage} />
                    <img src="/blogs/caesar/caesar.JPEG" alt="salad" className={styles.itemImage} />


                </div>
            </section>
        </div>
    );
};
export default galleryPage;  // Export the component as default