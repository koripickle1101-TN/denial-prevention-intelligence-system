# DPIS — Denial Prevention Intelligence System™

I built DPIS as a student-developed healthcare operations project to study a question that became important to me as I learned more about the revenue cycle: **when a denial or claim problem becomes visible downstream, what happened earlier that may have contributed to it?**

As I work toward my Bachelor's of Science degree in Healthcare Administration at the University of Phoenix, I am especially interested in the connection between front-end workflow decisions and what patients experience later. A denial may look like a billing problem when it finally becomes visible, but an earlier issue may involve eligibility, authorization-service alignment, documentation readiness, payer requirements, claim preparation, ownership, or a handoff that was never fully resolved.

From the patient side, those internal workflow labels can turn into something much more concrete: a confusing bill, another phone call, delayed resolution, uncertainty about coverage, or being asked to help untangle an administrative problem they did not create.

DPIS gives me a way to practice working backward from the downstream signal and asking where the workflow first became vulnerable. I now use a structured **Denial Traceback Review™** to separate what became visible from what the synthetic evidence actually supports.

## Why I Built DPIS

I do not have formal healthcare operations employment experience yet, so I use simulated projects to turn coursework and independent study into visible practice.

With DPIS, I wanted to move beyond treating denial work as something that starts only after a claim has already been denied. I use the project to practice reviewing conditions that may exist earlier, including:

- eligibility and coverage conflicts,
- authorization-service alignment issues,
- documentation-readiness flags,
- payer-requirement differences,
- claim-readiness problems,
- unclear ownership or handoffs,
- patterns that may create downstream rework,
- and post-payment recovery or adjustment signals that still require reconciliation.

The question I keep coming back to is:

> **What upstream condition made this denial risk possible, and where could the workflow have been reviewed sooner?**

## What DPIS Studies

DPIS uses synthetic examples to explore denial-prevention and claim-readiness concepts such as:

- whether eligibility information appears consistent,
- whether authorization details align with the planned service in the fictional scenario,
- whether a documentation-readiness flag needs qualified review,
- whether a current payer requirement needs verification by the appropriate role,
- whether the fictional case appears ready to move to the next modeled step,
- how a root-cause hypothesis can be organized for review,
- and how patient-access and revenue risk can be considered together.

The project is not intended to predict actual payer decisions. It is a learning environment for practicing upstream workflow analysis before a downstream denial or rejection becomes the only thing anyone can see.

## Pre-Submission Claim Readiness Control™

DPIS now includes an interactive control gate that treats claim readiness as the point where multiple upstream operational workflows converge.

The control reviews whether the following modeled areas are complete:

- Patient / Member Data Reviewed
- Eligibility / Coverage Reviewed
- COB / Other Insurance Reviewed
- Payer Information Validated
- Provider / Service Context Reviewed
- Authorization / Referral Status Reviewed
- Documentation Readiness Reviewed
- Coding-Related Flag Present?
- Qualified Coding Review Required?
- Service / Date / Location Alignment Reviewed
- Required Attachments / Information Reviewed
- Payer-Specific Requirement Source Reviewed
- Open Exception?
- Current Owner
- Next Required Action
- Closure Evidence
- Ready to Advance?

The core rule is:

> **A claim should not be treated as ready in the simulation merely because available fields are populated. Any required unresolved exception must have visible ownership, a defined next action, and verified closure before modeled advancement.**

Key operational distinctions:

- **Claim populated ≠ claim ready**
- **Correct data element ≠ complete workflow readiness**
- **Detection ≠ resolution**
- **Handoff ≠ ownership**

The interactive gate can return different modeled states, including **Not ready to advance**, **Qualified review required**, **Exception lacks controlled ownership**, **Evidence trail incomplete**, **Exception active — not closed**, and **Modeled claim ready to advance**.

The control also makes the portfolio architecture visible:

- **EVIS** contributes patient/member, eligibility, coverage, payer, and COB readiness.
- **PARCS** contributes authorization/referral, payer/program source, active-movement, and closure readiness.
- **HIM & Coding Data Integrity Risk Map™** contributes documentation, encounter-context, and qualified-review concepts.
- **DPIS** is where those streams converge into a pre-submission readiness decision.

