# SEO Setup Guide

আপনার portfolio এর জন্য SEO setup সম্পন্ন হয়েছে! এখন কিছু steps follow করুন:

## ✅ সম্পন্ন হয়েছে

1. **Meta Tags** - Title, Description, Keywords যোগ করা হয়েছে
2. **Open Graph Tags** - Social media sharing এর জন্য
3. **Twitter Card Tags** - Twitter sharing এর জন্য
4. **Canonical URLs** - Duplicate content prevent করতে
5. **Robots Meta** - Search engines এর জন্য
6. **JSON-LD Structured Data** - Rich snippets এর জন্য
7. **Blog Pages Metadata** - Dynamic metadata with Open Graph

## 🔧 Setup করতে হবে

### 1. Environment Variables (.env.local)

`.env.local` file এ এই variables গুলো add করুন:

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
# Example: NEXT_PUBLIC_APP_URL=https://abdurrahmanabid.vercel.app
```

**Important:** Production domain URL দিন। Local development এ `http://localhost:3000` ব্যবহার করবেন না।

### 2. Twitter Handle Update

`app/layout.js` file এ line 72 এ আপনার Twitter handle update করুন:

```javascript
creator: '@yourtwitterhandle', // এখানে আপনার Twitter handle দিন
```

যদি Twitter না থাকে তাহলে এই line টি comment out করতে পারেন।

### 3. University/Organization Info

`app/page.js` file এ line 47 এ আপনার University name update করুন:

```javascript
"name": "Your University" // এখানে আপনার University name দিন
```

### 4. Profile Image Size

SEO এর জন্য ideal image size: **1200x630px** (Open Graph)

যদি `public/image.jpg` 1200x630 না হয়, তাহলে একটি optimized version তৈরি করুন।

## 📝 Additional SEO Tips

### 1. robots.txt

`public/robots.txt` file তৈরি করুন:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. sitemap.xml

Next.js automatically sitemap generate করে, কিন্তু আপনি manually করতে পারেন `app/sitemap.js` file create করে।

### 3. Google Search Console

1. https://search.google.com/search-console এ যান
2. আপনার domain add করুন
3. Verification file: `public/googlec371970eeb7fb136.html` ব্যবহার করুন

### 4. Social Media Preview Test

Meta tags test করুন:

- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/

### 5. Schema Markup Test

Google Rich Results Test: https://search.google.com/test/rich-results

## 🔍 SEO Checklist

- [ ] `NEXT_PUBLIC_APP_URL` environment variable set করা হয়েছে
- [ ] Twitter handle update করা হয়েছে (যদি থাকে)
- [ ] University/Organization name update করা হয়েছে
- [ ] Profile image 1200x630px optimized
- [ ] robots.txt file তৈরি করা হয়েছে
- [ ] Google Search Console এ site verify করা হয়েছে
- [ ] Social media preview test করা হয়েছে
- [ ] Schema markup test করা হয়েছে

## 📊 Current Meta Tags

### Homepage:

- **Title:** Abdur Rahman Abid | MERN Stack Developer | CodeBae
- **Description:** Abdur Rahman Abid is a Bangladeshi MERN Stack Developer and AI enthusiast...
- **Keywords:** MERN Stack Developer, Bangladesh, CodeBae, etc.

### Blog Listing:

- **Title:** Blogs
- **Description:** Explore articles and blog posts...

### Blog Detail:

- **Title:** Dynamic (Blog title)
- **Description:** Dynamic (Blog description)
- **Open Graph:** Article type with cover image

## 🚀 Next Steps

1. সব environment variables set করুন
2. Social media preview test করুন
3. Google Search Console এ submit করুন
4. Analytics setup করুন (GTM already আছে)

## 💡 Important Notes

- Production এ deploy করার আগে সব URLs update করুন
- Meta tags changes করার পর social media cache clear করুন
- Regular SEO audit করুন

---

**Need Help?** Google Search Console এবং Social Media Debugger tools ব্যবহার করে আপনার meta tags verify করুন।
