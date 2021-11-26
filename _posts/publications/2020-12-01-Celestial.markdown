---
title: "Celestial: A Smart Contracts Verification Framework"
category: publications
date: 2021-10-20 00:00
conference: FMCAD 2021
authors:
- name: <b>Samvid Dharanikota</b>
- name: Suvam Mukherjee
  url: https://suvamm.github.io/
- name: Chandrika Bhardwaj
  url: http://www.cse.iitd.ernet.in/~chandrika/
- name: Aseem Rastogi
  url: https://www.microsoft.com/en-us/research/people/aseemr/
- name: Akash Lal
  url: https://www.microsoft.com/en-us/research/people/akashl/
abstract: We present Celestial, a framework for formally verifying smart contracts written in the Solidity language for the Ethereum blockchain. Celestial allows programmers to write expressive functional specifications for their contracts. It translates the contracts and the specifications to F* to formally verify, against an F* model of the blockchain semantics, that the contracts meet their specifications. Once the verification succeeds, Celestial performs an erasure of the specifications to generate Solidity code for execution on the Ethereum blockchain. We use Celestial to verify several real-world smart contracts from different application domains such as tokens, digital wallets, and governance. Our experience shows that Celestial is a valuable tool for writing high-assurance smart contracts.
paperlink: https://www.microsoft.com/en-us/research/uploads/prod/2021/09/celestial-fstar.pdf
hidden: true # don't count this post in blog pagination
paperid: 5
---