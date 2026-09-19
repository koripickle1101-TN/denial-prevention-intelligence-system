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
- and patterns that may create downstream rework.

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

## New Review Controls

DPIS now includes four additional student-practice controls:

- **Denial Traceback Review™** — traces a visible downstream signal through detection point, earlier checkpoints, available evidence, earliest supported condition, root-cause hypothesis, specialist review, preventive control, ownership, closure evidence, recurrence, and patient-facing effect.
- **Information Request Routing Review™** — asks what information is missing, who owns the next step, where it must be submitted, when it is due, and what proves closure.
- **Correction Recurrence Review™** — distinguishes an isolated synthetic correction from a repeated pattern that may justify deeper upstream review.
- **Encounter-Context Review** — checks whether supporting documentation belongs to the correct encounter, not only the correct patient.

Key operating distinctions:

> **Denial reason ≠ proven root cause.**

> **Corrected claim ≠ corrected workflow.**

> **Recurrence is a signal for investigation, not proof of a systemic cause.**

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
- `claim-readiness-checklist.html` — claim-readiness review checklist
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
- Root-cause hypothesis development
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
- **DPIS** looks at upstream denial-prevention and claim-readiness risk.
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