Patient-to-professional insight:

> **The patient sees the billing outcome. Healthcare operations has to understand the chain of data, decisions, and controls that produced it.**

This control does not submit claims, select codes or modifiers, determine coding accuracy, decide medical necessity or coverage, interpret payer contracts, calculate reimbursement, or establish whether a real claim should be paid.

## Claim Transmission & Acknowledgement Control™

DPIS now extends the claim-control workflow beyond pre-submission readiness. This interactive module practices what happens after a modeled claim is ready to submit and asks whether the claim is actually visible and controlled downstream.

Modeled workflow:

**Ready to submit → transmitted → clearinghouse response → payer acknowledgement → adjudication status → exception routing → follow-up → final status → closure**

The interactive workspace includes:

- Claim / Case Reference
- Submission Date
- Transmission Status
- Clearinghouse Status
- Clearinghouse Response Date
- Payer Acknowledgement Status
- Payer Claim / Reference Number
- Payer Rejection Present?
- Claim Found in Payer System?
- Adjudication Status
- Last Meaningful Status Change
- Current Owner
- Next Required Action
- Follow-Up Due
- Escalation Threshold
- Exception Category
- Evidence Reviewed
- Final Claim Status
- Closure Evidence
- Potential Patient-Facing Effect

The control rule is:

> **A successful clearinghouse transmission should not be treated as completed claim progression until downstream payer acknowledgement and status visibility are established or an exception has been assigned for follow-up.**

Key operational distinctions:

- **Clearinghouse accepted ≠ payer accepted**
- **Transmission successful ≠ claim actively progressing**
- **Claim sent ≠ claim received into adjudication**
- **No immediate rejection ≠ final acceptance**

The interactive gate can return modeled states such as **Transmission Hold**, **Clearinghouse Exception**, **Payer Visibility Gap**, **Payer Exception**, **Claim Not Found**, **Actively Moving**, **Final Status Gap**, **Closure Pending**, and **Controlled Final State**.

This module extends the DPIS operating sequence:

**Pre-submission readiness → submission → acknowledgement → adjudication visibility → downstream exception / denial traceback**

Patient-to-professional insight:

> **The patient sees the waiting. Healthcare operations has to know where the claim actually is, what evidence proves that status, and who owns the next action.**

This is a student-developed operational simulation only. It does not transmit real claims, access a clearinghouse or payer, reproduce EDI transactions, determine payer acceptance, adjudicate claims, calculate reimbursement, interpret payer contracts, or make coding, coverage, medical-necessity, compliance, or legal determinations.


### Clearinghouse-to-Payer Handoff Review™

The Claim Transmission & Acknowledgement Control™ now includes a dedicated interactive handoff review that asks whether a modeled claim actually moved from clearinghouse acceptance into payer-controlled processing.

Modeled path:

**Claim ready → transmitted → clearinghouse response → payer acknowledgement → payer claim reference → adjudication visibility → exception → owner → follow-up → final status → closure**

Synthetic review fields include:

- Claim / Case Reference
- Claim Ready?
- Submission Timestamp
- Transmission Status
- Clearinghouse Status
- Clearinghouse Response Timestamp
- Clearinghouse Response
- Clearinghouse Evidence Reviewed?
- Clearinghouse Evidence Note
- Payer Acknowledgement Status
- Payer Claim / Reference Number
- Payer Rejection Present?
- Claim Found in Payer System?
- Adjudication Status
- Last Meaningful Status Change
- Payer / Handoff Evidence Reviewed
- Exception Category
- Current Owner
- Next Required Action
- Follow-Up Due
- Escalation Threshold
- Potential Patient-Facing Effect
- Exception / Follow-Up Evidence
- Final Disposition
- Closure Status
- Closure Evidence

Control question:

> **What evidence proves that a claim moved from clearinghouse acceptance into payer-controlled processing, and what should happen when that evidence never appears?**

Key distinctions:

