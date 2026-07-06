---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: single
title: ""
classes: landing-page
---
<div class="research-slider research-slider--fullbleed" data-autoplay-ms="4500" aria-label="Featured research slider">
	<div class="research-slider__viewport">
		{% assign slider_items = site.research | sort: "order" %}
		{% for item in slider_items limit: 10 %}
			{% if item.image and item.featured %}
			<a class="research-slide{% if forloop.first %} is-active{% endif %}" href="{{ item.url | relative_url }}" aria-hidden="{% unless forloop.first %}true{% else %}false{% endunless %}">
				<img src="{{ item.image }}" alt="{{ item.title }}" loading="lazy" />
				<div class="research-slide__caption">
					<strong>{{ item.title }}</strong>
					<span>{{ item.venue }}</span>
				</div>
			</a>
			{% endif %}
		{% endfor %}
		<div class="research-slider__dots" role="tablist" aria-label="Research image selector"></div>
		<button class="research-slider__nav research-slider__nav--prev" type="button" data-slider-prev aria-label="Previous slide">＜</button>
		<button class="research-slider__nav research-slider__nav--next" type="button" data-slider-next aria-label="Next slide">＞</button>
	</div>
</div>

SoLa (Soft Lab) explores research at the intersection of digital fabrication, soft robotics, learning-based robotics, and human-computer interaction.

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
