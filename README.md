# Manifest Esports — Complete Responsive Version

## What was fixed

### Navigation
- Dedicated fixed navbar container.
- Navbar always stays above the opened menu.
- Desktop Login / Sign Up.
- Mobile hamburger menu contains Login / Sign Up.
- After login, Login / Sign Up disappear.
- Profile icon appears after login.
- Team Details is hidden before login.
- Team Details replaces Login / Sign Up inside the menu after login.
- Logout restores the guest state.
- Clicking the empty overlay closes the menu.
- ESC closes the menu.

### Hero
- Responsive margins and typography.
- Separate desktop, tablet, phone and very-small-phone sizing.
- Button no longer overflows on phones.
- Text is constrained to the viewport.
- Header height is accounted for in hero spacing.

### Tournaments
- Desktop: four cards.
- Tablet: two cards.
- Phone: horizontal swipe carousel.
- Proper card width using viewport calculations.
- Desktop arrow controls.

### Footer
Rebuilt to match the supplied reference:
ABOUT US | SUPPORT | TERMS OF SERVICE | PRIVACY POLICY | RULEBOOK | VENDOR PORTAL

Copyright:
©2026 MANIFEST ESPORTS. All rights reserved.

## Folder structure

index.html
login.html
signup.html
work-with-us.html
team-details.html
tournaments.html
teams.html
leaderboard.html
esports-connect.html
news.html
about.html
tournament-1.html
tournament-2.html
tournament-3.html
tournament-4.html

css/style.css
js/main.js
assets/images/*

## GitHub Pages

Upload the contents of this folder to the root of your repository.
Then enable GitHub Pages from the main branch.

## Authentication

The included Login / Sign Up is a front-end demo using localStorage.
It is not production authentication. Connect Firebase, Supabase or your
own backend when you are ready for real accounts.

## Launch readiness and security

This repository now includes:

- `privacy-policy.html` and `terms.html` starter pages (review and complete the operator/contact details before launch).
- `404.html` custom not-found page.
- `robots.txt` and `sitemap.xml` for the current GitHub Pages URL.
- `SECURITY.md` with launch security guidance.
- A GitHub Actions static-site check at `.github/workflows/site-check.yml` that checks HTML titles/descriptions and local file references on pushes and pull requests to `main`.

### Important before launch

1. The sitemap and robots file currently use `https://manish4543763.github.io/Esports/`. After purchasing and connecting a custom domain, replace these URLs with the final HTTPS domain.
2. Verify the custom domain in GitHub before configuring DNS. Enable HTTPS in repository Settings → Pages after the certificate is ready.
3. Enable 2FA/passkeys on GitHub and the domain registrar, review collaborators, protect the production branch, and keep an independent backup.
4. Cloudflare, DNS, registrar security, branch protection and account-level security cannot be configured by files in this repository; complete those settings in their respective dashboards.
5. The login/signup forms remain a front-end demonstration using localStorage. They are not secure accounts and must not be used to collect real passwords or private data. Real authentication requires a trusted authentication provider or a properly secured backend.
6. Privacy and terms pages are starter templates, not legal advice. Verify their accuracy, add the real operator contact details, and adapt them to your actual data practices and applicable law.

The workflow is a basic consistency check, not a complete security audit. Review its run in the GitHub Actions tab after pushing changes.
