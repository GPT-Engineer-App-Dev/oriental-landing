import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="https://placehold.co/1200x600" alt="Great Wall of China" className="w-full h-auto object-cover" />
        <h1 className="text-5xl font-bold">Welcome to China</h1>
        <p className="text-xl text-muted-foreground">Discover the rich history and vibrant culture of China</p>
      </section>

      <Separator />

      {/* About Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">About China</h2>
        <p>
          China, officially the People's Republic of China, is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Key Facts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Population: 1.4 billion</li>
              <li>Capital: Beijing</li>
              <li>Major Languages: Mandarin</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Culture Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Chinese Culture</h2>
        <p>
          Chinese culture is one of the world's oldest cultures, tracing back thousands of years. It includes traditional festivals, cuisine, and arts.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/400x300" alt="Chinese Festival" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Chinese Cuisine" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Chinese Arts" className="w-full h-auto object-cover" />
        </div>
      </section>

      <Separator />

      {/* Tourist Attractions Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Tourist Attractions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <img src="https://placehold.co/600x400" alt="Forbidden City" className="w-full h-auto object-cover" />
            <CardContent>
              <h3 className="text-xl font-semibold">Forbidden City</h3>
              <p>The Forbidden City is a palace complex in Beijing, China, and is the former Chinese imperial palace.</p>
            </CardContent>
          </Card>
          <Card>
            <img src="https://placehold.co/600x400" alt="Terracotta Army" className="w-full h-auto object-cover" />
            <CardContent>
              <h3 className="text-xl font-semibold">Terracotta Army</h3>
              <p>The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.</p>
            </CardContent>
          </Card>
          <Card>
            <img src="https://placehold.co/600x400" alt="Shanghai Skyline" className="w-full h-auto object-cover" />
            <CardContent>
              <h3 className="text-xl font-semibold">Shanghai Skyline</h3>
              <p>The Shanghai skyline is one of the most famous in the world, featuring iconic buildings like the Oriental Pearl Tower.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-4">
        <p>Contact us at: info@chinaexplore.com</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;