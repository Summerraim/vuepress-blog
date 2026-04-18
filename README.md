# VuePress GitHub Deploy

This project is configured to deploy to GitHub Pages with GitHub Actions.

## Current settings

- Repository: `Summerraim/Myblog`
- VuePress base: `/Myblog/`
- Publish branch: GitHub Pages Actions artifact deployment

## Deploy steps

1. Push this repository to the `main` branch on GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Set `Source` to `GitHub Actions`.
4. Open the `Actions` tab and wait for the `Deploy Docs` workflow to finish.
5. Visit `https://summerraim.github.io/Myblog/`

## Notes

- If you rename the repository, update `base` in `docs/.vuepress/config.js`.
- Generated files under `docs/.vuepress/.temp`, `docs/.vuepress/.cache`, and `docs/.vuepress/dist` should not be committed.
