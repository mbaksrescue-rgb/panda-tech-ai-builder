import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FolderKanban, MessageSquare, TrendingUp } from "lucide-react";

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalServices: 0,
    totalContacts: 0,
    newContacts: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Fetch total projects
      const { count: projectCount } = await supabase
        .from("portfolio_projects")
        .select("*", { count: "exact", head: true });

      // Fetch total services
      const { count: serviceCount } = await supabase
        .from("services")
        .select("*", { count: "exact", head: true });

      // Fetch total contacts
      const { count: totalContactCount } = await supabase
        .from("contact_submissions")
        .select("*", { count: "exact", head: true });

      // Fetch new contacts (status = 'new')
      const { count: newContactCount } = await supabase
        .from("contact_submissions")
        .select("*", { count: "exact", head: true })
        .eq("status", "new");

      setStats({
        totalProjects: projectCount || 0,
        totalServices: serviceCount || 0,
        totalContacts: totalContactCount || 0,
        newContacts: newContactCount || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: FolderKanban,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Active Services",
      value: stats.totalServices,
      icon: Briefcase,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Total Inquiries",
      value: stats.totalContacts,
      icon: MessageSquare,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "New Messages",
      value: stats.newContacts,
      icon: TrendingUp,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Analytics Overview</h2>
        <p className="text-muted-foreground">
          Track your website's key metrics and performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="border-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium">Website is active and receiving traffic</p>
                <p className="text-sm text-muted-foreground">All systems operational</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
