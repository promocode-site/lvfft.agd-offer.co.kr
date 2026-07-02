import { Head } from "vite-react-ssg";

interface SchemaJsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaJsonLd({ schema }: SchemaJsonLdProps) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  );
}
