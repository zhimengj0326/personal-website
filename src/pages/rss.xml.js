import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: "Deep insights into machine learning theory and practice, sharing industry experience in AI production deployment, and strategic analysis of AI technology's business value and applications. Covering ML system design, model deployment optimization, business value quantification, and more.",
    site: context.site,
    // 添加更多元数据以提高可发现性
    language: "en",
    copyright: `© ${new Date().getFullYear()} Zhimeng (Stephen) Jiang. All rights reserved.`,
    generator: "Astro",
    // 添加分类标签
    categories: ["Machine Learning", "AI", "Research", "Computer Science", "Blog"],
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      // 添加更多字段以提高RSS阅读器兼容性
      author: "Zhimeng (Stephen) Jiang",
      categories: post.data.tags || ["Research", "AI"],
      // 添加内容摘要
      content: post.data.description,
    })),
  });
}
