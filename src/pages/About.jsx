import { InViewAnimate } from "./InViewAnimate";

import { CardSlider } from "./CardSlider";
import { Jumbotron } from "./Jumbotron";

export function About() {
  return (
    <div className="w-svw font-serif text-center text-slate-800 overflow-x-hidden">
      <Jumbotron/>


      <InViewAnimate>
        <div className="flex flex-col md:flex-row h-1/2 py-8 px-5">
          <div className="md:w-1/2 overflow-hidden md:p-4 rounded-md">
            <img
              src="https://dzanjlfmchzdirukrrlt.supabase.co/storage/v1/object/public/image/storefront.jpeg"
              alt=""
            />
          </div>
          <div className="flex flex-col md:w-1/2 text-left align-middle justify-center">
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

      <CardSlider/> 

      {/* <h3>Our Commitment to Authenticity</h3>
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
