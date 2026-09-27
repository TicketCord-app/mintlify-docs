<p align="center">
  <a href="https://ticketcord.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="logo-dark.svg">
      <img src="logo-light.svg" alt="TicketCord" width="260">
    </picture>
  </a>
</p>

<h3 align="center">The TicketCord docs have moved to <a href="https://ticketcord.com/docs">ticketcord.com/docs</a>.</h3>

<p align="center">
  <a href="https://ticketcord.com/docs"><strong>Read the docs</strong></a> ·
  <a href="https://ticketcord.com">Website</a> ·
  <a href="https://ticketcord.com/pricing">Pricing</a> ·
  <a href="https://ticketcord.com/discord">Discord</a> ·
  <a href="https://status.ticketcord.net">Status</a>
</p>

<br>

> [!NOTE]
> This repository is archived history. The documentation now lives at [ticketcord.com/docs](https://ticketcord.com/docs), with search, Ask AI, and a Markdown copy of every page for AI tools ([llms.txt](https://ticketcord.com/docs/llms.txt)). Old docs.ticketcord.com links redirect to the same page there.

[TicketCord](https://ticketcord.com) is a white-label Discord ticket bot: it runs under your own Discord application, so members see your bot's name and avatar. You set it up from a web dashboard, your staff work tickets in Discord or in the web inbox, and AI answers common questions from your knowledge base, handing off to a person when it matters. Every new account starts with a 14-day Enterprise trial, no card needed.

## Where to start

| If you want to | Go to |
| --- | --- |
| Get a ticket panel running in about ten minutes | [Quick Start](https://ticketcord.com/docs/quickstart) |
| Create the Discord application and invite the bot | [Installation](https://ticketcord.com/docs/bot/installation) |
| Look up a slash command | [Commands](https://ticketcord.com/docs/commands/overview) |
| Teach the AI your answers | [Knowledge Base](https://ticketcord.com/docs/ai/knowledge-base) |
| Fix an error code like `TC004` | [Troubleshooting](https://ticketcord.com/docs/bot/troubleshooting) |
| Compare plans or change yours | [Plans & Pricing](https://ticketcord.com/docs/billing/plans) · [Manage Subscription](https://ticketcord.com/docs/billing/manage-subscription) |
| Move over from another ticket bot | [Migration Guide](https://ticketcord.com/docs/support/migration) |

## Every page

### Getting Started

- [Welcome to TicketCord](https://ticketcord.com/docs): Documentation for TicketCord, the white-label Discord ticket bot with AI support, a web dashboard, and enterprise workflows
- [Quick Start](https://ticketcord.com/docs/quickstart): From an empty Developer Portal to a working ticket panel in about ten minutes

### Dashboard

- [Dashboard Overview](https://ticketcord.com/docs/dashboard/overview): Find your way around the TicketCord dashboard, from the sidebar to every server configuration tab
- [Ticket Management](https://ticketcord.com/docs/dashboard/ticket-management): Find, read, reply to, and manage tickets across all your bots from the dashboard
- [Bot Management](https://ticketcord.com/docs/dashboard/bot-management): Add your Discord bots to TicketCord, keep them online, customise their status and footer, and remove them safely
- [Analytics & Reports](https://ticketcord.com/docs/dashboard/analytics): Read the analytics page: what each number measures, how it is calculated, and where to find staff, SLA, and sentiment views
- [Account Settings](https://ticketcord.com/docs/dashboard/settings): Where to change the dashboard theme and language, manage billing, and exercise your data rights

### Bot

- [Bot Overview](https://ticketcord.com/docs/bot/overview): What a TicketCord bot is, how a ticket flows from panel to transcript, and what each plan includes
- [Installation](https://ticketcord.com/docs/bot/installation): Create a Discord application, enable the required intents, connect the token to TicketCord, and invite the bot with the right permissions
- [Configuration](https://ticketcord.com/docs/bot/configuration): Turn a freshly invited bot into a working ticket system: run /setup, save the essentials in the dashboard, post a panel, and tune automation
- [Troubleshooting](https://ticketcord.com/docs/bot/troubleshooting): Every TC error code with the situations that produce it and the fix, plus the most common bot problems

### Commands

- [Commands Overview](https://ticketcord.com/docs/commands/overview): Every TicketCord slash command with who can run it, the plan it needs, and where to find its full reference
- [Ticket Management](https://ticketcord.com/docs/commands/ticket-management): Commands for the ticket lifecycle: closing, reopening, claiming, access control, and renaming
- [Staff Tools](https://ticketcord.com/docs/commands/staff-tools): Staff commands for notes, tags, transcripts, canned replies, priority, statistics, claims, AI assistance, translation, and ModMail evidence
- [Administration](https://ticketcord.com/docs/commands/admin): Commands for server setup, posting ticket panels, in-Discord configuration, diagnostics, auto-close, approvals, and bulk deletion
- [Utility Commands](https://ticketcord.com/docs/commands/utility): Help, on-call availability, user ticket lookup, and ticket feedback

### Configuration

- [Approval Workflows](https://ticketcord.com/docs/configuration/approval-workflows): Require sign-off from an approver role before staff carry out refunds, bans, and other sensitive actions
- [SLA Management](https://ticketcord.com/docs/configuration/sla-management): Set first-response and resolution targets per priority, get warned before they slip, and see whether each ticket met them
- [Escalations](https://ticketcord.com/docs/configuration/escalation-rules): How tickets get escalated to a human, what the bot does when it happens, and how to work the Escalations queue
- [Business Hours](https://ticketcord.com/docs/configuration/business-hours): Tell TicketCord when your team is available, what to say outside those hours, and whether tickets may still be opened
- [Canned Responses](https://ticketcord.com/docs/configuration/canned-responses): Write reusable reply templates with variables and send them in any ticket with /reply
- [Welcome Messages](https://ticketcord.com/docs/configuration/welcome-messages): Design the message TicketCord posts when a ticket opens, choose which tickets use it, and place individual form answers exactly where you want them

### AI Features

- [AI Features Overview](https://ticketcord.com/docs/ai/overview): What TicketCord's AI features do, where to turn them on, which plan each one needs, and how tokens work
- [Knowledge Base](https://ticketcord.com/docs/ai/knowledge-base): Set up the Knowledge Base so your bot answers tickets from your own documentation and learns from your staff
- [Adding Sources](https://ticketcord.com/docs/ai/knowledge-base-sources): How to add web pages, Discord channels, text files, and GitHub repositories as Knowledge Base sources, and keep them fresh
- [Settings & Customization](https://ticketcord.com/docs/ai/knowledge-base-settings): Every setting on the Knowledge Base Answering tab: product profile, answer quality, timing, display, and when the bot should stay quiet
- [Feedback & Learning](https://ticketcord.com/docs/ai/knowledge-base-feedback): How votes, escalation, and learning from closed tickets work, every setting on the Learning tab, and how to review what the bot learned
- [Connect Claude Code or Codex](https://ticketcord.com/docs/ai/mcp): Connect Claude Code, Codex, or another MCP-capable AI tool to manage your TicketCord tickets and Knowledge Base, with the permissions, the full tool list, and troubleshooting
- [Auto-Route](https://ticketcord.com/docs/ai/auto-routing): Set up Auto-Route so new tickets are moved to the right category from routing rules written in plain language
- [Priority Detection](https://ticketcord.com/docs/ai/priority-detection): Set up Priority Detection so new tickets get a Low, Medium, High, or Urgent priority and a priority emoji in the channel name
- [Duplicate Detection](https://ticketcord.com/docs/ai/duplicate-detection): Set up Duplicate Detection so staff are told when a new ticket repeats or relates to a recent one
- [Translation](https://ticketcord.com/docs/ai/translation): Set up AI Translation so customers and staff can talk in different languages inside tickets and ModMail
- [Tone Detection](https://ticketcord.com/docs/ai/sentiment-detection): Set up Tone Detection so a role is pinged when a customer sounds angry, frustrated, upset, or confused, and understand the Enterprise sentiment journey
- [Atlas AI](https://ticketcord.com/docs/ai/atlas): What Atlas is, where it appears in Discord and the dashboard, what it can and cannot do, and the current status of the dashboard assistant

### Features

- [Scheduled Reports](https://ticketcord.com/docs/features/scheduled-reports): Email a daily, weekly, or monthly summary of your support metrics to the bot owner
- [Bulk Operations](https://ticketcord.com/docs/features/bulk-operations): Close, tag, prioritise, export, delete, or purge many tickets in one action from the dashboard
- [Keyboard Shortcuts](https://ticketcord.com/docs/features/keyboard-shortcuts): Move around the dashboard, open the command palette, save, and send replies without touching the mouse
- [DM on Join](https://ticketcord.com/docs/features/dm-welcome): Send every new member a direct message that turns into a ModMail ticket when they reply
- [Auto-Close on User Leave](https://ticketcord.com/docs/features/user-leave-closure): Close a member's open tickets automatically when they leave, are kicked, or are banned
- [Data Export](https://ticketcord.com/docs/features/gdpr-export): Request a copy of your TicketCord data, what the export contains, and how long it takes

### Integrations

- [Webhooks](https://ticketcord.com/docs/integrations/webhooks): Receive signed HTTP notifications for 23 ticket events and connect TicketCord to Zapier, Make, Slack, or your own service

### Billing

- [Plans & Pricing](https://ticketcord.com/docs/billing/plans): Every TicketCord plan, every limit and feature gate, what it costs, and what changes when you move between plans
- [Manage Subscription](https://ticketcord.com/docs/billing/manage-subscription): How to upgrade, downgrade, cancel, reactivate, switch billing cycle, pay with crypto, and what each action does to your account
- [Free Trial](https://ticketcord.com/docs/billing/trials): Every new account starts with 14 days of Enterprise, no card required: what is included, what is capped, and what happens when it ends
- [Invoices & Payment History](https://ticketcord.com/docs/billing/invoices): Where to find every payment, download invoices, update your card and billing details, and what to do when a payment fails

### Support

- [Frequently Asked Questions](https://ticketcord.com/docs/support/faq): Complete, verified answers to the questions people ask about setup, permissions, commands, plans, billing, AI, privacy, and troubleshooting
- [Migration Guide](https://ticketcord.com/docs/support/migration): A concrete, honest checklist for moving from another ticket bot to TicketCord, including what cannot be imported

## Help

Questions or problems: join the [Discord](https://ticketcord.com/discord) or email [hi@ticketcord.com](mailto:hi@ticketcord.com).

<sub>Copyright © 2026 TicketCord. All rights reserved.</sub>
