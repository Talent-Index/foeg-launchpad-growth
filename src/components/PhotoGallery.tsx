import { useState } from "react";
import womenConnectTeam from "@/assets/women-connect-team1.jpeg";
import awardsWinners from "@/assets/awards-winners.jpeg";
import womenConnectDuo from "@/assets/women-connect-duo.jpeg";
import miniHackSession from "@/assets/mini-hack-session.jpeg";
import miniHackWomen from "@/assets/mini-hack-women.jpeg";
import eventVenue from "@/assets/event-venue.jpeg";
import eventSession from "@/assets/event-session.jpeg";
import dojoGameJam from "@/assets/dojo-game-jam.jpeg";
import girlsOnchain from "@/assets/girls-onchain.jpeg";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { src: womenConnectTeam, alt: "Women Connect: Team1 Kenya community gathering at Blockchain Centre", rotation: "rotate-1" },
    { src: awardsWinners, alt: "Awards ceremony winners celebrating their achievements", rotation: "-rotate-2" },
    { src: womenConnectDuo, alt: "Women Connect participants showcasing their projects", rotation: "rotate-2" },
    { src: miniHackSession, alt: "Nairobi Mini Hack: Prototyping the Future - Full venue", rotation: "-rotate-1" },
    { src: miniHackWomen, alt: "Women builders at Nairobi Mini Hack event", rotation: "rotate-1" },
    { src: eventVenue, alt: "FOEG Labs event venue with engaged attendees", rotation: "-rotate-2" },
    { src: eventSession, alt: "Knowledge session in progress with community members", rotation: "rotate-2" },
    { src: dojoGameJam, alt: "Dojo Game Jam VII in partnership with FOEG Labs", rotation: "-rotate-1" },
    { src: girlsOnchain, alt: "Girls Onchain initiative participants", rotation: "rotate-1" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold">Karibu — You're welcome here</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Backed by Builders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From hackathons to knowledge sessions, our community thrives across Africa and beyond
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`break-inside-avoid cursor-pointer ${photo.rotation} hover:rotate-0 transition-transform duration-500 hover:scale-105`}
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="glass rounded-2xl p-4 bg-white shadow-[var(--shadow-glass)] hover:shadow-[var(--shadow-hover)]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-6xl max-h-[90vh]">
              <button
                className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img
                src={selectedImage}
                alt="Full size view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
