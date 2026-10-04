---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 3
publication_author_notes: true
publication_preprint_label: arXiv preprint
scholar:
  bibliography_template: "{% include_relative _research-citation.liquid %}"
  bibliography_list_tag: div
  bibliography_class: cv-publication-list
  bibliography_item_tag: div
  bibliography_item_attributes:
    class: cv-publication
  bibliography_group_tag: h3
  group_by: year
  group_order: descending
  sort_by: none
  details_link: false
---

{% comment %}
Site-specific content uses structured CV and teaching data within the gem's page layout.
Publication years, order within each year, and metadata come from papers.bib.
{% endcomment %}

<link rel="stylesheet" href="{{ '/assets/css/autumn-gold.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/cv.css' | relative_url }}">

{% assign cv = site.data.academic_cv.cv %}

<div class="academic-cv">
  <section class="cv-section" aria-labelledby="cv-experience">
    <h2 class="cv-section-title" id="cv-experience">Professional Experience</h2>
    <ul class="cv-timeline">
      {% for entry in cv.sections.Experience %}
        <li class="cv-timeline-entry">
          <span class="cv-date">{{ entry.start_date | escape }}–{{ entry.end_date | escape }}</span>
          <div class="cv-entry-content">
            <h3 class="cv-institution">{{ entry.company | escape }}</h3>
            <p class="cv-role">{{ entry.position | escape }}</p>
            <div class="cv-metadata">
              <p>{{ entry.summary | escape }}</p>
              <p>{{ entry.school | escape }}</p>
              <p>{{ entry.location | escape }}</p>
              {% for highlight in entry.highlights %}<p>{{ highlight | escape }}</p>{% endfor %}
            </div>
          </div>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section class="cv-section" aria-labelledby="cv-education">
    <h2 class="cv-section-title" id="cv-education">Education</h2>
    <ul class="cv-timeline">
      {% for entry in cv.sections.Education %}
        <li class="cv-timeline-entry">
          <span class="cv-date">{{ entry.start_date | escape }}–{{ entry.end_date | escape }}</span>
          <div class="cv-entry-content">
            <h3 class="cv-institution">{{ entry.institution | escape }}</h3>
            {% if entry.studyType %}<p class="cv-role">{{ entry.studyType | escape }}</p>{% endif %}
            <div class="cv-metadata">
              {% if entry.area %}<p>{{ entry.area | escape }}</p>{% endif %}
              <p>{{ entry.location | escape }}</p>
              {% for highlight in entry.highlights %}<p>{{ highlight | escape }}</p>{% endfor %}
            </div>
          </div>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section class="cv-section" aria-labelledby="cv-interests">
    <h2 class="cv-section-title" id="cv-interests">Research Interests</h2>
    <div class="cv-interests">
      {% for interest in cv.research_interests %}<p>{{ interest | escape }}</p>{% endfor %}
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-manuscripts">
    <h2 class="cv-section-title" id="cv-manuscripts">Manuscripts Under Review or Revision</h2>
    <div class="cv-publication-years">
      {% bibliography --query @*[cv_section=manuscript] %}
    </div>
  </section>

  <section class="cv-section" aria-labelledby="cv-publications">
    <h2 class="cv-section-title" id="cv-publications">Publications</h2>
    <div class="cv-publication-years">
      {% bibliography --query @*[cv_section=publication] %}
    </div>
    <p class="cv-author-note">* Joint first author; † corresponding author.</p>
  </section>

  <section class="cv-section" aria-labelledby="cv-talks">
    <h2 class="cv-section-title" id="cv-talks">Talks</h2>
    {% for group in cv.talks %}
      <h3 class="cv-subheading">{{ group.category | escape }}</h3>
      <ul class="cv-timeline">
        {% for talk in group.entries %}
          <li class="cv-timeline-entry">
            <span class="cv-date">{{ talk.date | escape }}</span>
            <div class="cv-entry-content">
              <h4 class="cv-item-title">{{ talk.venue | escape }}</h4>
              <p class="cv-metadata">{{ talk.location | escape }}</p>
              <p class="cv-talk-title">{{ talk.title | escape }}</p>
            </div>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </section>

  <section class="cv-section" aria-labelledby="cv-service">
    <h2 class="cv-section-title" id="cv-service">Professional Service</h2>
    <h3 class="cv-subheading">Reviewer</h3>
    <p class="cv-service-text">{% for review in cv.journal_reviews %}{{ review.journal | escape }}{% unless forloop.last %}; {% endunless %}{% endfor %}.</p>
  </section>

  <section class="cv-section" aria-labelledby="cv-teaching">
    <h2 class="cv-section-title" id="cv-teaching">Teaching Experience</h2>
    {% assign teaching_years = site.data.teaching | group_by: 'year' | sort: 'name' | reverse %}
    <ul class="cv-timeline">
      {% for year in teaching_years %}
        <li class="cv-timeline-entry">
          <span class="cv-date">{{ year.name | escape }}</span>
          <div class="cv-entry-content">
            {% for course in year.items %}
              <div class="cv-course">
                <h3 class="cv-item-title">{{ course.title | escape }}</h3>
                <p class="cv-metadata">Teaching Assistant · {{ course.program | escape }} · {{ course.term | escape }} {{ course.year }}</p>
              </div>
            {% endfor %}
          </div>
        </li>
      {% endfor %}
    </ul>
  </section>

  <section class="cv-section" aria-labelledby="cv-awards">
    <h2 class="cv-section-title" id="cv-awards">Awards &amp; Honours</h2>
    <ul class="cv-timeline">
      {% for entry in cv.sections.Awards %}
        <li class="cv-timeline-entry">
          <span class="cv-date">{{ entry.date | escape }}</span>
          <div class="cv-entry-content">
            <p class="cv-award-title">{{ entry.title | escape }}{% if entry.awarder %}, {{ entry.awarder | escape }}{% endif %}</p>
            {% if entry.summary %}<p class="cv-award-note cv-metadata">{{ entry.summary | escape }}</p>{% endif %}
          </div>
        </li>
      {% endfor %}
    </ul>
  </section>
</div>