- **Claim created ≠ claim ready**
- **Claim transmitted ≠ clearinghouse accepted**
- **Clearinghouse accepted ≠ payer accepted**
- **Payer acknowledged ≠ adjudicated**
- **Adjudication started ≠ final disposition**
- **Status visible ≠ action completed**

The interactive control can return modeled states such as **Readiness Hold**, **Transmission Hold**, **Clearinghouse Hold**, **Handoff Not Proven**, **Payer Evidence**, **Exception Unowned**, **Adjudication Active**, **Final Status Pending**, **Closure Pending**, and **Controlled**.

Patient-to-professional insight:

> **The patient sees the delay. Healthcare operations has to determine where the claim actually stopped moving.**

The source's unsupported 95–98% clean-claim / first-pass acceptance figure is intentionally excluded. The project also does not assume that every clearinghouse provides the same edits, services, connectivity, status reporting, or remittance workflow.


## Payment Recovery Reconciliation Review™

DPIS includes an interactive post-payment control for practicing how a later financial signal can be traced back to the original synthetic transaction before the financial workflow is treated as reconciled.

Modeled workflow:

**Recovery signal → original transaction → recovery explanation → recovery method → later payment linkage → reconciliation → ownership → remaining balance → closure**

The interactive workbench includes:

- Recovery Signal
- Original Account / Claim Reference
- Original Payment
- Recovery Amount
- Recovery Explanation
- Recovery Method
- ERA/EOB Reference
- Later Transaction / Offset Reference
- Supporting Explanation Available?
- Original Account Reviewed?
- Later Transaction Linked?
- Amount Reconciled?
- Posting / Adjustment Reviewed?
- Specialist Review Needed?
- Current Owner
- Next Action
- Follow-Up Due
- Remaining Balance Reviewed?
- Evidence / Work Note
- Workflow Status
- Closure Evidence
- Potential Patient-Facing Effect

The module visibly separates the conceptual recovery process from one possible recovery method:

- **Recovery / recoupment process** — the broader modeled process of recovering money connected to an earlier payment.
- **Offset method** — one modeled method in which a later payment is reduced to recover an earlier amount.

The student model does not assume that these terms or procedures are implemented identically by every payer or organization.

Key distinctions:

- **Paid ≠ correctly reconciled**
- **Reduced payment ≠ explanation of the underlying recovery**
- **Recovery posted ≠ recovery reconciled**
- **Adjusted balance ≠ closed financial workflow**

Control question:

> **If a later payment is reduced because of an earlier account, what evidence connects the recovery to the original transaction, and what must be reconciled before the workflow can be treated as closed?**

The interactive control can return modeled states such as **Source Linkage**, **Evidence Review**, **Reconciliation Gap**, **Evidence Boundary**, **Ownership Required**, **Closure Conflict**, **Closure Pending**, and **Reconciled**.

Patient-to-professional insight:

> **The patient sees the balance. Healthcare operations has to understand the chain of transactions that produced it.**

A later payment may be the point where a recovery becomes visible, not the point where the underlying financial workflow began.

Real-world handling boundary:

> **Applicable payer and organizational guidance would need to be reviewed for real-world handling.**

Terms such as recovery, recoupment, offset, reversal, adjustment, refund, and cross-claim recovery may be used or implemented differently depending on payer, organization, contract, and workflow. This educational simulation does not determine payer liability, contract correctness, coding accuracy, refund obligations, reimbursement, legal requirements, or whether any real payer action is financially correct.

## New Review Controls

DPIS now includes nine additional student-practice controls:

