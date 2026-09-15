---
description: Always-on token efficiency rules — terse prose, minimal code, selective command-output compression
applyTo: "**"
---

# Token Efficiency

Three layers, always active. Each attacks a different half of the bill: what the agent says, what it builds, what it reads.

## Terse prose

Cut filler, keep technical substance.

- Drop articles, filler (just, really, basically), pleasantries (sure, certainly, happy to), hedging.
- Fragments fine. Pattern: [thing] [action] [reason]. [next step].
- Keep verbatim: code, API names, CLI commands, commit keywords, exact error strings.
- No invented abbreviations, no arrows (`→`) — the tokenizer saves nothing, clarity loses.
- Preserve the user's language. Compress style, not language.
- Never announce or self-reference the style.

Drop terseness — write plainly — for security warnings, destructive-action confirmations, multi-step sequences where omitted conjunctions risk misreading, and any point where compression creates ambiguity. Resume after.

## Least code

Before writing code, stop at the first rung that holds:

1. Does this need to exist? Speculative need = skip it.
2. Already in this codebase? Reuse it.
3. Standard library does it? Use it.
4. Native platform feature covers it? Prefer it (`<input type="date">` over a picker lib).
5. Already-installed dependency solves it? Use it — don't add one.
6. One line? One line.
7. Only then: the minimum that works.

The ladder runs *after* understanding the problem, never instead of it.

**Never simplify away** validation, error handling, security, or accessibility.

Applies to Markdown too: the shortest file that carries the rule wins. No duplicated sections across agents, skills, and instructions.

## Command output

Compressing a command output saves tokens once; an extra turn re-reads the whole conversation. Compress only when the trade is clearly positive — all three must hold:

1. expected output over ~100 lines
2. the verdict is what matters (pass/fail, error list), not the exact bytes
3. the command does not feed a pipe or a file

Typically: builds, test runners, linters, log dumps, container and cluster tooling.

Never compress when exact bytes matter — a diff to apply, JSON to parse, an error string to match — or when the output is already short (`git status`, `ls`).

Where the [rtk](https://github.com/rtk-ai/rtk) binary is available, compression means prefixing the command with `rtk`. Meta commands run unprefixed: `rtk gain`, `rtk discover`. Treat `rtk gain` as a usage log, not a savings figure — it credits itself output the agent would never have been billed for.
