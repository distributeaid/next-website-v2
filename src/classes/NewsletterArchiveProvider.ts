import { BeehiivClient } from "@beehiiv/sdk";
import type {
  PostsGetResponse,
  PostsListResponse,
  PostOrderBy,
  RequestDirection,
} from "@beehiiv/sdk/dist/cjs/api";

export class NewsletterArchiveProvider {
  private publicKey: string;
  private client: BeehiivClient;

  constructor() {
    const { BEHIIV_TOKEN, BEHIIV_PUB_KEY } = process.env;

    if (!BEHIIV_TOKEN || !BEHIIV_PUB_KEY) {
      throw Error(
        "BEHIIV_TOKEN and/or BEHIIV_PUB_KEY missing from environment variables",
      );
    }

    this.publicKey = BEHIIV_PUB_KEY;
    this.client = new BeehiivClient({ token: BEHIIV_TOKEN });
  }

  async listPublications(params: {
    page: number;
    limit?: number | undefined;
    orderBy?: PostOrderBy | undefined;
    direction?: RequestDirection | undefined;
  }): Promise<PostsListResponse> {
    const res = await this.client.posts.index(this.publicKey, {
      page: params.page,
      limit: params.limit,
      order_by: params.orderBy,
      direction: params.direction,
    });
    return res;
  }

  async getPost(postID: string): Promise<PostsGetResponse> {
    const res = await this.client.posts.show(this.publicKey, postID);
    return res;
  }
}