- **Pre-Submission Claim Readiness Control™** — brings upstream data, eligibility, COB, authorization, documentation, payer-specific review, qualified-review routing, ownership, and closure together before modeled claim advancement.
- **Claim Transmission & Acknowledgement Control™** — verifies upstream payer-destination evidence, then follows a modeled claim through transmission, clearinghouse response, Clearinghouse-to-Payer Handoff Review™, payer acknowledgement, payer claim reference, adjudication visibility, exception routing, follow-up, final status, and closure.
- **A/R Work Queue Prioritization & Human Review Control™** — uses transparent synthetic A/R signals to generate an explainable priority, then requires human acceptance, override, or escalation plus ownership, action, follow-up, and closure verification.
- **Denial Traceback Review™** — traces a visible downstream signal through detection point, earlier checkpoints, available evidence, earliest supported condition, root-cause hypothesis, specialist review, preventive control, ownership, closure evidence, recurrence, and patient-facing effect.
- **Denial Resolution & Prevention Loop™** — carries a synthetic denial from reason review and evidence verification through backward trace, immediate account action, ownership, payer follow-up, final disposition, closure verification, recurrence review, preventive control, implementation evidence, pre/post comparison, and post-control verification.
- **Information Request Routing Review™** — asks what information is missing, who owns the next step, where it must be submitted, when it is due, and what proves closure.
- **Correction Recurrence Review™** — distinguishes an isolated synthetic correction from a repeated pattern that may justify deeper upstream review.
- **Encounter-Context Review** — checks whether supporting documentation belongs to the correct encounter, not only the correct patient.
- **Payment Recovery Reconciliation Review™** — interactively traces a post-payment financial signal to the original transaction, recovery explanation and method, later-payment linkage, remittance evidence, reconciliation, ownership, remaining balance, and closure.

Key operating distinctions:

> **Denial reason ≠ proven root cause.**

> **Corrected claim ≠ corrected workflow.**

> **Claim populated ≠ claim ready.**

> **Correct data element ≠ complete workflow readiness.**

> **Coverage verified ≠ payer order verified.**

> **Correct coverage ≠ correct claim destination.**

> **Payer destination selected ≠ payer responsibility established.**

> **Clearinghouse accepted ≠ payer accepted.**

> **Transmission successful ≠ claim actively progressing.**

> **Claim sent ≠ claim received into adjudication.**

> **No immediate rejection ≠ final acceptance.**

> **Appeal submitted ≠ denial resolved.**

> **Action taken ≠ closure verified.**

> **Account resolved ≠ recurrence prevented.**

> **Case closed ≠ process gap closed.**

> **Immediate correction ≠ preventive improvement.**

> **Process change ≠ proven improvement.**

> **Paid ≠ correctly reconciled.**

> **Recovery posted ≠ recovery reconciled.**

> **Recurrence is a signal for investigation, not proof of a systemic cause.**

## Coverage-to-Payer Routing Integration

DPIS now explicitly consumes payer-routing readiness as an upstream control rather than assuming that eligibility verification alone establishes the correct claim destination.

Cross-project path:

**EVIS eligibility / coverage → payer-order review → payer destination → DPIS claim readiness → transmission → clearinghouse response → payer acknowledgement**

The **Pre-Submission Claim Readiness Control™** now asks whether payer destination was verified against the modeled coverage arrangement before claim advancement. A new synthetic case, **CR-006**, models a coverage / payer-routing readiness exception.

The **Claim Transmission & Acknowledgement Control™** now includes a pre-transmission payer-routing check and a synthetic **TX-008** case where coverage is visible but the payer destination is not supported by upstream evidence.

Control question:

> **Was the payer destination verified against the patient's modeled coverage arrangement before submission?**

This connects to the EVIS **Medicare Coverage & Payer Routing Readiness Gate™**, which practices arrangement identification, effective-date review, other-insurance review, COB/MSP review, payer-order evidence, service context, payer destination, ownership, and closure.

DPIS does not determine real Medicare eligibility, payer responsibility, MSP status, coverage, authorization, or claim payment. The integration is a student-developed workflow-control simulation using synthetic information.

## A/R Work Queue Prioritization & Human Review Control™

DPIS now includes an interactive responsible-automation module for practicing how a remote A/R queue can prioritize work without turning the automated recommendation into decision authority.

Modeled path:

**Account enters queue → automation evaluates signals → priority generated → reason displayed → human review → accept / override / escalate → owner assigned → action performed → follow-up → outcome verified**

Synthetic inputs include:

