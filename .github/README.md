# rpath Documentation

This folder contains repository-facing metadata for the rpath documentation site.

The site is built with [VitePress](https://vitepress.dev/) and keeps mirrored English and German content in `en/` and `de/`.

## Local preview

```bash
bun install
bun run dev
```

Open the local URL printed by VitePress.

## Structure

- `.vitepress/` - VitePress config and theme overrides
- `en/` - English content
- `de/` - German content
- `public/` - logo and social preview assets
- `LICENSE` - documentation license

## Contributing to docs

- Keep language parity between `en/` and `de/`.
- Prefer concise, task-focused pages with tested command examples.
- Use relative links for internal pages.
- Avoid documenting behavior that is not implemented unless it is clearly marked as roadmap.

## License

Documentation content follows the main project license: MIT.

## Feedback

Please open issues or pull requests in the main repository:

- https://github.com/builtbyjonas/rpath
