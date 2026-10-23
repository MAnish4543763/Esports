# Security policy — Manifest Esports

## Current architecture

This repository is a static GitHub Pages website. The login/signup flow currently described in README.md is a browser-side demonstration using localStorage, not production authentication. Do not use it to collect passwords, sensitive personal information, or real registrations.

## Reporting a vulnerability

Please do not publish exploit details or secrets in a public issue. Contact the repository owner privately through GitHub until a dedicated security contact is configured.

## Launch controls to complete manually

- Enable two-factor authentication or a passkey on the GitHub account and domain registrar.
- Verify the custom domain in GitHub before adding DNS records.
- Restrict repository collaborators and protect the production branch.
- Enable HTTPS in GitHub Pages and verify all canonical domain variants.
- Configure DNS and Cloudflare only after the custom domain is purchased; verify all records before proxying traffic.
- Enable repository security alerts where available and review dependency updates.
- Keep an independent backup and test restoration.
- Configure uptime monitoring and alert delivery.
- Update sitemap.xml and robots.txt to use the final custom domain.
- Review privacy and terms pages and add the operator's real contact details before launch.

## Scope limitation

A static site cannot securely keep secrets in frontend code. Sensitive operations, real authentication, authorization, and rate limiting require a properly configured backend or trusted service.
