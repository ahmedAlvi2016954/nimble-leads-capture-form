-- Add industry column to leads table
ALTER TABLE public.leads 
ADD COLUMN industry TEXT;

-- Update existing records to have a default industry value
UPDATE public.leads 
SET industry = 'Other' 
WHERE industry IS NULL;

-- Make industry column NOT NULL after updating existing records
ALTER TABLE public.leads 
ALTER COLUMN industry SET NOT NULL;

-- Add default value for future inserts
ALTER TABLE public.leads 
ALTER COLUMN industry SET DEFAULT 'Other';