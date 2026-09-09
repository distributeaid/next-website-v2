type PostOrderBy = "created" | "publish_date" | "displayed_date";
type RequestDirection = "asc" | "desc";
type PostExpand =
  | "stats"
  | "free_web_content"
  | "free_email_content"
  | "free_rss_content"
  | "premium_web_content"
  | "premium_email_content";

interface BeehiivPostContent {
  free?: {
    web?: string;
    email?: string;
    rss?: string;
  };
  premium?: {
    web?: string;
    email?: string;
  };
}

interface BeehiivPost {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  created: number;
  status: "draft" | "confirmed" | "archived";
  split_tested: boolean;
  subject_line: string;
  preview_text: string;
  slug: string;
  thumbnail_url: string | null;
  web_url: string | null;
  audience: "free" | "premium";
  platform: "web" | "email" | "both";
  content_tags: string[];
  hidden_from_feed: boolean;
  publish_date: number | null;
  displayed_date: number | null;
  meta_default_description: string | null;
  meta_default_title: string | null;
  content?: BeehiivPostContent;
  [key: string]: unknown;
}

interface PostsListResponse {
  data: BeehiivPost[];
  limit: number;
  page: number;
  total_results: number;
  total_pages: number;
}

type PostsGetResponse = { data: BeehiivPost };

class BeehiivApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    public body: unknown,
  ) {
    super(`beehiiv API error ${status} ${statusText}: ${JSON.stringify(body)}`);
    this.name = "BeehiivApiError";
  }
}

export class NewsletterArchiveProvider {
  private static readonly BASE_URL = "https://api.beehiiv.com/v2";

  private token: string;
  private publicationId: string;

  constructor() {
    const { BEHIIV_TOKEN, BEHIIV_PUB_KEY } = process.env;
    if (!BEHIIV_TOKEN || !BEHIIV_PUB_KEY) {
      throw Error(
        "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
      );
    }
    this.token = BEHIIV_TOKEN;
    this.publicationId = BEHIIV_PUB_KEY;
  }

  private async request<T>(
    path: string,
    searchParams?: Record<string, string | number | string[] | undefined>,
  ): Promise<T> {
    const url = new URL(
      `${NewsletterArchiveProvider.BASE_URL}/publications/${this.publicationId}${path}`,
    );

    if (searchParams) {
      for (const [key, value] of Object.entries(searchParams)) {
        if (value === undefined) continue;
        if (Array.isArray(value)) {
          for (const v of value) {
            url.searchParams.append(`${key}[]`, v);
          }
        } else {
          url.searchParams.set(key, String(value));
        }
      }
    }

    const res = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.token}`,
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      let body: unknown;
      try {
        body = await res.json();
      } catch {
        body = await res.text();
      }
      throw new BeehiivApiError(res.status, res.statusText, body);
    }

    return (await res.json()) as T;
  }

  async listPublications(params: {
    page: number;
    limit?: number | undefined;
    orderBy?: PostOrderBy | undefined;
    direction?: RequestDirection | undefined;
  }): Promise<PostsListResponse> {
    return this.request<PostsListResponse>("/posts", {
      page: params.page,
      limit: params.limit,
      order_by: params.orderBy,
      direction: params.direction,
    });
  }

  async getPostsBySlug(
    slug: string,
    expand: PostExpand[] = ["free_web_content", "free_email_content"],
  ): Promise<PostsListResponse> {
    const res = await this.request<PostsListResponse>("/posts", {
      slugs: [slug],
      limit: 1,
      expand,
    });
    console.log(JSON.stringify(res, null, 2));
    return res;
  }
}
