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

SoLa（Soft Lab）は、デジタルファブリケーション、ソフトロボティクス、学習ベースロボティクス、ヒューマンコンピュータインタラクションの交差領域を探究しています。

本研究室は **Tung D. Ta** が主宰しており、現在は慶應義塾大学SFCの准教授を務めています（前職: 東京大学）。

## 研究テーマ

- データ駆動型および基盤モデルを活用したソフトロボット設計
- ロボティクス向けプリンタブル・フレキシブルエレクトロニクス
- 製造制約を考慮した移動・操作メカニズム
- 新しい身体インタフェースを用いた人間中心インタラクティブシステム

## ニュース

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

<p style="text-align: right;"><a href="{{ '/news/' | relative_url }}">もっと見る</a></p>

## 受賞・メディア

{% assign newest_awards_media = site.data.awards_media | sort: "date" | reverse | slice: 0, 5 %}
<div class="thumb-item-list">
{% for item in newest_awards_media %}
	{% assign item_thumb = item.thumbnail | default: '/assets/images/news-awards-default-thumb.svg' %}
	<article class="thumb-item">
		<div class="thumb-item__thumb">
			<img src="{{ item_thumb | relative_url }}" alt="{{ item.text | escape }}">
		</div>
		<div class="thumb-item__body">
			<div class="thumb-item__meta">{{ item.year }} · {% if item.category == 'award' %}受賞{% elsif item.category == 'press' %}プレスリリース{% else %}メディア{% endif %}</div>
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

<p style="text-align: right;"><a href="{{ '/awards-media/' | relative_url }}">もっと見る</a></p>