- Account / Case Reference
- A/R Age
- Balance Band
- Current Claim Status
- Denial / Exception Present?
- Last Meaningful Action
- Days Since Last Action
- Next Action Due
- Payer Response Pending?
- Documentation Exception?
- Authorization Exception?
- Follow-Up Required?
- Escalation Threshold Reached?
- Automated Priority
- Priority Reason
- Human Review Required?
- Human Override?
- Override / Escalation Reason
- Current Owner
- Recommended Next Action
- Human-Confirmed Next Action
- Follow-Up Date
- Action Performed?
- Evidence Reviewed / Work Note
- Closure Evidence

The interactive model never displays a priority without an explanation. A reviewer can see why the account was surfaced, accept the recommendation, override it with a required rationale, or escalate the account for qualified review.

Key distinctions:

- **Automated priority ≠ verified next action**
- **Automated follow-up ≠ resolved account**
- **Queue position ≠ decision authority**
- **Oldest account ≠ automatically highest operational priority**
- **Technically open ≠ actively moving**
- **System state ≠ controlled workflow**

Responsible automation principle:

> **AI or automation can surface a signal, but the workflow still needs defined authority, ownership, escalation, documentation, and verification before that signal becomes accountable action.**

Patient-to-professional insight:

> **The patient experiences the waiting. Operations has to make sure the account is visible to the right person before waiting becomes another unresolved patient problem.**

The module intentionally does not reuse unsupported percentage claims about A/R reduction, collections, cost, or productivity from inspiration material. It demonstrates synthetic workflow logic only and makes no employer, payer, financial, or productivity claims.

## Denial Resolution & Prevention Loop™

DPIS now includes an interactive denial-management practice loop that begins after a denial or claim problem becomes visible and continues through both account resolution and prevention-oriented review.

Modeled workflow:

**Denial signal → reason review → evidence verification → backward trace → earliest supported condition → root-cause hypothesis → immediate action → ownership → follow-up → final disposition → closure verification → recurrence review → preventive control → implementation evidence → post-control verification**

Interactive fields include:

- Denial / Claim Signal
- Denial Reason Reported
- Evidence Reviewed
- Earlier Checkpoints Reviewed
- Earliest Supported Condition
- Root-Cause Hypothesis
- Qualified Review Needed?
- Immediate Account Action
- Current Owner
- Action Date
- Next Follow-Up Date
- Appeal / Correction / Other Action
- Submission Evidence
- Payer Status / Response
- Final Disposition
- Closure Evidence
- Recurrence Flag
- Similar Cases Found?
- Preventive Control
- Control Owner
- Post-Control Review
- Implementation Date
- Evidence of Implementation
- Pre-Change Pattern
- Pre-Change Evidence
- Post-Change Pattern
- Post-Change Evidence
- Follow-Up Review Date
- Improvement Supported?
- Additional Review Needed?
- Potential Patient-Facing Effect

The control deliberately separates the downstream reason from the evidence boundary. A denial reason can identify what became visible, but the student workflow still has to establish the earliest supported condition before documenting a root-cause hypothesis.

The continuous-improvement extension adds a second question after account closure:

> **Did the preventive control actually change the recurring pattern?**

DPIS now requires modeled implementation evidence and pre-change/post-change review before a recurring-pattern control can be described as supported within the simulation.

Key distinctions:

- **Denial reason ≠ proven root cause**
- **Corrected claim ≠ corrected workflow**
- **Appeal submitted ≠ denial resolved**
- **Action taken ≠ closure verified**
- **Account resolved ≠ recurrence prevented**
- **Repeated pattern ≠ proven systemic cause**

The interactive loop can return modeled states such as **Evidence Review**, **Traceback Active**, **Hypothesis Gap**, **Action Control**, **Submission Gap**, **Follow-Up Due**, **Final Disposition Pending**, **Closure Pending**, **Prevention Review**, **Implementation Evidence**, **Baseline Needed**, **Post-Control Review**, **Interpret Result**, **Revise Control**, **More Evidence**, and **Loop Complete**.

Patient-to-professional insight:

> **The patient experiences the denial as an outcome. Healthcare operations has to determine whether resolving that account also reveals an earlier process gap that needs to be controlled.**

