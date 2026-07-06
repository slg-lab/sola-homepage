---
layout: single
title: ""
permalink: /about/
---

SOLA Group explores research at the intersection of digital fabrication, soft robotics, and human-computer interaction.

The group is led by **Tung D. Ta**, currently an Associate Professor at Keio University (SFC), with previous appointments at The University of Tokyo.

## Research Focus

- Data-driven and foundation-model-based methods for soft robot design
- Printable and flexible electronics for robotic systems
- Fabrication-aware mechanisms for locomotion and manipulation
- Human-centered interactive systems with novel physical interfaces

## News

{% assign newest_news = site.data.news | sort: "date" | reverse | slice: 0, 5 %}
<div class="thumb-item-list">
{% for item in newest_news %}
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

<p style="text-align: right;"><a href="{{ '/news/' | relative_url }}">More</a></p>

## Awards and Media

{% assign newest_awards_media = site.data.awards_media | sort: "date" | reverse | slice: 0, 5 %}
<div class="thumb-item-list">
{% for item in newest_awards_media %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.year }} · {{ item.category | capitalize }}</div>
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

<p style="text-align: right;"><a href="{{ '/awards-media/' | relative_url }}">More</a></p>