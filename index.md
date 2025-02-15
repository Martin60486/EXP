---
layout: default
title: Professional Bookkeeping & Tax Services | EXP Accounting
description: Affordable bookkeeping and tax services for small businesses and individuals.
keywords: bookkeeping, tax services, accounting, small business, CPA, Vancouver, EXP Accounting
---

<!-- About Section -->
<section class="about"> <!--flex aligns children horizontally -->
    <div class="about-content">
        <img src="{{ '/assets/images/accounting.jpg' | relative_url }}" alt="Accounting Image" class="about-image">
        <p>
            A trusted CPA firm in Vancouver, we provide reliable and efficient accounting and tax services tailored to meet the unique needs of corporations, trusts, and individuals. With expertise in English and Chinese, we are here to support your financial success.
        </p>
    </div>
    <div>
        <a href="./blog.html" style="font-weight: bold; color: #0056b3; float:left">Visit our blog</a>&nbsp;to ask questions! 
    </div>
 </section>

<!-- about section has only one direct child: <div>, flex is not necessary-->
<!-- <div> has two children: img and <p>; class .about-content-> flex align them horizontally-->
<!-- Services Section -->
<section class="services">
    <h2>Our Services:</h2>
    <div class="service-list">
        <h3>Personal Income Tax</h3>
        <ul>
            <li>T1 Tax returns, including for self-employed</li>
            <li>Personal information returns (e.g., T1134, T1135)</li>
            <li>Tax planning</li>
        </ul>
        <h3>Corporate & Trust Income Tax</h3>
        <ul>
            <li>Corporate T2 tax returns</li>
            <li>Trust T3 tax returns</li>
            <li>Tax slips preparation (T3, T4, T5, etc.)</li>
            <li>Tax planning</li>
        </ul>
        <h3>Bookkeeping</h3>
        <ul>
            <li>Periodic bookkeeping (monthly, quarterly, annually)</li>
            <li>GST and PST returns</li>
            <li>Payroll remittance, ROE, T4, T4A</li>
            <li>Controllership</li>
            <li>Business setup and IT consultation</li>
        </ul>
        <h3>Non-residents</h3>
        <ul>
            <li>Rental income (Section 216) returns</li>
            <li>Pension income (Section 217) returns</li>
            <li>Other personal and corporate income tax returns for non-residents</li>
            <li>Tax planning</li>
        </ul>
        <h3>Not-for-profit accounting</h3>
        <ul>
            <li>Full-cycle fund accounting for not-for-profit organizations</li>
            <li>Budgeting</li>
            <li>Fund reporting</li>
            <li>GST refund claim</li>
            <li>Charity information return</li>
        </ul>
    </div>
</section>

<!-- Contact Section -->
<!-- Link to the external JavaScript file -->

<section id="contact-container"></section>

<script src="{{ '/scripts-index.js' | relative_url }}"></script>
<!--<section> has two children: <img> and <div>; .contact->flex align the two children side by side-->
<!--<div> has four children <h2> and three <p> -->

