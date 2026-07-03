# Contributing to rpath Docs

The primary contributing guide lives at the repository root:

- https://github.com/builtbyjonas/rpath/blob/main/CONTRIBUTING.md

This file clarifies documentation-specific expectations.

## Docs guidelines

- Maintain parity between `en/` and `de/`.
- Keep headings descriptive and examples copy-pasteable.
- Use fenced code blocks with explicit language identifiers such as `bash`, `powershell`, `json`, or `text`.
- Prefer present tense and active voice.
- Keep docs tied to implemented behavior unless a section is clearly marked as roadmap.

## Process

1. Branch from the main development branch used by the repository.
2. Make docs and theme changes.
3. Run `bun run build` from `www`.
4. Open a pull request with a short summary and screenshots for visual changes.

## Style

- Use American English in `en/`.
- Use clear, natural German in `de/`.
- Avoid raw URLs except in policy or reference lists.
- Keep internal links relative where practical.

For code, tests, and broader project conventions, follow the root guide.
