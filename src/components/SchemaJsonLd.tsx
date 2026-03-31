import { Helmet } from "react-helmet-async";

interface SchemaJsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaJsonLd({ schema }: SchemaJsonLdProps) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
