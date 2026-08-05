# Google Stitch Design Brief — Isaac Udoh Backend Portfolio

## Who this is for
Isaac Udoh, a backend developer (NestJS + TypeScript). This is a personal portfolio site meant to win freelance/contract work and job interviews. Audience: technical hiring managers, startup founders, and agencies vetting backend talent.

## Tone / positioning
Not a junior-dev showcase. Isaac has shipped five production backends (four of them solo, one as part of a team), handling real money, real user data, and real third-party integrations. The site should feel technically credible and senior — beyond that, use your own judgment on mood, palette, and visual style. Surprise me.

## Generate both:
1. **Desktop view** (1440px wide reference)
2. **Mobile view** (390px wide reference, iPhone-class)

## Full creative freedom
Everything about how this is designed is up to you: color palette, typography, light vs. dark, imagery treatment, page structure, section order, which content gets emphasis vs. gets minimized, and how many distinct sections/screens to use. Don't treat the list below as a section-by-section spec — it's just the pool of facts and copy available to you. Arrange, group, reorder, or present it however you think makes the strongest portfolio. The only real constraints are the "must not claim" list at the bottom.

## Facts and copy available to use

- Wordmark: "EasyMade.dev"
- Eyebrow line: "Backend engineer, NestJS & TypeScript"
- Headline: "I build the systems that move money, data, and messages without falling over."
- Subtext: "Five production backends shipped, four of them solo: wallets, ledgers, job queues, WebSocket gateways, and third-party payment rails."
- Isaac has a real portrait photo ready to drop in — design around a photo, don't generate a fake person.
- Stats: 5 production backends · 300+ API endpoints shipped · 3 payment/third-party integrations · 2 databases in daily use.
- Tech stack, grouped: Language & framework (TypeScript, Node.js, NestJS) · Data (PostgreSQL, MongoDB, Mongoose, Prisma, Redis) · Async & realtime (BullMQ, WebSocket gateways, Event emitters, Cron scheduling) · Auth & security (JWT, Passport, Passkeys/WebAuthn, Argon2/bcrypt, Rate limiting) · Integrations (Payment webhooks, VTpass, Cloudinary, WhatsApp/Baileys, Transactional email) · Delivery (Swagger/OpenAPI, Jest, Docker, GitHub Actions)
- Engineering principles: (1) Money and state stay honest — idempotent, queued writes, no double-credits on retried webhooks. (2) Modules own their domain — each module owns its DTOs, guards, tests; no reaching into another module's schema. (3) Auth is layered, not bolted on — JWT + passkeys where needed + role guards on every protected route. (4) Third-party APIs get a seam — providers sit behind a service interface so a provider swap is one file, not a rewrite.
- Short bio: backend developer working in NestJS and TypeScript; shipped production systems across fintech, community finance, and e-commerce; contributed the HR module to a larger team-built ERP; cares about systems holding up under real traffic.
- Contact prompt: "Have a backend that needs building or fixing?" — inviting a conversation.
- Footer tagline: "Built with NestJS, TypeScript, and a strong opinion about queues."
- Nav/section labels available if useful: Work, Stack, Approach, About, Contact.

### Project case studies
1. **SwiftData Global** — Fintech / trading platform. Multi-currency wallet and trading engine: deposits, live trade execution, referral payouts, daily reward accrual. Background jobs on BullMQ over Redis. Tags: NestJS, MongoDB, Redis + BullMQ, Payment webhooks, Referral engine. Meta: 104 commits, active development. Solo project.
2. **Shoreline ERP** — Enterprise ERP, **collaborative team build** (not solo — don't imply solo ownership). Full operations backbone for a hospitality/logistics business: flight/hotel approvals, kitchen and meal scheduling, inventory and asset tracking, department budgets, internal chat/blog on WebSocket gateways. Isaac's specific role: **owned the HR module end-to-end** — staff onboarding, policy distribution, HR-side reporting. Tags: NestJS, PostgreSQL, WebSocket gateways, Passkey/WebAuthn, Role-based access. Meta: 48 commits, 27 modules, "HR module owner."
3. **Idagha Cash** — Community finance / WhatsApp integration. Contribution and reunion-fund tracking for a community association, WhatsApp bot as primary interface, scheduled cron reminders, wallet ledger underneath. Tags: NestJS, MongoDB, Baileys (WhatsApp), Scheduled jobs, Ledger design. Meta: 100 commits, 14 modules. Solo project.
4. **TopFuze** — Bills & airtime. VTU platform for airtime/data/cable/electricity payments via VTpass API, wallet-backed transactions, support chat. Tags: NestJS, MongoDB, VTpass API, Argon2.
5. **FASU** — E-commerce. Food distribution storefront API for a Nigerian agro business: product catalog, order lifecycle, Cloudinary image uploads, event-driven activity logging. Tags: NestJS, MongoDB, Cloudinary, Event emitter.

### Contact info
- Email: easymadeu@gmail.com
- GitHub: github.com/easymadeDev
- LinkedIn: linkedin.com/in/isaactechdev
- X/Twitter: @isaactechdev
- Phone (resume only, not public site): +234 907 797 4344

## Must not claim / must not include
- No generic stock-photo "developer at laptop" imagery — Isaac has a real photo for any portrait use.
- No employer logos or fabricated client names beyond what's listed above.
- Don't invent additional metrics or exaggerate scope — Isaac did not build all of Shoreline ERP solo; he owned the HR module in a team project.
- Don't list a location for Isaac anywhere on the site.
