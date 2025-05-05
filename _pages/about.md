---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a compiler engineer at <a href="https://efficient.computer/">Efficient Computer</a> where I am building compilers (duh!) for novel, low-power, dataflow architectures. Prior to this, I obtained my Master's degree from <a href="https://www.cmu.edu/">Carnegie Mellon University</a>, and spent some time there as a Research Associate at the <a href="https://pastalab.org">PASTA</a> lab. Before CMU, I worked at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-india/">Microsoft Research India</a> as a Research Fellow in the Programming Languages and Software Engineering group. I obtained my bachelor's degree in Computer Science and Engineering from <a href="https://www.nitk.ac.in/">National Institute of Technology Karnataka</a> in India.

Broadly, I am interested in program analysis, compilers and security. More specifically, my work and research aim to improve the efficiency, reliability and security of software and programs. At CMU, MSR and CertiK, I built compilers and tools that use formal methods and other automated reasoning techniques to guarantee software and system security. Currently, my work focuses on reducing the energy consumption of programs on custom hardware while maintaining programmability.

When I'm not working, I play a lot of chess. (Fun fact: I got to meet and play with Magnus Carlsen a couple of years ago!) I also like to read fiction, play the guitar and draw.

<hr />

{% include base_path %}

Experience
======
{% for post in site.experience reversed %}
  {% include experience-layout.html %}
{% endfor %}

<hr />

Publications
=======
<ul>
  {% for post in site.publications reversed %}
    {% include publications-layout.html %}
  {% endfor %}
</ul>

<hr />

Projects
======
<ul>
  {% for post in site.projects reversed %}
    {% include projects-layout.html %}
  {% endfor %}
</ul>

<hr />

Misc.
=====
<ul>
  <li> Artifact reviewer for <a href="https://icfp25.sigplan.org/profile/samviddharanikota1">ICFP</a> 2025 </li>
  <li> Student volunteer for <a href="https://pldi22.sigplan.org/">PLDI</a> 2022 </li>
  <li> Artifact reviewer for <a href="https://conf.researchr.org/profile/sas-2021/samviddharanikota">SAS</a> 2021 </li>
</ul>