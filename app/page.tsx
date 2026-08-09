import Image from "next/image";
import Link from "next/link";
import { ProductShowcase } from "../components/product-showcase";

const benefits = [
  ["☕", "Energy & focus", "A smooth, naturally uplifting start to busy mornings and deep work."],
  ["✦", "Rich in antioxidants", "Quality beans with naturally occurring antioxidants in every fragrant cup."],
  ["♨", "Hot or iced", "Make your perfect ritual—bold and warm, slow-poured over ice, or blended."],
  ["⛰", "Grown in Nepal", "A premium taste shaped by the hills, craft, and coffee culture of Nepal."],
];
const testimonials = [
  ["Suman K.", "Kathmandu", "Nep Coffee has become my everyday morning coffee. The aroma is amazing and the taste feels smooth and premium."],
  ["Anisha R.", "Lalitpur", "I was surprised by how rich the flavor is. Nep Coffee has its own unique taste. Highly recommended!"],
  ["Prakash T.", "Bhaktapur", "The packaging looks premium and the coffee quality is excellent. Perfect for starting my day with energy and focus."],
  ["Rojina M.", "Pokhara", "I tried Nep Coffee as an iced coffee and loved it. The taste is balanced, refreshing, and not too bitter."],
  ["Bikash S.", "Chitwan", "A great example of Nepali products reaching premium quality. The freshness and aroma make every cup enjoyable."],
  ["Nisha P.", "Kathmandu", "Nep Coffee gives me the café experience at home. Smooth taste, great smell, and perfect for sharing."],
];
const faqs = [
  ["What makes Nep Coffee different?", "Nep Coffee is crafted from carefully selected Nepali-grown beans for a rich aroma, smooth taste, and authentic local character."],
  ["Is it made from Nepali coffee beans?", "Yes. Nep Coffee focuses on the authentic taste of Nepali-grown coffee and quality processing for freshness."],
  ["How can I prepare it?", "Enjoy it hot, iced, or in your favourite specialty drink. Prepare to your preferred strength and taste."],
  ["Does it contain added sugar or preservatives?", "Nep Coffee is designed to let the natural taste and aroma of coffee shine without unnecessary additives."],
  ["How should I store it?", "Store in a cool, dry place and keep the pack properly sealed after opening for the best aroma."],
  ["Do you deliver across Nepal?", "Yes. Delivery is free inside Kathmandu Valley. Charges for other locations are calculated according to distance."],
  ["Can I make iced coffee with it?", "Absolutely. Nep Coffee works beautifully in both hot and cold coffee recipes."],
];
function Logo() { return <Link href="/" aria-label="Nep Coffee home"><img src="/nep-logo.svg" alt="Nep Coffee" className="h-12 w-auto" /></Link>; }
export default function Home() { return <main>
  <section className="relative overflow-hidden bg-espresso text-cream"><div className="grain absolute inset-0 opacity-30" /><nav className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"><Logo /><a href="tel:9861676300" className="text-sm font-semibold text-[#f2d2a0]">Call 9861676300</a></nav><div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-2 lg:pb-24 lg:pt-16"><div><p className="eyebrow">Nepali coffee company · Est. 2020</p><h1 className="mt-4 max-w-xl font-display text-5xl leading-[1.02] sm:text-6xl">A richer ritual, <em className="text-gold">grown in Nepal.</em></h1><p className="mt-6 max-w-xl text-lg leading-8 text-[#eadbc6]">Premium Nepali coffee with a full, balanced body and a finish that makes every morning feel special.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="/checkout?pack=1" className="btn-primary">Purchase Now</Link><a href="#shop" className="btn border border-[#9d7650] text-cream hover:bg-white/10">Explore the coffee</a></div><div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#eadbc6]"><span>✓ Cash on delivery</span><span>✓ Delivery within 24 hours</span><span>✓ Free in KTM Valley</span></div></div><div className="relative mx-auto w-full max-w-[570px]"><div className="absolute -inset-6 rounded-full bg-gold/20 blur-3xl" /><Image className="relative rounded-[2rem] object-cover shadow-2xl" src="/nep-coffee-hero.png" alt="Nep Coffee Himalayan Espresso" width={1536} height={1024} priority /></div></div></section>
  <ProductShowcase />
  <section className="bg-[#f1e6d5] px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="eyebrow">Why Nep Coffee</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">A daily cup with a little more character.</h2></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map(([icon,title,text]) => <article key={title} className="rounded-2xl bg-cream p-6 shadow-sm"><span className="text-3xl">{icon}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-roast/75">{text}</p></article>)}</div><div className="mt-10"><Link className="btn-dark" href="/checkout?pack=1">Order Nep Coffee</Link></div></div></section>
  <section className="bg-cream px-5 py-20 sm:px-8"><div className="mx-auto max-w-7xl"><p className="eyebrow">From coffee lovers</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Loved from the first aroma.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{testimonials.map(([name,place,quote]) => <figure className="rounded-2xl border border-[#dfcdb6] bg-white p-6" key={name}><div className="text-gold">★★★★★</div><blockquote className="mt-4 leading-7 text-roast/85">“{quote}”</blockquote><figcaption className="mt-5 text-sm font-bold">{name} <span className="font-normal text-roast/60">· {place}</span></figcaption></figure>)}</div></div></section>
  <section className="bg-[#eee2cf] px-5 py-20 sm:px-8"><div className="mx-auto max-w-3xl"><p className="eyebrow">FAQs</p><h2 className="mt-3 font-display text-4xl sm:text-5xl">Your questions, answered.</h2><div className="mt-8 space-y-3">{faqs.map(([q,a]) => <details className="group rounded-xl bg-cream p-5" key={q}><summary className="cursor-pointer list-none font-bold marker:hidden">{q}<span className="float-right text-gold group-open:rotate-45">+</span></summary><p className="pt-3 leading-7 text-roast/75">{a}</p></details>)}</div></div></section>
  <section className="bg-moss px-5 py-20 text-cream sm:px-8"><div className="mx-auto max-w-3xl text-center"><p className="eyebrow">Freshly roasted. Ready for your ritual.</p><h2 className="mt-4 font-display text-4xl sm:text-6xl">Taste Nepal, one perfect cup at a time.</h2><p className="mt-5 text-[#d9ded2]">Order today with cash on delivery. Every order includes 5 free 10g coffee flavour samples.</p><Link href="/checkout?pack=1" className="btn-primary mt-8">Buy Now</Link><p className="mt-5 text-sm text-[#d9ded2]">Questions? Call <a className="underline" href="tel:9861676300">9861676300</a></p></div></section>
  <footer className="bg-espresso px-5 py-6 text-center text-sm text-[#c8b29b]">© {new Date().getFullYear()} Nep Coffee · Nepali Coffee Company</footer>
</main>; }
