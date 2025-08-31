# 🚀 新网站部署和域名设置指南

## 1. 构建新网站

```bash
# 在项目目录中运行
npm run build
```

这会在 `dist/` 目录中生成静态文件。

## 2. 部署选项

### 选项A：GitHub Pages（免费）
1. 将构建后的文件推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择 `dist/` 目录作为源

### 选项B：Netlify（免费）
1. 连接GitHub仓库
2. 设置构建命令：`npm run build`
3. 设置发布目录：`dist`

### 选项C：Vercel（免费）
1. 连接GitHub仓库
2. 自动检测Astro项目
3. 自动部署

## 3. 域名重定向设置

### 方法1：DNS重定向（推荐）

在你的域名提供商（如GoDaddy、Namecheap、Cloudflare）中：

1. **添加CNAME记录**：
   - 类型：CNAME
   - 名称：@ 或 www
   - 值：你的新网站地址（如 `yourusername.github.io` 或 `yoursite.netlify.app`）

2. **添加重定向记录**：
   - 类型：URL Redirect
   - 从：你的旧域名
   - 到：新网站地址
   - 重定向类型：301（永久重定向）

### 方法2：使用重定向页面

1. 将 `redirect.html` 文件上传到旧网站的根目录
2. 修改 `redirect.html` 中的URL为新网站地址
3. 设置旧网站的主页为这个重定向页面

### 方法3：使用 .htaccess（Apache服务器）

在旧网站根目录创建 `.htaccess` 文件：

```apache
RewriteEngine On
RewriteRule ^(.*)$ https://your-new-website-url.com/$1 [R=301,L]
```

## 4. 更新重定向文件

部署前，记得更新 `redirect.html` 中的URL：

```html
<!-- 将这行中的URL改为你的新网站地址 -->
<meta http-equiv="refresh" content="0; url=https://your-new-website-url.com">
<a href="https://your-new-website-url.com" class="redirect-link">Visit New Website</a>
```

## 5. 测试重定向

1. 访问你的旧域名
2. 确认是否自动重定向到新网站
3. 检查搜索引擎是否更新了索引

## 6. 搜索引擎优化

1. **提交新网站到搜索引擎**：
   - Google Search Console
   - Bing Webmaster Tools

2. **设置301重定向**确保SEO权重传递

3. **更新所有外部链接**指向新网站

## 7. 常见问题

### 访客地图不显示
- 检查ClustrMaps服务是否正常
- 确认iframe没有被浏览器阻止
- 使用备用图片方案

### 重定向不工作
- 检查DNS设置是否正确
- 确认重定向页面URL正确
- 清除浏览器缓存

## 8. 监控和维护

1. 定期检查重定向是否正常工作
2. 监控新网站的访问统计
3. 确保所有链接都指向新网站

---

**注意**：部署完成后，记得删除或更新这个指南文件，避免暴露敏感信息。
