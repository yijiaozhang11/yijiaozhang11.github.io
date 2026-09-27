---
layout: default
permalink: /research/
title: Research
description: Statistical learning and inference under heterogeneity.
nav: true
nav_order: 1
publication_abstracts: true
publication_author_notes: true
scholar:
  bibliography_template: "{% include_relative _research-citation.liquid %}"
  bibliography_list_tag: div
  bibliography_class: publication-list
  bibliography_item_tag: div
  bibliography_item_attributes:
    class: publication-item
  bibliography_group_tag: h2
  group_by: none
  sort_by: none
  details_link: false
---

<link rel="stylesheet" href="{{ '/assets/css/autumn-gold.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">
<script src="{{ '/assets/js/research-views.js' | relative_url }}" defer></script>

<div class="academic-research" data-research-views>
  <h1 class="sr-only">Research</h1>
  <div class="research-view-controls" role="tablist" aria-label="Publication organization" hidden>
    <button type="button" role="tab" id="research-topic-tab" aria-controls="research-topic-panel" aria-selected="true" tabindex="0">By Topic</button>
    <button type="button" role="tab" id="research-year-tab" aria-controls="research-year-panel" aria-selected="false" tabindex="-1">By Year</button>
  </div>

  <section id="research-topic-panel" class="research-panel" role="tabpanel" aria-labelledby="research-topic-tab" tabindex="0">
    {% for research in site.data.research %}
      <section class="research-topic" aria-labelledby="research-topic-{{ forloop.index }}">
        <h2 id="research-topic-{{ forloop.index }}">{{ research.title | escape }}</h2>
        {% for group in research.groups %}
          <div class="research-subtopic">
            {% if group.title %}<h3>{{ group.title | escape }}</h3>{% endif %}
            {% for publication_key in group.publication_keys %}
              {% capture publication_count %}{% bibliography_count --query @*[key={{publication_key}}] %}{% endcapture %}
              {% assign publication_count = publication_count | plus: 0 %}
              {% if publication_count > 0 %}
                {% bibliography --query @*[key={{publication_key}}] %}
              {% else %}
                <p class="research-pending">Publication details forthcoming.</p>
              {% endif %}
            {% endfor %}
          </div>
        {% endfor %}
      </section>
    {% endfor %}
  </section>

  <section id="research-year-panel" class="research-panel research-by-year" role="tabpanel" aria-labelledby="research-year-tab" tabindex="0" hidden>
    {% bibliography --group_by year --group_order descending %}
  </section>
  <p class="research-author-note">* Joint first author; † corresponding author.</p>
</div>
