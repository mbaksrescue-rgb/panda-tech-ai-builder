import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone, MessageSquare, Calendar, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  created_at: string;
}

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .update({ status: "read" })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Marked as read",
      });

      fetchSubmissions();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Contact Form Submissions</h2>
        <Badge variant="secondary">
          {submissions.filter(s => s.status === "new").length} New
        </Badge>
      </div>

      <div className="space-y-4">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className={`bg-card rounded-xl border p-6 ${
              submission.status === "new" ? "border-primary/50" : "border-border"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{submission.name}</h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mail className="h-3 w-3" />
                    {submission.email}
                  </span>
                  {submission.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {submission.phone}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(submission.created_at), "MMM dd, yyyy")}
                  </span>
                </div>
              </div>
              <Badge variant={submission.status === "new" ? "default" : "secondary"}>
                {submission.status}
              </Badge>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                <p className="text-sm">{submission.message}</p>
              </div>
            </div>

            {submission.status === "new" && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => markAsRead(submission.id)}
              >
                <CheckCircle className="h-3 w-3 mr-2" />
                Mark as Read
              </Button>
            )}
          </div>
        ))}
      </div>

      {submissions.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No contact submissions yet.
        </div>
      )}
    </div>
  );
};

export default ContactSubmissions;
