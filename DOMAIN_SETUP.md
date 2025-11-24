# Domain Setup Guide - Namecheap to GitHub Pages

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/kiroiscoding/GiulisWebsite
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be available at: `https://kiroiscoding.github.io/GiulisWebsite`

## Step 2: Add Custom Domain to GitHub Pages

1. Still in the **Pages** settings
2. Under **Custom domain**, enter your domain name (e.g., `yourdomain.com` or `www.yourdomain.com`)
3. Click **Save**
4. GitHub will create a `CNAME` file in your repository

## Step 3: Configure DNS on Namecheap

### Option A: Using A Records (Recommended for root domain)

1. Log into your Namecheap account
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add these **A Records**:
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.108.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.109.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.110.153`
   - TTL: Automatic
   
   - Type: `A Record`
   - Host: `@`
   - Value: `185.199.111.153`
   - TTL: Automatic

5. Add a **CNAME Record** for www:
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `kiroiscoding.github.io`
   - TTL: Automatic

6. Click the **Save All Changes** button

### Option B: Using CNAME Only (For www subdomain)

If you only want `www.yourdomain.com`:

1. In Namecheap **Advanced DNS**:
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `kiroiscoding.github.io`
   - TTL: Automatic

## Step 4: Wait for DNS Propagation

- DNS changes can take 24-48 hours to fully propagate
- You can check propagation status at: https://www.whatsmydns.net/

## Step 5: Verify SSL Certificate

- GitHub automatically provides SSL certificates for custom domains
- After DNS propagates, GitHub will issue an SSL certificate (can take a few hours)
- Your site will be available at `https://yourdomain.com`

## Troubleshooting

- If your site doesn't load after 48 hours, check:
  1. DNS records are correct in Namecheap
  2. CNAME file exists in your GitHub repository
  3. GitHub Pages shows "Your site is live at..." in Settings
  4. Try clearing your browser cache

## Important Notes

- Keep the `CNAME` file in your repository (don't delete it)
- The domain must be verified in GitHub Pages settings
- Both `yourdomain.com` and `www.yourdomain.com` will work if configured correctly

