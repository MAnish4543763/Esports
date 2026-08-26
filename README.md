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