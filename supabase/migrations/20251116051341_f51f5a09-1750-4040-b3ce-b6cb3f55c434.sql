-- Add process description field to portfolio projects
ALTER TABLE public.portfolio_projects 
ADD COLUMN process_description text,
ADD COLUMN process_highlights text[] DEFAULT '{}';

-- Add comment to explain the columns
COMMENT ON COLUMN public.portfolio_projects.process_description IS 'Detailed explanation of how the project was created';
COMMENT ON COLUMN public.portfolio_projects.process_highlights IS 'Key highlights or steps in the project creation process';