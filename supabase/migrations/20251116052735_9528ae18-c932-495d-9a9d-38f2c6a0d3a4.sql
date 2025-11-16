-- Create offers table
CREATE TABLE public.offers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL,
  description TEXT NOT NULL,
  price TEXT NOT NULL,
  badge_text TEXT NOT NULL DEFAULT 'LIMITED OFFER',
  button_text TEXT NOT NULL DEFAULT 'Claim This Offer',
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active offers"
ON public.offers
FOR SELECT
USING (is_active = true);

CREATE POLICY "Only admins can manage offers"
ON public.offers
FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_offers_updated_at
BEFORE UPDATE ON public.offers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default offer
INSERT INTO public.offers (title, subtitle, description, price, badge_text, button_text, is_active)
VALUES (
  'Complete Digital Package',
  'Website + Logo + Social Media Kit',
  'Get everything your business needs to establish a strong online presence',
  'Only KES 15,000',
  'LIMITED OFFER',
  'Claim This Offer',
  true
);