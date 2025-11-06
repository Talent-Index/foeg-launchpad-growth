import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const KnowledgeSessions = () => {
  const sessions = [
    {
      title: "Building Secure Smart Contracts",
      tags: ["Infrastructure", "Security"],
      duration: "45 min",
      hasRecording: true,
      hasResources: true,
    },
    {
      title: "Go-to-Market for Web3 Products",
      tags: ["Marketing", "Strategy"],
      duration: "60 min",
      hasRecording: true,
      hasResources: true,
    },
    {
      title: "Tokenomics Design Workshop",
      tags: ["Fintech", "Economics"],
      duration: "90 min",
      hasRecording: true,
      hasResources: false,
    },
    {
      title: "Healthcare Compliance in Web3",
      tags: ["Health", "Legal"],
      duration: "40 min",
      hasRecording: false,
      hasResources: true,
    },
    {
      title: "Gaming Mechanics for Blockchain",
      tags: ["Gaming", "Design"],
      duration: "55 min",
      hasRecording: true,
      hasResources: true,
    },
    {
      title: "Fundraising Pitch Perfection",
      tags: ["Fundraising", "Pitching"],
      duration: "50 min",
      hasRecording: true,
      hasResources: true,
    },
  ];

  const allTags = Array.from(new Set(sessions.flatMap((s) => s.tags)));

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Knowledge Sessions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Access expert-led workshops, tutorials, and resources across all verticals
          </p>
        </div>

        {/* Topic Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTags.map((tag, index) => (
            <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sessions.map((session, index) => (
            <Card key={index} className="p-6 glass border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-display font-semibold mb-2">{session.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {session.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{session.duration}</p>
                </div>

                <div className="flex gap-2">
                  {session.hasRecording && (
                    <Button size="sm" className="flex-1">
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                  )}
                  {session.hasResources && (
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Resources
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSessions;
