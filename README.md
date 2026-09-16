# DPIS — Denial Prevention Intelligence System

I built DPIS as a student-developed healthcare operations project to study a question that became important to me as I learned more about the revenue cycle: **when a denial appears at the end of a process, what happened earlier that made that denial possible?**

As I work toward my Bachelor's of Science degree in Healthcare Administration at the University of Phoenix, I am especially interested in the connection between front-end workflow decisions and what patients experience later. A denial may look like a billing problem when it finally becomes visible, but the earlier issue may have involved eligibility, authorization, documentation, payer requirements, claim preparation, or a handoff that was never fully resolved.

From the patient side, those internal workflow labels can turn into something much more concrete: a confusing bill, another phone call, delayed resolution, uncertainty about coverage, or being asked to help untangle a problem they did not create.

DPIS gives me a way to practice working backward from the denial signal and asking where the workflow first became vulnerable.

## Why I Built DPIS

I do not have formal healthcare operations employment experience yet, so I use simulated projects to turn coursework and independent study into visible practice.

With DPIS, I wanted to move beyond treating denial work as something that starts only after a claim has already been denied. I use the project to practice reviewing the conditions that may exist earlier, including:

- eligibility and coverage conflicts,
- authorization-to-service mismatches,
- documentation gaps,
- payer-rule differences,
- claim-readiness problems,
- unclear ownership or handoffs,
- and patterns that may create preventable rework downstream.

The question I keep coming back to is:

> **What upstream condition made this denial risk possible, and where could the workflow have been reviewed sooner?**

## What DPIS Studies

DPIS uses synthetic examples to explore denial-prevention and claim-readiness concepts such as:

- whether eligibility information is consistent,
- whether authorization details match the planned service,
- whether supporting documentation is complete,
- whether payer-specific requirements have been considered,
- whether the claim appears ready to move forward,
- how a root-cause category can be assigned for review,
- and how patient-access and revenue risk can be considered together.

The project is not intended to predict actual payer decisions. It is a learning environment for practicing upstream workflow analysis before a downstream denial becomes the only thing anyone can see.

## Synthetic Case Set

The repository includes a small **5-case synthetic dataset** for practicing denial-risk review.

| Case | Modeled Risk Score | Claim Readiness | Root-Cause Category | Revenue Risk |
|---|---:|---|---|---|
| DPI-001 | 72 | Not Ready | Authorization mismatch | Critical |
| DPI-002 | 64 | At Risk | Documentation gap | High |
| DPI-003 | 28 | Ready | Eligibility conflict | Moderate |
| DPI-004 | 45 | At Risk | Payer rule conflict | High |
| DPI-005 | 18 | Ready | None | Low |

In this synthetic set:

- 3 of 5 cases are marked High or Critical revenue risk.
- 3 of 5 are marked At Risk or Not Ready for claim readiness.
- 4 of 5 contain a modeled upstream issue requiring review.

These values are **educational design assumptions**, not healthcare benchmarks, employer results, payer outcomes, financial projections, or predictions of real-world performance.

## How I Think About Denial Prevention

I use DPIS to practice tracing the workflow backward:

```text
Denial / claim problem becomes visible
                ↑
        Claim readiness review
                ↑
 Documentation + payer requirements
                ↑
 Authorization / service alignment
                ↑
      Eligibility + intake accuracy
```

The point is not to assume every denial is preventable. The point is to ask whether an earlier administrative condition could have been identified, clarified, or escalated before the claim reached the downstream problem.

## What I Learned

One of the most useful lessons from building DPIS is that a denial code or payer response is not automatically the full root cause.

A visible denial may be the **signal**. The operational work is to determine what happened before that signal appeared.

That distinction matters to me from a patient-to-professional perspective. Patients usually do not see the chain of eligibility checks, authorization requirements, documentation reviews, payer rules, claim edits, and handoffs behind the scenes. They experience the result. Learning to trace that result upstream helps me think about revenue-cycle work as both an operational problem and a patient-experience problem.

## Portfolio Evidence

This repository includes:

- `index.html` — DPIS project overview
- `denial-risk-scorecard.html` — structured denial-risk review
- `root-cause-denial-map.html` — upstream root-cause mapping
- `claim-readiness-checklist.html` — pre-submission review structure
- `denial-prevention-dashboard.html` — simulated dashboard
- `monthly-denial-trend-report.html` — simulated operational reporting
- `sample-denial-cases.html` — synthetic case examples
- `denial-risk-calculator.html` — educational risk-scoring tool
- `data/sample-denial-cases.csv` — synthetic dataset

## What I Am Practicing Through DPIS

Through this project, I am practicing:

- Denial-prevention thinking
- Revenue-cycle workflow analysis
- Claim-readiness review
- Root-cause classification
- Eligibility and authorization risk awareness
- Documentation-readiness review
- Payer-rule awareness
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

- All cases and data are synthetic.
- No protected health information (PHI) is used.
- No real patient, payer, employer, claim, EHR, or financial data is used.
- The project does not represent formal healthcare employment experience.
- It has not been deployed in a healthcare organization.
- It does not make coverage, coding, clinical, medical-necessity, or payer decisions.
- I do not claim that DPIS has reduced real denials, increased reimbursement, improved productivity, or changed patient outcomes.

I want the project to show how I am learning to think through denial risk honestly, trace problems upstream, and connect revenue-cycle workflow decisions back to the patient experience.

## Connect

- [Healthcare Operations Portfolio Hub](https://healthcare-operations-portfolio-hub.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/kori-pickle)
- [GitHub profile](https://github.com/koripickle1101-TN)

Created by Kori Pickle. Student-developed portfolio project. Synthetic data only. No PHI.