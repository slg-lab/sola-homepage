---
layout: single
title: ""
permalink: /ja/research/
lang: ja
---

私たちの研究は、**デジタルファブリケーション**、**ソフトロボティクス**、**ヒューマンコンピュータインタラクション**の融合領域にあります。

## 最新の研究成果

<div class="research-grid">
{% assign research_items = site.research_ja | sort: "order" %}
{% for item in research_items %}
  <a class="research-card" href="{{ item.url | relative_url }}">
    {% if item.image %}
    <img src="{{ item.image }}" alt="{{ item.title }}" loading="lazy" />
    {% endif %}
    <div class="research-card__body">
      <strong>{{ item.title }}</strong>
      <span class="research-card__venue">{{ item.venue }}</span>
    </div>
  </a>
{% endfor %}
</div>