This module does not select codes or modifiers, determine coding correctness, decide medical necessity, determine coverage, interpret contracts, make appeal determinations, establish payer liability, or claim that a modeled preventive control would reduce real denials.

## Synthetic Case Set

The repository includes a small **5-case synthetic dataset** for practicing denial-risk review.

| Case | Student-Modeled Score | Claim Readiness | Review Category | Modeled Revenue Risk |
|---|---:|---|---|---|
| DPI-001 | 72 | Not Ready | Authorization mismatch | Critical |
| DPI-002 | 64 | At Risk | Documentation gap | High |
| DPI-003 | 28 | Ready | Eligibility conflict | Moderate |
| DPI-004 | 45 | At Risk | Payer requirement flag | High |
| DPI-005 | 18 | Ready | None | Low |

In this synthetic set:

- 3 of 5 cases are marked High or Critical modeled revenue risk.
- 3 of 5 are marked At Risk or Not Ready for claim readiness.
- 4 of 5 contain a modeled upstream issue requiring review.

These values are **educational design assumptions**, not healthcare benchmarks, employer results, payer outcomes, financial projections, denial probabilities, or predictions of real-world performance.

## How I Think About Denial Prevention

I use DPIS to practice tracing the workflow backward:

```text
Denial / rejection / claim problem becomes visible
                    ↑
          Claim readiness review
                    ↑
 Documentation readiness + payer requirements
                    ↑
      Authorization / service alignment
                    ↑
        Eligibility + intake accuracy
```

The point is not to assume every denial is preventable. The point is to ask whether an earlier administrative condition could have been identified, clarified, owned, routed, or escalated before the downstream problem became visible.

## What I Learned

One of the most useful lessons from building DPIS is that a denial code or payer response is not automatically the full root cause.

A visible denial or rejection may be the **signal**. The operational question is what happened before that signal appeared and what evidence would be needed to establish the actual cause.

That distinction matters to me from a patient-to-professional perspective. Patients usually do not see the chain of eligibility checks, authorization requirements, documentation reviews, payer rules, claim edits, and handoffs behind the scenes. They experience the result. Learning to trace that result upstream helps me think about revenue-cycle work as both an operational problem and a patient-experience problem.

## Current-Source Awareness

I reviewed current CMS materials to make sure the project stays conceptually aligned with how claims can be affected by edits and policy requirements without turning DPIS into a coding or payer-rule tool.

- CMS explains that electronic claims pass through front-end edits for HIPAA and implementation-guide requirements and later edits for Medicare coverage and payment policy. Errors can result in rejection for correction or denial. See: https://www.cms.gov/medicare/coding-billing/electronic-billing/electronic-healthcare-claims
- CMS maintains the Medicare Claims Processing Manual and current 2026 NCCI policy resources. These sources reinforce that coding and payment rules are current, specific, and subject to change. See: https://www.cms.gov/regulations-and-guidance/guidance/manuals/internet-only-manuals-ioms-items/cms018912 and https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits/medicare-ncci-policy-manual

DPIS does **not** reproduce, interpret, or apply real payer policies, coding edits, medical-necessity rules, or coverage determinations. Any real coding, coverage, billing, medical-necessity, compliance, or payer-policy question would require current authoritative guidance and the appropriate qualified role.

## Portfolio Evidence

This repository includes:

- `index.html` — DPIS project overview
- `denial-risk-scorecard.html` — student-designed denial-risk review scorecard
- `root-cause-denial-map.html` — denial-signal root-cause review map
- `denial-resolution-prevention-loop.html` — interactive Denial Resolution & Prevention Loop™
- `claim-readiness-checklist.html` — interactive Pre-Submission Claim Readiness Control™
- `claim-transmission-acknowledgement-control.html` — interactive Claim Transmission & Acknowledgement Control™
- `denial-prevention-dashboard.html` — simulated dashboard aligned to the five-case dataset
- `monthly-denial-trend-report.html` — simulated denial-risk review summary
- `sample-denial-cases.html` — synthetic case examples
- `denial-risk-calculator.html` — educational review-priority prototype
- `data/sample-denial-cases.csv` — synthetic dataset

