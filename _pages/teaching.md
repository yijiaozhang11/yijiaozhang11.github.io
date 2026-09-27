---
layout: default
permalink: /teaching/
title: Teaching
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/autumn-gold.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/teaching.css' | relative_url }}">

<div class="academic-teaching">
  <h1 class="teaching-title">Teaching Assistant</h1>
  {% assign teaching_years = site.data.teaching | group_by: 'year' | sort: 'name' | reverse %}
  {% for year in teaching_years %}
    <section class="teaching-year" aria-labelledby="teaching-year-{{ year.name }}">
      <h2 id="teaching-year-{{ year.name }}">{{ year.name }}</h2>
      <ul class="teaching-list">
        {% for experience in year.items %}
          <li class="teaching-card">
            <h3>{{ experience.title | escape }}</h3>
            <p class="teaching-meta">{{ experience.program | escape }} · {{ experience.term | escape }} {{ experience.year }}</p>
            {% if experience.description %}<p class="teaching-description">{{ experience.description | escape }}</p>{% endif %}
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>
