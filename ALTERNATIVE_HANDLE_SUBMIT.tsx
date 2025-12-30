// Alternative handleSubmit function for Supabase Edge Function
// Replace the existing handleSubmit in /app/frontend/src/pages/ReportIssue.tsx

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // OPTION 1: Use Supabase Edge Function (Recommended)
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (supabaseUrl && supabaseAnonKey) {
      // Use Supabase Edge Function
      const response = await fetch(
        `${supabaseUrl}/functions/v1/report-issue`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseAnonKey}`
          },
          body: JSON.stringify({
            report_type: formData.reportType,
            subject: formData.subject,
            details: formData.details,
            email: formData.email,
          }),
        }
      );
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit report');
      }
      
      toast({
        title: "Report Submitted!",
        description: data.message || "We'll review your report within 24-48 hours and follow up if needed.",
      });
      
      trackFormSubmit('report_issue');
      setFormData({ reportType: "", subject: "", details: "", email: "" });
      
    } else {
      // OPTION 2: Fallback to FastAPI backend
      const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;
      
      const response = await fetch(`${backendUrl}/report-issue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          report_type: formData.reportType,
          subject: formData.subject,
          details: formData.details,
          email: formData.email,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Handle validation errors from FastAPI
        if (data.detail && Array.isArray(data.detail)) {
          const errorMsg = data.detail.map((err: any) => {
            if (err.loc && err.msg) {
              const field = err.loc[err.loc.length - 1];
              return `${field}: ${err.msg.replace('Value error, ', '')}`;
            }
            return err.msg || 'Validation error';
          }).join(', ');
          throw new Error(errorMsg);
        }
        throw new Error(data.detail || 'Failed to submit report');
      }
      
      toast({
        title: "Report Submitted!",
        description: "We'll review your report within 24-48 hours and follow up if needed.",
      });
      
      trackFormSubmit('report_issue');
      setFormData({ reportType: "", subject: "", details: "", email: "" });
    }
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to submit report';
    toast({
      title: "Error",
      description: errorMessage,
      variant: "destructive",
    });
    console.error('Error submitting report:', error);
  } finally {
    setIsSubmitting(false);
  }
};