## What I Am Practicing Through DPIS

Through this project, I am practicing:

- Denial-prevention thinking
- Revenue-cycle workflow analysis
- Claim-readiness review
- Payer-order and claim-destination readiness
- Pre-submission claim readiness control
- Upstream workflow convergence review
- Claim transmission and acknowledgement tracking
- A/R queue prioritization and aging awareness
- Explainable automation and human override
- Human-in-the-loop ownership, escalation, and accountability
- Payer-status visibility and exception routing
- Follow-up ownership and closure verification
- Root-cause hypothesis development
- Denial-resolution workflow control
- Payer follow-up through final disposition
- Closure verification
- Recurrence review and preventive-control planning
- Eligibility and authorization risk awareness
- Documentation-readiness review
- Payer-requirement awareness
- Exception ownership and escalation thinking
- Patient-access and revenue-risk interpretation
- KPI and dashboard design
- Synthetic data analysis
- Operational reporting
- Clear separation between simulated evidence and real-world claims

## How DPIS Fits in the Portfolio

DPIS is the third project in the workflow path I use across my healthcare operations portfolio:

**EVIS → PARCS → DPIS → SBI → Habit Audit**

- **EVIS** looks at eligibility and intake risk.
- **PARCS** looks at prior authorization workflow risk, ownership, and escalation.
- **DPIS** looks at pre-submission readiness, claim transmission, downstream status visibility, explainable A/R prioritization, human review, denial prevention, traceback, follow-up, closure, recurrence, and post-payment reconciliation.
- **SBI** asks where the first cross-workflow control loss occurred.
- **Habit Audit** looks at recurring operational habits that may make workflow risk more likely.

## What This Project Is — and Is Not

This is a **student-developed educational project**.

- All cases, scores, labels, and data are synthetic.
- No protected health information (PHI) is used.
- No real patient, payer, employer, claim, EHR, or financial data is used.
- The project does not represent formal healthcare employment experience.
- It has not been deployed in a healthcare organization.
- It does not make coverage, coding, clinical, medical-necessity, compliance, or payer decisions.
- It is not a validated denial-prediction or reimbursement model.
- I do not claim that DPIS has reduced real denials, increased reimbursement, improved productivity, or changed patient outcomes.

I want the project to show how I am learning to think through denial risk honestly, trace problems upstream, distinguish signals from proven causes, and connect revenue-cycle workflow decisions back to the patient experience.

## Connect

- [Healthcare Operations Portfolio Hub](https://healthcare-operations-portfolio-hub.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/kori-pickle)
- [GitHub profile](https://github.com/koripickle1101-TN)

Created by Kori Pickle. Student-developed portfolio project. Synthetic data only. No PHI.


## Resolution ≠ Prevention Decision Lab™

DPIS includes an interactive career-proof layer inside the Denial Resolution & Prevention Loop™. It practices two separate lines of inquiry after a downstream denial becomes visible:

1. **Account resolution:** What evidence supports the signal, what remains unresolved, who owns the next authorized action, and what proves closure?
2. **Recurrence prevention:** What earlier checkpoint needs review, what remains hypothesis, whether recurrence supports a preventive control, and what implementation/post-control evidence would be needed before claiming improvement?

The interactive evaluator distinguishes modeled states such as **EVIDENCE GAP**, **ACCOUNT RESOLVED**, **PREVENTION REVIEW**, **RESOLUTION + PREVENTION**, and **CLOSURE CONFLICT**.

Key distinctions:

- **Denial identified ≠ root cause established**
- **Action taken ≠ account resolved**
- **Payment recovered ≠ workflow corrected**

Control question:

> **A downstream denial should trigger two lines of inquiry: what must happen to resolve the account, and what upstream control allowed the condition to reach the claim?**

The module also includes an interview-ready explanation of Kori's student workflow reasoning while preserving the boundary that the simulation does not represent professional denial-management experience or authority to make coding, modifier, medical-necessity, appeal, payer, or reimbursement determinations.
