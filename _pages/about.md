---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I'm a compiler engineer at <a href="https://efficient.computer/">Efficient Computer</a>. Prior to this, I graduated from <a href="https://www.cmu.edu/">Carnegie Mellon University</a> with a Master's degree. Before CMU, I worked at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-india/">Microsoft Research India</a> as a Research Fellow in the Programming Languages and Software Engineering group. I obtained my bachelor's degree in Computer Science and Engineering from <a href="https://www.nitk.ac.in/">National Institute of Technology Karnataka</a> in India.

My research interests include using formal verification and other automated reasoning techniques to improve software and system security. During my Master's, I worked with <a href="https://www.andrew.cmu.edu/user/bparno/">Bryan Parno</a> on applying these techniques to formally verify the security of cryptographic protocols. My work at CertiK and MSR also focused on using these techniques to verify blockchain smart contracts. I am also interested in program analysis, programming language theory and compilers.

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
