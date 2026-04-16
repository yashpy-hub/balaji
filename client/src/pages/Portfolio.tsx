import Navigation from "@/components/Navigation";
import { useState } from "react";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Portfolio items with mix of generated and search images
  const portfolioItems = [
    // Furniture designs (10)
    {
      id: 1,
      category: "furniture",
      title: "Modern Sofa Collection",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/FeKAqA9kbX584WdXhFye56/furniture-showcase-1-MPW3AHJZarCu3qGx7Vmp4c.webp",
    },
    {
      id: 2,
      category: "furniture",
      title: "Elegant Dining Set",
      image: "/home/ubuntu/upload/search_images/T5XoMQkdAyAM.jpg",
    },
    {
      id: 3,
      category: "furniture",
      title: "Premium Bedroom Suite",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/FeKAqA9kbX584WdXhFye56/interior-design-showcase-m5ExGDzJkeWkwbdjLeEHLM.webp",
    },
    {
      id: 4,
      category: "furniture",
      title: "Custom Office Furniture",
      image: "/home/ubuntu/upload/search_images/nBsBEwJrMnSH.png",
    },
    {
      id: 5,
      category: "furniture",
      title: "Luxury Seating",
      image: "/home/ubuntu/upload/search_images/xw8QeqcpIMH8.png",
    },
    {
      id: 6,
      category: "furniture",
      title: "Contemporary Shelving",
      image: "/home/ubuntu/upload/search_images/CPL8dQGVOYsu.jpg",
    },
    {
      id: 7,
      category: "furniture",
      title: "Designer Chairs",
      image: "/home/ubuntu/upload/search_images/pxyIiGKwry4g.jpg",
    },
    {
      id: 8,
      category: "furniture",
      title: "Minimalist Tables",
      image: "/home/ubuntu/upload/search_images/JOfFYWwspaPN.jpg",
    },
    {
      id: 9,
      category: "furniture",
      title: "Storage Solutions",
      image: "/home/ubuntu/upload/search_images/mDdaWB4RU0Mn.jpg",
    },
    {
      id: 10,
      category: "furniture",
      title: "Accent Furniture",
      image: "/home/ubuntu/upload/search_images/gCHkiZjyFCIl.jpg",
    },
    // Interior designs (10)
    {
      id: 11,
      category: "interior",
      title: "Living Room Design",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/FeKAqA9kbX584WdXhFye56/hero-banner-Lt8VUc8HfB4FmhArRaD7Rr.webp",
    },
    {
      id: 12,
      category: "interior",
      title: "Master Bedroom",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663058292192/FeKAqA9kbX584WdXhFye56/interior-design-showcase-m5ExGDzJkeWkwbdjLeEHLM.webp",
    },
    {
      id: 13,
      category: "interior",
      title: "Kitchen & Dining",
      image: "/home/ubuntu/upload/search_images/T5XoMQkdAyAM.jpg",
    },
    {
      id: 14,
      category: "interior",
      title: "Modern Office Space",
      image: "/home/ubuntu/upload/search_images/nBsBEwJrMnSH.png",
    },
    {
      id: 15,
      category: "interior",
      title: "Luxury Lounge",
      image: "/home/ubuntu/upload/search_images/xw8QeqcpIMH8.png",
    },
    {
      id: 16,
      category: "interior",
      title: "Contemporary Bathroom",
      image: "/home/ubuntu/upload/search_images/CPL8dQGVOYsu.jpg",
    },
    {
      id: 17,
      category: "interior",
      title: "Home Library",
      image: "/home/ubuntu/upload/search_images/pxyIiGKwry4g.jpg",
    },
    {
      id: 18,
      category: "interior",
      title: "Minimalist Bedroom",
      image: "/home/ubuntu/upload/search_images/JOfFYWwspaPN.jpg",
    },
    {
      id: 19,
      category: "interior",
      title: "Elegant Entryway",
      image: "/home/ubuntu/upload/search_images/mDdaWB4RU0Mn.jpg",
    },
    {
      id: 20,
      category: "interior",
      title: "Luxury Penthouse",
      image: "/home/ubuntu/upload/search_images/gCHkiZjyFCIl.jpg",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 animate-fade-in-up">
            Our Portfolio
          </h1>
          <p className="text-center text-muted-foreground text-lg animate-fade-in-up stagger-1">
            Showcase of our finest interior design and furniture projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { value: "all", label: "All Projects" },
              { value: "furniture", label: "Furniture" },
              { value: "interior", label: "Interior Design" },
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedCategory(filter.value)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === filter.value
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover-lift animate-fade-in-scale"
                style={{ animationDelay: `${(idx % 4) * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
            Interested in Your Own Design?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Contact us today for a free consultation and let us create your perfect space
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors animate-fade-in-up stagger-2">
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 DM Interiors and Furnitures. All rights reserved.</p>
          <p className="text-sm mt-2 opacity-75">Premium Interior Design & Furniture Solutions</p>
        </div>
      </footer>
    </div>
  );
}
