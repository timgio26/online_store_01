import { InViewAnimate } from "./InViewAnimate";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="font-serif text-center text-slate-800">
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col w-3/5 justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-8xl font-bold"
          >
            Welcome to Timeless Treasures
          </motion.h1>
          <div className="flex justify-center py-4">
            <h4 className="text-center w-3/4">
              It captures the essence of your dedication to preserving history
              and the charm of antiques. Let me know if you need any tweaks or a
              different approach!
            </h4>
          </div>
          <div className="flex justify-center">
            <button className="bg-primary-500 text-primary-100 hover:opacity-75 transition-opacity py-3 px-8 rounded-full font-sans">
            <Link to="/" className="hover:text-gray-300">
            Shop Now
          </Link>
            </button>
          </div>
        </div>
      </div>

      <InViewAnimate>
        <div className="flex flex-row h-1/2 py-8 px-5">
          <div className="w-1/2 overflow-hidden p-4">
            <img
              src="https://dzanjlfmchzdirukrrlt.supabase.co/storage/v1/object/public/image/storefront.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 text-left align-middle justify-center">
            <h3 className="font-bold text-lg">About Us</h3>
            <p>
              At Timeless Treasures, we have been passionate about preserving
              history and bringing the charm of antiques to your homes for over
              20 years. Established in 2004, our journey began with a love for
              rare artifacts, collectibles, and the stories they hold. We
              specialize in a wide array of antique products, each selected for
              its unique history, craftsmanship, and timeless beauty. Whether
              you’re an avid collector or a first-time buyer, our extensive
              collection is sure to captivate your heart.
            </p>
          </div>
        </div>
      </InViewAnimate>

      {/* <h3>Our Collection</h3>
      <p>
        Our curated selection includes:
        <ul>
          <li>
            Furniture: Handcrafted pieces from various eras, each with its own
            story and character.
          </li>
          <li>
            Jewelry: Exquisite adornments that have stood the test of time,
            perfect for adding a touch of elegance.
          </li>
          <li>
            Art: Original paintings, sculptures, and prints from renowned and
            obscure artists alike.
          </li>
          <li>
            Decorative Items: Unique pieces that add charm and personality to
            any space.
          </li>
          <li>
            Books & Manuscripts: Rare books and historical manuscripts for the
            avid reader and collector.
          </li>
        </ul>
      </p>
      <h3>Our Commitment to Authenticity</h3>
      <p>
        At Timeless Treasures, authenticity is our hallmark. Every piece in our
        collection is thoroughly vetted by our team of experts to ensure its
        originality and historical significance. When you purchase from us, you
        can be confident that you are acquiring a genuine artifact with a rich
        heritage. We believe in the value of preserving true historical
        artifacts and providing our customers with the best.
      </p> */}
    </div>
  );
}
