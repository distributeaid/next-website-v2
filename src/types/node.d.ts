export interface Node {
    id: string;
    children: Node[];
    internal: {
      type: string;
      contentDigest: string;
      owner: string;
    };
  }

  export interface NodeInput {
    id: string;
    parent: string;
    children: string[];
    internal: {
      type: string;
      content: string;
      contentDigest: string;
    };
  }
  