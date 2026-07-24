---
layout: single
title: ""
permalink: /ja/news/
lang: ja
---

## 最新ニュース

{% assign latest_news = site.data.news_ja | sort: "date" | reverse %}
<div class="thumb-item-list">
{% for item in latest_news %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			{% if item.url %}
				<a href="{{ item.url }}">
					<img src="{{ item_thumb | relative_url }}" alt="{{ item.title | escape }}">
				</a>
			{% else %}
				<img src="{{ item_thumb | relative_url }}" alt="{{ item.title | escape }}">
			{% endif %}
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.date }}</div>
			<h3 class="thumb-item__title">
				{% if item.url %}
					<a href="{{ item.url }}">{{ item.title }}</a>
				{% else %}
					{{ item.title }}
				{% endif %}
			</h3>
		</div>
	</article>
{% endfor %}
</div>

<!-- ## Announcements

- Student recruitment: Master/PhD opportunities are announced on [tungtd.com](https://tungtd.com/).
- For complete historical updates, visit the Notion news board: [SOLA News](https://tatung2112.notion.site/1bfd1602ac604bbfac175ddd4e68516a?v=5534f74ea30440e6b937d053d6ea2c97) -->
