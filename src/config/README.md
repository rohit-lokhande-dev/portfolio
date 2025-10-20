# Centralized Links Configuration

This directory contains the centralized configuration for all external links used throughout the portfolio application.

## Overview

The `links.ts` file provides a single source of truth for all URLs, social media links, and structured data used across the application. This approach offers several benefits:

### Benefits

1. **Single Source of Truth**: All links are managed in one place
2. **Easy Maintenance**: Update URLs once to reflect changes everywhere
3. **Consistency**: Ensures all components use the same URLs
4. **SEO Optimization**: Centralized structured data and proper link attributes
5. **Type Safety**: TypeScript interfaces ensure proper link structure
6. **Security**: Consistent external link attributes (noopener, noreferrer)

## File Structure

### `links.ts`

Contains all link configurations:

- **BASE_URLS**: Core URLs for website, GitHub, LinkedIn, blog, and email
- **SOCIAL_LINKS**: Social media links with metadata
- **CONTACT_LINKS**: Contact-specific link configurations
- **BLOG_POSTS**: Blog post data with URLs
- **PROJECT_LINKS**: Project-related URLs
- **NAVIGATION_LINKS**: Internal navigation links
- **STRUCTURED_DATA**: JSON-LD structured data for SEO
- **EXTERNAL_LINK_ATTRIBUTES**: Security attributes for external links

## Usage Examples

### Importing Links

```typescript
import { 
  BASE_URLS, 
  SOCIAL_LINKS, 
  EXTERNAL_LINK_ATTRIBUTES,
  getEmailLink 
} from "@/config/links";
```

### Using Social Links

```typescript
{SOCIAL_LINKS.map((social, index) => (
  <a 
    key={index}
    href={social.url} 
    {...EXTERNAL_LINK_ATTRIBUTES}
    aria-label={social.label}
  >
    <IconComponent />
  </a>
))}
```

### Using Email Links

```typescript
<a href={getEmailLink()}>
  Send Email
</a>
```

## SEO Features

### Structured Data

The configuration includes comprehensive JSON-LD structured data for:
- Person schema
- Social media profiles
- Professional information
- Skills and expertise

### Link Attributes

All external links automatically include:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security attributes
- `aria-label` - Accessibility labels

## Maintenance

### Adding New Links

1. Add the URL to `BASE_URLS` if it's a core URL
2. Create appropriate link objects in relevant sections
3. Update components to use the new configuration

### Updating Existing Links

1. Update the URL in `links.ts`
2. All components will automatically use the new URL
3. No need to update individual components

### Adding New Social Platforms

1. Add to `BASE_URLS` if needed
2. Add to `SOCIAL_LINKS` array with proper metadata
3. Update icon mapping in components

## Components Using This Configuration

- **Contact.tsx**: Contact links and email
- **Hero.tsx**: Social media links
- **Projects.tsx**: Project GitHub and demo links
- **Blog.tsx**: Blog post links
- **Footer.tsx**: Social media links
- **page.tsx**: Structured data for SEO

## Best Practices

1. **Always use the centralized configuration** - Never hardcode URLs in components
2. **Use proper TypeScript types** - Leverage the provided interfaces
3. **Include accessibility attributes** - Always add aria-label for external links
4. **Test link changes** - Verify all links work after updates
5. **Keep structured data updated** - Maintain accurate SEO information

## Future Enhancements

Potential improvements to consider:
- Environment-specific URLs (dev/staging/production)
- Link validation and health checks
- Analytics tracking for external links
- Dynamic link generation based on user preferences
