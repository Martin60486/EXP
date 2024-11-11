---
layout: default
title: Home
---

<!-- About Section -->
<section class="about"> <!--flex aligns children horizontally -->
    <div class="about-content">
        <img src="{{ '/assets/images/accounting.jpg' | relative_url }}" alt="Accounting Image" class="about-image">
        <p>
            A trusted CPA firm in Vancouver, we provide reliable and efficient accounting and tax services tailored to meet the unique needs of corporations, trusts, and individuals. With expertise in English and Chinese, we are here to support your financial success.
        </p>
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
            <li>T1 Tax returns including self-employed</li>
            <li>Personal information returns (e.g., T1134s and T1135s)</li>
            <li>Tax planning</li>
        </ul>
        <h3>Corporate & Trust Income Tax</h3>
        <ul>
            <li>Corporate T2 tax returns</li>
            <li>Trust T3 tax returns</li>
            <li>Tax slips (T3s, T4s, T5s, etc.) preparation</li>
            <li>Tax planning</li>
        </ul>
        <h3>Bookkeeping</h3>
        <ul>
            <li>Periodic bookkeeping (monthly, quarterly, annually)</li>
            <li>GST and PST returns</li>
            <li>Payroll remittance, ROEs, T4, T4A</li>
            <li>Controllership</li>
            <li>Business setup and IT consultation</li>
        </ul>
        <h3>Non-residents</h3>
        <ul>
            <li>Rental income (Section 216) returns</li>
            <li>Peonsion income (Section 217) returns</li>
            <li>Other personal and corporate income tax returns for non-residents</li>
            <li>Tax planning</li>
        </ul>
        <h3>Not-for-profit accounting</h3>
        <ul>
            <li>Full-cycle fund accounting for not-for-profit organizations</li>
            <li>Budgeting</li>
            <li>Fund reportingn</li>
            <li>GST refund claim</li>
            <li>Charity information return</li>
        </ul>
    </div>
</section>

<!-- Contact Section -->
<section class="contact">
    <img src="{{ '/assets/images/telephone.jpg' | relative_url }}" alt="Vintage Telephone" class="contact-image">
    
    <div class="contact-info">
        <h2>Contact us:</h2>
        <p>Email: <a href="mailto:info@expaccounting.ca">info@expaccounting.ca</a></p>
        <p>Phone: 604-838-9028; 778-918-8898</p>
        <p>Feel free to reach out via email or telephone for any inquiries!</p>
    </div>
</section>
<!--<section> has two children: <img> and <div>; .contact->flex align the two children side by side-->
<!--<div> has four children <h2> and three <p> -->

