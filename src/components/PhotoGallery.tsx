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
    { src: womenConnectTeam, alt: "Women Connect: Team1 Kenya community gathering at Blockchain Centre" },
    { src: awardsWinners, alt: "Awards ceremony winners celebrating their achievements" },
    { src: womenConnectDuo, alt: "Women Connect participants showcasing their projects" },
    { src: miniHackSession, alt: "Nairobi Mini Hack: Prototyping the Future - Full venue" },
    { src: miniHackWomen, alt: "Women builders at Nairobi Mini Hack event" },
    { src: eventVenue, alt: "FOEG Labs event venue with engaged attendees" },
    { src: eventSession, alt: "Knowledge session in progress with community members" },
    { src: dojoGameJam, alt: "Dojo Game Jam VII in partnership with FOEG Labs" },
    { src: girlsOnchain, alt: "Girls Onchain initiative participants" },
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

        {/* Strict Responsive Grid - No Masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="cursor-pointer group"
              onClick={() => setSelectedImage(photo.src)}
            >
              <div className="aspect-square overflow-hidden rounded-xl bg-muted shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
