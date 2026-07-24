---
layout: single
title: ""
permalink: /ja/awards-media/
lang: ja
---
{% assign awards_media_items = site.data.awards_media_ja | sort: "date" | reverse %}

## 受賞

{% assign awards = awards_media_items | where: "category", "award" %}
<div class="thumb-item-list">
{% for item in awards %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			{% if item.url %}
				<a href="{{ item.url }}">
					<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
				</a>
			{% else %}
				<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
			{% endif %}
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.year }} · 受賞</div>
			<h3 class="thumb-item__title">
				{% if item.url %}
					<a href="{{ item.url }}">{{ item.text }}</a>
				{% else %}
					{{ item.text }}
				{% endif %}
			</h3>
			{% if item.citation %}
				<div class="thumb-item__description">{{ item.citation | markdownify }}</div>
			{% endif %}
		</div>
	</article>
{% endfor %}
</div>

## プレスリリース

{% assign press_releases = awards_media_items | where: "category", "press" %}
<div class="thumb-item-list">
{% for item in press_releases %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			{% if item.url %}
				<a href="{{ item.url }}">
					<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
				</a>
			{% else %}
				<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
			{% endif %}
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.year }} · プレスリリース</div>
			<h3 class="thumb-item__title">
				{% if item.url %}
					<a href="{{ item.url }}">{{ item.text }}</a>
				{% else %}
					{{ item.text }}
				{% endif %}
			</h3>
		</div>
	</article>
{% endfor %}
</div>

## メディア掲載

{% assign media_coverage = awards_media_items | where: "category", "media" %}
<div class="thumb-item-list">
{% for item in media_coverage %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			{% if item.url %}
				<a href="{{ item.url }}">
					<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
				</a>
			{% else %}
				<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
			{% endif %}
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.year }} · メディア</div>
			<h3 class="thumb-item__title">
				{% if item.url %}
					<a href="{{ item.url }}">{{ item.text }}</a>
				{% else %}
					{{ item.text }}
				{% endif %}
			</h3>
		</div>
	</article>
{% endfor %}
</div>
