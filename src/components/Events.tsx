import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import workshopTable from "@/assets/workshop-table.jpeg";

const Events = () => {
  const upcomingEvents = [
    {
      image: workshopTable,
      title: "Web3 Gaming Workshop",
      date: "Dec 15, 2025",
      location: "Virtual",
      attendees: "50+",
      tags: ["Gaming", "Workshop"],
    },
    {
      image: workshopTable,
      title: "DeFi Protocol Hackathon",
      date: "Jan 10-12, 2026",
      location: "San Francisco",
      attendees: "200+",
      tags: ["Fintech", "Hackathon"],
    },
    {
      image: workshopTable,
      title: "Legal & Compliance Masterclass",
      date: "Jan 25, 2026",
      location: "Virtual",
      attendees: "30+",
      tags: ["Legal", "Training"],
    },
  ];

  const pastEvents = [
    { title: "Infrastructure Security Summit", attendees: "150+", date: "Nov 2025" },
    { title: "Health Tech Innovation Day", attendees: "100+", date: "Oct 2025" },
    { title: "Web3 Founders Meetup", attendees: "80+", date: "Sep 2025" },
  ];

  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Events & Meetups</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect, learn, and build alongside the FOEG Labs community
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden glass border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={event.image}
                    alt={`Event: ${event.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    {event.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="mb-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-display font-semibold mb-4">{event.title}</h4>

                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} Expected</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Register Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-display font-semibold mb-8">Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="glass rounded-xl p-6">
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{event.date}</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {event.attendees}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
