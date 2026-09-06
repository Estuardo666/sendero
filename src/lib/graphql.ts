const ENDPOINT = process.env.NEXT_PUBLIC_WP_GRAPHQL_URL;

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

/**
 * Única puerta de entrada a WordPress. Todo lo que el sitio muestra pasa por aquí.
 *
 * WPGraphQL responde HTTP 200 incluso cuando la consulta falla, así que hay que
 * revisar `errors` a mano.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  revalidate = 3600,
  tags: string[] = ["wp-content"],
): Promise<T> {
  if (!ENDPOINT) {
    throw new Error(
      "Falta NEXT_PUBLIC_WP_GRAPHQL_URL. Copia .env.example a .env.local.",
    );
  }

  // Durante el build, Next lanza muchas páginas a la vez y WordPress en local
  // atiende pocas conexiones simultáneas: un fallo de conexión no significa
  // que el dato no exista, así que se reintenta antes de romper el build.
  let response: Response | undefined;
  let ultimoError: unknown;

  for (let intento = 0; intento < 4; intento += 1) {
    try {
      response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
        next: { revalidate, tags },
      });
      break;
    } catch (error) {
      ultimoError = error;
      await new Promise((resolve) => setTimeout(resolve, 400 * (intento + 1)));
    }
  }

  if (!response) {
    throw new Error(
      `No se pudo conectar con WordPress en ${ENDPOINT}: ${String(ultimoError)}`,
    );
  }

  if (!response.ok) {
    throw new Error(`WPGraphQL respondió HTTP ${response.status}`);
  }

  const json = (await response.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(
      `WPGraphQL: ${json.errors.map((e) => e.message).join(" | ")}`,
    );
  }

  if (!json.data) {
    throw new Error("WPGraphQL no devolvió datos.");
  }

  return json.data;
}
