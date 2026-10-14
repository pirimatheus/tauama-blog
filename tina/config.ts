import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Título", isTitle: true, required: true },
          { type: "string", name: "slug", label: "Slug", required: true },
          { type: "string", name: "excerpt", label: "Resumo" },
          {
            type: "string", name: "category", label: "Categoria",
            options: ["looks", "bastidores", "referencias", "moda-urbana"]
          },
          { type: "datetime", name: "date", label: "Data" },
          { type: "number", name: "readingTime", label: "Tempo de leitura (min)" },
          { type: "image", name: "cover", label: "Imagem de capa" },
          { type: "string", name: "coverAlt", label: "Alt da capa" },
          { type: "rich-text", name: "body", label: "Conteúdo", isBody: true },
        ],
      },
    ],
  }
});
