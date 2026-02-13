import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonicalUrl?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/ovIVFGxBRXKOhnfx.png',
  ogType = 'website',
  canonicalUrl,
  structuredData
}: SEOProps) {
  const fullTitle = `${title} | Content Aimbassy`;
  const siteUrl = window.location.origin;
  const currentUrl = canonicalUrl || window.location.href;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Content Aimbassy', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, ogType, currentUrl, fullTitle, structuredData]);

  return null;
}

// Helper function to generate Organization structured data
export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Content Aimbassy',
  description: 'Bespoke AI training data licensing—rights-cleared, audit-ready, globally diverse.',
  url: window.location.origin,
  logo: 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663031433820/ovIVFGxBRXKOhnfx.png',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Global Media Consult',
    url: 'https://globalmediaconsult.com'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'cai@globalmediaconsult.com',
    contactType: 'Business Inquiries'
  },
  sameAs: [
    'https://globalmediaconsult.com'
  ]
});

// Helper function to generate Service structured data
export const getServiceSchema = (serviceName: string, serviceDescription: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: serviceDescription,
  provider: {
    '@type': 'Organization',
    name: 'Content Aimbassy',
    url: window.location.origin
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: window.location.href
  }
});
