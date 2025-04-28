export interface ContentfulSys {
    id: string;
  }
  
  export interface ContentfulAsset {
    sys: ContentfulSys;
    url: string;
    description?: string;
  }
  
  export interface ContentfulRichText {
    json: any;
    links?: {
      assets?: {
        block?: ContentfulAsset[];
      };
    };
  }
  
  export interface Article {
    sys: {
      id: string;
      createdAt?: string;
    };
    title: string;
    slug: string;
    summary: string;
    details: ContentfulRichText;
    date: string;
    authorName: string;
    categoryName: string;
    articleImage?: {
      url: string;
    };
  }
  
  export interface ArticleCollection {
    items: Article[];
    total: number;
  }
  
  export interface GraphQLResponse {
    data?: {
      blogPostCollection?: ArticleCollection;
    };
  }
  
  const ARTICLE_GRAPHQL_FIELDS = `
    sys {
      id
    }
    title
    slug
    summary
    details {
      json
      links {
        assets {
          block {
            sys {
              id
            }
            url
            description
          }
        }
      }
    }
    date
    authorName
    categoryName
    articleImage {
      url
    }
  `;
  
  async function fetchGraphQL(query: string, preview = false): Promise<GraphQLResponse> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
        next: { tags: ["articles"] },
      }
    ).then((response) => response.json());
  }
  
  function extractArticleEntries(fetchResponse: GraphQLResponse): ArticleCollection {
    return fetchResponse?.data?.blogPostCollection || { items: [], total: 0 };
  }
  
  export interface PaginatedArticles {
    articles: Article[];
    total: number;
    currentPage: number;
    totalPages: number;
  }
  
  export async function getAllArticles(
    limit = 3,
    skip = 0,
    isDraftMode = false
  ): Promise<PaginatedArticles> {
    const response = await fetchGraphQL(
      `query {
        blogPostCollection(
          where: {slug_exists: true}, 
          order: date_DESC, 
          limit: ${limit}, 
          skip: ${skip},
          preview: ${isDraftMode ? "true" : "false"}
        ) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
          total
        }
      }`,
      isDraftMode
    );
  
    const collection = extractArticleEntries(response);
    const currentPage = Math.floor(skip / limit) + 1;
    const totalPages = Math.ceil(collection.total / limit);
  
    return {
      articles: collection.items,
      total: collection.total,
      currentPage,
      totalPages,
    };
  }
  
  export async function getArticle(
    slug: string,
    isDraftMode = false
  ): Promise<Article | undefined> {
    const article = await fetchGraphQL(
      `query {
          blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
        isDraftMode ? "true" : "false"
      }) {
            items {
              ${ARTICLE_GRAPHQL_FIELDS}
            }
          }
        }`,
      isDraftMode
    );
    return extractArticleEntries(article).items[0];
  }