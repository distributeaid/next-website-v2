export interface Route {
  params: Promise<{ slug: string }>;
}
