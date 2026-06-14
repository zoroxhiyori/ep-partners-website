export type Category = "Tax & Accounting" | "Legal & Compliance" | "Business & Investment";
export type Language = "EN" | "KH" | "CH";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  languages: Language[];
  date: string;
  readTime: number;
  content: string;
}

export const categoryMeta: Record<Category, { bg: string; text: string }> = {
  "Tax & Accounting": { bg: "#ECFDF5", text: "#059669" },
  "Legal & Compliance": { bg: "#EEF2FF", text: "#4F46E5" },
  "Business & Investment": { bg: "#FFF7ED", text: "#D97706" },
};

export const articles: Article[] = [
  {
    slug: "cambodia-tax-filing-deadlines-2025",
    title: "Cambodia Tax Filing Deadlines 2025 — Complete Guide",
    excerpt:
      "A comprehensive overview of all key tax filing deadlines for businesses in Cambodia in 2025, including monthly obligations, annual returns, and critical GDT submission dates.",
    category: "Tax & Accounting",
    languages: ["EN", "KH", "CH"],
    date: "January 15, 2025",
    readTime: 8,
    content: `
<h2>Overview</h2>
<p>For businesses operating in Cambodia, staying compliant with the General Department of Taxation (GDT) requires careful attention to filing deadlines throughout the year. Missing a deadline — even by a day — can trigger penalties and interest charges that accumulate rapidly.</p>
<p>This guide consolidates all key tax filing deadlines for the 2025 fiscal year into a single reference document for finance teams, CFOs, and business owners.</p>

<h2>Monthly Tax Obligations</h2>
<p>Cambodia's tax system requires most businesses to submit several monthly tax returns. These must be filed by the <strong>20th of the following month</strong> for the prior month's activity.</p>

<h3>Value Added Tax (VAT)</h3>
<p>VAT returns (Form VAT-001) must be filed monthly for all businesses registered under the Real Regime tax system. The standard VAT rate is 10%. The return covers output VAT on sales and input VAT on eligible purchases, with the net amount either payable to GDT or carried forward as a credit.</p>
<div class="key-point"><strong>Deadline:</strong> 20th of the following month. Late filing incurs a 10% penalty on the tax due plus 2% per month interest.</div>

<h3>Tax on Income (ToI) Prepayment</h3>
<p>Businesses are required to make monthly prepayments of Tax on Income at a rate of 1% of monthly turnover. This is deducted from the final annual ToI liability, ensuring businesses pay tax incrementally rather than in one large annual payment.</p>

<h3>Withholding Tax (WHT)</h3>
<p>WHT must be deducted at source and remitted to GDT monthly. Key rates include:</p>
<ul>
<li>Resident contractors and service providers: 15%</li>
<li>Interest payments to residents: 6%</li>
<li>Rental payments: 10%</li>
<li>Payments to non-residents: 14%</li>
</ul>

<h2>Annual Tax Obligations</h2>

<h3>Annual Tax on Income Return</h3>
<p>The Annual ToI Return must be filed by <strong>31 March</strong> of the following year for calendar-year taxpayers. This covers the full year's taxable profit, after adjusting for depreciation, deductible expenses, and any applicable tax incentives.</p>
<div class="key-point">The standard ToI rate for most companies is 20%. Qualified Investment Projects (QIPs) may benefit from multi-year tax holidays reducing this to zero during the incentive period.</div>

<h3>Patent Tax</h3>
<p>Patent Tax (business license fee) is due annually by <strong>31 January</strong>. The amount varies by business size and type, ranging from $25 for small businesses to $5,000 or more for large enterprises.</p>

<blockquote>EP Partners recommends setting internal reminders 10 business days before each deadline to allow sufficient time for data preparation, review, and filing without last-minute pressure.</blockquote>

<h2>Key Dates Summary for 2025</h2>
<ul>
<li><strong>20 January:</strong> Monthly VAT, WHT, and ToI prepayment for December 2024</li>
<li><strong>31 January:</strong> Patent Tax annual payment</li>
<li><strong>20 February:</strong> Monthly filings for January 2025</li>
<li><strong>31 March:</strong> Annual Tax on Income Return for FY2024</li>
<li><strong>20th of each month:</strong> Ongoing monthly VAT, WHT, and ToI prepayment obligations</li>
</ul>

<h2>Penalties for Non-Compliance</h2>
<p>The GDT imposes graduated penalties for late filing and payment:</p>
<ul>
<li>Late filing: 10% of tax due</li>
<li>Late payment: 2% per month interest on outstanding balance</li>
<li>Tax evasion: Criminal penalties may apply in severe cases</li>
</ul>
<p>Businesses that proactively identify errors and file amended returns before GDT audits are generally treated more favorably than those identified through routine examination.</p>
    `,
  },
  {
    slug: "gdt-transfer-pricing-regulations",
    title: "New GDT Regulations on Transfer Pricing in Cambodia",
    excerpt:
      "Cambodia's General Department of Taxation has introduced comprehensive transfer pricing rules under Prakas No. 986, requiring multinational groups to maintain detailed arm's length pricing documentation.",
    category: "Tax & Accounting",
    languages: ["EN", "CH"],
    date: "February 20, 2025",
    readTime: 10,
    content: `
<h2>Background</h2>
<p>Cambodia has significantly strengthened its transfer pricing framework with the issuance of Prakas No. 986 MEF.GDT on Transfer Pricing. This regulation aligns Cambodia's approach with OECD guidelines and signals a more rigorous enforcement posture from the General Department of Taxation (GDT).</p>
<p>For multinational enterprise (MNE) groups with entities in Cambodia, compliance with these new requirements is now a legal obligation backed by significant penalties for non-compliance.</p>

<h2>Who Is Affected?</h2>
<p>The regulations apply to taxpayers who:</p>
<ul>
<li>Are members of a multinational enterprise group</li>
<li>Engage in controlled transactions with related parties (domestic or cross-border)</li>
<li>Have annual turnover exceeding KHR 4 billion (approximately USD 1 million)</li>
</ul>
<div class="key-point">Even domestic related-party transactions between Cambodian entities within the same group may be subject to transfer pricing rules if they meet the applicable thresholds.</div>

<h2>The Arm's Length Principle</h2>
<p>The core principle of Cambodia's transfer pricing rules is the arm's length standard: prices charged in controlled transactions between related parties must be equivalent to what unrelated parties would agree under comparable circumstances.</p>
<p>The GDT accepts several transfer pricing methods to demonstrate arm's length compliance:</p>
<ul>
<li>Comparable Uncontrolled Price (CUP) Method</li>
<li>Resale Price Method (RPM)</li>
<li>Cost Plus Method (CPM)</li>
<li>Transactional Net Margin Method (TNMM)</li>
<li>Profit Split Method (PSM)</li>
</ul>

<h2>Documentation Requirements</h2>
<p>The Prakas adopts a three-tier documentation structure consistent with the OECD's BEPS Action 13 recommendations:</p>

<h3>Master File</h3>
<p>A high-level overview of the MNE group's global business operations, organizational structure, transfer pricing policies, and financial position. This must be prepared by the ultimate parent entity and made available to Cambodian tax authorities upon request.</p>

<h3>Local File</h3>
<p>Detailed documentation specific to the Cambodian entity, covering its controlled transactions, functional analysis (functions performed, assets used, risks assumed), and the selection and application of the transfer pricing method used.</p>
<div class="key-point">The Local File must be prepared in advance and be ready for submission within 30 days of a GDT request — retroactive preparation after audit notification is not considered compliant.</div>

<h3>Country-by-Country Report (CbCR)</h3>
<p>Required for MNE groups with consolidated group revenue exceeding USD 850 million (KHR 3.5 trillion). The CbCR provides aggregate tax jurisdiction-level data on revenue, profit, tax paid, and business activities across the group.</p>

<h2>Penalties for Non-Compliance</h2>
<p>Failure to maintain adequate documentation or income adjustments arising from non-arm's length pricing can result in:</p>
<ul>
<li>Tax assessments on adjusted income at standard ToI rates</li>
<li>Penalties of up to 40% of the tax shortfall</li>
<li>Interest charges of 2% per month on outstanding balances</li>
</ul>

<blockquote>EP Partners recommends that all affected businesses conduct a transfer pricing health check to assess their current intercompany arrangements and documentation gaps before the GDT initiates a formal audit examination.</blockquote>
    `,
  },
  {
    slug: "ifrs-adoption-cambodia",
    title: "IFRS Adoption Timeline for Cambodian Businesses",
    excerpt:
      "Cambodia's phased transition to International Financial Reporting Standards presents significant preparation requirements for businesses. Understanding your obligations and timeline is critical for orderly compliance.",
    category: "Legal & Compliance",
    languages: ["EN", "KH"],
    date: "March 10, 2025",
    readTime: 9,
    content: `
<h2>Cambodia's IFRS Roadmap</h2>
<p>The National Accounting Council (NAC) of Cambodia has been leading a phased transition to full International Financial Reporting Standards (IFRS) adoption. This aligns Cambodia with international best practices and improves the credibility of financial reporting for investors, lenders, and regulators.</p>
<p>Cambodia currently uses the Cambodian International Financial Reporting Standards (CIFRS), which are largely based on IFRS but with certain local modifications and simplifications permitted for non-public entities.</p>

<h2>Phased Implementation Timeline</h2>

<h3>Phase 1 — Public Interest Entities (PIEs)</h3>
<p>Banks, insurance companies, microfinance institutions, and entities listed or planning to list on the Cambodia Securities Exchange (CSX) are classified as Public Interest Entities. They are required to apply full IFRS for financial reporting periods beginning on or after <strong>1 January 2023</strong>.</p>
<div class="key-point">PIEs must publish audited financial statements within 90 days of year-end (for publicly listed companies) or 180 days (for non-listed PIEs).</div>

<h3>Phase 2 — Large Non-PIE Entities</h3>
<p>Entities with total assets exceeding USD 10 million, annual revenue exceeding USD 5 million, or more than 300 employees are required to adopt CIFRS — the full local version closely aligned with IFRS — for periods beginning <strong>1 January 2024</strong>.</p>

<h3>Phase 3 — SME Entities</h3>
<p>Small and medium entities may apply the simplified CIFRS for SMEs framework. While the NAC has not yet mandated a specific adoption date for smaller entities, businesses preparing for growth and eventual external financing should consider proactive early adoption.</p>

<h2>Key Areas of Change</h2>
<p>For businesses transitioning from prior local GAAP, the most significant changes typically involve:</p>
<ul>
<li><strong>IFRS 16 (Leases):</strong> Operating leases must now be recognized on the balance sheet as right-of-use assets and corresponding lease liabilities — significantly affecting businesses with substantial rental arrangements including office and warehouse leases.</li>
<li><strong>IFRS 9 (Financial Instruments):</strong> New expected credit loss model for impairment of receivables, requiring earlier recognition of potential credit losses.</li>
<li><strong>IFRS 15 (Revenue Recognition):</strong> Five-step model for recognizing revenue from contracts with customers, which may change the timing of revenue recognition for long-term or bundled contracts.</li>
</ul>

<blockquote>Companies that prepare for IFRS adoption proactively — rather than reactively in the final months before the deadline — typically achieve a smoother transition with fewer restatements and less disruption to their annual reporting cycle.</blockquote>

<h2>Audit Requirements Under IFRS</h2>
<p>Entities adopting full IFRS are required to have their financial statements audited by a registered external auditor. The audit must be conducted in accordance with International Standards on Auditing (ISA) and the auditor must express an opinion on whether the financial statements present fairly in all material respects in accordance with IFRS.</p>

<h2>Recommended Preparation Steps</h2>
<ul>
<li><strong>Gap Analysis:</strong> Compare current accounting policies against IFRS requirements to identify areas requiring change</li>
<li><strong>Data Collection:</strong> Gather historical data needed for transition adjustments, particularly for leases and financial instruments</li>
<li><strong>System Assessment:</strong> Evaluate whether current accounting software can support IFRS reporting requirements</li>
<li><strong>Staff Training:</strong> Ensure the finance team understands the new standards and their practical application</li>
<li><strong>Opening Balance Sheet:</strong> Prepare a compliant IFRS opening balance sheet at the transition date</li>
</ul>
<div class="key-point">EP Partners provides IFRS transition advisory services including gap analysis, accounting policy drafting, and first-year financial statement preparation. Contact our team to discuss your entity's specific requirements.</div>
    `,
  },
  {
    slug: "foreign-investment-incentives-sez",
    title: "Foreign Investment Incentives in Cambodia SEZs",
    excerpt:
      "Cambodia's Special Economic Zones offer some of Southeast Asia's most competitive investment incentives, including multi-year tax holidays, duty exemptions on production inputs, and streamlined CDC approval processes.",
    category: "Business & Investment",
    languages: ["EN", "KH", "CH"],
    date: "April 5, 2025",
    readTime: 7,
    content: `
<h2>Cambodia's Investment Landscape</h2>
<p>Cambodia has positioned itself as one of Southeast Asia's most open investment destinations, offering 100% foreign ownership in most sectors, no restrictions on profit repatriation, and a competitive package of fiscal incentives for qualified investors.</p>
<p>At the heart of Cambodia's investment promotion framework are Special Economic Zones (SEZs) — designated areas offering enhanced infrastructure, dedicated logistics facilities, and additional incentives beyond those available to businesses in general commercial zones.</p>

<h2>Types of Investment Incentives</h2>

<h3>Tax Holiday (Income Tax Exemption)</h3>
<p>Qualified Investment Projects (QIPs) approved by the Council for the Development of Cambodia (CDC) receive a Tax on Income exemption for a period of <strong>3 to 9 years</strong>, depending on the sector classification and total investment amount. During the tax holiday, no Tax on Income is payable on qualifying profits generated by the QIP.</p>
<div class="key-point">After the tax holiday expires, QIPs benefit from a reduced ToI rate during an additional transition period before standard rates apply. The effective tax burden over the incentive lifecycle is substantially lower than the headline 20% standard rate.</div>

<h3>Import Duty Exemptions</h3>
<p>QIPs in eligible sectors receive exemptions from import duties and value-added taxes on:</p>
<ul>
<li>Construction materials used in building the investment project facilities</li>
<li>Production equipment and machinery for manufacturing operations</li>
<li>Raw materials, inputs, and semi-finished goods used in production for export</li>
</ul>

<h3>Special Depreciation</h3>
<p>QIPs may elect to apply 40% special depreciation on new or unused tangible assets in the first year of operation, allowing accelerated deduction of capital investment costs against taxable income.</p>

<h2>Key Special Economic Zones in Cambodia</h2>

<h3>Phnom Penh SEZ (PPSEZ)</h3>
<p>Located on the outskirts of the capital, PPSEZ is Cambodia's largest and most established SEZ with over 130 companies from more than 20 countries. The zone offers world-class utilities, a dedicated customs checkpoint, and comprehensive one-stop-shop administrative services for investors.</p>

<h3>Sihanoukville SEZ (SSEZ)</h3>
<p>A joint Cambodia-China development situated near Cambodia's main deep-water port and international airport. SSEZ is particularly well-suited for export-oriented manufacturing businesses requiring efficient sea freight access to international markets.</p>

<h3>Manhattan SEZ</h3>
<p>Located in Kandal Province near Phnom Penh, Manhattan SEZ has attracted significant light manufacturing investment in the garment, electronics, and food processing sectors, benefiting from proximity to both the capital and its workforce.</p>

<h2>Application Process Through the CDC</h2>
<p>Foreign investors seeking QIP status must apply through the Council for the Development of Cambodia (CDC), which acts as a one-stop investment approval body. The approval process involves:</p>
<ul>
<li>Submission of Investment Proposal and detailed business plan</li>
<li>CDC review and conditional approval (typically within 28 business days)</li>
<li>Signing of the Investment License and Registration Certificate</li>
<li>Registration with relevant sector ministries and the GDT</li>
</ul>

<blockquote>EP Partners advises clients on the full CDC application process, ensuring investment structures are optimized for available incentives while maintaining full compliance with sector-specific regulatory requirements.</blockquote>

<h2>Recent Regulatory Updates</h2>
<p>The Royal Government has been actively expanding eligible sectors for QIP incentives to include services businesses, digital economy companies, and agro-processing industries. The updated Law on Investment (2021) also introduced a new "Strategic Investment Project" category with enhanced incentives for large-scale, high-impact investments that create significant employment or technology transfer.</p>
    `,
  },
  {
    slug: "cambodia-labor-law-updates-2025",
    title: "Cambodia Labor Law Updates 2025 — What Employers Must Know",
    excerpt:
      "Key changes to Cambodia's labor regulations in 2025 include revised minimum wage levels, updated NSSF contribution requirements, and Ministry of Labor clarifications on fixed-duration employment contract limits.",
    category: "Legal & Compliance",
    languages: ["EN", "KH"],
    date: "May 18, 2025",
    readTime: 8,
    content: `
<h2>Overview of 2025 Labor Law Developments</h2>
<p>Cambodia's labor regulatory environment continues to evolve in 2025, with several important changes affecting employers across all sectors. Whether you employ Cambodian workers, expatriate staff, or a combination, staying current with these updates is essential to maintaining compliant employment practices and avoiding costly disputes.</p>

<h2>Minimum Wage Updates</h2>

<h3>Textile, Garment and Footwear (TGF) Sector</h3>
<p>The monthly minimum wage for workers in the TGF sector for 2025 has been set at <strong>$204 per month</strong>, an increase of $6 from the 2024 level of $198. This applies to all direct employees and certain categories of indirect workers in registered TGF enterprises.</p>
<div class="key-point">In addition to the base minimum wage, employees completing their probationary period are entitled to a $10 monthly attendance and retention incentive, plus seniority payments based on years of continuous service.</div>

<h3>Non-TGF Sector</h3>
<p>For businesses outside the TGF sector, no unified minimum wage has been legislated at the national level. Employers must pay at least the equivalent of the TGF minimum as a practical benchmark, though actual pay scales vary significantly by industry, skill level, and geographic location.</p>

<h2>NSSF Contribution Changes</h2>
<p>The National Social Security Fund (NSSF) provides occupational risk, healthcare, and pension benefits to registered employees. The applicable 2025 contribution rates are:</p>
<ul>
<li><strong>Occupational Risk:</strong> Employer contribution of 0.8% of contributory salary</li>
<li><strong>Healthcare:</strong> Employer contribution of 2.6% of contributory salary (no employee contribution required)</li>
<li><strong>Pension:</strong> 4% total — 2% employer contribution and 2% employee contribution — applied to the contributory salary up to the NSSF ceiling</li>
</ul>
<p>All employers must register new employees with the NSSF within 30 days of hiring and remit monthly contributions by the 15th of the following month.</p>

<h2>Fixed-Duration Contract (FDC) Clarifications</h2>
<p>Cambodia's Labor Law distinguishes between Fixed-Duration Contracts (FDCs) and Undetermined Duration Contracts (UDCs). Recent Ministry of Labor guidance has clarified several previously ambiguous points:</p>
<ul>
<li>FDCs may not exceed 24 months including any renewals. After 24 months of continuous engagement, the employment relationship converts to a UDC by operation of law</li>
<li>FDCs must include a clear and specific start and end date — vague or rolling end-date provisions are not permitted</li>
<li>FDCs terminated by the employer before the stated end date (without just cause) entitle the employee to severance equivalent to the remaining contract salary</li>
</ul>
<div class="key-point">Employers with employees currently on successive FDCs totaling more than 24 months of service should urgently review their contracts and consider transitioning affected workers to UDCs to avoid significant legal exposure.</div>

<h2>Maternity and Paternity Leave</h2>
<p>Female employees are entitled to 90 days of maternity leave at 50% salary paid by the employer, with an additional 50% contribution from the NSSF healthcare fund during the leave period. Maternity leave may not commence more than 6 weeks before the expected due date.</p>
<p>Paternity leave of 10 days is expected to be formally codified in pending amendments to the Labor Law, formalizing a practice that many employers have already adopted voluntarily.</p>

<blockquote>EP Partners' legal advisory team assists employers with employment contract reviews, HR policy updates, NSSF registration compliance, and Ministry of Labor consultation to ensure workforce management practices remain fully compliant.</blockquote>

<h2>Termination and Severance for UDC Employees</h2>
<p>For employees on Undetermined Duration Contracts, termination requires advance notice and payment of severance based on years of continuous service:</p>
<ul>
<li>Less than 6 months: 7 days notice, no severance payment</li>
<li>6 months to 1 year: 30 days notice, 7.5 days' wages as severance</li>
<li>1 to 3 years: 30 days notice, 15 days' wages per year of service</li>
<li>3 to 6 years: 30 days notice, 20 days' wages per year of service</li>
<li>6 years and beyond: 30 days notice, 25 days' wages per year, with the total capped at 6 months' salary</li>
</ul>
    `,
  },
  {
    slug: "ma-activity-cambodia-q1-2025",
    title: "M&A Activity in Cambodia: Market Overview Q1 2025",
    excerpt:
      "Cambodia's M&A market showed resilience in Q1 2025 with notable deal flow in financial services, real estate, and manufacturing. Chinese, Japanese, and ASEAN regional investors remained the most active acquirers.",
    category: "Business & Investment",
    languages: ["EN", "CH"],
    date: "June 2, 2025",
    readTime: 6,
    content: `
<h2>Market Overview</h2>
<p>The first quarter of 2025 demonstrated continued investor interest in Cambodia's emerging market economy, with M&A activity driven primarily by consolidation in the financial services sector and opportunistic acquisitions in manufacturing and logistics real estate.</p>
<p>While deal volumes remain modest compared to more developed ASEAN markets, Cambodia's improving regulatory transparency, growing middle class, and strategic position within regional supply chains continue to attract acquirers seeking early-mover advantages in an underpenetrated market.</p>

<h2>Deal Activity by Sector</h2>

<h3>Financial Services</h3>
<p>The banking and microfinance sector saw the highest deal activity in Q1 2025, driven by consolidation among Microfinance Deposit-Taking Institutions (MDIs) and rural credit operators. The National Bank of Cambodia (NBC) has been actively encouraging sector consolidation to strengthen capital adequacy, risk management, and consumer protection standards.</p>
<div class="key-point">NBC's progressively increasing minimum capital requirements for banks and MFIs have created significant consolidation pressure on smaller operators, pushing them toward merger or acquisition by better-capitalized partners.</div>

<h3>Real Estate and Logistics</h3>
<p>Real estate transactions — both direct property acquisitions and corporate M&A of property-holding companies — remained active, particularly in the industrial and logistics segment. Growth in e-commerce fulfillment and export manufacturing has driven demand for modern warehouse facilities in Kandal, Kampong Speu, and Sihanoukville provinces.</p>

<h3>Manufacturing and Processing</h3>
<p>Export-oriented light manufacturing attracted acquisition interest from regional conglomerates seeking to diversify production bases. Electronics assembly, apparel sub-contracting, and food processing were the most active sub-sectors from an M&A perspective in Q1 2025.</p>

<h2>Cross-Border Deal Dynamics</h2>
<p>The majority of Cambodia M&A activity in Q1 2025 was cross-border in nature. Key source markets for acquirers included:</p>
<ul>
<li><strong>China and Hong Kong SAR:</strong> Continued interest across real estate, manufacturing, and logistics sectors</li>
<li><strong>Japan and South Korea:</strong> Focus on food and beverage, consumer goods distribution, and manufacturing partnerships</li>
<li><strong>Singapore:</strong> Financial services, private equity fund deployment, and fund management platform acquisitions</li>
<li><strong>Thailand and Vietnam:</strong> Retail, distribution network, and services sector transactions driven by regional expansion strategies</li>
</ul>

<h2>Regulatory Considerations for M&A in Cambodia</h2>
<p>Investors pursuing acquisitions should be aware of the following key regulatory touchpoints that affect transaction timelines and structure:</p>
<ul>
<li><strong>Ministry of Commerce (MoC):</strong> Approval and registration required for share transfers in most company types. New shareholding structure must be registered post-closing</li>
<li><strong>Council for the Development of Cambodia (CDC):</strong> Changes of ownership in QIP-status companies require CDC notification and may necessitate re-confirmation of investment incentives</li>
<li><strong>National Bank of Cambodia:</strong> Prior written approval mandatory for acquisitions of 10% or more in any licensed bank or MFI</li>
<li><strong>Ministry of Land Management:</strong> Land title and property registration updates required for acquisitions of property-holding entities</li>
</ul>

<blockquote>EP Partners' M&A advisory team provides comprehensive financial due diligence, transaction structuring, regulatory coordination, and post-closing integration support for both buyers and sellers operating in or entering the Cambodian market.</blockquote>

<h2>Outlook for Remainder of 2025</h2>
<p>EP Partners expects M&A activity to maintain or increase through the remainder of 2025, with the following themes likely to drive deal flow:</p>
<ul>
<li>Continued financial sector consolidation driven by NBC minimum capital requirements</li>
<li>Increased private equity activity as Cambodia-focused funds mature and seek portfolio exits</li>
<li>Supply chain diversification acquisitions by manufacturers seeking ASEAN production alternatives</li>
<li>Growth capital transactions in digital technology, fintech, and healthcare sectors</li>
</ul>
    `,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return articles.slice(0, limit);
  const same = articles.filter((a) => a.slug !== slug && a.category === current.category);
  const other = articles.filter((a) => a.slug !== slug && a.category !== current.category);
  return [...same, ...other].slice(0, limit);
}
