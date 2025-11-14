import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, LayoutDashboard, Briefcase, MessageSquare, Settings } from "lucide-react";
import PortfolioManager from "@/components/admin/PortfolioManager";
import ServicesManager from "@/components/admin/ServicesManager";
import ContactSubmissions from "@/components/admin/ContactSubmissions";

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </h1>
          <p className="text-muted-foreground">
            Manage your website content and view contact submissions
          </p>
        </div>

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-8">
            <TabsTrigger value="portfolio" className="gap-2">
              <LayoutDashboard className="h-4 w-4" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="services" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Contact Forms
            </TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <PortfolioManager />
          </TabsContent>

          <TabsContent value="services">
            <ServicesManager />
          </TabsContent>

          <TabsContent value="contacts">
            <ContactSubmissions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
