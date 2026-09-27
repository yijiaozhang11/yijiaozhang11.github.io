---
layout: default
title: About
permalink: /
description: Statistical learning and inference under heterogeneity.

# Keep these disabled if this page is ever switched back to the about layout.
selected_papers: false
social: false
announcements:
  enabled: false
latest_posts:
  enabled: false

# Share the citation template and native abstract expansion with Research.
publication_abstracts: true
scholar:
  bibliography_template: "{% include_relative _research-citation.liquid %}"
  bibliography_list_tag: div
  bibliography_class: home-citation-list
  bibliography_item_tag: div
  bibliography_item_attributes:
    class: home-citation
  group_by: none
  details_link: false
---

{% comment %}
The core default layout keeps the navbar and footer.
Its head has no general per-page CSS hook. Body-allowed stylesheet links here
load the palette and homepage styles only on this page, without shadowing any theme template.
{% endcomment %}

<link rel="stylesheet" href="{{ '/assets/css/autumn-gold.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/publications.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/home.css' | relative_url }}">

{% assign profile = site.data.profile %}
{% assign socials = site.data.socials %}
{% capture full_name %}{{ site.first_name }}{% if site.middle_name %} {{ site.middle_name }}{% endif %} {{ site.last_name }}{% endcapture %}
{% assign full_name = full_name | strip %}
{% if profile.image and profile.image != '' %}
{% assign profile_image = site.static_files | where: 'path', profile.image | first %}
{% endif %}

<div class="academic-home">
  <aside class="home-sidebar" aria-labelledby="home-name">
    {% if profile_image %}
      <img class="home-portrait" src="{{ profile.image | relative_url }}" alt="{{ full_name | escape }}" width="240" height="300">
    {% else %}
      <div class="home-portrait home-portrait-placeholder">
        <span class="home-initials" aria-hidden="true">{{ site.first_name | slice: 0 }}{{ site.last_name | slice: 0 }}</span>
        <span>Profile photo forthcoming</span>
      </div>
    {% endif %}
    <h1 id="home-name">{{ full_name | escape }}</h1>
    <p class="home-position">{{ profile.position | escape }}</p>
    <p class="home-institution">{{ profile.institution | escape }}</p>
    <ul class="home-links" aria-label="Contact and academic profiles">
      <li>
        {% if socials.email and socials.email != '' %}
          <a class="home-social-icon" href="mailto:{{ socials.email | escape }}" title="Email" aria-label="Email">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i>
          </a>
        {% else %}
          <span class="home-social-icon" role="link" aria-disabled="true" tabindex="0" title="Email" aria-label="Email" aria-describedby="home-email-pending">
            <i class="fa-solid fa-envelope" aria-hidden="true"></i>
          </span>
          <span class="sr-only" id="home-email-pending">Email address to be added.</span>
        {% endif %}
      </li>
      <li>
        {% if socials.scholar_userid and socials.scholar_userid != '' %}
          <a
            class="home-social-icon"
            href="https://scholar.google.com/citations?user={{ socials.scholar_userid | uri_escape }}"
            target="_blank"
            rel="noopener noreferrer"
            title="Google Scholar"
            aria-label="Google Scholar"
          >
            <i class="ai ai-google-scholar" aria-hidden="true"></i>
          </a>
        {% else %}
          <span
            class="home-social-icon"
            role="link"
            aria-disabled="true"
            tabindex="0"
            title="Google Scholar"
            aria-label="Google Scholar"
            aria-describedby="home-scholar-pending"
          >
            <i class="ai ai-google-scholar" aria-hidden="true"></i>
          </span>
          <span class="sr-only" id="home-scholar-pending">Google Scholar profile to be added.</span>
        {% endif %}
      </li>
      {% if profile.institution_profile_url and profile.institution_profile_url != '' %}
        <li>
          <a
            class="home-social-icon"
            href="{{ profile.institution_profile_url | escape }}"
            target="_blank"
            rel="noopener noreferrer"
            title="Penn Profile"
            aria-label="Penn Profile"
          >
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </li>
      {% endif %}
    </ul>
  </aside>

  <div class="home-content">
    <section class="home-section" aria-labelledby="home-bio">
      <h2 id="home-bio">Bio</h2>
      <p>
        I am a Postdoctoral Researcher in the Department of Biostatistics, Epidemiology and Informatics at the University of Pennsylvania, working with
        Prof. <a href="https://www.med.upenn.edu/apps/faculty/index.php/g275/p4879509" target="_blank" rel="noopener noreferrer">Hongzhe Li</a>.
        I received my Ph.D. in Statistics from Fudan University, advised by Prof.
        <a href="https://www.fdsm.fudan.edu.cn/en/2025/1106/c1056a24491/page1.htm" target="_blank" rel="noopener noreferrer">Zhongyi Zhu</a>,
        and was a visiting Ph.D. student at the University of California, Irvine, hosted by Prof.
        <a href="https://qu.pstat.ucsb.edu/" target="_blank" rel="noopener noreferrer">Annie Qu</a>.
        My research develops statistical methods for reliable learning and inference from complex and heterogeneous scientific data.
      </p>
    </section>

    <section class="home-section" aria-labelledby="home-research">
      <h2 id="home-research">Research</h2>
      <p>
        My research interests include AI-augmented inference, data integration and transfer learning, and causal inference, with applications to
        integrative and single-cell genomics. A central theme of my current work is
        <strong>statistical learning and inference under heterogeneity</strong>, pursued through three complementary directions: borrowing shared
        information across heterogeneous data, exploiting heterogeneity for structural identification, and learning individual differences through
        shared structure.
      </p>
      <div class="home-research-list">
        {% for research in site.data.research %}
          {% assign research_image = site.static_files | where: 'path', research.image | first %}
          {% assign research_id = research.image | split: '/' | last | remove: '.png' %}
          <details class="home-research-card" id="research-{{ research_id }}">
            <summary class="home-research-summary">
              <span class="home-research-visual{% if research.image_class %} {{ research.image_class | escape }}{% endif %}">
                {% if research_image %}
                  <img src="{{ research.image | relative_url }}" alt="{{ research.title | escape }}" loading="lazy">
                {% else %}
                  <span class="home-image-placeholder">Illustration<br>forthcoming</span>
                {% endif %}
              </span>
              <span class="home-research-copy">
                <span class="home-research-title">{{ research.title | escape }}</span>
                <span class="home-research-question">{{ research.question | escape }}</span>
                <span class="home-research-description">{{ research.description | escape }}</span>
              </span>
              <span class="home-research-action">
                <span class="home-action-closed">View related work</span>
                <span class="home-action-open">Hide related work</span>
                <span class="home-expansion-indicator" aria-hidden="true"></span>
              </span>
            </summary>
            <div class="home-related-work">
              <h3>Related work</h3>
              {% for group in research.groups %}
                <div class="home-citation-group">
                  {% if group.title %}<h4>{{ group.title | escape }}</h4>{% endif %}
                  {% assign missing_publications = false %}
                  {% for publication_key in group.publication_keys %}
                    {% capture publication_count %}{% bibliography_count --query @*[key={{publication_key}}] %}{% endcapture %}
                    {% assign publication_count = publication_count | plus: 0 %}
                    {% if publication_count > 0 %}
                      {% bibliography --query @*[key={{publication_key}}] %}
                    {% else %}
                      {% assign missing_publications = true %}
                    {% endif %}
                  {% endfor %}
                  {% if missing_publications %}<p class="home-pending">Publication details forthcoming.</p>{% endif %}
                </div>
              {% endfor %}
            </div>
          </details>
        {% endfor %}
      </div>
    </section>

  </div>
</div>
