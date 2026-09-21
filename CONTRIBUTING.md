# Writing TicketCord docs

These docs serve two readers: people setting up TicketCord, and TicketCord's own AI, which answers
support questions from these pages. Every page must therefore be complete enough to act on without
opening the dashboard, and precise enough that an AI quoting it is never wrong.

## Truth

- Document what is in production. Verify every claim against the code before writing it: command
  options, permissions, plan gates, limits, defaults, ranges, setting names, and dashboard labels.
- Never guess. If a behaviour cannot be verified, leave it out.
- Unreleased features are documented on a branch that merges when the feature ships. They never
  appear on the live site. Error codes are the exception: the code registry is a public contract,
  so a new code is documented as soon as it exists in `master`.
- When code changes user-visible behaviour (a command, an option, a limit, a plan gate, a setting,
  an error code), the docs change in the same piece of work.

## Audience and voice

- Write for a server admin or staff member who has never seen the dashboard. Say where the setting
  lives (`Dashboard → Bots → your bot → Servers → the server → Tab name`), what each option does,
  what happens as a result, and what to do when it does not work.
- Explain the why in one sentence when it helps a decision, then move on.
- Second person, present tense, short sentences. No em dashes; use commas, colons, or periods.
- Use the labels the dashboard and the bot use. Use `code` for commands, options, and values.

## What never goes in

- Internal mechanics: file names, function names, service names, databases, queues, vector stores,
  model names, AI providers, retry internals, Sentry, or how a classifier works.
- Marketing claims that are not verified product facts (hosting region, audits, compliance labels).
- Screenshots of internal tools, secrets, or anything from a real customer's server.

## Page shape

Every page has:

1. Frontmatter `title` and `description` (one sentence, what the reader gets).
2. One paragraph saying what the feature does and who it is for.
3. A plan or permission callout (`<Info>`) when access is limited.
4. Setup steps (`<Steps>`) with exact dashboard paths and labels.
5. A settings table: every option, its allowed values or range, and its default.
6. What happens: the resulting behaviour, in the order the user experiences it.
7. Limits and gotchas (`<Note>` or `<Warning>`).
8. Troubleshooting: symptom, cause, fix. Include the `TC` error code when one is shown.
9. `## Common questions`: three to eight question-and-answer pairs written the way a user would
   ask in a ticket. These are what the AI retrieves first, so each answer must stand alone.
10. A closing card linking to the support Discord (`https://ticketcord.com/discord`).

## Checks before merging

- `npx mint broken-links` passes.
- Every internal link resolves to a page in `docs.json`.
- Every `TC` code mentioned exists on `bot/troubleshooting.mdx`.
- No `ticketcord.net`, no `/support` links (use `/help` or `/discord`).
